# Architecture

```text
MCP host (any)
  └─ stdio → mcp/server.js
        ├─ body_lookup / resources → body-graph/   (offline)
        ├─ intent_do / plan_run → brain/
        └─ wsClient → OPENBODY_WS_URL
              └─ transport/wsServer.js
                    └─ OpenBody-compatible viewer (?mcp=1)
```

Graph SSOT: `avatar-source/` → `npm run export:graph` → `body-graph/`.

Env: Ubuntu 22.04 · Node ≥ 20 · `@modelcontextprotocol/sdk` ^1 · `ws` ^8.

See [MCP.md](MCP.md), [PROTOCOL.md](PROTOCOL.md), [LAYERS.md](LAYERS.md).
