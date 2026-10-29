# 全身关节详细验证报告（三视图 + 延迟截图）

> 每个变化角度给出 **两条最详细研究结果**；截图为对焦关节后的 **正视 / 侧视 / 俯视**。
>
> - 延迟：设角后 **320 ms** + 双 rAF；切相机后再 **140 ms** + 双 rAF
> - 角色前方 ≈ 世界 **+Z**；+Y 向上
> - 截图：`joint-explore/detailed-verify/shots/`
> - 数据：`joint-explore/detailed-verify/detailed-metrics.json`
> - 重跑：`node scripts/explore-detailed-verify.mjs`
> - `*_End` / 眼球：仅定量，不截三视图

## 解剖站立贴身基线（用户实测）

```
LeftArm (75.5,-8.5,0)  RightArm (76.5,9.5,-6.5)
LeftForeArm (14.5,0.5,6.5)  RightForeArm (14.5,-0.5,-6.5)
```

## `Head`

测点：`LeftEye`　试验角：±35°

### RX +35°

1. 【语义确认】+RX：低头（俯）
2. 【定量】端点主位移：向下（|Δ|=0.061）；次要耦合：向前(+Z)（|Δ|=0.022）；mag=0.064

定量 (dx,dy,dz)=(`0`, `-0.06067`, `0.02175`)，mag=`0.06445`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Head_RX_p35_front.jpg) | ![](shots/Head_RX_p35_side.jpg) | ![](shots/Head_RX_p35_top.jpg) |

### RX −35°

1. 【语义确认】−RX：仰头（抬下巴）
2. 【定量】端点主位移：向后(−Z)（|Δ|=0.053）；次要耦合：向上（|Δ|=0.037）；mag=0.064

定量 (dx,dy,dz)=(`0`, `0.03722`, `-0.05261`)，mag=`0.06445`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Head_RX_n35_front.jpg) | ![](shots/Head_RX_n35_side.jpg) | ![](shots/Head_RX_n35_top.jpg) |

### RY +35°

1. 【语义确认】+RY：头转向角色右侧
2. 【定量】端点主位移：向+X(约角色左)（|Δ|=0.047）；次要耦合：向后(−Z)（|Δ|=0.034）；mag=0.059

定量 (dx,dy,dz)=(`0.04748`, `-0.00422`, `-0.03434`)，mag=`0.05875`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Head_RY_p35_front.jpg) | ![](shots/Head_RY_p35_side.jpg) | ![](shots/Head_RY_p35_top.jpg) |

### RY −35°

1. 【语义确认】−RY：头转向角色左侧
2. 【定量】端点主位移：向−X(约角色右)（|Δ|=0.059）；耦合弱；mag=0.059；测点 `LeftEye`

定量 (dx,dy,dz)=(`-0.05874`, `0.00013`, `0.0011`)，mag=`0.05875`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Head_RY_n35_front.jpg) | ![](shots/Head_RY_n35_side.jpg) | ![](shots/Head_RY_n35_top.jpg) |

### RZ +35°

1. 【语义确认】+RZ：向角色左倾
2. 【定量】端点主位移：向−X(约角色右)（|Δ|=0.037）；耦合弱；mag=0.037；测点 `LeftEye`

定量 (dx,dy,dz)=(`-0.03656`, `0.00804`, `-0.00099`)，mag=`0.03745`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Head_RZ_p35_front.jpg) | ![](shots/Head_RZ_p35_side.jpg) | ![](shots/Head_RZ_p35_top.jpg) |

### RZ −35°

1. 【语义确认】−RZ：向角色右倾
2. 【定量】端点主位移：向下（|Δ|=0.027）；次要耦合：向+X(约角色左)（|Δ|=0.025）；mag=0.037

定量 (dx,dy,dz)=(`0.02531`, `-0.0274`, `0.00336`)，mag=`0.03745`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Head_RZ_n35_front.jpg) | ![](shots/Head_RZ_n35_side.jpg) | ![](shots/Head_RZ_n35_top.jpg) |

## `Hips`

测点：`Spine`　试验角：±35°

### RX +35°

1. 【主结果】+RX → 端点主位移：向前(+Z)（|Δ|=0.070）
2. 【详证】次要耦合：向下（|Δ|=0.040）；mag=0.081；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `-0.04043`, `0.06999`)，mag=`0.08083`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Hips_RX_p35_front.jpg) | ![](shots/Hips_RX_p35_side.jpg) | ![](shots/Hips_RX_p35_top.jpg) |

### RX −35°

1. 【主结果】−RX → 端点主位移：向后(−Z)（|Δ|=0.081）
2. 【详证】耦合弱；mag=0.081；测点 `Spine`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0.00002`, `-0.08083`)，mag=`0.08083`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Hips_RX_n35_front.jpg) | ![](shots/Hips_RX_n35_side.jpg) | ![](shots/Hips_RX_n35_top.jpg) |

### RY +35°

1. 【主结果】+RY → 端点主位移：向+X(约角色左)（|Δ|=0.023）
2. 【详证】次要耦合：向后(−Z)（|Δ|=0.007）；mag=0.024；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.0232`, `0`, `-0.00731`)，mag=`0.02432`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Hips_RY_p35_front.jpg) | ![](shots/Hips_RY_p35_side.jpg) | ![](shots/Hips_RY_p35_top.jpg) |

### RY −35°

1. 【主结果】−RY → 端点主位移：向−X(约角色右)（|Δ|=0.023）
2. 【详证】次要耦合：向后(−Z)（|Δ|=0.007）；mag=0.024；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.0232`, `0`, `-0.00731`)，mag=`0.02432`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Hips_RY_n35_front.jpg) | ![](shots/Hips_RY_n35_side.jpg) | ![](shots/Hips_RY_n35_top.jpg) |

### RZ +35°

1. 【主结果】+RZ → 端点主位移：向−X(约角色右)（|Δ|=0.064）
2. 【详证】耦合弱；mag=0.065；测点 `Spine`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.06374`, `-0.01413`, `0`)，mag=`0.06529`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Hips_RZ_p35_front.jpg) | ![](shots/Hips_RZ_p35_side.jpg) | ![](shots/Hips_RZ_p35_top.jpg) |

### RZ −35°

1. 【主结果】−RZ → 端点主位移：向+X(约角色左)（|Δ|=0.064）
2. 【详证】耦合弱；mag=0.065；测点 `Spine`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.06374`, `-0.01413`, `0`)，mag=`0.06529`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Hips_RZ_n35_front.jpg) | ![](shots/Hips_RZ_n35_side.jpg) | ![](shots/Hips_RZ_n35_top.jpg) |

## `LeftArm`

测点：`LeftForeArm`　试验角：±35°

### RX +35°

1. 【语义确认】+RX：自 T 下垂（垂臂主轴）
2. 【定量】端点主位移：向下（|Δ|=0.156）；次要耦合：向−X(约角色右)（|Δ|=0.060）；mag=0.167

定量 (dx,dy,dz)=(`-0.05991`, `-0.15623`, `0`)，mag=`0.16732`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftArm_RX_p35_front.jpg) | ![](shots/LeftArm_RX_p35_side.jpg) | ![](shots/LeftArm_RX_p35_top.jpg) |

### RX −35°

1. 【语义确认】−RX：上抬；勿用 RX 前后摆
2. 【定量】端点主位移：向上（|Δ|=0.162）；耦合弱；mag=0.167；测点 `LeftForeArm`

定量 (dx,dy,dz)=(`-0.04053`, `0.16234`, `0`)，mag=`0.16732`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftArm_RX_n35_front.jpg) | ![](shots/LeftArm_RX_n35_side.jpg) | ![](shots/LeftArm_RX_n35_top.jpg) |

### RY +35°

1. 【语义确认】垂臂后贴身微调（防穿模）
2. 【定量】端点主位移：向下（|Δ|=0.003）；次要耦合：向后(−Z)（|Δ|=0.002）；mag=0.004

定量 (dx,dy,dz)=(`-0.00016`, `-0.00302`, `-0.00243`)，mag=`0.00388`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftArm_RY_p35_front.jpg) | ![](shots/LeftArm_RY_p35_side.jpg) | ![](shots/LeftArm_RY_p35_top.jpg) |

### RY −35°

1. 【语义确认】单独 RY 弱于 RX/RZ
2. 【定量】端点主位移：向上（|Δ|=0.004）；耦合弱；mag=0.004；测点 `LeftForeArm`

定量 (dx,dy,dz)=(`0.0002`, `0.00387`, `0.00025`)，mag=`0.00388`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftArm_RY_n35_front.jpg) | ![](shots/LeftArm_RY_n35_side.jpg) | ![](shots/LeftArm_RY_n35_top.jpg) |

### RZ +35°

1. 【语义确认】垂臂后 +RZ 向前
2. 【定量】端点主位移：向前(+Z)（|Δ|=0.158）；次要耦合：向−X(约角色右)（|Δ|=0.054）；mag=0.167

定量 (dx,dy,dz)=(`-0.05369`, `0.00281`, `0.15849`)，mag=`0.16736`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftArm_RZ_p35_front.jpg) | ![](shots/LeftArm_RZ_p35_side.jpg) | ![](shots/LeftArm_RZ_p35_top.jpg) |

### RZ −35°

1. 【语义确认】垂臂后 −RZ 向后（走路摆臂）
2. 【定量】端点主位移：向后(−Z)（|Δ|=0.161）；次要耦合：向−X(约角色右)（|Δ|=0.047）；mag=0.167

定量 (dx,dy,dz)=(`-0.0468`, `0.00245`, `-0.16066`)，mag=`0.16736`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftArm_RZ_n35_front.jpg) | ![](shots/LeftArm_RZ_n35_side.jpg) | ![](shots/LeftArm_RZ_n35_top.jpg) |

## `LeftFoot`

测点：`LeftToeBase`　试验角：±35°

### RX +35°

1. 【主结果】+RX → 端点主位移：向上（|Δ|=0.065）
2. 【详证】次要耦合：向前(+Z)（|Δ|=0.020）；mag=0.068；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.0018`, `0.06476`, `0.02029`)，mag=`0.06789`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftFoot_RX_p35_front.jpg) | ![](shots/LeftFoot_RX_p35_side.jpg) | ![](shots/LeftFoot_RX_p35_top.jpg) |

### RX −35°

1. 【主结果】−RX → 端点主位移：向后(−Z)（|Δ|=0.054）
2. 【详证】次要耦合：向下（|Δ|=0.041）；mag=0.068；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00471`, `-0.04136`, `-0.05363`)，mag=`0.06789`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftFoot_RX_n35_front.jpg) | ![](shots/LeftFoot_RX_n35_side.jpg) | ![](shots/LeftFoot_RX_n35_top.jpg) |

### RY +35°

1. 【主结果】+RY → 端点主位移：向+X(约角色左)（|Δ|=0.016）
2. 【详证】耦合弱；mag=0.016；测点 `LeftToeBase`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.01571`, `0.00244`, `-0.00067`)，mag=`0.01591`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftFoot_RY_p35_front.jpg) | ![](shots/LeftFoot_RY_p35_side.jpg) | ![](shots/LeftFoot_RY_p35_top.jpg) |

### RY −35°

1. 【主结果】−RY → 端点主位移：向−X(约角色右)（|Δ|=0.015）
2. 【详证】次要耦合：向上（|Δ|=0.004）；mag=0.016；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.01515`, `0.00417`, `0.00252`)，mag=`0.01591`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftFoot_RY_n35_front.jpg) | ![](shots/LeftFoot_RY_n35_side.jpg) | ![](shots/LeftFoot_RY_n35_top.jpg) |

### RZ +35°

1. 【主结果】+RZ → 端点主位移：向+X(约角色左)（|Δ|=0.052）
2. 【详证】次要耦合：向后(−Z)（|Δ|=0.017）；mag=0.055；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.05235`, `0.00362`, `-0.01736`)，mag=`0.05527`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftFoot_RZ_p35_front.jpg) | ![](shots/LeftFoot_RZ_p35_side.jpg) | ![](shots/LeftFoot_RZ_p35_top.jpg) |

### RZ −35°

1. 【主结果】−RZ → 端点主位移：向−X(约角色右)（|Δ|=0.054）
2. 【详证】耦合弱；mag=0.055；测点 `LeftToeBase`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.05417`, `0.00425`, `-0.01008`)，mag=`0.05527`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftFoot_RZ_n35_front.jpg) | ![](shots/LeftFoot_RZ_n35_side.jpg) | ![](shots/LeftFoot_RZ_n35_top.jpg) |

## `LeftForeArm`

测点：`LeftForeArm1`　试验角：±35°

### RX +35°

1. 【语义确认】+RX：屈肘
2. 【定量】端点主位移：向下（|Δ|=0.077）；耦合弱；mag=0.079；测点 `LeftForeArm1`

定量 (dx,dy,dz)=(`-0.0186`, `-0.07673`, `-0.00569`)，mag=`0.07916`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftForeArm_RX_p35_front.jpg) | ![](shots/LeftForeArm_RX_p35_side.jpg) | ![](shots/LeftForeArm_RX_p35_top.jpg) |

### RX −35°

1. 【语义确认】RY/RZ 微调
2. 【定量】端点主位移：向上（|Δ|=0.023）；耦合弱；mag=0.023；测点 `LeftForeArm1`

定量 (dx,dy,dz)=(`-0.00316`, `0.0227`, `-0.00097`)，mag=`0.02294`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftForeArm_RX_n35_front.jpg) | ![](shots/LeftForeArm_RX_n35_side.jpg) | ![](shots/LeftForeArm_RX_n35_top.jpg) |

### RY +35°

1. 【语义确认】次要轴
2. 【定量】端点主位移：向前(+Z)（|Δ|=0.000）；次要耦合：向上（|Δ|=0.000）；mag=0.000

定量 (dx,dy,dz)=(`-0.00009`, `0.0002`, `0.00024`)，mag=`0.00033`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftForeArm_RY_p35_front.jpg) | ![](shots/LeftForeArm_RY_p35_side.jpg) | ![](shots/LeftForeArm_RY_p35_top.jpg) |

### RY −35°

1. 【语义确认】位移通常很小
2. 【定量】端点主位移：向下（|Δ|=0.000）；次要耦合：向后(−Z)（|Δ|=0.000）；mag=0.000

定量 (dx,dy,dz)=(`0.00006`, `-0.00028`, `-0.00016`)，mag=`0.00033`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftForeArm_RY_n35_front.jpg) | ![](shots/LeftForeArm_RY_n35_side.jpg) | ![](shots/LeftForeArm_RY_n35_top.jpg) |

### RZ +35°

1. 【语义确认】次要轴
2. 【定量】端点主位移：向前(+Z)（|Δ|=0.041）；次要耦合：向−X(约角色右)（|Δ|=0.021）；mag=0.046

定量 (dx,dy,dz)=(`-0.02052`, `-0.0004`, `0.04084`)，mag=`0.04571`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftForeArm_RZ_p35_front.jpg) | ![](shots/LeftForeArm_RZ_p35_side.jpg) | ![](shots/LeftForeArm_RZ_p35_top.jpg) |

### RZ −35°

1. 【语义确认】可贴身站姿叠加
2. 【定量】端点主位移：向后(−Z)（|Δ|=0.045）；耦合弱；mag=0.046；测点 `LeftForeArm1`

定量 (dx,dy,dz)=(`0.00534`, `-0.00043`, `-0.0454`)，mag=`0.04571`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftForeArm_RZ_n35_front.jpg) | ![](shots/LeftForeArm_RZ_n35_side.jpg) | ![](shots/LeftForeArm_RZ_n35_top.jpg) |

## `LeftForeArm1`

测点：`LeftForeArm2`　试验角：±35°

### RX +35°

1. 【主结果】+RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftForeArm1_RX_p35_front.jpg) | ![](shots/LeftForeArm1_RX_p35_side.jpg) | ![](shots/LeftForeArm1_RX_p35_top.jpg) |

### RX −35°

1. 【主结果】−RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftForeArm1_RX_n35_front.jpg) | ![](shots/LeftForeArm1_RX_n35_side.jpg) | ![](shots/LeftForeArm1_RX_n35_top.jpg) |

### RY +35°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftForeArm1_RY_p35_front.jpg) | ![](shots/LeftForeArm1_RY_p35_side.jpg) | ![](shots/LeftForeArm1_RY_p35_top.jpg) |

### RY −35°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftForeArm1_RY_n35_front.jpg) | ![](shots/LeftForeArm1_RY_n35_side.jpg) | ![](shots/LeftForeArm1_RY_n35_top.jpg) |

### RZ +35°

1. 【主结果】+RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftForeArm1_RZ_p35_front.jpg) | ![](shots/LeftForeArm1_RZ_p35_side.jpg) | ![](shots/LeftForeArm1_RZ_p35_top.jpg) |

### RZ −35°

1. 【主结果】−RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftForeArm1_RZ_n35_front.jpg) | ![](shots/LeftForeArm1_RZ_n35_side.jpg) | ![](shots/LeftForeArm1_RZ_n35_top.jpg) |

## `LeftForeArm2`

测点：`LeftForeArm2`　试验角：±35°

### RX +35°

1. 【主结果】+RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftForeArm2_RX_p35_front.jpg) | ![](shots/LeftForeArm2_RX_p35_side.jpg) | ![](shots/LeftForeArm2_RX_p35_top.jpg) |

### RX −35°

1. 【主结果】−RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftForeArm2_RX_n35_front.jpg) | ![](shots/LeftForeArm2_RX_n35_side.jpg) | ![](shots/LeftForeArm2_RX_n35_top.jpg) |

### RY +35°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftForeArm2_RY_p35_front.jpg) | ![](shots/LeftForeArm2_RY_p35_side.jpg) | ![](shots/LeftForeArm2_RY_p35_top.jpg) |

### RY −35°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftForeArm2_RY_n35_front.jpg) | ![](shots/LeftForeArm2_RY_n35_side.jpg) | ![](shots/LeftForeArm2_RY_n35_top.jpg) |

### RZ +35°

1. 【主结果】+RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftForeArm2_RZ_p35_front.jpg) | ![](shots/LeftForeArm2_RZ_p35_side.jpg) | ![](shots/LeftForeArm2_RZ_p35_top.jpg) |

### RZ −35°

1. 【主结果】−RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftForeArm2_RZ_n35_front.jpg) | ![](shots/LeftForeArm2_RZ_n35_side.jpg) | ![](shots/LeftForeArm2_RZ_n35_top.jpg) |

## `LeftHand`

测点：`LeftHandThumb1`　试验角：±35°

### RX +35°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.019）
2. 【详证】次要耦合：向−X(约角色右)（|Δ|=0.007）；mag=0.021；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00691`, `-0.01943`, `-0.0023`)，mag=`0.02075`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHand_RX_p35_front.jpg) | ![](shots/LeftHand_RX_p35_side.jpg) | ![](shots/LeftHand_RX_p35_top.jpg) |

