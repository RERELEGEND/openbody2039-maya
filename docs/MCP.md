# OpenBody2039 MCP — universal host guide

This package exposes a **standard Model Context Protocol (stdio) server**.
It is **not** tied to Cursor, Claude Desktop, or any single agent product.

## Independence

| Layer | Binding |
|---|---|
| Knowledge (`body-graph/`, tools `body_lookup` / resources) | **Self-contained** in this package |
| Live control | Optional local WebSocket bridge (`OPENBODY_WS_URL`) + any OpenBody-compatible viewer |
| IDE / agent host | **None** — any MCP client that can spawn a stdio server |

## Requirements

- OS: Linux (tested Ubuntu 22.04) / macOS should work
- Node.js **≥ 20**
- Dependencies: `@modelcontextprotocol/sdk` ^1 · `ws` ^8

## Run

```bash
cd OpenBody2039_MAYA
npm install
npm run export:graph   # once / when avatar sources change
npm run mcp            # stdio MCP (stdout = protocol)
```

Or:

```bash
node mcp/server.js
# after npm link / publish:
openbody2039-maya
```

## Environment

| Variable | Default | Meaning |
|---|---|---|
| `OPENBODY_WS_URL` | `ws://127.0.0.1:8787` | Avatar bridge WebSocket |
| `OPENBODY_WS_HOST` / `OPENBODY_WS_PORT` | `127.0.0.1` / `8787` | Used if URL not set |
| `OPENBODY_GRAPH_DIR` | `<package>/body-graph` | Override knowledge JSON root |
| `OPENBODY_CLIENT_ID` | `openbody-mcp` | Session claim label |

## Register in any MCP host

### Generic shape

```json
{
  "mcpServers": {
    "openbody2039-maya": {
      "command": "node",
      "args": ["/ABS/PATH/OpenBody2039_MAYA/mcp/server.js"],
      "env": {
        "OPENBODY_WS_URL": "ws://127.0.0.1:8787"
      }
    }
  }
}
```

Same shape works for Cursor (`~/.cursor/mcp.json`), Claude Desktop (`claude_desktop_config.json`), and most agents that copy the Anthropic/MCP config convention.

### Using npm bin (after `npm link` in this folder)

```json
{
  "mcpServers": {
    "openbody2039-maya": {
      "command": "openbody2039-maya",
      "env": {
        "OPENBODY_WS_URL": "ws://127.0.0.1:8787"
      }
    }
  }
}
```

## Tools (stable)

| Tool | Offline? | Role |
|---|---|---|
| `openbody_info` | yes | Manifest / discovery |
| `body_lookup` | yes | Joints / axes / morphs / poses / site |
| `maya_status` | no* | Bridge / claim / plan |
| `control_claim` / `release` / `abort` | no* | Write lock |
| `intent_do` | no* | NL → primitives → play |
| `plan_run` | no* | Explicit primitive list |
| `pose_set_joint` | no* | Debug only |

\* Needs `npm run bridge` + viewer with mcp mode (`?mcp=1` for the reference MAYA viewer).

## Resources (stable URIs)

- `openbody://manifest`
- `openbody://body-graph/joints|axes|morphs|poses|cycles|site|schema`

## Agent discipline (host-agnostic)

1. Discover with `openbody_info` or `openbody://manifest`
2. Prefer `intent_do` / `plan_run` over joint tweaks
3. Always `control_release` when finished
4. Bone names only from `body_lookup` / resources — never invent

## Live stack (optional)

```bash
npm run bridge                          # WS :8787
# start your OpenBody-compatible avatar viewer with mcp enabled
```

Any OpenBody-compatible viewer works. This package is self-contained: graph SSOT is `avatar-source/` → `npm run export:graph` → `body-graph/`.
