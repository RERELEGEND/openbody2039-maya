#!/usr/bin/env node
/**
 * Push local tree to empty GitHub repo via gh api (when git HTTPS DNS fails).
 * Env: Ubuntu · Node 20+ · gh authenticated
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OWNER = 'RERELEGEND';
const REPO = 'openbody2039-maya';
const MSG =
  'Initial public release of OpenBody2039 MAYA MCP.\n\nShip a slim, IDE-agnostic stdio server with body-graph knowledge, intent tools, and a MAYA promo page: give AI agents a body.';

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function ghJson(args, input, tries = 6) {
  const opts = {
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
    input: input ? JSON.stringify(input) : undefined,
  };
  let lastErr;
  for (let i = 0; i < tries; i++) {
    try {
      const out = execFileSync('gh', ['api', ...args], opts);
      return out ? JSON.parse(out) : null;
    } catch (err) {
      lastErr = err;
      const wait = Math.min(20000, 1500 * 2 ** i);
      console.error(`retry ${i + 1}/${tries} after ${wait}ms`);
      sleep(wait);
    }
  }
  throw lastErr;
}

function walk(dir, base = '') {
  /** @type {{ path: string, abs: string, mode: string }[]} */
  const files = [];
  for (const name of fs.readdirSync(dir)) {
    if (name === '.git' || name === 'node_modules') continue;
    const abs = path.join(dir, name);
    const rel = base ? `${base}/${name}` : name;
    const st = fs.statSync(abs);
    if (st.isDirectory()) files.push(...walk(abs, rel));
    else if (st.isFile()) {
      const exec = Boolean(st.mode & 0o111);
      files.push({ path: rel, abs, mode: exec ? '100755' : '100644' });
    }
  }
  return files;
}

const parent = ghJson([`repos/${OWNER}/${REPO}/git/ref/heads/main`]).object.sha;
console.error(`parent ${parent}`);

const files = walk(ROOT).filter((f) => f.path !== '.bootstrap');
console.error(`files: ${files.length}`);

const tree = [];
for (const f of files) {
  const content = fs.readFileSync(f.abs);
  let encoding = 'utf-8';
  let body = content.toString('utf8');
  if (body.includes('\u0000') || Buffer.byteLength(body, 'utf8') !== content.length) {
    encoding = 'base64';
    body = content.toString('base64');
  }
  const blob = ghJson(
    ['--method', 'POST', `repos/${OWNER}/${REPO}/git/blobs`, '--input', '-'],
    { content: body, encoding },
  );
  tree.push({ path: f.path, mode: f.mode, type: 'blob', sha: blob.sha });
  console.error(`blob ${f.path}`);
}

const treeRes = ghJson(
  ['--method', 'POST', `repos/${OWNER}/${REPO}/git/trees`, '--input', '-'],
  { tree },
);
console.error(`tree ${treeRes.sha}`);

const commit = ghJson(
  ['--method', 'POST', `repos/${OWNER}/${REPO}/git/commits`, '--input', '-'],
  {
    message: MSG,
    tree: treeRes.sha,
    parents: [parent],
  },
);
console.error(`commit ${commit.sha}`);

ghJson(
  ['--method', 'PATCH', `repos/${OWNER}/${REPO}/git/refs/heads/main`, '--input', '-'],
  { sha: commit.sha, force: true },
);
console.error('ref refs/heads/main updated');
console.log(`https://github.com/${OWNER}/${REPO}`);