### RX −35°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.020）
2. 【详证】耦合弱；mag=0.021；测点 `LeftHandThumb1`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00491`, `0.02009`, `-0.00166`)，mag=`0.02075`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHand_RX_n35_front.jpg) | ![](shots/LeftHand_RX_n35_side.jpg) | ![](shots/LeftHand_RX_n35_top.jpg) |

### RY +35°

1. 【主结果】+RY → 端点主位移：向后(−Z)（|Δ|=0.008）
2. 【详证】次要耦合：向下（|Δ|=0.006）；mag=0.010；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00416`, `-0.00559`, `-0.00767`)，mag=`0.01036`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHand_RY_p35_front.jpg) | ![](shots/LeftHand_RY_p35_side.jpg) | ![](shots/LeftHand_RY_p35_top.jpg) |

### RY −35°

1. 【主结果】−RY → 端点主位移：向上（|Δ|=0.009）
2. 【详证】次要耦合：向−X(约角色右)（|Δ|=0.004）；mag=0.010；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00357`, `0.00934`, `0.00273`)，mag=`0.01036`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHand_RY_n35_front.jpg) | ![](shots/LeftHand_RY_n35_side.jpg) | ![](shots/LeftHand_RY_n35_top.jpg) |

### RZ +35°

1. 【主结果】+RZ → 端点主位移：向−X(约角色右)（|Δ|=0.018）
2. 【详证】次要耦合：向前(+Z)（|Δ|=0.011）；mag=0.021；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.0177`, `-0.00355`, `0.01133`)，mag=`0.02131`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHand_RZ_p35_front.jpg) | ![](shots/LeftHand_RZ_p35_side.jpg) | ![](shots/LeftHand_RZ_p35_top.jpg) |

### RZ −35°

1. 【主结果】−RZ → 端点主位移：向后(−Z)（|Δ|=0.020）
2. 【详证】次要耦合：向+X(约角色左)（|Δ|=0.008）；mag=0.021；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00839`, `0.00045`, `-0.01959`)，mag=`0.02131`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHand_RZ_n35_front.jpg) | ![](shots/LeftHand_RZ_n35_side.jpg) | ![](shots/LeftHand_RZ_n35_top.jpg) |

## `LeftLeg`

测点：`LeftFoot`　试验角：±35°

### RX +35°

1. 【语义确认】屈膝优先 −RX
2. 【定量】端点主位移：向前(+Z)（|Δ|=0.039）；耦合弱；mag=0.039；测点 `LeftFoot`

定量 (dx,dy,dz)=(`0`, `-0.00065`, `0.03865`)，mag=`0.03866`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftLeg_RX_p35_front.jpg) | ![](shots/LeftLeg_RX_p35_side.jpg) | ![](shots/LeftLeg_RX_p35_top.jpg) |

### RX −35°

1. 【语义确认】+RX 需结合限位解读
2. 【定量】端点主位移：向后(−Z)（|Δ|=0.249）；次要耦合：向上（|Δ|=0.095）；mag=0.266

定量 (dx,dy,dz)=(`0`, `0.09532`, `-0.24885`)，mag=`0.26648`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftLeg_RX_n35_front.jpg) | ![](shots/LeftLeg_RX_n35_side.jpg) | ![](shots/LeftLeg_RX_n35_top.jpg) |

### RY +35°

1. 【语义确认】次要
2. 【定量】端点主位移：向前(+Z)（|Δ|=0.003）；次要耦合：向−X(约角色右)（|Δ|=0.002）；mag=0.004

定量 (dx,dy,dz)=(`-0.00154`, `-0.00023`, `0.00334`)，mag=`0.00368`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftLeg_RY_p35_front.jpg) | ![](shots/LeftLeg_RY_p35_side.jpg) | ![](shots/LeftLeg_RY_p35_top.jpg) |

### RY −35°

1. 【语义确认】避免大扭转
2. 【定量】端点主位移：向后(−Z)（|Δ|=0.004）；耦合弱；mag=0.004；测点 `LeftFoot`

定量 (dx,dy,dz)=(`0.00062`, `0.00025`, `-0.00362`)，mag=`0.00368`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftLeg_RY_n35_front.jpg) | ![](shots/LeftLeg_RY_n35_side.jpg) | ![](shots/LeftLeg_RY_n35_top.jpg) |

### RZ +35°

1. 【语义确认】侧偏/次要
2. 【定量】端点主位移：向+X(约角色左)（|Δ|=0.114）；耦合弱；mag=0.116；测点 `LeftFoot`

定量 (dx,dy,dz)=(`0.11422`, `0.01854`, `0.0013`)，mag=`0.11572`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftLeg_RZ_p35_front.jpg) | ![](shots/LeftLeg_RZ_p35_side.jpg) | ![](shots/LeftLeg_RZ_p35_top.jpg) |

### RZ −35°

1. 【语义确认】走路可不驱动
2. 【定量】端点主位移：向−X(约角色右)（|Δ|=0.115）；耦合弱；mag=0.116；测点 `LeftFoot`

定量 (dx,dy,dz)=(`-0.11514`, `0.01158`, `0.00081`)，mag=`0.11572`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftLeg_RZ_n35_front.jpg) | ![](shots/LeftLeg_RZ_n35_side.jpg) | ![](shots/LeftLeg_RZ_n35_top.jpg) |

## `LeftShoulder`

测点：`LeftArm`　试验角：±35°

### RX +35°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.053）
2. 【详证】耦合弱；mag=0.053；测点 `LeftArm`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00838`, `-0.05268`, `0.00178`)，mag=`0.05337`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftShoulder_RX_p35_front.jpg) | ![](shots/LeftShoulder_RX_p35_side.jpg) | ![](shots/LeftShoulder_RX_p35_top.jpg) |

### RX −35°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.030）
2. 【详证】次要耦合：向−X(约角色右)（|Δ|=0.020）；mag=0.036；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.01971`, `0.0296`, `-0.00419`)，mag=`0.03581`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftShoulder_RX_n35_front.jpg) | ![](shots/LeftShoulder_RX_n35_side.jpg) | ![](shots/LeftShoulder_RX_n35_top.jpg) |

### RY +35°

1. 【主结果】+RY → 端点主位移：向前(+Z)（|Δ|=0.015）
2. 【详证】次要耦合：向下（|Δ|=0.005）；mag=0.016；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00296`, `-0.00495`, `0.01518`)，mag=`0.01624`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftShoulder_RY_p35_front.jpg) | ![](shots/LeftShoulder_RY_p35_side.jpg) | ![](shots/LeftShoulder_RY_p35_top.jpg) |

### RY −35°

1. 【主结果】−RY → 端点主位移：向后(−Z)（|Δ|=0.016）
2. 【详证】耦合弱；mag=0.016；测点 `LeftArm`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00345`, `-0.00204`, `-0.01573`)，mag=`0.01624`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftShoulder_RY_n35_front.jpg) | ![](shots/LeftShoulder_RY_n35_side.jpg) | ![](shots/LeftShoulder_RY_n35_top.jpg) |

### RZ +35°

1. 【主结果】+RZ → 端点主位移：向前(+Z)（|Δ|=0.044）
2. 【详证】次要耦合：向−X(约角色右)（|Δ|=0.024）；mag=0.050；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.02416`, `-0.00076`, `0.04352`)，mag=`0.04978`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftShoulder_RZ_p35_front.jpg) | ![](shots/LeftShoulder_RZ_p35_side.jpg) | ![](shots/LeftShoulder_RZ_p35_top.jpg) |

### RZ −35°

1. 【主结果】−RZ → 端点主位移：向后(−Z)（|Δ|=0.050）
2. 【详证】耦合弱；mag=0.050；测点 `LeftArm`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.0008`, `-0.00058`, `-0.04977`)，mag=`0.04978`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftShoulder_RZ_n35_front.jpg) | ![](shots/LeftShoulder_RZ_n35_side.jpg) | ![](shots/LeftShoulder_RZ_n35_top.jpg) |

## `LeftToeBase`

测点：`LeftToe_End`　试验角：±35°

### RX +35°

1. 【主结果】+RX → 端点主位移：向上（|Δ|=0.037）
2. 【详证】耦合弱；mag=0.037；测点 `LeftToe_End`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00029`, `0.03671`, `-0.00348`)，mag=`0.03688`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftToeBase_RX_p35_front.jpg) | ![](shots/LeftToeBase_RX_p35_side.jpg) | ![](shots/LeftToeBase_RX_p35_top.jpg) |

### RX −35°

1. 【主结果】−RX → 端点主位移：向下（|Δ|=0.059）
2. 【详证】次要耦合：向后(−Z)（|Δ|=0.024）；mag=0.064；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00212`, `-0.05918`, `-0.0239`)，mag=`0.06386`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftToeBase_RX_n35_front.jpg) | ![](shots/LeftToeBase_RX_n35_side.jpg) | ![](shots/LeftToeBase_RX_n35_top.jpg) |

### RY +35°

1. 【主结果】+RY → 端点主位移：向+X(约角色左)（|Δ|=0.005）
2. 【详证】耦合弱；mag=0.005；测点 `LeftToe_End`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00543`, `0.00048`, `-0.00058`)，mag=`0.00549`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftToeBase_RY_p35_front.jpg) | ![](shots/LeftToeBase_RY_p35_side.jpg) | ![](shots/LeftToeBase_RY_p35_top.jpg) |

### RY −35°

1. 【主结果】−RY → 端点主位移：向−X(约角色右)（|Δ|=0.005）
2. 【详证】耦合弱；mag=0.005；测点 `LeftToe_End`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00546`, `0.00046`, `0.00038`)，mag=`0.00549`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftToeBase_RY_n35_front.jpg) | ![](shots/LeftToeBase_RY_n35_side.jpg) | ![](shots/LeftToeBase_RY_n35_top.jpg) |

### RZ +35°

1. 【主结果】+RZ → 端点主位移：向+X(约角色左)（|Δ|=0.017）
2. 【详证】耦合弱；mag=0.018；测点 `LeftToe_End`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.01741`, `-0.00035`, `-0.00305`)，mag=`0.01768`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftToeBase_RZ_p35_front.jpg) | ![](shots/LeftToeBase_RZ_p35_side.jpg) | ![](shots/LeftToeBase_RZ_p35_top.jpg) |

### RZ −35°

1. 【主结果】−RZ → 端点主位移：向−X(约角色右)（|Δ|=0.018）
2. 【详证】耦合弱；mag=0.018；测点 `LeftToe_End`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.01767`, `-0.00033`, `0.00005`)，mag=`0.01768`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftToeBase_RZ_n35_front.jpg) | ![](shots/LeftToeBase_RZ_n35_side.jpg) | ![](shots/LeftToeBase_RZ_n35_top.jpg) |

## `LeftUpLeg`

测点：`LeftLeg`　试验角：±35°

### RX +35°

1. 【语义确认】+RX：向前迈
2. 【定量】端点主位移：向前(+Z)（|Δ|=0.251）；次要耦合：向上（|Δ|=0.080）；mag=0.263

定量 (dx,dy,dz)=(`-0.00418`, `0.07979`, `0.251`)，mag=`0.26341`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftUpLeg_RX_p35_front.jpg) | ![](shots/LeftUpLeg_RX_p35_side.jpg) | ![](shots/LeftUpLeg_RX_p35_top.jpg) |

### RX −35°

1. 【语义确认】−RX：向后（后摆宜小）
2. 【定量】端点主位移：向后(−Z)（|Δ|=0.219）；次要耦合：向上（|Δ|=0.058）；mag=0.227

定量 (dx,dy,dz)=(`-0.00304`, `0.058`, `-0.21915`)，mag=`0.22672`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftUpLeg_RX_n35_front.jpg) | ![](shots/LeftUpLeg_RX_n35_side.jpg) | ![](shots/LeftUpLeg_RX_n35_top.jpg) |

### RY +35°

1. 【语义确认】扭转，位移小
2. 【定量】端点主位移：向−X(约角色右)（|Δ|=0.003）；次要耦合：向后(−Z)（|Δ|=0.001）；mag=0.003

定量 (dx,dy,dz)=(`-0.00271`, `-0.00013`, `-0.00146`)，mag=`0.00308`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftUpLeg_RY_p35_front.jpg) | ![](shots/LeftUpLeg_RY_p35_side.jpg) | ![](shots/LeftUpLeg_RY_p35_top.jpg) |

### RY −35°

1. 【语义确认】大步态慎用
2. 【定量】端点主位移：向+X(约角色左)（|Δ|=0.003）；耦合弱；mag=0.003；测点 `LeftLeg`

定量 (dx,dy,dz)=(`0.00305`, `0.00016`, `-0.00036`)，mag=`0.00308`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftUpLeg_RY_n35_front.jpg) | ![](shots/LeftUpLeg_RY_n35_side.jpg) | ![](shots/LeftUpLeg_RY_n35_top.jpg) |

### RZ +35°

1. 【语义确认】外展/内收倾向
2. 【定量】端点主位移：向+X(约角色左)（|Δ|=0.247）；次要耦合：向上（|Δ|=0.092）；mag=0.263

定量 (dx,dy,dz)=(`0.24691`, `0.0917`, `0.00069`)，mag=`0.26339`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftUpLeg_RZ_p35_front.jpg) | ![](shots/LeftUpLeg_RZ_p35_side.jpg) | ![](shots/LeftUpLeg_RZ_p35_top.jpg) |

### RZ −35°

1. 【语义确认】勿与迈步 RX 混淆
2. 【定量】端点主位移：向−X(约角色右)（|Δ|=0.255）；次要耦合：向上（|Δ|=0.067）；mag=0.263

定量 (dx,dy,dz)=(`-0.25486`, `0.0665`, `0.0007`)，mag=`0.26339`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftUpLeg_RZ_n35_front.jpg) | ![](shots/LeftUpLeg_RZ_n35_side.jpg) | ![](shots/LeftUpLeg_RZ_n35_top.jpg) |

## `Neck`

测点：`Neck1`　试验角：±35°

### RX +35°

1. 【主结果】+RX → 端点主位移：向前(+Z)（|Δ|=0.014）
2. 【详证】次要耦合：向下（|Δ|=0.014）；mag=0.020；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `-0.01364`, `0.01409`)，mag=`0.01961`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Neck_RX_p35_front.jpg) | ![](shots/Neck_RX_p35_side.jpg) | ![](shots/Neck_RX_p35_top.jpg) |

### RX −35°

1. 【主结果】−RX → 端点主位移：向后(−Z)（|Δ|=0.019）
2. 【详证】耦合弱；mag=0.020；测点 `Neck1`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0.00309`, `-0.01936`)，mag=`0.01961`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Neck_RX_n35_front.jpg) | ![](shots/Neck_RX_n35_side.jpg) | ![](shots/Neck_RX_n35_top.jpg) |

### RY +35°

1. 【主结果】+RY → 端点主位移：向+X(约角色左)（|Δ|=0.010）
2. 【详证】次要耦合：向后(−Z)（|Δ|=0.003）；mag=0.011；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.01034`, `-0.0004`, `-0.00324`)，mag=`0.01084`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Neck_RY_p35_front.jpg) | ![](shots/Neck_RY_p35_side.jpg) | ![](shots/Neck_RY_p35_top.jpg) |

### RY −35°

1. 【主结果】−RY → 端点主位移：向−X(约角色右)（|Δ|=0.010）
2. 【详证】次要耦合：向后(−Z)（|Δ|=0.003）；mag=0.011；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.01034`, `-0.0004`, `-0.00324`)，mag=`0.01084`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Neck_RY_n35_front.jpg) | ![](shots/Neck_RY_n35_side.jpg) | ![](shots/Neck_RY_n35_top.jpg) |

### RZ +35°

1. 【主结果】+RZ → 端点主位移：向−X(约角色右)（|Δ|=0.014）
2. 【详证】次要耦合：向下（|Δ|=0.004）；mag=0.014；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.01358`, `-0.00361`, `0.00044`)，mag=`0.01406`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Neck_RZ_p35_front.jpg) | ![](shots/Neck_RZ_p35_side.jpg) | ![](shots/Neck_RZ_p35_top.jpg) |

### RZ −35°

1. 【主结果】−RZ → 端点主位移：向+X(约角色左)（|Δ|=0.014）
2. 【详证】次要耦合：向下（|Δ|=0.004）；mag=0.014；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.01358`, `-0.00361`, `0.00044`)，mag=`0.01406`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Neck_RZ_n35_front.jpg) | ![](shots/Neck_RZ_n35_side.jpg) | ![](shots/Neck_RZ_n35_top.jpg) |

## `Neck1`

测点：`Neck2`　试验角：±35°

### RX +35°

1. 【主结果】+RX → 端点主位移：向前(+Z)（|Δ|=0.014）
2. 【详证】次要耦合：向下（|Δ|=0.010）；mag=0.017；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `-0.00967`, `0.01355`)，mag=`0.01665`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Neck1_RX_p35_front.jpg) | ![](shots/Neck1_RX_p35_side.jpg) | ![](shots/Neck1_RX_p35_top.jpg) |

### RX −35°

1. 【主结果】−RX → 端点主位移：向后(−Z)（|Δ|=0.017）
2. 【详证】耦合弱；mag=0.017；测点 `Neck2`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0.0016`, `-0.01657`)，mag=`0.01665`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Neck1_RX_n35_front.jpg) | ![](shots/Neck1_RX_n35_side.jpg) | ![](shots/Neck1_RX_n35_top.jpg) |

### RY +35°

1. 【主结果】+RY → 端点主位移：向+X(约角色左)（|Δ|=0.006）
2. 【详证】次要耦合：向后(−Z)（|Δ|=0.002）；mag=0.007；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00647`, `0`, `-0.00204`)，mag=`0.00678`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Neck1_RY_p35_front.jpg) | ![](shots/Neck1_RY_p35_side.jpg) | ![](shots/Neck1_RY_p35_top.jpg) |

### RY −35°

1. 【主结果】−RY → 端点主位移：向−X(约角色右)（|Δ|=0.006）
2. 【详证】次要耦合：向后(−Z)（|Δ|=0.002）；mag=0.007；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00647`, `0`, `-0.00204`)，mag=`0.00678`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Neck1_RY_n35_front.jpg) | ![](shots/Neck1_RY_n35_side.jpg) | ![](shots/Neck1_RY_n35_top.jpg) |

### RZ +35°

1. 【主结果】+RZ → 端点主位移：向−X(约角色右)（|Δ|=0.013）
2. 【详证】耦合弱；mag=0.013；测点 `Neck2`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.01273`, `-0.00282`, `0`)，mag=`0.01304`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Neck1_RZ_p35_front.jpg) | ![](shots/Neck1_RZ_p35_side.jpg) | ![](shots/Neck1_RZ_p35_top.jpg) |

### RZ −35°

