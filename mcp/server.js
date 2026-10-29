#!/usr/bin/env node
/**
 * OpenBody2039 MAYA — Model Context Protocol server (stdio)
 *
 * Universal MCP for any host/agent (Claude Desktop, Cursor, Cline, Continue,
 * Windsurf, Zed, custom agents, etc.). No IDE-specific APIs.
 *
 * Env (all optional):
 *   OPENBODY_WS_URL=ws://127.0.0.1:8787
 *   OPENBODY_GRAPH_DIR=/path/to/body-graph
 *   OPENBODY_CLIENT_ID=openbody-mcp
 *
 * Run:
 *   node mcp/server.js
 *   npm run mcp
 *   npx openbody2039-maya   (when published / linked)
 *
 * Stdout = MCP JSON-RPC only. Logs go to stderr.
 *
 * OS: Ubuntu 22.04+ · Node 20+ · @modelcontextprotocol/sdk ^1 · ws ^8
 */
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import {
  toolDefs,
  callTool,
  getBridge,
  getConfig,
  RESOURCE_DEFS,
  readResource,
  buildManifest,
} from './tools.js';

const config = getConfig();

const INSTRUCTIONS = [
  'OpenBody2039 MAYA is a standalone MCP server for avatar body knowledge and intent-level control.',
  'It does not depend on any particular IDE.',
  '1) Call openbody_info (or read resource openbody://manifest) to discover capabilities.',
  '2) Use body_lookup or body-graph resources for joints/axes/morphs — works offline.',
  '3) For live motion: ensure an OpenBody WS bridge is running and a compatible viewer has mcp mode enabled; then maya_status → intent_do / plan_run → control_release.',
  '4) Prefer intent_do / plan_run over pose_set_joint.',
  `WS default: ${config.wsUrl}. Override with OPENBODY_WS_URL.`,
].join(' ');

const server = new Server(
  {
    name: config.serverName,
    version: config.version,
  },
  {
    capabilities: {
      tools: {},
      resources: {},
    },
    instructions: INSTRUCTIONS,
  },
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: toolDefs.map((t) => ({
    name: t.name,
    description: t.description,
    inputSchema: t.inputSchema,
  })),
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const name = request.params.name;
  const args = request.params.arguments || {};
  return callTool(name, args);
});

server.setRequestHandler(ListResourcesRequestSchema, async () => ({
  resources: RESOURCE_DEFS.map((r) => ({
    uri: r.uri,
    name: r.name,
    description: r.description,
    mimeType: r.mimeType,
  })),
}));

server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const uri = request.params.uri;
  try {
    return readResource(uri);
  } catch (err) {
    throw new Error(err.message || String(err));
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  const m = buildManifest();
  console.error(
    `[openbody-mcp] ready name=${m.name} v=${m.version} graph=${config.graphDir} ws=${config.wsUrl}`,
  );
}

function shutdown() {
  try {
    getBridge().close();
  } catch {
    /* ignore */
  }
  process.exit(0);
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

main().catch((err) => {
  console.error('[openbody-mcp] fatal', err);
  process.exit(1);
});
