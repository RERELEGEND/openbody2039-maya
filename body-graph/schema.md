# body-graph 字段说明

> 由 `npm run export:graph` 生成。真源是本包 `avatar-source/`，勿手改 JSON。

## 文件

| 文件 | 内容 |
|---|---|
| `joints.json` | 骨名 / 父骨 / 中文 label·role / 逐轴限位 |
| `axes.json` | 实测轴语义摘要 + 端点位移试验 |
| `morphs.json` | ARKit morph 名并集 + 表情预设 |
| `poses.json` | `STANDING_POSES` |
| `cycles.json` | 兼容 viewer 门面 / 动作流 / 计划原语 |
| `site.json` | 桥约定、数量口径 |
| `motions/` | （可选，默认不发布）第三方动作包；缺省时 dance 走程序化原语 |

## 关节口径（三套，勿混）

1. **运行时蒙皮骨 ≈ 73** — 兼容 viewer `listBones`
2. **实测验证关节 = 73** — `avatar-source/docs/DETAILED_JOINT_VERIFY.md`
3. **JOINT_DEFS 具名 = 33** + 手指前缀规则 — `avatar-source/src/jointDefs.js`

## 角度约定

- 单位：度
- 含义：相对绑定位姿（T-pose）的**局部欧拉增量**
- 写入：协议 `pose_set_joint` / viewer `setDelta`
- 世界提示：角色前方 ≈ +Z，+Y 向上

## 重跑

```bash
cd OpenBody2039_MAYA
npm run export:graph
# 可选：从外部 viewer 树同步后导出
# OPENBODY_AVATAR_SRC=/path/to/viewer npm run export:graph
```