1. 【主结果】−RZ → 端点主位移：向+X(约角色左)（|Δ|=0.013）
2. 【详证】耦合弱；mag=0.013；测点 `Neck2`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.01273`, `-0.00282`, `0`)，mag=`0.01304`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Neck1_RZ_n35_front.jpg) | ![](shots/Neck1_RZ_n35_side.jpg) | ![](shots/Neck1_RZ_n35_top.jpg) |

## `Neck2`

测点：`Head`　试验角：±35°

### RX +35°

1. 【主结果】+RX → 端点主位移：向前(+Z)（|Δ|=0.016）
2. 【详证】次要耦合：向下（|Δ|=0.005）；mag=0.017；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `-0.00519`, `0.01614`)，mag=`0.01696`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Neck2_RX_p35_front.jpg) | ![](shots/Neck2_RX_p35_side.jpg) | ![](shots/Neck2_RX_p35_top.jpg) |

### RX −35°

1. 【主结果】−RX → 端点主位移：向后(−Z)（|Δ|=0.017）
2. 【详证】耦合弱；mag=0.017；测点 `Head`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `-0.00212`, `-0.01683`)，mag=`0.01696`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Neck2_RX_n35_front.jpg) | ![](shots/Neck2_RX_n35_side.jpg) | ![](shots/Neck2_RX_n35_top.jpg) |

### RY +35°

1. 【主结果】+RY → 端点主位移：向+X(约角色左)（|Δ|=0.002）
2. 【详证】次要耦合：向后(−Z)（|Δ|=0.001）；mag=0.002；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00209`, `0`, `-0.00066`)，mag=`0.00219`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Neck2_RY_p35_front.jpg) | ![](shots/Neck2_RY_p35_side.jpg) | ![](shots/Neck2_RY_p35_top.jpg) |

### RY −35°

1. 【主结果】−RY → 端点主位移：向−X(约角色右)（|Δ|=0.002）
2. 【详证】次要耦合：向后(−Z)（|Δ|=0.001）；mag=0.002；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00209`, `0`, `-0.00066`)，mag=`0.00219`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Neck2_RY_n35_front.jpg) | ![](shots/Neck2_RY_n35_side.jpg) | ![](shots/Neck2_RY_n35_top.jpg) |

### RZ +35°

1. 【主结果】+RZ → 端点主位移：向−X(约角色右)（|Δ|=0.013）
2. 【详证】耦合弱；mag=0.014；测点 `Head`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.01334`, `-0.00235`, `0`)，mag=`0.01355`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Neck2_RZ_p35_front.jpg) | ![](shots/Neck2_RZ_p35_side.jpg) | ![](shots/Neck2_RZ_p35_top.jpg) |

### RZ −35°

1. 【主结果】−RZ → 端点主位移：向+X(约角色左)（|Δ|=0.013）
2. 【详证】耦合弱；mag=0.014；测点 `Head`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.01334`, `-0.00235`, `0`)，mag=`0.01355`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Neck2_RZ_n35_front.jpg) | ![](shots/Neck2_RZ_n35_side.jpg) | ![](shots/Neck2_RZ_n35_top.jpg) |

## `RightArm`

测点：`RightForeArm`　试验角：±35°

### RX +35°

1. 【语义确认】+RX：自 T 下垂（与左同号）
2. 【定量】端点主位移：向下（|Δ|=0.156）；次要耦合：向+X(约角色左)（|Δ|=0.060）；mag=0.167

定量 (dx,dy,dz)=(`0.05991`, `-0.15623`, `0`)，mag=`0.16732`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightArm_RX_p35_front.jpg) | ![](shots/RightArm_RX_p35_side.jpg) | ![](shots/RightArm_RX_p35_top.jpg) |

### RX −35°

1. 【语义确认】−RX：上抬
2. 【定量】端点主位移：向上（|Δ|=0.162）；耦合弱；mag=0.167；测点 `RightForeArm`

定量 (dx,dy,dz)=(`0.04053`, `0.16234`, `0`)，mag=`0.16732`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightArm_RX_n35_front.jpg) | ![](shots/RightArm_RX_n35_side.jpg) | ![](shots/RightArm_RX_n35_top.jpg) |

### RY +35°

1. 【语义确认】垂臂后贴身微调（防穿模）
2. 【定量】端点主位移：向上（|Δ|=0.004）；耦合弱；mag=0.004；测点 `RightForeArm`

定量 (dx,dy,dz)=(`-0.0002`, `0.00387`, `0.00025`)，mag=`0.00388`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightArm_RY_p35_front.jpg) | ![](shots/RightArm_RY_p35_side.jpg) | ![](shots/RightArm_RY_p35_top.jpg) |

### RY −35°

1. 【语义确认】左右 RY 常镜像
2. 【定量】端点主位移：向下（|Δ|=0.003）；次要耦合：向后(−Z)（|Δ|=0.002）；mag=0.004

定量 (dx,dy,dz)=(`0.00016`, `-0.00302`, `-0.00243`)，mag=`0.00388`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightArm_RY_n35_front.jpg) | ![](shots/RightArm_RY_n35_side.jpg) | ![](shots/RightArm_RY_n35_top.jpg) |

### RZ +35°

1. 【语义确认】垂臂后 −RZ 向前（镜像）
2. 【定量】端点主位移：向后(−Z)（|Δ|=0.161）；次要耦合：向+X(约角色左)（|Δ|=0.047）；mag=0.167

定量 (dx,dy,dz)=(`0.0468`, `0.00245`, `-0.16066`)，mag=`0.16736`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightArm_RZ_p35_front.jpg) | ![](shots/RightArm_RZ_p35_side.jpg) | ![](shots/RightArm_RZ_p35_top.jpg) |

### RZ −35°

1. 【语义确认】垂臂后 +RZ 向后
2. 【定量】端点主位移：向前(+Z)（|Δ|=0.158）；次要耦合：向+X(约角色左)（|Δ|=0.054）；mag=0.167

定量 (dx,dy,dz)=(`0.05369`, `0.00281`, `0.15849`)，mag=`0.16736`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightArm_RZ_n35_front.jpg) | ![](shots/RightArm_RZ_n35_side.jpg) | ![](shots/RightArm_RZ_n35_top.jpg) |

## `RightFoot`

测点：`RightToeBase`　试验角：±35°

### RX +35°

1. 【主结果】+RX → 端点主位移：向上（|Δ|=0.065）
2. 【详证】次要耦合：向前(+Z)（|Δ|=0.020）；mag=0.068；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00178`, `0.06476`, `0.0203`)，mag=`0.06789`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightFoot_RX_p35_front.jpg) | ![](shots/RightFoot_RX_p35_side.jpg) | ![](shots/RightFoot_RX_p35_top.jpg) |

### RX −35°

1. 【主结果】−RX → 端点主位移：向后(−Z)（|Δ|=0.054）
2. 【详证】次要耦合：向下（|Δ|=0.041）；mag=0.068；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00469`, `-0.04136`, `-0.05363`)，mag=`0.06789`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightFoot_RX_n35_front.jpg) | ![](shots/RightFoot_RX_n35_side.jpg) | ![](shots/RightFoot_RX_n35_top.jpg) |

### RY +35°

1. 【主结果】+RY → 端点主位移：向+X(约角色左)（|Δ|=0.014）
2. 【详证】次要耦合：向上（|Δ|=0.004）；mag=0.015；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.01435`, `0.00398`, `0.00248`)，mag=`0.0151`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightFoot_RY_p35_front.jpg) | ![](shots/RightFoot_RY_p35_side.jpg) | ![](shots/RightFoot_RY_p35_top.jpg) |

### RY −35°

1. 【主结果】−RY → 端点主位移：向−X(约角色右)（|Δ|=0.015）
2. 【详证】耦合弱；mag=0.015；测点 `RightToeBase`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.01492`, `0.00226`, `-0.00061`)，mag=`0.0151`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightFoot_RY_n35_front.jpg) | ![](shots/RightFoot_RY_n35_side.jpg) | ![](shots/RightFoot_RY_n35_top.jpg) |

### RZ +35°

1. 【主结果】+RZ → 端点主位移：向+X(约角色左)（|Δ|=0.054）
2. 【详证】耦合弱；mag=0.056；测点 `RightToeBase`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.05449`, `0.00452`, `-0.01007`)，mag=`0.0556`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightFoot_RZ_p35_front.jpg) | ![](shots/RightFoot_RZ_p35_side.jpg) | ![](shots/RightFoot_RZ_p35_top.jpg) |

### RZ −35°

1. 【主结果】−RZ → 端点主位移：向−X(约角色右)（|Δ|=0.053）
2. 【详证】次要耦合：向后(−Z)（|Δ|=0.017）；mag=0.056；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.05266`, `0.00389`, `-0.01739`)，mag=`0.0556`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightFoot_RZ_n35_front.jpg) | ![](shots/RightFoot_RZ_n35_side.jpg) | ![](shots/RightFoot_RZ_n35_top.jpg) |

## `RightForeArm`

测点：`RightForeArm1`　试验角：±35°

### RX +35°

1. 【语义确认】+RX：屈肘（与左同号）
2. 【定量】端点主位移：向下（|Δ|=0.077）；耦合弱；mag=0.079；测点 `RightForeArm1`

定量 (dx,dy,dz)=(`0.0186`, `-0.07673`, `-0.00569`)，mag=`0.07916`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightForeArm_RX_p35_front.jpg) | ![](shots/RightForeArm_RX_p35_side.jpg) | ![](shots/RightForeArm_RX_p35_top.jpg) |

### RX −35°

1. 【语义确认】RY/RZ 微调
2. 【定量】端点主位移：向上（|Δ|=0.023）；耦合弱；mag=0.023；测点 `RightForeArm1`

定量 (dx,dy,dz)=(`0.00316`, `0.0227`, `-0.00097`)，mag=`0.02294`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightForeArm_RX_n35_front.jpg) | ![](shots/RightForeArm_RX_n35_side.jpg) | ![](shots/RightForeArm_RX_n35_top.jpg) |

### RY +35°

1. 【语义确认】次要轴
2. 【定量】端点主位移：向下（|Δ|=0.000）；次要耦合：向后(−Z)（|Δ|=0.000）；mag=0.000

定量 (dx,dy,dz)=(`-0.00006`, `-0.00028`, `-0.00016`)，mag=`0.00033`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightForeArm_RY_p35_front.jpg) | ![](shots/RightForeArm_RY_p35_side.jpg) | ![](shots/RightForeArm_RY_p35_top.jpg) |

### RY −35°

1. 【语义确认】可镜像微调
2. 【定量】端点主位移：向前(+Z)（|Δ|=0.000）；次要耦合：向上（|Δ|=0.000）；mag=0.000

定量 (dx,dy,dz)=(`0.00009`, `0.0002`, `0.00024`)，mag=`0.00033`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightForeArm_RY_n35_front.jpg) | ![](shots/RightForeArm_RY_n35_side.jpg) | ![](shots/RightForeArm_RY_n35_top.jpg) |

### RZ +35°

1. 【语义确认】次要轴
2. 【定量】端点主位移：向后(−Z)（|Δ|=0.045）；耦合弱；mag=0.046；测点 `RightForeArm1`

定量 (dx,dy,dz)=(`-0.00534`, `-0.00043`, `-0.0454`)，mag=`0.04571`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightForeArm_RZ_p35_front.jpg) | ![](shots/RightForeArm_RZ_p35_side.jpg) | ![](shots/RightForeArm_RZ_p35_top.jpg) |

### RZ −35°

1. 【语义确认】可贴身站姿叠加
2. 【定量】端点主位移：向前(+Z)（|Δ|=0.041）；次要耦合：向+X(约角色左)（|Δ|=0.021）；mag=0.046

定量 (dx,dy,dz)=(`0.02052`, `-0.0004`, `0.04084`)，mag=`0.04571`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightForeArm_RZ_n35_front.jpg) | ![](shots/RightForeArm_RZ_n35_side.jpg) | ![](shots/RightForeArm_RZ_n35_top.jpg) |

## `RightForeArm1`

测点：`RightForeArm2`　试验角：±35°

### RX +35°

1. 【主结果】+RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightForeArm1_RX_p35_front.jpg) | ![](shots/RightForeArm1_RX_p35_side.jpg) | ![](shots/RightForeArm1_RX_p35_top.jpg) |

### RX −35°

1. 【主结果】−RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightForeArm1_RX_n35_front.jpg) | ![](shots/RightForeArm1_RX_n35_side.jpg) | ![](shots/RightForeArm1_RX_n35_top.jpg) |

### RY +35°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightForeArm1_RY_p35_front.jpg) | ![](shots/RightForeArm1_RY_p35_side.jpg) | ![](shots/RightForeArm1_RY_p35_top.jpg) |

### RY −35°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightForeArm1_RY_n35_front.jpg) | ![](shots/RightForeArm1_RY_n35_side.jpg) | ![](shots/RightForeArm1_RY_n35_top.jpg) |

### RZ +35°

1. 【主结果】+RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightForeArm1_RZ_p35_front.jpg) | ![](shots/RightForeArm1_RZ_p35_side.jpg) | ![](shots/RightForeArm1_RZ_p35_top.jpg) |

### RZ −35°

1. 【主结果】−RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightForeArm1_RZ_n35_front.jpg) | ![](shots/RightForeArm1_RZ_n35_side.jpg) | ![](shots/RightForeArm1_RZ_n35_top.jpg) |

## `RightForeArm2`

测点：`RightForeArm2`　试验角：±35°

### RX +35°

1. 【主结果】+RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightForeArm2_RX_p35_front.jpg) | ![](shots/RightForeArm2_RX_p35_side.jpg) | ![](shots/RightForeArm2_RX_p35_top.jpg) |

### RX −35°

1. 【主结果】−RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightForeArm2_RX_n35_front.jpg) | ![](shots/RightForeArm2_RX_n35_side.jpg) | ![](shots/RightForeArm2_RX_n35_top.jpg) |

### RY +35°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightForeArm2_RY_p35_front.jpg) | ![](shots/RightForeArm2_RY_p35_side.jpg) | ![](shots/RightForeArm2_RY_p35_top.jpg) |

### RY −35°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightForeArm2_RY_n35_front.jpg) | ![](shots/RightForeArm2_RY_n35_side.jpg) | ![](shots/RightForeArm2_RY_n35_top.jpg) |

### RZ +35°

1. 【主结果】+RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightForeArm2_RZ_p35_front.jpg) | ![](shots/RightForeArm2_RZ_p35_side.jpg) | ![](shots/RightForeArm2_RZ_p35_top.jpg) |

### RZ −35°

1. 【主结果】−RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightForeArm2_RZ_n35_front.jpg) | ![](shots/RightForeArm2_RZ_n35_side.jpg) | ![](shots/RightForeArm2_RZ_n35_top.jpg) |

## `RightHand`

测点：`RightHandThumb1`　试验角：±35°

### RX +35°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.019）
2. 【详证】次要耦合：向+X(约角色左)（|Δ|=0.007）；mag=0.021；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00691`, `-0.01943`, `-0.0023`)，mag=`0.02075`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHand_RX_p35_front.jpg) | ![](shots/RightHand_RX_p35_side.jpg) | ![](shots/RightHand_RX_p35_top.jpg) |

### RX −35°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.020）
2. 【详证】耦合弱；mag=0.021；测点 `RightHandThumb1`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00491`, `0.02009`, `-0.00166`)，mag=`0.02075`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHand_RX_n35_front.jpg) | ![](shots/RightHand_RX_n35_side.jpg) | ![](shots/RightHand_RX_n35_top.jpg) |

### RY +35°

1. 【主结果】+RY → 端点主位移：向上（|Δ|=0.009）
2. 【详证】次要耦合：向+X(约角色左)（|Δ|=0.004）；mag=0.010；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00357`, `0.00934`, `0.00272`)，mag=`0.01036`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHand_RY_p35_front.jpg) | ![](shots/RightHand_RY_p35_side.jpg) | ![](shots/RightHand_RY_p35_top.jpg) |

### RY −35°

1. 【主结果】−RY → 端点主位移：向后(−Z)（|Δ|=0.008）
2. 【详证】次要耦合：向下（|Δ|=0.006）；mag=0.010；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00416`, `-0.00559`, `-0.00767`)，mag=`0.01036`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHand_RY_n35_front.jpg) | ![](shots/RightHand_RY_n35_side.jpg) | ![](shots/RightHand_RY_n35_top.jpg) |

### RZ +35°

1. 【主结果】+RZ → 端点主位移：向后(−Z)（|Δ|=0.020）
2. 【详证】次要耦合：向−X(约角色右)（|Δ|=0.008）；mag=0.021；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00839`, `0.00045`, `-0.01959`)，mag=`0.02131`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHand_RZ_p35_front.jpg) | ![](shots/RightHand_RZ_p35_side.jpg) | ![](shots/RightHand_RZ_p35_top.jpg) |

### RZ −35°

1. 【主结果】−RZ → 端点主位移：向+X(约角色左)（|Δ|=0.018）
2. 【详证】次要耦合：向前(+Z)（|Δ|=0.011）；mag=0.021；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.0177`, `-0.00354`, `0.01133`)，mag=`0.02131`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHand_RZ_n35_front.jpg) | ![](shots/RightHand_RZ_n35_side.jpg) | ![](shots/RightHand_RZ_n35_top.jpg) |

## `RightLeg`

测点：`RightFoot`　试验角：±35°

### RX +35°

1. 【语义确认】屈膝优先 −RX
2. 【定量】端点主位移：向前(+Z)（|Δ|=0.039）；耦合弱；mag=0.039；测点 `RightFoot`

定量 (dx,dy,dz)=(`0`, `-0.00065`, `0.03865`)，mag=`0.03866`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightLeg_RX_p35_front.jpg) | ![](shots/RightLeg_RX_p35_side.jpg) | ![](shots/RightLeg_RX_p35_top.jpg) |

### RX −35°

1. 【语义确认】+RX 需结合限位解读
2. 【定量】端点主位移：向后(−Z)（|Δ|=0.249）；次要耦合：向上（|Δ|=0.095）；mag=0.266

定量 (dx,dy,dz)=(`0`, `0.09532`, `-0.24885`)，mag=`0.26648`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightLeg_RX_n35_front.jpg) | ![](shots/RightLeg_RX_n35_side.jpg) | ![](shots/RightLeg_RX_n35_top.jpg) |

### RY +35°

1. 【语义确认】次要
2. 【定量】端点主位移：向后(−Z)（|Δ|=0.004）；耦合弱；mag=0.004；测点 `RightFoot`

定量 (dx,dy,dz)=(`-0.00063`, `0.00025`, `-0.00362`)，mag=`0.00368`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightLeg_RY_p35_front.jpg) | ![](shots/RightLeg_RY_p35_side.jpg) | ![](shots/RightLeg_RY_p35_top.jpg) |

### RY −35°

1. 【语义确认】避免大扭转
2. 【定量】端点主位移：向前(+Z)（|Δ|=0.003）；次要耦合：向+X(约角色左)（|Δ|=0.002）；mag=0.004

定量 (dx,dy,dz)=(`0.00154`, `-0.00023`, `0.00334`)，mag=`0.00368`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightLeg_RY_n35_front.jpg) | ![](shots/RightLeg_RY_n35_side.jpg) | ![](shots/RightLeg_RY_n35_top.jpg) |

### RZ +35°

1. 【语义确认】侧偏/次要
2. 【定量】端点主位移：向+X(约角色左)（|Δ|=0.115）；耦合弱；mag=0.116；测点 `RightFoot`

定量 (dx,dy,dz)=(`0.11514`, `0.01158`, `0.00081`)，mag=`0.11572`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightLeg_RZ_p35_front.jpg) | ![](shots/RightLeg_RZ_p35_side.jpg) | ![](shots/RightLeg_RZ_p35_top.jpg) |

### RZ −35°

1. 【语义确认】走路可不驱动
2. 【定量】端点主位移：向−X(约角色右)（|Δ|=0.114）；耦合弱；mag=0.116；测点 `RightFoot`

定量 (dx,dy,dz)=(`-0.11422`, `0.01854`, `0.0013`)，mag=`0.11572`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightLeg_RZ_n35_front.jpg) | ![](shots/RightLeg_RZ_n35_side.jpg) | ![](shots/RightLeg_RZ_n35_top.jpg) |

## `RightShoulder`

测点：`RightArm`　试验角：±35°

### RX +35°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.053）
2. 【详证】耦合弱；mag=0.053；测点 `RightArm`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00838`, `-0.05268`, `0.00178`)，mag=`0.05337`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightShoulder_RX_p35_front.jpg) | ![](shots/RightShoulder_RX_p35_side.jpg) | ![](shots/RightShoulder_RX_p35_top.jpg) |

