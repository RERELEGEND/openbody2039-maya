---
name: openbody2039-maya
description: >-
  OpenBody2039 MAYA avatar body knowledge and control via MCP. Use when the user
  mentions OpenBody2039, MAYA avatar joints/expressions/poses, body graph, or
  driving the avatar with intent. Prefer body_lookup / intent_do; do not invent bone names.
---

# OpenBody2039 · MAYA (optional Cursor Skill)

This Skill is a **Cursor convenience**. The real deliverable is the **standalone MCP**
`openbody2039-maya` — any MCP host can use it without this Skill. See `docs/MCP.md`.

## Environment

- Node **≥ 20** · Ubuntu 22.04 tested
- Package: this repo (`OpenBody2039_MAYA`)
- Viewer: any client implementing OpenBody WS PROTOCOL (optional for offline tools)

## Control flow

```text
openbody_info → body_lookup → maya_status → intent_do → control_release
```

## Hard rules

1. Bone names / limits only from `body_lookup` or `openbody://body-graph/*`
2. Prefer `intent_do` / `plan_run` over `pose_set_joint`
3. Always `control_release` when finished
4. MCP does not require this Skill

## Progressive disclosure

- [reference.md](reference.md) · [examples.md](examples.md)
- `docs/MCP.md` · `docs/PROTOCOL.md` · `ROADMAP.md`
