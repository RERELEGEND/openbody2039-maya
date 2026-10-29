# OpenBody2039 MAYA — MCP

> **给 AI Agent 一个身体。** 虚拟人叫 **MAYA**。  
> 宣传页：[在线](https://rerelegend.github.io/openbody2039-maya/) · [源码](docs/promo/index.html) · [仓库](https://github.com/RERELEGEND/openbody2039-maya)

Universal **Model Context Protocol** server for avatar **body knowledge** and **intent-level control**.

- **IDE-agnostic** stdio MCP (Claude Desktop, Cursor, Cline, Continue, custom agents, …)
- **Self-contained knowledge** in `body-graph/` (works offline)
- **Optional live control** via local WebSocket bridge + any OpenBody-compatible viewer

| | |
|---|---|
| Node | **≥ 20** |
| OS | Linux (Ubuntu 22.04 tested) / macOS should work |
| Deps | `@modelcontextprotocol/sdk` ^1 · `ws` ^8 |
| License | MIT |

## Quick start

```bash
npm install
npm run export:graph      # rebuild body-graph from avatar-source/
npm run test:mcp-offline  # no viewer required
npm run mcp               # stdio MCP (stdout = protocol only)
```

Optional live stack:

```bash
npm run bridge            # ws://127.0.0.1:8787
# open any OpenBody-compatible viewer with mcp mode enabled (often ?mcp=1)
```

## Register in any MCP host

```json
{
  "mcpServers": {
    "openbody2039-maya": {
      "command": "node",
      "args": ["/ABS/PATH/to/OpenBody2039_MAYA/mcp/server.js"],
      "env": {
        "OPENBODY_WS_URL": "ws://127.0.0.1:8787"
      }
    }
  }
}
```

See [docs/MCP.md](docs/MCP.md) and [mcp/clients.example.json](mcp/clients.example.json).

## What agents should call

| Tool / resource | Offline | Role |
|---|---|---|
| `openbody_info` | yes | Manifest |
| `body_lookup` | yes | Joints / axes / morphs / poses |
| `openbody://body-graph/*` | yes | Full graph resources |
| `maya_status` → `intent_do` / `plan_run` → `control_release` | needs bridge | Live control |

Prefer **intent / primitives** over joint-level tweaks. Bone names only from `body_lookup`.

## Layout

```text
mcp/            stdio MCP server
brain/          intent → primitives
transport/      optional WS bridge process
body-graph/     exported knowledge (do not hand-edit)
avatar-source/  SSOT for export:graph
docs/           MCP / protocol / layers
skill/          optional Cursor Agent Skill (NOT required by MCP)
generator/      export + smoke tests
```

## Scope (v0)

**In scope:** protocol, body graph, MCP tools/resources, bridge.

**Out of scope (this repo):** full 3D avatar product, GLB assets, Mixamo/AMASS motion corpora, proprietary viewer UI.

Compatible viewers implement [docs/PROTOCOL.md](docs/PROTOCOL.md) themselves.

## Env

| Variable | Default |
|---|---|
| `OPENBODY_WS_URL` | `ws://127.0.0.1:8787` |
| `OPENBODY_GRAPH_DIR` | `<package>/body-graph` |
| `OPENBODY_CLIENT_ID` | `openbody-mcp` |
| `OPENBODY_AVATAR_SRC` | `<package>/avatar-source` (export only) |

## License

MIT — see [LICENSE](LICENSE).