### RX −35°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.030）
2. 【详证】次要耦合：向+X(约角色左)（|Δ|=0.020）；mag=0.036；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.01971`, `0.0296`, `-0.00419`)，mag=`0.03581`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightShoulder_RX_n35_front.jpg) | ![](shots/RightShoulder_RX_n35_side.jpg) | ![](shots/RightShoulder_RX_n35_top.jpg) |

### RY +35°

1. 【主结果】+RY → 端点主位移：向后(−Z)（|Δ|=0.016）
2. 【详证】耦合弱；mag=0.016；测点 `RightArm`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00345`, `-0.00204`, `-0.01573`)，mag=`0.01624`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightShoulder_RY_p35_front.jpg) | ![](shots/RightShoulder_RY_p35_side.jpg) | ![](shots/RightShoulder_RY_p35_top.jpg) |

### RY −35°

1. 【主结果】−RY → 端点主位移：向前(+Z)（|Δ|=0.015）
2. 【详证】次要耦合：向下（|Δ|=0.005）；mag=0.016；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00296`, `-0.00495`, `0.01518`)，mag=`0.01624`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightShoulder_RY_n35_front.jpg) | ![](shots/RightShoulder_RY_n35_side.jpg) | ![](shots/RightShoulder_RY_n35_top.jpg) |

### RZ +35°

1. 【主结果】+RZ → 端点主位移：向后(−Z)（|Δ|=0.050）
2. 【详证】耦合弱；mag=0.050；测点 `RightArm`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.0008`, `-0.00058`, `-0.04977`)，mag=`0.04978`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightShoulder_RZ_p35_front.jpg) | ![](shots/RightShoulder_RZ_p35_side.jpg) | ![](shots/RightShoulder_RZ_p35_top.jpg) |

### RZ −35°

1. 【主结果】−RZ → 端点主位移：向前(+Z)（|Δ|=0.044）
2. 【详证】次要耦合：向+X(约角色左)（|Δ|=0.024）；mag=0.050；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.02416`, `-0.00076`, `0.04352`)，mag=`0.04978`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightShoulder_RZ_n35_front.jpg) | ![](shots/RightShoulder_RZ_n35_side.jpg) | ![](shots/RightShoulder_RZ_n35_top.jpg) |

## `RightToeBase`

测点：`RightToe_End`　试验角：±35°

### RX +35°

1. 【主结果】+RX → 端点主位移：向上（|Δ|=0.037）
2. 【详证】耦合弱；mag=0.037；测点 `RightToe_End`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.0003`, `0.03671`, `-0.00348`)，mag=`0.03688`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightToeBase_RX_p35_front.jpg) | ![](shots/RightToeBase_RX_p35_side.jpg) | ![](shots/RightToeBase_RX_p35_top.jpg) |

### RX −35°

1. 【主结果】−RX → 端点主位移：向下（|Δ|=0.059）
2. 【详证】次要耦合：向后(−Z)（|Δ|=0.024）；mag=0.064；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.0021`, `-0.05918`, `-0.0239`)，mag=`0.06386`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightToeBase_RX_n35_front.jpg) | ![](shots/RightToeBase_RX_n35_side.jpg) | ![](shots/RightToeBase_RX_n35_top.jpg) |

### RY +35°

1. 【主结果】+RY → 端点主位移：向+X(约角色左)（|Δ|=0.006）
2. 【详证】耦合弱；mag=0.006；测点 `RightToe_End`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00586`, `0.00049`, `0.00039`)，mag=`0.00589`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightToeBase_RY_p35_front.jpg) | ![](shots/RightToeBase_RY_p35_side.jpg) | ![](shots/RightToeBase_RY_p35_top.jpg) |

### RY −35°

1. 【主结果】−RY → 端点主位移：向−X(约角色右)（|Δ|=0.006）
2. 【详证】耦合弱；mag=0.006；测点 `RightToe_End`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00584`, `0.00051`, `-0.00064`)，mag=`0.00589`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightToeBase_RY_n35_front.jpg) | ![](shots/RightToeBase_RY_n35_side.jpg) | ![](shots/RightToeBase_RY_n35_top.jpg) |

### RZ +35°

1. 【主结果】+RZ → 端点主位移：向+X(约角色左)（|Δ|=0.018）
2. 【详证】耦合弱；mag=0.018；测点 `RightToe_End`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.01754`, `-0.00036`, `0.00006`)，mag=`0.01754`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightToeBase_RZ_p35_front.jpg) | ![](shots/RightToeBase_RZ_p35_side.jpg) | ![](shots/RightToeBase_RZ_p35_top.jpg) |

### RZ −35°

1. 【主结果】−RZ → 端点主位移：向−X(约角色右)（|Δ|=0.017）
2. 【详证】耦合弱；mag=0.018；测点 `RightToe_End`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.01728`, `-0.00038`, `-0.00302`)，mag=`0.01754`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightToeBase_RZ_n35_front.jpg) | ![](shots/RightToeBase_RZ_n35_side.jpg) | ![](shots/RightToeBase_RZ_n35_top.jpg) |

## `RightUpLeg`

测点：`RightLeg`　试验角：±35°

### RX +35°

1. 【语义确认】+RX：向前迈（与左同号）
2. 【定量】端点主位移：向前(+Z)（|Δ|=0.251）；次要耦合：向上（|Δ|=0.080）；mag=0.263

定量 (dx,dy,dz)=(`0.00418`, `0.07979`, `0.251`)，mag=`0.26341`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightUpLeg_RX_p35_front.jpg) | ![](shots/RightUpLeg_RX_p35_side.jpg) | ![](shots/RightUpLeg_RX_p35_top.jpg) |

### RX −35°

1. 【语义确认】−RX：向后
2. 【定量】端点主位移：向后(−Z)（|Δ|=0.219）；次要耦合：向上（|Δ|=0.058）；mag=0.227

定量 (dx,dy,dz)=(`0.00304`, `0.058`, `-0.21915`)，mag=`0.22672`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightUpLeg_RX_n35_front.jpg) | ![](shots/RightUpLeg_RX_n35_side.jpg) | ![](shots/RightUpLeg_RX_n35_top.jpg) |

### RY +35°

1. 【语义确认】扭转，位移小
2. 【定量】端点主位移：向−X(约角色右)（|Δ|=0.003）；耦合弱；mag=0.003；测点 `RightLeg`

定量 (dx,dy,dz)=(`-0.00305`, `0.00016`, `-0.00036`)，mag=`0.00308`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightUpLeg_RY_p35_front.jpg) | ![](shots/RightUpLeg_RY_p35_side.jpg) | ![](shots/RightUpLeg_RY_p35_top.jpg) |

### RY −35°

1. 【语义确认】大步态慎用
2. 【定量】端点主位移：向+X(约角色左)（|Δ|=0.003）；次要耦合：向后(−Z)（|Δ|=0.001）；mag=0.003

定量 (dx,dy,dz)=(`0.00271`, `-0.00013`, `-0.00146`)，mag=`0.00308`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightUpLeg_RY_n35_front.jpg) | ![](shots/RightUpLeg_RY_n35_side.jpg) | ![](shots/RightUpLeg_RY_n35_top.jpg) |

### RZ +35°

1. 【语义确认】外展/内收倾向
2. 【定量】端点主位移：向+X(约角色左)（|Δ|=0.255）；次要耦合：向上（|Δ|=0.067）；mag=0.263

定量 (dx,dy,dz)=(`0.25486`, `0.0665`, `0.0007`)，mag=`0.26339`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightUpLeg_RZ_p35_front.jpg) | ![](shots/RightUpLeg_RZ_p35_side.jpg) | ![](shots/RightUpLeg_RZ_p35_top.jpg) |

### RZ −35°

1. 【语义确认】与迈步 RX 区分
2. 【定量】端点主位移：向−X(约角色右)（|Δ|=0.247）；次要耦合：向上（|Δ|=0.092）；mag=0.263

定量 (dx,dy,dz)=(`-0.24691`, `0.0917`, `0.00069`)，mag=`0.26339`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightUpLeg_RZ_n35_front.jpg) | ![](shots/RightUpLeg_RZ_n35_side.jpg) | ![](shots/RightUpLeg_RZ_n35_top.jpg) |

## `Spine`

测点：`Spine1`　试验角：±35°

### RX +35°

1. 【主结果】+RX → 端点主位移：向前(+Z)（|Δ|=0.068）
2. 【详证】次要耦合：向下（|Δ|=0.036）；mag=0.077；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `-0.03613`, `0.06786`)，mag=`0.07688`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Spine_RX_p35_front.jpg) | ![](shots/Spine_RX_p35_side.jpg) | ![](shots/Spine_RX_p35_top.jpg) |

### RX −35°

1. 【主结果】−RX → 端点主位移：向后(−Z)（|Δ|=0.055）
2. 【详证】耦合弱；mag=0.055；测点 `Spine1`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `-0.0019`, `-0.05531`)，mag=`0.05534`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Spine_RX_n35_front.jpg) | ![](shots/Spine_RX_n35_side.jpg) | ![](shots/Spine_RX_n35_top.jpg) |

### RY +35°

1. 【主结果】+RY → 端点主位移：向+X(约角色左)（|Δ|=0.012）
2. 【详证】次要耦合：向后(−Z)（|Δ|=0.004）；mag=0.013；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.01214`, `0.00007`, `-0.00383`)，mag=`0.01273`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Spine_RY_p35_front.jpg) | ![](shots/Spine_RY_p35_side.jpg) | ![](shots/Spine_RY_p35_top.jpg) |

### RY −35°

1. 【主结果】−RY → 端点主位移：向−X(约角色右)（|Δ|=0.012）
2. 【详证】次要耦合：向后(−Z)（|Δ|=0.004）；mag=0.013；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.01214`, `0.00007`, `-0.00383`)，mag=`0.01273`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Spine_RY_n35_front.jpg) | ![](shots/Spine_RY_n35_side.jpg) | ![](shots/Spine_RY_n35_top.jpg) |

### RZ +35°

1. 【主结果】+RZ → 端点主位移：向−X(约角色右)（|Δ|=0.043）
2. 【详证】耦合弱；mag=0.044；测点 `Spine1`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.04312`, `-0.0076`, `-0.00013`)，mag=`0.04379`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Spine_RZ_p35_front.jpg) | ![](shots/Spine_RZ_p35_side.jpg) | ![](shots/Spine_RZ_p35_top.jpg) |

### RZ −35°

1. 【主结果】−RZ → 端点主位移：向+X(约角色左)（|Δ|=0.043）
2. 【详证】耦合弱；mag=0.044；测点 `Spine1`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.04312`, `-0.0076`, `-0.00013`)，mag=`0.04379`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Spine_RZ_n35_front.jpg) | ![](shots/Spine_RZ_n35_side.jpg) | ![](shots/Spine_RZ_n35_top.jpg) |

## `Spine1`

测点：`Spine2`　试验角：±35°

### RX +35°

1. 【主结果】+RX → 端点主位移：向前(+Z)（|Δ|=0.035）
2. 【详证】耦合弱；mag=0.035；测点 `Spine2`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `-0.00424`, `0.03477`)，mag=`0.03502`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Spine1_RX_p35_front.jpg) | ![](shots/Spine1_RX_p35_side.jpg) | ![](shots/Spine1_RX_p35_top.jpg) |

### RX −35°

1. 【主结果】−RX → 端点主位移：向后(−Z)（|Δ|=0.022）
2. 【详证】次要耦合：向下（|Δ|=0.007）；mag=0.024；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `-0.00728`, `-0.02234`)，mag=`0.0235`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Spine1_RX_n35_front.jpg) | ![](shots/Spine1_RX_n35_side.jpg) | ![](shots/Spine1_RX_n35_top.jpg) |

### RY +35°

1. 【主结果】+RY → 端点主位移：向+X(约角色左)（|Δ|=0.000）
2. 【详证】耦合弱；mag=0.000；测点 `Spine2`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00027`, `-0.00001`, `-0.00007`)，mag=`0.00028`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Spine1_RY_p35_front.jpg) | ![](shots/Spine1_RY_p35_side.jpg) | ![](shots/Spine1_RY_p35_top.jpg) |

### RY −35°

1. 【主结果】−RY → 端点主位移：向−X(约角色右)（|Δ|=0.000）
2. 【详证】耦合弱；mag=0.000；测点 `Spine2`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00027`, `-0.00001`, `-0.00007`)，mag=`0.00028`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Spine1_RY_n35_front.jpg) | ![](shots/Spine1_RY_n35_side.jpg) | ![](shots/Spine1_RY_n35_top.jpg) |

### RZ +35°

1. 【主结果】+RZ → 端点主位移：向−X(约角色右)（|Δ|=0.021）
2. 【详证】耦合弱；mag=0.021；测点 `Spine2`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.02091`, `-0.00327`, `0.00049`)，mag=`0.02117`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Spine1_RZ_p35_front.jpg) | ![](shots/Spine1_RZ_p35_side.jpg) | ![](shots/Spine1_RZ_p35_top.jpg) |

### RZ −35°

1. 【主结果】−RZ → 端点主位移：向+X(约角色左)（|Δ|=0.021）
2. 【详证】耦合弱；mag=0.021；测点 `Spine2`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.02091`, `-0.00327`, `0.00049`)，mag=`0.02117`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Spine1_RZ_n35_front.jpg) | ![](shots/Spine1_RZ_n35_side.jpg) | ![](shots/Spine1_RZ_n35_top.jpg) |

## `Spine2`

测点：`Neck`　试验角：±35°

### RX +35°

1. 【主结果】+RX → 端点主位移：向前(+Z)（|Δ|=0.107）
2. 【详证】耦合弱；mag=0.107；测点 `Neck`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0.00724`, `0.10681`)，mag=`0.10705`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Spine2_RX_p35_front.jpg) | ![](shots/Spine2_RX_p35_side.jpg) | ![](shots/Spine2_RX_p35_top.jpg) |

### RX −35°

1. 【主结果】−RX → 端点主位移：向后(−Z)（|Δ|=0.063）
2. 【详证】次要耦合：向下（|Δ|=0.035）；mag=0.072；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `-0.03469`, `-0.06289`)，mag=`0.07182`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Spine2_RX_n35_front.jpg) | ![](shots/Spine2_RX_n35_side.jpg) | ![](shots/Spine2_RX_n35_top.jpg) |

### RY +35°

1. 【主结果】+RY → 端点主位移：向−X(约角色右)（|Δ|=0.024）
2. 【详证】次要耦合：向前(+Z)（|Δ|=0.008）；mag=0.026；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.02442`, `0.00094`, `0.00764`)，mag=`0.0256`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Spine2_RY_p35_front.jpg) | ![](shots/Spine2_RY_p35_side.jpg) | ![](shots/Spine2_RY_p35_top.jpg) |

### RY −35°

1. 【主结果】−RY → 端点主位移：向+X(约角色左)（|Δ|=0.024）
2. 【详证】次要耦合：向前(+Z)（|Δ|=0.008）；mag=0.026；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.02442`, `0.00094`, `0.00764`)，mag=`0.0256`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Spine2_RY_n35_front.jpg) | ![](shots/Spine2_RY_n35_side.jpg) | ![](shots/Spine2_RY_n35_top.jpg) |

### RZ +35°

1. 【主结果】+RZ → 端点主位移：向−X(约角色右)（|Δ|=0.063）
2. 【详证】耦合弱；mag=0.063；测点 `Neck`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.06254`, `-0.00983`, `0.00121`)，mag=`0.06332`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Spine2_RZ_p35_front.jpg) | ![](shots/Spine2_RZ_p35_side.jpg) | ![](shots/Spine2_RZ_p35_top.jpg) |

### RZ −35°

1. 【主结果】−RZ → 端点主位移：向+X(约角色左)（|Δ|=0.063）
2. 【详证】耦合弱；mag=0.063；测点 `Neck`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.06254`, `-0.00983`, `0.00121`)，mag=`0.06332`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/Spine2_RZ_n35_front.jpg) | ![](shots/Spine2_RZ_n35_side.jpg) | ![](shots/Spine2_RZ_n35_top.jpg) |

## `LeftHandIndex1`

测点：`LeftHandIndex2`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.021）
2. 【详证】次要耦合：向−X(约角色右)（|Δ|=0.006）；mag=0.021；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00574`, `-0.02058`, `-0.00138`)，mag=`0.02141`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandIndex1_RX_p30_front.jpg) | ![](shots/LeftHandIndex1_RX_p30_side.jpg) | ![](shots/LeftHandIndex1_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.007）
2. 【详证】耦合弱；mag=0.007；测点 `LeftHandIndex2`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00048`, `0.00719`, `-0.00014`)，mag=`0.00721`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandIndex1_RX_n30_front.jpg) | ![](shots/LeftHandIndex1_RX_n30_side.jpg) | ![](shots/LeftHandIndex1_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 端点主位移：向下（|Δ|=0.000）
2. 【详证】次要耦合：向前(+Z)（|Δ|=0.000）；mag=0.000；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00001`, `-0.00012`, `0.00005`)，mag=`0.00013`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandIndex1_RY_p30_front.jpg) | ![](shots/LeftHandIndex1_RY_p30_side.jpg) | ![](shots/LeftHandIndex1_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 端点主位移：向后(−Z)（|Δ|=0.000）
2. 【详证】次要耦合：向上（|Δ|=0.000）；mag=0.000；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00002`, `0.00009`, `-0.00009`)，mag=`0.00013`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandIndex1_RY_n30_front.jpg) | ![](shots/LeftHandIndex1_RY_n30_side.jpg) | ![](shots/LeftHandIndex1_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 端点主位移：向前(+Z)（|Δ|=0.016）
2. 【详证】次要耦合：向−X(约角色右)（|Δ|=0.008）；mag=0.018；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00811`, `0.00013`, `0.01596`)，mag=`0.0179`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandIndex1_RZ_p30_front.jpg) | ![](shots/LeftHandIndex1_RZ_p30_side.jpg) | ![](shots/LeftHandIndex1_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 端点主位移：向后(−Z)（|Δ|=0.018）
2. 【详证】耦合弱；mag=0.018；测点 `LeftHandIndex2`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.0006`, `0.00004`, `-0.01789`)，mag=`0.0179`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandIndex1_RZ_n30_front.jpg) | ![](shots/LeftHandIndex1_RZ_n30_side.jpg) | ![](shots/LeftHandIndex1_RZ_n30_top.jpg) |

