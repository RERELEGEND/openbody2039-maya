/**
 * OpenBody2039 MCP · 运行时配置（纯环境变量，不绑定任何 IDE）
 * 环境：Node 20+
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PKG_ROOT = path.resolve(__dirname, '..');

function readPkgVersion() {
  try {
    const pkg = JSON.parse(fs.readFileSync(path.join(PKG_ROOT, 'package.json'), 'utf8'));
    return pkg.version || '0.0.0';
  } catch {
    return '0.0.0';
  }
}

/**
 * @returns {{
 *   packageRoot: string,
 *   graphDir: string,
 *   wsUrl: string,
 *   wsHost: string,
 *   wsPort: number,
 *   clientLabel: string,
 *   version: string,
 *   serverName: string,
 * }}
 */
export function loadConfig() {
  const graphDir = process.env.OPENBODY_GRAPH_DIR
    ? path.resolve(process.env.OPENBODY_GRAPH_DIR)
    : path.join(PKG_ROOT, 'body-graph');

  const wsUrl =
    process.env.OPENBODY_WS_URL ||
    `ws://${process.env.OPENBODY_WS_HOST || '127.0.0.1'}:${process.env.OPENBODY_WS_PORT || '8787'}`;

  let wsHost = '127.0.0.1';
  let wsPort = 8787;
  try {
    const u = new URL(wsUrl);
    wsHost = u.hostname || wsHost;
    wsPort = Number(u.port || 8787);
  } catch {
    /* keep defaults */
  }

  return {
    packageRoot: PKG_ROOT,
    graphDir,
    wsUrl,
    wsHost,
    wsPort,
    clientLabel: process.env.OPENBODY_CLIENT_ID || 'openbody-mcp',
    version: readPkgVersion(),
    serverName: 'openbody2039-maya',
  };
}

export function assertGraphDir(graphDir) {
  const needed = ['joints.json', 'axes.json', 'morphs.json', 'poses.json', 'site.json', 'cycles.json'];
  const missing = needed.filter((f) => !fs.existsSync(path.join(graphDir, f)));
  if (missing.length) {
    throw new Error(
      `body-graph incomplete at ${graphDir}; missing: ${missing.join(', ')}. Run: npm run export:graph (reads avatar-source/)`,
    );
  }
}
