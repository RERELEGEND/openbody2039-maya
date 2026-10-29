# LAYERS

优先级：`speech` > `face` > `gesture` > `base`

| 层 | 职责 |
|---|---|
| base | poseLife 活站姿 / 走路基线 |
| gesture | plan 原语占用的骨（臂、头…） |
| face | 表情 Morph 渐变 |
| speech | 嘴型（开麦时） |

规则：

1. `plan.run` 默认 `holdBase:false` → 确保 `newStand` 活站姿，gesture 盖在相关骨上
2. `holdBase:true` → 停 poseLife
3. 计划结束 → 清 gesture，base 继续
4. `plan.abort` / 掉线 → 清 gesture

实现：兼容 viewer 侧分层（历史参考曾在 MAYA3.0 `controlLayers` + `bodyExecutor`）；MCP 侧只下发原语，不绑定该路径。