## `LeftHandIndex2`

测点：`LeftHandIndex3`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.011）
2. 【详证】次要耦合：向−X(约角色右)（|Δ|=0.006）；mag=0.012；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00643`, `-0.01056`, `-0.00113`)，mag=`0.01242`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandIndex2_RX_p30_front.jpg) | ![](shots/LeftHandIndex2_RX_p30_side.jpg) | ![](shots/LeftHandIndex2_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.004）
2. 【详证】耦合弱；mag=0.004；测点 `LeftHandIndex3`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00084`, `0.00409`, `0.00011`)，mag=`0.00418`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandIndex2_RX_n30_front.jpg) | ![](shots/LeftHandIndex2_RX_n30_side.jpg) | ![](shots/LeftHandIndex2_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00001`, `-0.00003`, `0.00002`)，mag=`0.00004`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandIndex2_RY_p30_front.jpg) | ![](shots/LeftHandIndex2_RY_p30_side.jpg) | ![](shots/LeftHandIndex2_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00001`, `0.00002`, `-0.00003`)，mag=`0.00004`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandIndex2_RY_n30_front.jpg) | ![](shots/LeftHandIndex2_RY_n30_side.jpg) | ![](shots/LeftHandIndex2_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 端点主位移：向前(+Z)（|Δ|=0.009）
2. 【详证】次要耦合：向−X(约角色右)（|Δ|=0.004）；mag=0.010；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00411`, `0.00079`, `0.0095`)，mag=`0.01038`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandIndex2_RZ_p30_front.jpg) | ![](shots/LeftHandIndex2_RZ_p30_side.jpg) | ![](shots/LeftHandIndex2_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 端点主位移：向后(−Z)（|Δ|=0.010）
2. 【详证】耦合弱；mag=0.010；测点 `LeftHandIndex3`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00011`, `0.00051`, `-0.01037`)，mag=`0.01038`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandIndex2_RZ_n30_front.jpg) | ![](shots/LeftHandIndex2_RZ_n30_side.jpg) | ![](shots/LeftHandIndex2_RZ_n30_top.jpg) |

## `LeftHandIndex3`

测点：`LeftHandIndex4`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.010）
2. 【详证】次要耦合：向−X(约角色右)（|Δ|=0.006）；mag=0.012；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.0064`, `-0.00965`, `-0.00113`)，mag=`0.01164`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandIndex3_RX_p30_front.jpg) | ![](shots/LeftHandIndex3_RX_p30_side.jpg) | ![](shots/LeftHandIndex3_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.004）
2. 【详证】耦合弱；mag=0.004；测点 `LeftHandIndex4`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00093`, `0.0038`, `0.00018`)，mag=`0.00392`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandIndex3_RX_n30_front.jpg) | ![](shots/LeftHandIndex3_RX_n30_side.jpg) | ![](shots/LeftHandIndex3_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 端点主位移：向下（|Δ|=0.000）
2. 【详证】次要耦合：向−X(约角色右)（|Δ|=0.000）；mag=0.000；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00006`, `-0.00016`, `0.00002`)，mag=`0.00017`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandIndex3_RY_p30_front.jpg) | ![](shots/LeftHandIndex3_RY_p30_side.jpg) | ![](shots/LeftHandIndex3_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 端点主位移：向上（|Δ|=0.000）
2. 【详证】次要耦合：向后(−Z)（|Δ|=0.000）；mag=0.000；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00006`, `0.00014`, `-0.00007`)，mag=`0.00017`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandIndex3_RY_n30_front.jpg) | ![](shots/LeftHandIndex3_RY_n30_side.jpg) | ![](shots/LeftHandIndex3_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 端点主位移：向前(+Z)（|Δ|=0.009）
2. 【详证】次要耦合：向−X(约角色右)（|Δ|=0.004）；mag=0.010；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00369`, `0.0007`, `0.00898`)，mag=`0.00973`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandIndex3_RZ_p30_front.jpg) | ![](shots/LeftHandIndex3_RZ_p30_side.jpg) | ![](shots/LeftHandIndex3_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 端点主位移：向后(−Z)（|Δ|=0.010）
2. 【详证】耦合弱；mag=0.010；测点 `LeftHandIndex4`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00022`, `0.00069`, `-0.00971`)，mag=`0.00973`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandIndex3_RZ_n30_front.jpg) | ![](shots/LeftHandIndex3_RZ_n30_side.jpg) | ![](shots/LeftHandIndex3_RZ_n30_top.jpg) |

## `LeftHandIndex4`

测点：`LeftHandIndex4`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandIndex4_RX_p30_front.jpg) | ![](shots/LeftHandIndex4_RX_p30_side.jpg) | ![](shots/LeftHandIndex4_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandIndex4_RX_n30_front.jpg) | ![](shots/LeftHandIndex4_RX_n30_side.jpg) | ![](shots/LeftHandIndex4_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandIndex4_RY_p30_front.jpg) | ![](shots/LeftHandIndex4_RY_p30_side.jpg) | ![](shots/LeftHandIndex4_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandIndex4_RY_n30_front.jpg) | ![](shots/LeftHandIndex4_RY_n30_side.jpg) | ![](shots/LeftHandIndex4_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandIndex4_RZ_p30_front.jpg) | ![](shots/LeftHandIndex4_RZ_p30_side.jpg) | ![](shots/LeftHandIndex4_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandIndex4_RZ_n30_front.jpg) | ![](shots/LeftHandIndex4_RZ_n30_side.jpg) | ![](shots/LeftHandIndex4_RZ_n30_top.jpg) |

## `LeftHandMiddle1`

测点：`LeftHandMiddle2`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.021）
2. 【详证】次要耦合：向−X(约角色右)（|Δ|=0.008）；mag=0.022；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00818`, `-0.02084`, `-0.00068`)，mag=`0.02239`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandMiddle1_RX_p30_front.jpg) | ![](shots/LeftHandMiddle1_RX_p30_side.jpg) | ![](shots/LeftHandMiddle1_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.008）
2. 【详证】耦合弱；mag=0.008；测点 `LeftHandMiddle2`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00019`, `0.00754`, `0.00014`)，mag=`0.00754`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandMiddle1_RX_n30_front.jpg) | ![](shots/LeftHandMiddle1_RX_n30_side.jpg) | ![](shots/LeftHandMiddle1_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `-0.00001`, `-0.00005`)，mag=`0.00005`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandMiddle1_RY_p30_front.jpg) | ![](shots/LeftHandMiddle1_RY_p30_side.jpg) | ![](shots/LeftHandMiddle1_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0.00003`, `0.00004`)，mag=`0.00005`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandMiddle1_RY_n30_front.jpg) | ![](shots/LeftHandMiddle1_RY_n30_side.jpg) | ![](shots/LeftHandMiddle1_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 端点主位移：向前(+Z)（|Δ|=0.018）
2. 【详证】次要耦合：向−X(约角色右)（|Δ|=0.005）；mag=0.019；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00475`, `0.00013`, `0.01811`)，mag=`0.01873`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandMiddle1_RZ_p30_front.jpg) | ![](shots/LeftHandMiddle1_RZ_p30_side.jpg) | ![](shots/LeftHandMiddle1_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 端点主位移：向后(−Z)（|Δ|=0.018）
2. 【详证】耦合弱；mag=0.019；测点 `LeftHandMiddle2`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.0033`, `0.00076`, `-0.01842`)，mag=`0.01873`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandMiddle1_RZ_n30_front.jpg) | ![](shots/LeftHandMiddle1_RZ_n30_side.jpg) | ![](shots/LeftHandMiddle1_RZ_n30_top.jpg) |

## `LeftHandMiddle2`

测点：`LeftHandMiddle3`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.015）
2. 【详证】次要耦合：向−X(约角色右)（|Δ|=0.007）；mag=0.016；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00658`, `-0.0146`, `-0.00038`)，mag=`0.01602`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandMiddle2_RX_p30_front.jpg) | ![](shots/LeftHandMiddle2_RX_p30_side.jpg) | ![](shots/LeftHandMiddle2_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.005）
2. 【详证】耦合弱；mag=0.005；测点 `LeftHandMiddle3`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00041`, `0.00538`, `0`)，mag=`0.00539`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandMiddle2_RX_n30_front.jpg) | ![](shots/LeftHandMiddle2_RX_n30_side.jpg) | ![](shots/LeftHandMiddle2_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00001`, `-0.00005`, `0.00002`)，mag=`0.00005`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandMiddle2_RY_p30_front.jpg) | ![](shots/LeftHandMiddle2_RY_p30_side.jpg) | ![](shots/LeftHandMiddle2_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00001`, `0.00004`, `-0.00004`)，mag=`0.00005`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandMiddle2_RY_n30_front.jpg) | ![](shots/LeftHandMiddle2_RY_n30_side.jpg) | ![](shots/LeftHandMiddle2_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 端点主位移：向前(+Z)（|Δ|=0.013）
2. 【详证】次要耦合：向−X(约角色右)（|Δ|=0.004）；mag=0.013；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00385`, `0.00057`, `0.01282`)，mag=`0.0134`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandMiddle2_RZ_p30_front.jpg) | ![](shots/LeftHandMiddle2_RZ_p30_side.jpg) | ![](shots/LeftHandMiddle2_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 端点主位移：向后(−Z)（|Δ|=0.013）
2. 【详证】耦合弱；mag=0.013；测点 `LeftHandMiddle3`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00186`, `0.00039`, `-0.01326`)，mag=`0.0134`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandMiddle2_RZ_n30_front.jpg) | ![](shots/LeftHandMiddle2_RZ_n30_side.jpg) | ![](shots/LeftHandMiddle2_RZ_n30_top.jpg) |

## `LeftHandMiddle3`

测点：`LeftHandMiddle4`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.009）
2. 【详证】次要耦合：向−X(约角色右)（|Δ|=0.005）；mag=0.010；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.0051`, `-0.00863`, `-0.0002`)，mag=`0.01003`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandMiddle3_RX_p30_front.jpg) | ![](shots/LeftHandMiddle3_RX_p30_side.jpg) | ![](shots/LeftHandMiddle3_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.003）
2. 【详证】耦合弱；mag=0.003；测点 `LeftHandMiddle4`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00062`, `0.00332`, `-0.00003`)，mag=`0.00338`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandMiddle3_RX_n30_front.jpg) | ![](shots/LeftHandMiddle3_RX_n30_side.jpg) | ![](shots/LeftHandMiddle3_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00001`, `0.00005`, `0.00001`)，mag=`0.00005`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandMiddle3_RY_p30_front.jpg) | ![](shots/LeftHandMiddle3_RY_p30_side.jpg) | ![](shots/LeftHandMiddle3_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00001`, `-0.00005`, `0.00001`)，mag=`0.00005`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandMiddle3_RY_n30_front.jpg) | ![](shots/LeftHandMiddle3_RY_n30_side.jpg) | ![](shots/LeftHandMiddle3_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 端点主位移：向前(+Z)（|Δ|=0.008）
2. 【详证】次要耦合：向−X(约角色右)（|Δ|=0.002）；mag=0.008；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00233`, `0.00066`, `0.00803`)，mag=`0.00838`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandMiddle3_RZ_p30_front.jpg) | ![](shots/LeftHandMiddle3_RZ_p30_side.jpg) | ![](shots/LeftHandMiddle3_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 端点主位移：向后(−Z)（|Δ|=0.008）
2. 【详证】耦合弱；mag=0.008；测点 `LeftHandMiddle4`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00116`, `0.00031`, `-0.0083`)，mag=`0.00838`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandMiddle3_RZ_n30_front.jpg) | ![](shots/LeftHandMiddle3_RZ_n30_side.jpg) | ![](shots/LeftHandMiddle3_RZ_n30_top.jpg) |

## `LeftHandMiddle4`

测点：`LeftHandMiddle4`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandMiddle4_RX_p30_front.jpg) | ![](shots/LeftHandMiddle4_RX_p30_side.jpg) | ![](shots/LeftHandMiddle4_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandMiddle4_RX_n30_front.jpg) | ![](shots/LeftHandMiddle4_RX_n30_side.jpg) | ![](shots/LeftHandMiddle4_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandMiddle4_RY_p30_front.jpg) | ![](shots/LeftHandMiddle4_RY_p30_side.jpg) | ![](shots/LeftHandMiddle4_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandMiddle4_RY_n30_front.jpg) | ![](shots/LeftHandMiddle4_RY_n30_side.jpg) | ![](shots/LeftHandMiddle4_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandMiddle4_RZ_p30_front.jpg) | ![](shots/LeftHandMiddle4_RZ_p30_side.jpg) | ![](shots/LeftHandMiddle4_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandMiddle4_RZ_n30_front.jpg) | ![](shots/LeftHandMiddle4_RZ_n30_side.jpg) | ![](shots/LeftHandMiddle4_RZ_n30_top.jpg) |

## `LeftHandPinky1`

测点：`LeftHandPinky2`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.011）
2. 【详证】次要耦合：向−X(约角色右)（|Δ|=0.005）；mag=0.012；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00459`, `-0.01141`, `0.0014`)，mag=`0.01238`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandPinky1_RX_p30_front.jpg) | ![](shots/LeftHandPinky1_RX_p30_side.jpg) | ![](shots/LeftHandPinky1_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.004）
2. 【详证】耦合弱；mag=0.004；测点 `LeftHandPinky2`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00019`, `0.00416`, `-0.00009`)，mag=`0.00417`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandPinky1_RX_n30_front.jpg) | ![](shots/LeftHandPinky1_RX_n30_side.jpg) | ![](shots/LeftHandPinky1_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00001`, `-0.00001`, `0.00005`)，mag=`0.00005`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandPinky1_RY_p30_front.jpg) | ![](shots/LeftHandPinky1_RY_p30_side.jpg) | ![](shots/LeftHandPinky1_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00001`, `-0.00001`, `-0.00005`)，mag=`0.00005`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandPinky1_RY_n30_front.jpg) | ![](shots/LeftHandPinky1_RY_n30_side.jpg) | ![](shots/LeftHandPinky1_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 端点主位移：向前(+Z)（|Δ|=0.010）
2. 【详证】耦合弱；mag=0.010；测点 `LeftHandPinky2`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00061`, `0.0004`, `0.01033`)，mag=`0.01035`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandPinky1_RZ_p30_front.jpg) | ![](shots/LeftHandPinky1_RZ_p30_side.jpg) | ![](shots/LeftHandPinky1_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 端点主位移：向后(−Z)（|Δ|=0.009）
2. 【详证】次要耦合：向−X(约角色右)（|Δ|=0.005）；mag=0.010；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00488`, `0.00023`, `-0.00913`)，mag=`0.01035`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandPinky1_RZ_n30_front.jpg) | ![](shots/LeftHandPinky1_RZ_n30_side.jpg) | ![](shots/LeftHandPinky1_RZ_n30_top.jpg) |

## `LeftHandPinky2`

测点：`LeftHandPinky3`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.009）
2. 【详证】次要耦合：向−X(约角色右)（|Δ|=0.004）；mag=0.010；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00363`, `-0.00914`, `0.00099`)，mag=`0.00989`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandPinky2_RX_p30_front.jpg) | ![](shots/LeftHandPinky2_RX_p30_side.jpg) | ![](shots/LeftHandPinky2_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.003）
2. 【详证】耦合弱；mag=0.003；测点 `LeftHandPinky3`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00013`, `0.00333`, `-0.00004`)，mag=`0.00333`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandPinky2_RX_n30_front.jpg) | ![](shots/LeftHandPinky2_RX_n30_side.jpg) | ![](shots/LeftHandPinky2_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 端点主位移：向前(+Z)（|Δ|=0.000）
2. 【详证】耦合弱；mag=0.000；测点 `LeftHandPinky3`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00004`, `0.00001`, `0.00016`)，mag=`0.00017`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandPinky2_RY_p30_front.jpg) | ![](shots/LeftHandPinky2_RY_p30_side.jpg) | ![](shots/LeftHandPinky2_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 端点主位移：向后(−Z)（|Δ|=0.000）
2. 【详证】次要耦合：向下（|Δ|=0.000）；mag=0.000；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00005`, `-0.00007`, `-0.00015`)，mag=`0.00017`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandPinky2_RY_n30_front.jpg) | ![](shots/LeftHandPinky2_RY_n30_side.jpg) | ![](shots/LeftHandPinky2_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 端点主位移：向前(+Z)（|Δ|=0.008）
2. 【详证】耦合弱；mag=0.008；测点 `LeftHandPinky3`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00043`, `0.00028`, `0.00825`)，mag=`0.00827`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandPinky2_RZ_p30_front.jpg) | ![](shots/LeftHandPinky2_RZ_p30_side.jpg) | ![](shots/LeftHandPinky2_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 端点主位移：向后(−Z)（|Δ|=0.007）
2. 【详证】次要耦合：向−X(约角色右)（|Δ|=0.004）；mag=0.008；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00384`, `0.00027`, `-0.00732`)，mag=`0.00827`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandPinky2_RZ_n30_front.jpg) | ![](shots/LeftHandPinky2_RZ_n30_side.jpg) | ![](shots/LeftHandPinky2_RZ_n30_top.jpg) |

## `LeftHandPinky3`

测点：`LeftHandPinky4`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.009）
2. 【详证】次要耦合：向−X(约角色右)（|Δ|=0.004）；mag=0.010；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00423`, `-0.00923`, `0.00105`)，mag=`0.0102`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandPinky3_RX_p30_front.jpg) | ![](shots/LeftHandPinky3_RX_p30_side.jpg) | ![](shots/LeftHandPinky3_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.003）
2. 【详证】耦合弱；mag=0.003；测点 `LeftHandPinky4`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00031`, `0.00342`, `-0.00008`)，mag=`0.00344`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandPinky3_RX_n30_front.jpg) | ![](shots/LeftHandPinky3_RX_n30_side.jpg) | ![](shots/LeftHandPinky3_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `-0.00003`, `0.00003`)，mag=`0.00004`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandPinky3_RY_p30_front.jpg) | ![](shots/LeftHandPinky3_RY_p30_side.jpg) | ![](shots/LeftHandPinky3_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00001`, `0.00002`, `-0.00003`)，mag=`0.00004`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandPinky3_RY_n30_front.jpg) | ![](shots/LeftHandPinky3_RY_n30_side.jpg) | ![](shots/LeftHandPinky3_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 端点主位移：向前(+Z)（|Δ|=0.009）
2. 【详证】耦合弱；mag=0.009；测点 `LeftHandPinky4`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00023`, `0.00034`, `0.00852`)，mag=`0.00853`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandPinky3_RZ_p30_front.jpg) | ![](shots/LeftHandPinky3_RZ_p30_side.jpg) | ![](shots/LeftHandPinky3_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 端点主位移：向后(−Z)（|Δ|=0.008）
2. 【详证】次要耦合：向−X(约角色右)（|Δ|=0.004）；mag=0.009；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00375`, `0.00033`, `-0.00766`)，mag=`0.00853`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandPinky3_RZ_n30_front.jpg) | ![](shots/LeftHandPinky3_RZ_n30_side.jpg) | ![](shots/LeftHandPinky3_RZ_n30_top.jpg) |

