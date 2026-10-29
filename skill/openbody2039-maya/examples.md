# Examples

## Offline

1. `openbody_info`
2. `body_lookup` with `query: "RightArm"` or `"smile"` or `"site"`

## Live (bridge + compatible viewer)

1. `maya_status`
2. `intent_do` with `text: "挥右手打招呼"` or `"wave right hand hello"`
3. `control_release`

## CLI

```bash
npm run test:mcp-offline
npm run bridge   # then open viewer with mcp mode
npm run smoke:p5
```
