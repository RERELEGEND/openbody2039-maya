# RELEASE_NOTES · slim for open source

## Backup (pre-slim)

- Directory: `web_alt/_archive/OpenBody2039_MAYA_pre-slim_20261029_171009/`
- Tarball: `web_alt/_archive/OpenBody2039_MAYA_pre-slim_20261029_171009.tar.gz`
- Restores with `npm install` (node_modules not archived)

## Removed from public surface

- Internal `PLAN.md` (full engineering plan)
- `docs/SPEECH_LIPSYNC.md`, `FACE_COSPEECH.md`, `MIGRATION.md`
- `tools/pack_migrate.sh`, `tools/verify_intent_e2e.mjs`
- `body-graph/motions/dance.json` (third-party motion path / license risk)
- Absolute machine paths in exported JSON
- `license: UNLICENSED` → **MIT**

## Kept

- MCP / brain / transport / body-graph / avatar-source
- Public docs: MCP, PROTOCOL, LAYERS, ARCHITECTURE
- Optional Cursor `skill/`
- Export + smoke generators

## Verify

```bash
npm run export:graph
npm run test:mcp-offline
```