## `LeftHandPinky4`

测点：`LeftHandPinky4`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandPinky4_RX_p30_front.jpg) | ![](shots/LeftHandPinky4_RX_p30_side.jpg) | ![](shots/LeftHandPinky4_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandPinky4_RX_n30_front.jpg) | ![](shots/LeftHandPinky4_RX_n30_side.jpg) | ![](shots/LeftHandPinky4_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandPinky4_RY_p30_front.jpg) | ![](shots/LeftHandPinky4_RY_p30_side.jpg) | ![](shots/LeftHandPinky4_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandPinky4_RY_n30_front.jpg) | ![](shots/LeftHandPinky4_RY_n30_side.jpg) | ![](shots/LeftHandPinky4_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandPinky4_RZ_p30_front.jpg) | ![](shots/LeftHandPinky4_RZ_p30_side.jpg) | ![](shots/LeftHandPinky4_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandPinky4_RZ_n30_front.jpg) | ![](shots/LeftHandPinky4_RZ_n30_side.jpg) | ![](shots/LeftHandPinky4_RZ_n30_top.jpg) |

## `LeftHandRing1`

测点：`LeftHandRing2`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.019）
2. 【详证】次要耦合：向−X(约角色右)（|Δ|=0.009）；mag=0.021；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00863`, `-0.01862`, `0.00023`)，mag=`0.02052`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandRing1_RX_p30_front.jpg) | ![](shots/LeftHandRing1_RX_p30_side.jpg) | ![](shots/LeftHandRing1_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.007）
2. 【详证】耦合弱；mag=0.007；测点 `LeftHandRing2`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00059`, `0.00689`, `0`)，mag=`0.00691`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandRing1_RX_n30_front.jpg) | ![](shots/LeftHandRing1_RX_n30_side.jpg) | ![](shots/LeftHandRing1_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00001`, `-0.00006`, `-0.00004`)，mag=`0.00007`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandRing1_RY_p30_front.jpg) | ![](shots/LeftHandRing1_RY_p30_side.jpg) | ![](shots/LeftHandRing1_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00001`, `0.00007`, `0.00002`)，mag=`0.00007`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandRing1_RY_n30_front.jpg) | ![](shots/LeftHandRing1_RY_n30_side.jpg) | ![](shots/LeftHandRing1_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 端点主位移：向前(+Z)（|Δ|=0.017）
2. 【详证】耦合弱；mag=0.017；测点 `LeftHandRing2`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00315`, `0.00058`, `0.01686`)，mag=`0.01716`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandRing1_RZ_p30_front.jpg) | ![](shots/LeftHandRing1_RZ_p30_side.jpg) | ![](shots/LeftHandRing1_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 端点主位移：向后(−Z)（|Δ|=0.017）
2. 【详证】耦合弱；mag=0.017；测点 `LeftHandRing2`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00416`, `0.00067`, `-0.01663`)，mag=`0.01716`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandRing1_RZ_n30_front.jpg) | ![](shots/LeftHandRing1_RZ_n30_side.jpg) | ![](shots/LeftHandRing1_RZ_n30_top.jpg) |

## `LeftHandRing2`

测点：`LeftHandRing3`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.012）
2. 【详证】次要耦合：向−X(约角色右)（|Δ|=0.006）；mag=0.014；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00642`, `-0.01247`, `0.00023`)，mag=`0.01402`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandRing2_RX_p30_front.jpg) | ![](shots/LeftHandRing2_RX_p30_side.jpg) | ![](shots/LeftHandRing2_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.005）
2. 【详证】耦合弱；mag=0.005；测点 `LeftHandRing3`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.0006`, `0.00468`, `-0.00006`)，mag=`0.00472`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandRing2_RX_n30_front.jpg) | ![](shots/LeftHandRing2_RX_n30_side.jpg) | ![](shots/LeftHandRing2_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 端点主位移：向下（|Δ|=0.000）
2. 【详证】耦合弱；mag=0.000；测点 `LeftHandRing3`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00003`, `-0.00011`, `0.00002`)，mag=`0.00012`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandRing2_RY_p30_front.jpg) | ![](shots/LeftHandRing2_RY_p30_side.jpg) | ![](shots/LeftHandRing2_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 端点主位移：向上（|Δ|=0.000）
2. 【详证】次要耦合：向后(−Z)（|Δ|=0.000）；mag=0.000；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00002`, `0.0001`, `-0.00006`)，mag=`0.00012`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandRing2_RY_n30_front.jpg) | ![](shots/LeftHandRing2_RY_n30_side.jpg) | ![](shots/LeftHandRing2_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 端点主位移：向前(+Z)（|Δ|=0.011）
2. 【详证】耦合弱；mag=0.012；测点 `LeftHandRing3`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00245`, `0.00071`, `0.01145`)，mag=`0.01173`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandRing2_RZ_p30_front.jpg) | ![](shots/LeftHandRing2_RZ_p30_side.jpg) | ![](shots/LeftHandRing2_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 端点主位移：向后(−Z)（|Δ|=0.011）
2. 【详证】耦合弱；mag=0.012；测点 `LeftHandRing3`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.0025`, `0.00039`, `-0.01145`)，mag=`0.01173`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandRing2_RZ_n30_front.jpg) | ![](shots/LeftHandRing2_RZ_n30_side.jpg) | ![](shots/LeftHandRing2_RZ_n30_top.jpg) |

## `LeftHandRing3`

测点：`LeftHandRing4`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.009）
2. 【详证】次要耦合：向−X(约角色右)（|Δ|=0.006）；mag=0.010；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00551`, `-0.0088`, `0.00003`)，mag=`0.01038`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandRing3_RX_p30_front.jpg) | ![](shots/LeftHandRing3_RX_p30_side.jpg) | ![](shots/LeftHandRing3_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.003）
2. 【详证】耦合弱；mag=0.004；测点 `LeftHandRing4`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00073`, `0.00342`, `0.00002`)，mag=`0.0035`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandRing3_RX_n30_front.jpg) | ![](shots/LeftHandRing3_RX_n30_side.jpg) | ![](shots/LeftHandRing3_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 端点主位移：向下（|Δ|=0.000）
2. 【详证】次要耦合：向前(+Z)（|Δ|=0.000）；mag=0.000；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00003`, `-0.00009`, `0.00003`)，mag=`0.0001`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandRing3_RY_p30_front.jpg) | ![](shots/LeftHandRing3_RY_p30_side.jpg) | ![](shots/LeftHandRing3_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 端点主位移：向上（|Δ|=0.000）
2. 【详证】次要耦合：向后(−Z)（|Δ|=0.000）；mag=0.000；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00002`, `0.00007`, `-0.00006`)，mag=`0.0001`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandRing3_RY_n30_front.jpg) | ![](shots/LeftHandRing3_RY_n30_side.jpg) | ![](shots/LeftHandRing3_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 端点主位移：向前(+Z)（|Δ|=0.009）
2. 【详证】耦合弱；mag=0.009；测点 `LeftHandRing4`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.0017`, `0.0005`, `0.0085`)，mag=`0.00868`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandRing3_RZ_p30_front.jpg) | ![](shots/LeftHandRing3_RZ_p30_side.jpg) | ![](shots/LeftHandRing3_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 端点主位移：向后(−Z)（|Δ|=0.008）
2. 【详证】耦合弱；mag=0.009；测点 `LeftHandRing4`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00188`, `0.00063`, `-0.00845`)，mag=`0.00868`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandRing3_RZ_n30_front.jpg) | ![](shots/LeftHandRing3_RZ_n30_side.jpg) | ![](shots/LeftHandRing3_RZ_n30_top.jpg) |

## `LeftHandRing4`

测点：`LeftHandRing4`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandRing4_RX_p30_front.jpg) | ![](shots/LeftHandRing4_RX_p30_side.jpg) | ![](shots/LeftHandRing4_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandRing4_RX_n30_front.jpg) | ![](shots/LeftHandRing4_RX_n30_side.jpg) | ![](shots/LeftHandRing4_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandRing4_RY_p30_front.jpg) | ![](shots/LeftHandRing4_RY_p30_side.jpg) | ![](shots/LeftHandRing4_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandRing4_RY_n30_front.jpg) | ![](shots/LeftHandRing4_RY_n30_side.jpg) | ![](shots/LeftHandRing4_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandRing4_RZ_p30_front.jpg) | ![](shots/LeftHandRing4_RZ_p30_side.jpg) | ![](shots/LeftHandRing4_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandRing4_RZ_n30_front.jpg) | ![](shots/LeftHandRing4_RZ_n30_side.jpg) | ![](shots/LeftHandRing4_RZ_n30_top.jpg) |

## `LeftHandThumb1`

测点：`LeftHandThumb2`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 端点主位移：向后(−Z)（|Δ|=0.015）
2. 【详证】次要耦合：向下（|Δ|=0.010）；mag=0.018；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00083`, `-0.00978`, `-0.01471`)，mag=`0.01769`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandThumb1_RX_p30_front.jpg) | ![](shots/LeftHandThumb1_RX_p30_side.jpg) | ![](shots/LeftHandThumb1_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.005）
2. 【详证】次要耦合：向前(+Z)（|Δ|=0.004）；mag=0.006；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00131`, `0.00452`, `0.00365`)，mag=`0.00596`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandThumb1_RX_n30_front.jpg) | ![](shots/LeftHandThumb1_RX_n30_side.jpg) | ![](shots/LeftHandThumb1_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00007`, `0.00005`, `-0.00001`)，mag=`0.00008`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandThumb1_RY_p30_front.jpg) | ![](shots/LeftHandThumb1_RY_p30_side.jpg) | ![](shots/LeftHandThumb1_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00007`, `-0.00003`, `0.00003`)，mag=`0.00008`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandThumb1_RY_n30_front.jpg) | ![](shots/LeftHandThumb1_RY_n30_side.jpg) | ![](shots/LeftHandThumb1_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 端点主位移：向−X(约角色右)（|Δ|=0.014）
2. 【详证】次要耦合：向下（|Δ|=0.005）；mag=0.015；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.01391`, `-0.00482`, `0.00139`)，mag=`0.01479`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandThumb1_RZ_p30_front.jpg) | ![](shots/LeftHandThumb1_RZ_p30_side.jpg) | ![](shots/LeftHandThumb1_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 端点主位移：向+X(约角色左)（|Δ|=0.011）
2. 【详证】次要耦合：向上（|Δ|=0.008）；mag=0.015；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.01082`, `0.0082`, `-0.00586`)，mag=`0.01479`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandThumb1_RZ_n30_front.jpg) | ![](shots/LeftHandThumb1_RZ_n30_side.jpg) | ![](shots/LeftHandThumb1_RZ_n30_top.jpg) |

## `LeftHandThumb2`

测点：`LeftHandThumb3`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.011）
2. 【详证】次要耦合：向后(−Z)（|Δ|=0.008）；mag=0.015；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00749`, `-0.01057`, `-0.00783`)，mag=`0.01514`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandThumb2_RX_p30_front.jpg) | ![](shots/LeftHandThumb2_RX_p30_side.jpg) | ![](shots/LeftHandThumb2_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.005）
2. 【详证】次要耦合：向前(+Z)（|Δ|=0.002）；mag=0.005；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00154`, `0.00459`, `0.00159`)，mag=`0.0051`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandThumb2_RX_n30_front.jpg) | ![](shots/LeftHandThumb2_RX_n30_side.jpg) | ![](shots/LeftHandThumb2_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00003`, `-0.00006`, `-0.00001`)，mag=`0.00007`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandThumb2_RY_p30_front.jpg) | ![](shots/LeftHandThumb2_RY_p30_side.jpg) | ![](shots/LeftHandThumb2_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00005`, `0.00005`, `0`)，mag=`0.00007`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandThumb2_RY_n30_front.jpg) | ![](shots/LeftHandThumb2_RY_n30_side.jpg) | ![](shots/LeftHandThumb2_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 端点主位移：向−X(约角色右)（|Δ|=0.011）
2. 【详证】次要耦合：向前(+Z)（|Δ|=0.007）；mag=0.013；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.0106`, `0.00148`, `0.00675`)，mag=`0.01266`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandThumb2_RZ_p30_front.jpg) | ![](shots/LeftHandThumb2_RZ_p30_side.jpg) | ![](shots/LeftHandThumb2_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 端点主位移：向后(−Z)（|Δ|=0.010）
2. 【详证】次要耦合：向+X(约角色左)（|Δ|=0.007）；mag=0.013；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00739`, `0.00133`, `-0.01019`)，mag=`0.01266`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandThumb2_RZ_n30_front.jpg) | ![](shots/LeftHandThumb2_RZ_n30_side.jpg) | ![](shots/LeftHandThumb2_RZ_n30_top.jpg) |

## `LeftHandThumb3`

测点：`LeftHandThumb4`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.014）
2. 【详证】次要耦合：向后(−Z)（|Δ|=0.011）；mag=0.020；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00863`, `-0.0142`, `-0.01069`)，mag=`0.01976`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandThumb3_RX_p30_front.jpg) | ![](shots/LeftHandThumb3_RX_p30_side.jpg) | ![](shots/LeftHandThumb3_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.006）
2. 【详证】次要耦合：向前(+Z)（|Δ|=0.002）；mag=0.007；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00157`, `0.00607`, `0.00223`)，mag=`0.00665`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandThumb3_RX_n30_front.jpg) | ![](shots/LeftHandThumb3_RX_n30_side.jpg) | ![](shots/LeftHandThumb3_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00006`, `0`, `-0.00005`)，mag=`0.00008`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandThumb3_RY_p30_front.jpg) | ![](shots/LeftHandThumb3_RY_p30_side.jpg) | ![](shots/LeftHandThumb3_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00005`, `0.00002`, `0.00006`)，mag=`0.00008`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandThumb3_RY_n30_front.jpg) | ![](shots/LeftHandThumb3_RY_n30_side.jpg) | ![](shots/LeftHandThumb3_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 端点主位移：向−X(约角色右)（|Δ|=0.014）
2. 【详证】次要耦合：向前(+Z)（|Δ|=0.009）；mag=0.017；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.01412`, `0.00085`, `0.00853`)，mag=`0.01652`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandThumb3_RZ_p30_front.jpg) | ![](shots/LeftHandThumb3_RZ_p30_side.jpg) | ![](shots/LeftHandThumb3_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 端点主位移：向后(−Z)（|Δ|=0.013）
2. 【详证】次要耦合：向+X(约角色左)（|Δ|=0.010）；mag=0.017；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00978`, `0.00258`, `-0.01306`)，mag=`0.01652`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandThumb3_RZ_n30_front.jpg) | ![](shots/LeftHandThumb3_RZ_n30_side.jpg) | ![](shots/LeftHandThumb3_RZ_n30_top.jpg) |

## `LeftHandThumb4`

测点：`LeftHandThumb4`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandThumb4_RX_p30_front.jpg) | ![](shots/LeftHandThumb4_RX_p30_side.jpg) | ![](shots/LeftHandThumb4_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandThumb4_RX_n30_front.jpg) | ![](shots/LeftHandThumb4_RX_n30_side.jpg) | ![](shots/LeftHandThumb4_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandThumb4_RY_p30_front.jpg) | ![](shots/LeftHandThumb4_RY_p30_side.jpg) | ![](shots/LeftHandThumb4_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandThumb4_RY_n30_front.jpg) | ![](shots/LeftHandThumb4_RY_n30_side.jpg) | ![](shots/LeftHandThumb4_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandThumb4_RZ_p30_front.jpg) | ![](shots/LeftHandThumb4_RZ_p30_side.jpg) | ![](shots/LeftHandThumb4_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/LeftHandThumb4_RZ_n30_front.jpg) | ![](shots/LeftHandThumb4_RZ_n30_side.jpg) | ![](shots/LeftHandThumb4_RZ_n30_top.jpg) |

## `RightHandIndex1`

测点：`RightHandIndex2`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.021）
2. 【详证】次要耦合：向+X(约角色左)（|Δ|=0.006）；mag=0.021；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00571`, `-0.02058`, `-0.00147`)，mag=`0.0214`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandIndex1_RX_p30_front.jpg) | ![](shots/RightHandIndex1_RX_p30_side.jpg) | ![](shots/RightHandIndex1_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.007）
2. 【详证】耦合弱；mag=0.007；测点 `RightHandIndex2`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00048`, `0.00719`, `-0.00015`)，mag=`0.00721`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandIndex1_RX_n30_front.jpg) | ![](shots/RightHandIndex1_RX_n30_side.jpg) | ![](shots/RightHandIndex1_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 端点主位移：向下（|Δ|=0.000）
2. 【详证】耦合弱；mag=0.000；测点 `RightHandIndex2`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00001`, `-0.00015`, `-0.00004`)，mag=`0.00016`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandIndex1_RY_p30_front.jpg) | ![](shots/RightHandIndex1_RY_p30_side.jpg) | ![](shots/RightHandIndex1_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 端点主位移：向上（|Δ|=0.000）
2. 【详证】次要耦合：向前(+Z)（|Δ|=0.000）；mag=0.000；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00002`, `0.00013`, `0.00009`)，mag=`0.00016`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandIndex1_RY_n30_front.jpg) | ![](shots/RightHandIndex1_RY_n30_side.jpg) | ![](shots/RightHandIndex1_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 端点主位移：向后(−Z)（|Δ|=0.018）
2. 【详证】耦合弱；mag=0.018；测点 `RightHandIndex2`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.0006`, `0.00004`, `-0.01789`)，mag=`0.0179`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandIndex1_RZ_p30_front.jpg) | ![](shots/RightHandIndex1_RZ_p30_side.jpg) | ![](shots/RightHandIndex1_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 端点主位移：向前(+Z)（|Δ|=0.016）
2. 【详证】次要耦合：向+X(约角色左)（|Δ|=0.008）；mag=0.018；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00811`, `0.00013`, `0.01596`)，mag=`0.0179`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandIndex1_RZ_n30_front.jpg) | ![](shots/RightHandIndex1_RZ_n30_side.jpg) | ![](shots/RightHandIndex1_RZ_n30_top.jpg) |

## `RightHandIndex2`

