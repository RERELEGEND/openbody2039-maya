# mcp/

**Universal Model Context Protocol server** (stdio). IDE-agnostic.

| Entry | Role |
|---|---|
| `server.js` / `bin.js` | MCP stdio process |
| `tools.js` | Tools + resources |
| `config.js` | Env-only config |
| `wsClient.js` | Optional live bridge client |
| `clients.example.json` | Host registration template |

Docs: [docs/MCP.md](../docs/MCP.md)

```bash
npm run mcp
npm run test:mcp-offline
```
