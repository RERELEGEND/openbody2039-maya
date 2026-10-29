# PROTOCOL

WebSocket：`ws://127.0.0.1:8787`（`OPENBODY_WS_PORT` / `OPENBODY_WS_URL`）

## 角色

| role | 说明 |
|---|---|
| `browser` | `/?mcp=1` 自动连 |
| `controller` | MCP / 冒烟脚本 |

## 方法

| method | claim | 说明 |
|---|---|---|
| `bridge.status` / `ping` | 否 | 状态 |
| `session.claim` / `release` / `heartbeat` | — | 写权 · TTL 15s |
| `plan.run` | 是 | `{steps, holdBase?}` → 异步 `plan.done` 事件 |
| `plan.abort` | 是 | 中止 |
| `pose.setDelta` / `apply` / `reset` | 是 | 低层 |
| `face.set` | 是 | 表情名 |
| `query.snapshot` / `query.status` | 否 | 快照 |

## 事件

`browser.ready` · `browser.offline` · `plan.start` · `plan.done` · `session.released`

## 错误码

`E_BRIDGE_OFFLINE` · `E_BUSY` · `E_NOT_CLAIMED` · `E_BONE_UNKNOWN` · `E_LIMIT_CLAMPED` · `E_UNKNOWN_METHOD` · `E_EXEC_UNREADY`