测点：`RightHandIndex3`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.011）
2. 【详证】次要耦合：向+X(约角色左)（|Δ|=0.006）；mag=0.012；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00643`, `-0.01056`, `-0.00113`)，mag=`0.01242`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandIndex2_RX_p30_front.jpg) | ![](shots/RightHandIndex2_RX_p30_side.jpg) | ![](shots/RightHandIndex2_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.004）
2. 【详证】耦合弱；mag=0.004；测点 `RightHandIndex3`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00084`, `0.00409`, `0.00011`)，mag=`0.00418`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandIndex2_RX_n30_front.jpg) | ![](shots/RightHandIndex2_RX_n30_side.jpg) | ![](shots/RightHandIndex2_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 端点主位移：向后(−Z)（|Δ|=0.000）
2. 【详证】耦合弱；mag=0.000；测点 `RightHandIndex3`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00003`, `0`, `-0.00017`)，mag=`0.00017`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandIndex2_RY_p30_front.jpg) | ![](shots/RightHandIndex2_RY_p30_side.jpg) | ![](shots/RightHandIndex2_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 端点主位移：向前(+Z)（|Δ|=0.000）
2. 【详证】次要耦合：向下（|Δ|=0.000）；mag=0.000；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00005`, `-0.00005`, `0.00016`)，mag=`0.00017`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandIndex2_RY_n30_front.jpg) | ![](shots/RightHandIndex2_RY_n30_side.jpg) | ![](shots/RightHandIndex2_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 端点主位移：向后(−Z)（|Δ|=0.010）
2. 【详证】耦合弱；mag=0.010；测点 `RightHandIndex3`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.0001`, `0.00055`, `-0.01037`)，mag=`0.01038`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandIndex2_RZ_p30_front.jpg) | ![](shots/RightHandIndex2_RZ_p30_side.jpg) | ![](shots/RightHandIndex2_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 端点主位移：向前(+Z)（|Δ|=0.009）
2. 【详证】次要耦合：向+X(约角色左)（|Δ|=0.004）；mag=0.010；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00409`, `0.00083`, `0.0095`)，mag=`0.01038`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandIndex2_RZ_n30_front.jpg) | ![](shots/RightHandIndex2_RZ_n30_side.jpg) | ![](shots/RightHandIndex2_RZ_n30_top.jpg) |

## `RightHandIndex3`

测点：`RightHandIndex4`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.010）
2. 【详证】次要耦合：向+X(约角色左)（|Δ|=0.006）；mag=0.012；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00638`, `-0.00966`, `-0.00126`)，mag=`0.01164`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandIndex3_RX_p30_front.jpg) | ![](shots/RightHandIndex3_RX_p30_side.jpg) | ![](shots/RightHandIndex3_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.004）
2. 【详证】耦合弱；mag=0.004；测点 `RightHandIndex4`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00093`, `0.0038`, `0.00017`)，mag=`0.00392`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandIndex3_RX_n30_front.jpg) | ![](shots/RightHandIndex3_RX_n30_side.jpg) | ![](shots/RightHandIndex3_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 端点主位移：向下（|Δ|=0.000）
2. 【详证】次要耦合：向前(+Z)（|Δ|=0.000）；mag=0.000；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00005`, `-0.00011`, `0.00007`)，mag=`0.00014`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandIndex3_RY_p30_front.jpg) | ![](shots/RightHandIndex3_RY_p30_side.jpg) | ![](shots/RightHandIndex3_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 端点主位移：向上（|Δ|=0.000）
2. 【详证】次要耦合：向−X(约角色右)（|Δ|=0.000）；mag=0.000；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00005`, `0.00013`, `-0.00002`)，mag=`0.00014`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandIndex3_RY_n30_front.jpg) | ![](shots/RightHandIndex3_RY_n30_side.jpg) | ![](shots/RightHandIndex3_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 端点主位移：向后(−Z)（|Δ|=0.010）
2. 【详证】耦合弱；mag=0.010；测点 `RightHandIndex4`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00022`, `0.00068`, `-0.00971`)，mag=`0.00973`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandIndex3_RZ_p30_front.jpg) | ![](shots/RightHandIndex3_RZ_p30_side.jpg) | ![](shots/RightHandIndex3_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 端点主位移：向前(+Z)（|Δ|=0.009）
2. 【详证】次要耦合：向+X(约角色左)（|Δ|=0.004）；mag=0.010；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00371`, `0.00066`, `0.00898`)，mag=`0.00973`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandIndex3_RZ_n30_front.jpg) | ![](shots/RightHandIndex3_RZ_n30_side.jpg) | ![](shots/RightHandIndex3_RZ_n30_top.jpg) |

## `RightHandIndex4`

测点：`RightHandIndex4`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandIndex4_RX_p30_front.jpg) | ![](shots/RightHandIndex4_RX_p30_side.jpg) | ![](shots/RightHandIndex4_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandIndex4_RX_n30_front.jpg) | ![](shots/RightHandIndex4_RX_n30_side.jpg) | ![](shots/RightHandIndex4_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandIndex4_RY_p30_front.jpg) | ![](shots/RightHandIndex4_RY_p30_side.jpg) | ![](shots/RightHandIndex4_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandIndex4_RY_n30_front.jpg) | ![](shots/RightHandIndex4_RY_n30_side.jpg) | ![](shots/RightHandIndex4_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandIndex4_RZ_p30_front.jpg) | ![](shots/RightHandIndex4_RZ_p30_side.jpg) | ![](shots/RightHandIndex4_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandIndex4_RZ_n30_front.jpg) | ![](shots/RightHandIndex4_RZ_n30_side.jpg) | ![](shots/RightHandIndex4_RZ_n30_top.jpg) |

## `RightHandMiddle1`

测点：`RightHandMiddle2`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.021）
2. 【详证】次要耦合：向+X(约角色左)（|Δ|=0.008）；mag=0.022；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00818`, `-0.02084`, `-0.00068`)，mag=`0.0224`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandMiddle1_RX_p30_front.jpg) | ![](shots/RightHandMiddle1_RX_p30_side.jpg) | ![](shots/RightHandMiddle1_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.008）
2. 【详证】耦合弱；mag=0.008；测点 `RightHandMiddle2`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00019`, `0.00754`, `0.00014`)，mag=`0.00754`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandMiddle1_RX_n30_front.jpg) | ![](shots/RightHandMiddle1_RX_n30_side.jpg) | ![](shots/RightHandMiddle1_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0.00003`, `0.00004`)，mag=`0.00004`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandMiddle1_RY_p30_front.jpg) | ![](shots/RightHandMiddle1_RY_p30_side.jpg) | ![](shots/RightHandMiddle1_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `-0.00001`, `-0.00004`)，mag=`0.00004`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandMiddle1_RY_n30_front.jpg) | ![](shots/RightHandMiddle1_RY_n30_side.jpg) | ![](shots/RightHandMiddle1_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 端点主位移：向后(−Z)（|Δ|=0.018）
2. 【详证】耦合弱；mag=0.019；测点 `RightHandMiddle2`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.0033`, `0.00076`, `-0.01842`)，mag=`0.01873`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandMiddle1_RZ_p30_front.jpg) | ![](shots/RightHandMiddle1_RZ_p30_side.jpg) | ![](shots/RightHandMiddle1_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 端点主位移：向前(+Z)（|Δ|=0.018）
2. 【详证】次要耦合：向+X(约角色左)（|Δ|=0.005）；mag=0.019；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00475`, `0.00013`, `0.01811`)，mag=`0.01873`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandMiddle1_RZ_n30_front.jpg) | ![](shots/RightHandMiddle1_RZ_n30_side.jpg) | ![](shots/RightHandMiddle1_RZ_n30_top.jpg) |

## `RightHandMiddle2`

测点：`RightHandMiddle3`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.015）
2. 【详证】次要耦合：向+X(约角色左)（|Δ|=0.007）；mag=0.016；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00658`, `-0.0146`, `-0.00038`)，mag=`0.01602`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandMiddle2_RX_p30_front.jpg) | ![](shots/RightHandMiddle2_RX_p30_side.jpg) | ![](shots/RightHandMiddle2_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.005）
2. 【详证】耦合弱；mag=0.005；测点 `RightHandMiddle3`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00041`, `0.00538`, `0`)，mag=`0.00539`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandMiddle2_RX_n30_front.jpg) | ![](shots/RightHandMiddle2_RX_n30_side.jpg) | ![](shots/RightHandMiddle2_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 端点主位移：向后(−Z)（|Δ|=0.000）
2. 【详证】耦合弱；mag=0.000；测点 `RightHandMiddle3`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00001`, `0.00002`, `-0.00013`)，mag=`0.00013`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandMiddle2_RY_p30_front.jpg) | ![](shots/RightHandMiddle2_RY_p30_side.jpg) | ![](shots/RightHandMiddle2_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 端点主位移：向前(+Z)（|Δ|=0.000）
2. 【详证】次要耦合：向下（|Δ|=0.000）；mag=0.000；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00002`, `-0.00007`, `0.00011`)，mag=`0.00013`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandMiddle2_RY_n30_front.jpg) | ![](shots/RightHandMiddle2_RY_n30_side.jpg) | ![](shots/RightHandMiddle2_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 端点主位移：向后(−Z)（|Δ|=0.013）
2. 【详证】耦合弱；mag=0.013；测点 `RightHandMiddle3`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00185`, `0.00041`, `-0.01326`)，mag=`0.0134`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandMiddle2_RZ_p30_front.jpg) | ![](shots/RightHandMiddle2_RZ_p30_side.jpg) | ![](shots/RightHandMiddle2_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 端点主位移：向前(+Z)（|Δ|=0.013）
2. 【详证】次要耦合：向+X(约角色左)（|Δ|=0.004）；mag=0.013；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00384`, `0.00059`, `0.01282`)，mag=`0.0134`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandMiddle2_RZ_n30_front.jpg) | ![](shots/RightHandMiddle2_RZ_n30_side.jpg) | ![](shots/RightHandMiddle2_RZ_n30_top.jpg) |

## `RightHandMiddle3`

测点：`RightHandMiddle4`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.009）
2. 【详证】次要耦合：向+X(约角色左)（|Δ|=0.005）；mag=0.010；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.0051`, `-0.00863`, `-0.0002`)，mag=`0.01003`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandMiddle3_RX_p30_front.jpg) | ![](shots/RightHandMiddle3_RX_p30_side.jpg) | ![](shots/RightHandMiddle3_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.003）
2. 【详证】耦合弱；mag=0.003；测点 `RightHandMiddle4`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00062`, `0.00332`, `-0.00003`)，mag=`0.00338`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandMiddle3_RX_n30_front.jpg) | ![](shots/RightHandMiddle3_RX_n30_side.jpg) | ![](shots/RightHandMiddle3_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00002`, `-0.00004`, `0.00007`)，mag=`0.00008`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandMiddle3_RY_p30_front.jpg) | ![](shots/RightHandMiddle3_RY_p30_side.jpg) | ![](shots/RightHandMiddle3_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00002`, `0.00006`, `-0.00005`)，mag=`0.00008`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandMiddle3_RY_n30_front.jpg) | ![](shots/RightHandMiddle3_RY_n30_side.jpg) | ![](shots/RightHandMiddle3_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 端点主位移：向后(−Z)（|Δ|=0.008）
2. 【详证】耦合弱；mag=0.008；测点 `RightHandMiddle4`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00116`, `0.0003`, `-0.0083`)，mag=`0.00838`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandMiddle3_RZ_p30_front.jpg) | ![](shots/RightHandMiddle3_RZ_p30_side.jpg) | ![](shots/RightHandMiddle3_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 端点主位移：向前(+Z)（|Δ|=0.008）
2. 【详证】次要耦合：向+X(约角色左)（|Δ|=0.002）；mag=0.008；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00233`, `0.00065`, `0.00803`)，mag=`0.00838`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandMiddle3_RZ_n30_front.jpg) | ![](shots/RightHandMiddle3_RZ_n30_side.jpg) | ![](shots/RightHandMiddle3_RZ_n30_top.jpg) |

## `RightHandMiddle4`

测点：`RightHandMiddle4`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandMiddle4_RX_p30_front.jpg) | ![](shots/RightHandMiddle4_RX_p30_side.jpg) | ![](shots/RightHandMiddle4_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandMiddle4_RX_n30_front.jpg) | ![](shots/RightHandMiddle4_RX_n30_side.jpg) | ![](shots/RightHandMiddle4_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandMiddle4_RY_p30_front.jpg) | ![](shots/RightHandMiddle4_RY_p30_side.jpg) | ![](shots/RightHandMiddle4_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandMiddle4_RY_n30_front.jpg) | ![](shots/RightHandMiddle4_RY_n30_side.jpg) | ![](shots/RightHandMiddle4_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandMiddle4_RZ_p30_front.jpg) | ![](shots/RightHandMiddle4_RZ_p30_side.jpg) | ![](shots/RightHandMiddle4_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandMiddle4_RZ_n30_front.jpg) | ![](shots/RightHandMiddle4_RZ_n30_side.jpg) | ![](shots/RightHandMiddle4_RZ_n30_top.jpg) |

## `RightHandPinky1`

测点：`RightHandPinky2`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.011）
2. 【详证】次要耦合：向+X(约角色左)（|Δ|=0.005）；mag=0.012；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.0046`, `-0.01141`, `0.00136`)，mag=`0.01238`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandPinky1_RX_p30_front.jpg) | ![](shots/RightHandPinky1_RX_p30_side.jpg) | ![](shots/RightHandPinky1_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.004）
2. 【详证】耦合弱；mag=0.004；测点 `RightHandPinky2`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00019`, `0.00416`, `-0.00009`)，mag=`0.00417`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandPinky1_RX_n30_front.jpg) | ![](shots/RightHandPinky1_RX_n30_side.jpg) | ![](shots/RightHandPinky1_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 端点主位移：向前(+Z)（|Δ|=0.000）
2. 【详证】次要耦合：向下（|Δ|=0.000）；mag=0.000；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00002`, `-0.00005`, `0.0001`)，mag=`0.00012`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandPinky1_RY_p30_front.jpg) | ![](shots/RightHandPinky1_RY_p30_side.jpg) | ![](shots/RightHandPinky1_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 端点主位移：向后(−Z)（|Δ|=0.000）
2. 【详证】次要耦合：向上（|Δ|=0.000）；mag=0.000；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00001`, `0.00008`, `-0.00008`)，mag=`0.00012`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandPinky1_RY_n30_front.jpg) | ![](shots/RightHandPinky1_RY_n30_side.jpg) | ![](shots/RightHandPinky1_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 端点主位移：向后(−Z)（|Δ|=0.009）
2. 【详证】次要耦合：向+X(约角色左)（|Δ|=0.005）；mag=0.010；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00488`, `0.0002`, `-0.00913`)，mag=`0.01035`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandPinky1_RZ_p30_front.jpg) | ![](shots/RightHandPinky1_RZ_p30_side.jpg) | ![](shots/RightHandPinky1_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 端点主位移：向前(+Z)（|Δ|=0.010）
2. 【详证】耦合弱；mag=0.010；测点 `RightHandPinky2`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.0006`, `0.00036`, `0.01033`)，mag=`0.01035`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandPinky1_RZ_n30_front.jpg) | ![](shots/RightHandPinky1_RZ_n30_side.jpg) | ![](shots/RightHandPinky1_RZ_n30_top.jpg) |

## `RightHandPinky2`

测点：`RightHandPinky3`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.009）
2. 【详证】次要耦合：向+X(约角色左)（|Δ|=0.004）；mag=0.010；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00363`, `-0.00914`, `0.00099`)，mag=`0.00989`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandPinky2_RX_p30_front.jpg) | ![](shots/RightHandPinky2_RX_p30_side.jpg) | ![](shots/RightHandPinky2_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.003）
2. 【详证】耦合弱；mag=0.003；测点 `RightHandPinky3`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00013`, `0.00333`, `-0.00004`)，mag=`0.00333`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandPinky2_RX_n30_front.jpg) | ![](shots/RightHandPinky2_RX_n30_side.jpg) | ![](shots/RightHandPinky2_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `-0.00004`, `0.00002`)，mag=`0.00004`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandPinky2_RY_p30_front.jpg) | ![](shots/RightHandPinky2_RY_p30_side.jpg) | ![](shots/RightHandPinky2_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0.00004`, `0`)，mag=`0.00004`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandPinky2_RY_n30_front.jpg) | ![](shots/RightHandPinky2_RY_n30_side.jpg) | ![](shots/RightHandPinky2_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 端点主位移：向后(−Z)（|Δ|=0.007）
2. 【详证】次要耦合：向+X(约角色左)（|Δ|=0.004）；mag=0.008；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00384`, `0.00022`, `-0.00732`)，mag=`0.00827`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandPinky2_RZ_p30_front.jpg) | ![](shots/RightHandPinky2_RZ_p30_side.jpg) | ![](shots/RightHandPinky2_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 端点主位移：向前(+Z)（|Δ|=0.008）
2. 【详证】耦合弱；mag=0.008；测点 `RightHandPinky3`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00042`, `0.00024`, `0.00826`)，mag=`0.00827`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandPinky2_RZ_n30_front.jpg) | ![](shots/RightHandPinky2_RZ_n30_side.jpg) | ![](shots/RightHandPinky2_RZ_n30_top.jpg) |

## `RightHandPinky3`

