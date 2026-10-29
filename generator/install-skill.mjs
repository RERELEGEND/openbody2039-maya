#!/usr/bin/env node
/**
 * 将 skill/openbody2039-maya 安装到 ~/.cursor/skills/openbody2039-maya
 * 环境：Ubuntu 22.04 · Node 20+
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(__dirname, '../skill/openbody2039-maya');
const DEST = path.join(process.env.HOME || '', '.cursor/skills/openbody2039-maya');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const name of fs.readdirSync(src)) {
    const from = path.join(src, name);
    const to = path.join(dest, name);
    const st = fs.statSync(from);
    if (st.isDirectory()) copyDir(from, to);
    else fs.copyFileSync(from, to);
  }
}

if (!fs.existsSync(path.join(SRC, 'SKILL.md'))) {
  console.error('缺少 SKILL.md:', SRC);
  process.exit(1);
}

copyDir(SRC, DEST);
console.log('Skill installed →', DEST);
