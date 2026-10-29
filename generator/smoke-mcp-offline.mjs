#!/usr/bin/env node
/**
 * Offline MCP surface check (no viewer / no bridge required)
 */
import { callTool, RESOURCE_DEFS, readResource, buildManifest } from '../mcp/tools.js';

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

const info = await callTool('openbody_info', {});
assert(!info.isError, 'openbody_info should succeed offline');
const manifest = JSON.parse(info.content[0].text);
assert(manifest.name === 'openbody2039-maya', 'name');
assert(manifest.independence?.ide === 'none required', 'independence');
assert(manifest.tools.discovery.includes('openbody_info'), 'discovery tools');

const lookup = await callTool('body_lookup', { query: 'Head' });
assert(!lookup.isError, 'body_lookup Head');
const head = JSON.parse(lookup.content[0].text);
assert(head.joint?.name === 'Head', 'Head joint');

for (const r of RESOURCE_DEFS) {
  const res = readResource(r.uri);
  assert(res.contents?.[0]?.text?.length > 10, `resource ${r.uri}`);
}

const m2 = buildManifest();
assert(m2.resources.length === RESOURCE_DEFS.length, 'resource count');

console.log('MCP offline OK', {
  version: manifest.version,
  tools: Object.values(manifest.tools).flat().length,
  resources: RESOURCE_DEFS.length,
});