测点：`RightHandPinky4`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.009）
2. 【详证】次要耦合：向+X(约角色左)（|Δ|=0.004）；mag=0.010；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00424`, `-0.00923`, `0.00102`)，mag=`0.0102`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandPinky3_RX_p30_front.jpg) | ![](shots/RightHandPinky3_RX_p30_side.jpg) | ![](shots/RightHandPinky3_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.003）
2. 【详证】耦合弱；mag=0.003；测点 `RightHandPinky4`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00031`, `0.00342`, `-0.00007`)，mag=`0.00344`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandPinky3_RX_n30_front.jpg) | ![](shots/RightHandPinky3_RX_n30_side.jpg) | ![](shots/RightHandPinky3_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `-0.00003`, `0.00003`)，mag=`0.00005`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandPinky3_RY_p30_front.jpg) | ![](shots/RightHandPinky3_RY_p30_side.jpg) | ![](shots/RightHandPinky3_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0.00004`, `-0.00002`)，mag=`0.00005`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandPinky3_RY_n30_front.jpg) | ![](shots/RightHandPinky3_RY_n30_side.jpg) | ![](shots/RightHandPinky3_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 端点主位移：向后(−Z)（|Δ|=0.008）
2. 【详证】次要耦合：向+X(约角色左)（|Δ|=0.004）；mag=0.009；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00375`, `0.00033`, `-0.00766`)，mag=`0.00853`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandPinky3_RZ_p30_front.jpg) | ![](shots/RightHandPinky3_RZ_p30_side.jpg) | ![](shots/RightHandPinky3_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 端点主位移：向前(+Z)（|Δ|=0.009）
2. 【详证】耦合弱；mag=0.009；测点 `RightHandPinky4`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00022`, `0.00031`, `0.00852`)，mag=`0.00853`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandPinky3_RZ_n30_front.jpg) | ![](shots/RightHandPinky3_RZ_n30_side.jpg) | ![](shots/RightHandPinky3_RZ_n30_top.jpg) |

## `RightHandPinky4`

测点：`RightHandPinky4`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandPinky4_RX_p30_front.jpg) | ![](shots/RightHandPinky4_RX_p30_side.jpg) | ![](shots/RightHandPinky4_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandPinky4_RX_n30_front.jpg) | ![](shots/RightHandPinky4_RX_n30_side.jpg) | ![](shots/RightHandPinky4_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandPinky4_RY_p30_front.jpg) | ![](shots/RightHandPinky4_RY_p30_side.jpg) | ![](shots/RightHandPinky4_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandPinky4_RY_n30_front.jpg) | ![](shots/RightHandPinky4_RY_n30_side.jpg) | ![](shots/RightHandPinky4_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandPinky4_RZ_p30_front.jpg) | ![](shots/RightHandPinky4_RZ_p30_side.jpg) | ![](shots/RightHandPinky4_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandPinky4_RZ_n30_front.jpg) | ![](shots/RightHandPinky4_RZ_n30_side.jpg) | ![](shots/RightHandPinky4_RZ_n30_top.jpg) |

## `RightHandRing1`

测点：`RightHandRing2`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.019）
2. 【详证】次要耦合：向+X(约角色左)（|Δ|=0.009）；mag=0.021；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00863`, `-0.01862`, `0.00015`)，mag=`0.02052`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandRing1_RX_p30_front.jpg) | ![](shots/RightHandRing1_RX_p30_side.jpg) | ![](shots/RightHandRing1_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.007）
2. 【详证】耦合弱；mag=0.007；测点 `RightHandRing2`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00059`, `0.00689`, `0.00001`)，mag=`0.00691`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandRing1_RX_n30_front.jpg) | ![](shots/RightHandRing1_RX_n30_side.jpg) | ![](shots/RightHandRing1_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 端点主位移：向前(+Z)（|Δ|=0.000）
2. 【详证】耦合弱；mag=0.000；测点 `RightHandRing2`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `-0.00003`, `0.00016`)，mag=`0.00016`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandRing1_RY_p30_front.jpg) | ![](shots/RightHandRing1_RY_p30_side.jpg) | ![](shots/RightHandRing1_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 端点主位移：向后(−Z)（|Δ|=0.000）
2. 【详证】次要耦合：向上（|Δ|=0.000）；mag=0.000；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00001`, `0.00008`, `-0.00014`)，mag=`0.00016`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandRing1_RY_n30_front.jpg) | ![](shots/RightHandRing1_RY_n30_side.jpg) | ![](shots/RightHandRing1_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 端点主位移：向后(−Z)（|Δ|=0.017）
2. 【详证】耦合弱；mag=0.017；测点 `RightHandRing2`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00416`, `0.00067`, `-0.01663`)，mag=`0.01716`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandRing1_RZ_p30_front.jpg) | ![](shots/RightHandRing1_RZ_p30_side.jpg) | ![](shots/RightHandRing1_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 端点主位移：向前(+Z)（|Δ|=0.017）
2. 【详证】耦合弱；mag=0.017；测点 `RightHandRing2`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00316`, `0.00052`, `0.01686`)，mag=`0.01716`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandRing1_RZ_n30_front.jpg) | ![](shots/RightHandRing1_RZ_n30_side.jpg) | ![](shots/RightHandRing1_RZ_n30_top.jpg) |

## `RightHandRing2`

测点：`RightHandRing3`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.012）
2. 【详证】次要耦合：向+X(约角色左)（|Δ|=0.006）；mag=0.014；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00642`, `-0.01247`, `0.00016`)，mag=`0.01402`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandRing2_RX_p30_front.jpg) | ![](shots/RightHandRing2_RX_p30_side.jpg) | ![](shots/RightHandRing2_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.005）
2. 【详证】耦合弱；mag=0.005；测点 `RightHandRing3`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.0006`, `0.00468`, `-0.00005`)，mag=`0.00472`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandRing2_RX_n30_front.jpg) | ![](shots/RightHandRing2_RX_n30_side.jpg) | ![](shots/RightHandRing2_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00001`, `0.00004`, `0.00003`)，mag=`0.00005`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandRing2_RY_p30_front.jpg) | ![](shots/RightHandRing2_RY_p30_side.jpg) | ![](shots/RightHandRing2_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `-0.00002`, `-0.00004`)，mag=`0.00005`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandRing2_RY_n30_front.jpg) | ![](shots/RightHandRing2_RY_n30_side.jpg) | ![](shots/RightHandRing2_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 端点主位移：向后(−Z)（|Δ|=0.011）
2. 【详证】耦合弱；mag=0.012；测点 `RightHandRing3`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.0025`, `0.0004`, `-0.01145`)，mag=`0.01173`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandRing2_RZ_p30_front.jpg) | ![](shots/RightHandRing2_RZ_p30_side.jpg) | ![](shots/RightHandRing2_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 端点主位移：向前(+Z)（|Δ|=0.011）
2. 【详证】耦合弱；mag=0.012；测点 `RightHandRing3`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00246`, `0.00065`, `0.01145`)，mag=`0.01173`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandRing2_RZ_n30_front.jpg) | ![](shots/RightHandRing2_RZ_n30_side.jpg) | ![](shots/RightHandRing2_RZ_n30_top.jpg) |

## `RightHandRing3`

测点：`RightHandRing4`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.009）
2. 【详证】次要耦合：向+X(约角色左)（|Δ|=0.006）；mag=0.010；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00552`, `-0.0088`, `-0.00005`)，mag=`0.01038`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandRing3_RX_p30_front.jpg) | ![](shots/RightHandRing3_RX_p30_side.jpg) | ![](shots/RightHandRing3_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.003）
2. 【详证】耦合弱；mag=0.004；测点 `RightHandRing4`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00073`, `0.00342`, `0.00003`)，mag=`0.0035`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandRing3_RX_n30_front.jpg) | ![](shots/RightHandRing3_RX_n30_side.jpg) | ![](shots/RightHandRing3_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00001`, `-0.00002`, `0.00008`)，mag=`0.00008`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandRing3_RY_p30_front.jpg) | ![](shots/RightHandRing3_RY_p30_side.jpg) | ![](shots/RightHandRing3_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00001`, `0.00005`, `-0.00007`)，mag=`0.00008`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandRing3_RY_n30_front.jpg) | ![](shots/RightHandRing3_RY_n30_side.jpg) | ![](shots/RightHandRing3_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 端点主位移：向后(−Z)（|Δ|=0.008）
2. 【详证】耦合弱；mag=0.009；测点 `RightHandRing4`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00188`, `0.00062`, `-0.00845`)，mag=`0.00868`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandRing3_RZ_p30_front.jpg) | ![](shots/RightHandRing3_RZ_p30_side.jpg) | ![](shots/RightHandRing3_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 端点主位移：向前(+Z)（|Δ|=0.009）
2. 【详证】耦合弱；mag=0.009；测点 `RightHandRing4`；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00172`, `0.00044`, `0.0085`)，mag=`0.00868`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandRing3_RZ_n30_front.jpg) | ![](shots/RightHandRing3_RZ_n30_side.jpg) | ![](shots/RightHandRing3_RZ_n30_top.jpg) |

## `RightHandRing4`

测点：`RightHandRing4`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandRing4_RX_p30_front.jpg) | ![](shots/RightHandRing4_RX_p30_side.jpg) | ![](shots/RightHandRing4_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandRing4_RX_n30_front.jpg) | ![](shots/RightHandRing4_RX_n30_side.jpg) | ![](shots/RightHandRing4_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandRing4_RY_p30_front.jpg) | ![](shots/RightHandRing4_RY_p30_side.jpg) | ![](shots/RightHandRing4_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandRing4_RY_n30_front.jpg) | ![](shots/RightHandRing4_RY_n30_side.jpg) | ![](shots/RightHandRing4_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandRing4_RZ_p30_front.jpg) | ![](shots/RightHandRing4_RZ_p30_side.jpg) | ![](shots/RightHandRing4_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandRing4_RZ_n30_front.jpg) | ![](shots/RightHandRing4_RZ_n30_side.jpg) | ![](shots/RightHandRing4_RZ_n30_top.jpg) |

## `RightHandThumb1`

测点：`RightHandThumb2`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 端点主位移：向后(−Z)（|Δ|=0.015）
2. 【详证】次要耦合：向下（|Δ|=0.010）；mag=0.018；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00083`, `-0.00978`, `-0.01471`)，mag=`0.01769`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandThumb1_RX_p30_front.jpg) | ![](shots/RightHandThumb1_RX_p30_side.jpg) | ![](shots/RightHandThumb1_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.005）
2. 【详证】次要耦合：向前(+Z)（|Δ|=0.004）；mag=0.006；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00131`, `0.00452`, `0.00365`)，mag=`0.00596`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandThumb1_RX_n30_front.jpg) | ![](shots/RightHandThumb1_RX_n30_side.jpg) | ![](shots/RightHandThumb1_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00007`, `-0.00003`, `0.00003`)，mag=`0.00008`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandThumb1_RY_p30_front.jpg) | ![](shots/RightHandThumb1_RY_p30_side.jpg) | ![](shots/RightHandThumb1_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00007`, `0.00005`, `-0.00001`)，mag=`0.00008`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandThumb1_RY_n30_front.jpg) | ![](shots/RightHandThumb1_RY_n30_side.jpg) | ![](shots/RightHandThumb1_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 端点主位移：向−X(约角色右)（|Δ|=0.011）
2. 【详证】次要耦合：向上（|Δ|=0.008）；mag=0.015；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.01082`, `0.0082`, `-0.00586`)，mag=`0.01479`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandThumb1_RZ_p30_front.jpg) | ![](shots/RightHandThumb1_RZ_p30_side.jpg) | ![](shots/RightHandThumb1_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 端点主位移：向+X(约角色左)（|Δ|=0.014）
2. 【详证】次要耦合：向下（|Δ|=0.005）；mag=0.015；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.01391`, `-0.00482`, `0.00139`)，mag=`0.01479`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandThumb1_RZ_n30_front.jpg) | ![](shots/RightHandThumb1_RZ_n30_side.jpg) | ![](shots/RightHandThumb1_RZ_n30_top.jpg) |

## `RightHandThumb2`

测点：`RightHandThumb3`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.011）
2. 【详证】次要耦合：向后(−Z)（|Δ|=0.008）；mag=0.015；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.0075`, `-0.01057`, `-0.00783`)，mag=`0.01514`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandThumb2_RX_p30_front.jpg) | ![](shots/RightHandThumb2_RX_p30_side.jpg) | ![](shots/RightHandThumb2_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.005）
2. 【详证】次要耦合：向前(+Z)（|Δ|=0.002）；mag=0.005；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00154`, `0.00459`, `0.00159`)，mag=`0.0051`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandThumb2_RX_n30_front.jpg) | ![](shots/RightHandThumb2_RX_n30_side.jpg) | ![](shots/RightHandThumb2_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00005`, `0.00004`, `-0.00001`)，mag=`0.00007`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandThumb2_RY_p30_front.jpg) | ![](shots/RightHandThumb2_RY_p30_side.jpg) | ![](shots/RightHandThumb2_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00004`, `-0.00005`, `0`)，mag=`0.00007`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandThumb2_RY_n30_front.jpg) | ![](shots/RightHandThumb2_RY_n30_side.jpg) | ![](shots/RightHandThumb2_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 端点主位移：向后(−Z)（|Δ|=0.010）
2. 【详证】次要耦合：向−X(约角色右)（|Δ|=0.007）；mag=0.013；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00739`, `0.00133`, `-0.01019`)，mag=`0.01266`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandThumb2_RZ_p30_front.jpg) | ![](shots/RightHandThumb2_RZ_p30_side.jpg) | ![](shots/RightHandThumb2_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 端点主位移：向+X(约角色左)（|Δ|=0.011）
2. 【详证】次要耦合：向前(+Z)（|Δ|=0.007）；mag=0.013；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.0106`, `0.00149`, `0.00676`)，mag=`0.01266`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandThumb2_RZ_n30_front.jpg) | ![](shots/RightHandThumb2_RZ_n30_side.jpg) | ![](shots/RightHandThumb2_RZ_n30_top.jpg) |

## `RightHandThumb3`

测点：`RightHandThumb4`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 端点主位移：向下（|Δ|=0.014）
2. 【详证】次要耦合：向后(−Z)（|Δ|=0.011）；mag=0.020；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00865`, `-0.0142`, `-0.01068`)，mag=`0.01976`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandThumb3_RX_p30_front.jpg) | ![](shots/RightHandThumb3_RX_p30_side.jpg) | ![](shots/RightHandThumb3_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 端点主位移：向上（|Δ|=0.006）
2. 【详证】次要耦合：向前(+Z)（|Δ|=0.002）；mag=0.007；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00158`, `0.00607`, `0.00222`)，mag=`0.00665`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandThumb3_RX_n30_front.jpg) | ![](shots/RightHandThumb3_RX_n30_side.jpg) | ![](shots/RightHandThumb3_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.00003`, `-0.00002`, `0.00002`)，mag=`0.00004`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandThumb3_RY_p30_front.jpg) | ![](shots/RightHandThumb3_RY_p30_side.jpg) | ![](shots/RightHandThumb3_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00003`, `0.00003`, `-0.00001`)，mag=`0.00004`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandThumb3_RY_n30_front.jpg) | ![](shots/RightHandThumb3_RY_n30_side.jpg) | ![](shots/RightHandThumb3_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 端点主位移：向后(−Z)（|Δ|=0.013）
2. 【详证】次要耦合：向−X(约角色右)（|Δ|=0.010）；mag=0.017；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`-0.00978`, `0.00256`, `-0.01307`)，mag=`0.01652`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandThumb3_RZ_p30_front.jpg) | ![](shots/RightHandThumb3_RZ_p30_side.jpg) | ![](shots/RightHandThumb3_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 端点主位移：向+X(约角色左)（|Δ|=0.014）
2. 【详证】次要耦合：向前(+Z)（|Δ|=0.009）；mag=0.017；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0.01411`, `0.00088`, `0.00854`)，mag=`0.01652`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandThumb3_RZ_n30_front.jpg) | ![](shots/RightHandThumb3_RZ_n30_side.jpg) | ![](shots/RightHandThumb3_RZ_n30_top.jpg) |

## `RightHandThumb4`

测点：`RightHandThumb4`　试验角：±30°

### RX +30°

1. 【主结果】+RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandThumb4_RX_p30_front.jpg) | ![](shots/RightHandThumb4_RX_p30_side.jpg) | ![](shots/RightHandThumb4_RX_p30_top.jpg) |

### RX −30°

1. 【主结果】−RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandThumb4_RX_n30_front.jpg) | ![](shots/RightHandThumb4_RX_n30_side.jpg) | ![](shots/RightHandThumb4_RX_n30_top.jpg) |

### RY +30°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandThumb4_RY_p30_front.jpg) | ![](shots/RightHandThumb4_RY_p30_side.jpg) | ![](shots/RightHandThumb4_RY_p30_top.jpg) |

### RY −30°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandThumb4_RY_n30_front.jpg) | ![](shots/RightHandThumb4_RY_n30_side.jpg) | ![](shots/RightHandThumb4_RY_n30_top.jpg) |

### RZ +30°

1. 【主结果】+RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandThumb4_RZ_p30_front.jpg) | ![](shots/RightHandThumb4_RZ_p30_side.jpg) | ![](shots/RightHandThumb4_RZ_p30_top.jpg) |

### RZ −30°

1. 【主结果】−RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

| 正视 front | 侧视 side | 俯视 top |
|------------|-----------|----------|
| ![](shots/RightHandThumb4_RZ_n30_front.jpg) | ![](shots/RightHandThumb4_RZ_n30_side.jpg) | ![](shots/RightHandThumb4_RZ_n30_top.jpg) |

## `HeadTop_End`

测点：`HeadTop_End`　试验角：±20°

### RX +20°

1. 【主结果】+RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

_（跳过三视图，仅定量）_

### RX −20°

1. 【主结果】−RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

_（跳过三视图，仅定量）_

### RY +20°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

_（跳过三视图，仅定量）_

### RY −20°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

_（跳过三视图，仅定量）_

### RZ +20°

1. 【主结果】+RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

_（跳过三视图，仅定量）_

### RZ −20°

1. 【主结果】−RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

_（跳过三视图，仅定量）_

## `LeftEye`

测点：`LeftEye`　试验角：±20°

### RX +20°

1. 【主结果】+RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

_（跳过三视图，仅定量）_

### RX −20°

1. 【主结果】−RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

_（跳过三视图，仅定量）_

### RY +20°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

_（跳过三视图，仅定量）_

### RY −20°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

_（跳过三视图，仅定量）_

### RZ +20°

1. 【主结果】+RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

_（跳过三视图，仅定量）_

### RZ −20°

1. 【主结果】−RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

_（跳过三视图，仅定量）_

## `LeftToe_End`

测点：`LeftToe_End`　试验角：±20°

### RX +20°

1. 【主结果】+RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

_（跳过三视图，仅定量）_

### RX −20°

1. 【主结果】−RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

_（跳过三视图，仅定量）_

### RY +20°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

_（跳过三视图，仅定量）_

### RY −20°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

_（跳过三视图，仅定量）_

### RZ +20°

1. 【主结果】+RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

_（跳过三视图，仅定量）_

### RZ −20°

1. 【主结果】−RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

_（跳过三视图，仅定量）_

## `RightEye`

测点：`RightEye`　试验角：±20°

### RX +20°

1. 【主结果】+RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

_（跳过三视图，仅定量）_

### RX −20°

1. 【主结果】−RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

_（跳过三视图，仅定量）_

### RY +20°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

_（跳过三视图，仅定量）_

### RY −20°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

_（跳过三视图，仅定量）_

### RZ +20°

1. 【主结果】+RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

_（跳过三视图，仅定量）_

### RZ −20°

1. 【主结果】−RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

_（跳过三视图，仅定量）_

## `RightToe_End`

测点：`RightToe_End`　试验角：±20°

### RX +20°

1. 【主结果】+RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

_（跳过三视图，仅定量）_

### RX −20°

1. 【主结果】−RX → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

_（跳过三视图，仅定量）_

### RY +20°

1. 【主结果】+RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

_（跳过三视图，仅定量）_

### RY −20°

1. 【主结果】−RY → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

_（跳过三视图，仅定量）_

### RZ +20°

1. 【主结果】+RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

_（跳过三视图，仅定量）_

### RZ −20°

1. 【主结果】−RZ → 几乎无位移
2. 【详证】无子骨测点或端点骨；用正/侧/俯三视图交叉验证

定量 (dx,dy,dz)=(`0`, `0`, `0`)，mag=`0`

_（跳过三视图，仅定量）_

## 方法学

1. `focusBone`：对准骨段中点，距离按骨长缩放。
2. 三视图：front(+Z)、side(+X)、top(俯视略偏前)。
3. 每角两条结果：语义/主位移 + 耦合定量；头臂腿优先写入已确认规则。
4. 与 `ALL_BODY_JOINT_AXES.md` 互补：本文提供可复核截图证据链。
