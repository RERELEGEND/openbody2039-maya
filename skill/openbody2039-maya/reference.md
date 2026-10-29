# OpenBody2039 · 关节与轴参考

配合 `body-graph/joints.json` 与 `axes.json` 使用。本文只列高频要点。

## 躯干 / 头颈

| 骨 | 要点 |
|---|---|
| `Hips` | 整身根；RX 前后倾，RY 左右转 |
| `Spine` / `Spine1` / `Spine2` | 腰→胸；小幅弯曲/扭转 |
| `Neck` / `Neck1` / `Neck2` | 颈部分段 |
| `Head` | +RX 低头，−RX 仰头；+RY 向角色右转；+RZ 向角色左倾；限位 RX±45 RY±80 RZ±40 |

## 臂（镜像注意）

| 骨 | 要点 |
|---|---|
| `LeftArm` / `RightArm` | 垂臂基线见 anatomical；前后摆主要用 RZ（左右符号镜像） |
| `LeftForeArm` / `RightForeArm` | +RX 屈肘 |
| `*Hand` | 腕屈伸/偏转 |
| 手指 `*HandIndex1..4` 等 | 屈伸为主；走手指默认限位 |

解剖贴身站姿实测基线：

```text
LeftArm (75.5,-8.5,0)  RightArm (76.5,9.5,-6.5)
LeftForeArm (14.5,0.5,6.5)  RightForeArm (14.5,-0.5,-6.5)
```

## 腿

| 骨 | 要点 |
|---|---|
| `LeftUpLeg` / `RightUpLeg` | +RX 向前迈，−RX 向后（左右同号） |
| `*Leg` | 膝屈（通常单向负 RX） |
| `*Foot` / `*ToeBase` | 踝 / 趾 |

## 查询顺序

1. `joints.json` → `limits` + `role`
2. `axes.json` → 同名骨的 `summary` / `trials`
3. 仍不够再打开 `docs/dev/DETAILED_JOINT_VERIFY.md`（巨大，勿整篇粘贴）
