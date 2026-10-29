# avatar-source · graph SSOT (bundled)

Joint limits, face presets, expression catalog, and default action-flow live here.
`npm run export:graph` writes `body-graph/*.json`.

| Path | Role |
|------|------|
| `src/jointDefs.js` | Limits + `STANDING_POSES` |
| `src/facePresets.js` | ARKit morph presets |
| `src/expressionCatalog.js` | Mood / flash / co-speech metadata |
| `src/actionFlow.js` | Default flow steps |
| `docs/DETAILED_JOINT_VERIFY.md` | Measured axis semantics → `axes.json` |

MCP runtime only needs `body-graph/`. Live motion needs any OpenBody-compatible viewer.

Optional sync from an external viewer tree:

```bash
bash tools/sync-avatar-source.sh /path/to/viewer
npm run export:graph
```

Do not hand-edit `body-graph/*.json`.
