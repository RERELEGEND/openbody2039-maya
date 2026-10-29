/**
 * 各关节定义与角度限位（相对绑定位姿的局部欧拉角增量，单位：度）
 * 轴语义按人体习惯标注；实际拧动以模型局部轴为准，可再微调。
 *
 * Head 用户指定：
 *   RX 仰俯 -45~45 | RY 左右 -80~80 | RZ 侧倾 -40~40
 */

/** @typedef {{ min: number, max: number }} AxisLimit */
/** @typedef {{ label: string, role: string, rx: AxisLimit, ry: AxisLimit, rz: AxisLimit }} JointDef */

/** @type {JointDef} */
const DEFAULT_LIMIT = {
  label: '通用关节',
  role: '未单独标定，使用宽限',
  rx: { min: -90, max: 90 },
  ry: { min: -90, max: 90 },
  rz: { min: -90, max: 90 },
};

/** @type {Record<string, JointDef>} */
export const JOINT_DEFS = {
  // —— 躯干 ——
  Hips: {
    label: '髋根 Hips',
    role: '整身根；RX 前后倾，RY 左右转，RZ 左右倾',
    rx: { min: -30, max: 30 },
    ry: { min: -45, max: 45 },
    rz: { min: -25, max: 25 },
  },
  Spine: {
    label: '腰 Spine',
    role: '下腰弯曲/扭转',
    rx: { min: -25, max: 35 },
    ry: { min: -35, max: 35 },
    rz: { min: -20, max: 20 },
  },
  Spine1: {
    label: '胸下 Spine1',
    role: '中段脊柱',
    rx: { min: -20, max: 30 },
    ry: { min: -30, max: 30 },
    rz: { min: -18, max: 18 },
  },
  Spine2: {
    label: '胸上 Spine2',
    role: '上胸/肩带连接',
    rx: { min: -20, max: 30 },
    ry: { min: -35, max: 35 },
    rz: { min: -18, max: 18 },
  },

  // —— 颈头 ——
  Neck: {
    label: '颈根 Neck',
    role: '颈部基底',
    rx: { min: -35, max: 35 },
    ry: { min: -50, max: 50 },
    rz: { min: -30, max: 30 },
  },
  Neck1: {
    label: '颈中 Neck1',
    role: '颈中段',
    rx: { min: -30, max: 30 },
    ry: { min: -40, max: 40 },
    rz: { min: -25, max: 25 },
  },
  Neck2: {
    label: '颈上 Neck2',
    role: '近头颈段',
    rx: { min: -25, max: 25 },
    ry: { min: -35, max: 35 },
    rz: { min: -20, max: 20 },
  },
  Head: {
    label: '头 Head',
    role: '实测：+RX低头 −RX仰头｜+RY向角色右转｜+RZ向角色左倾',
    rx: { min: -45, max: 45 },
    ry: { min: -80, max: 80 },
    rz: { min: -40, max: 40 },
  },
  LeftEye: {
    label: '左眼',
    role: '眼球朝向（小幅）',
    rx: { min: -25, max: 25 },
    ry: { min: -35, max: 35 },
    rz: { min: -10, max: 10 },
  },
  RightEye: {
    label: '右眼',
    role: '眼球朝向（小幅）',
    rx: { min: -25, max: 25 },
    ry: { min: -35, max: 35 },
    rz: { min: -10, max: 10 },
  },
  HeadTop_End: {
    label: '头顶末端',
    role: '辅助端点，一般不拧',
    rx: { min: -5, max: 5 },
    ry: { min: -5, max: 5 },
    rz: { min: -5, max: 5 },
  },

  // —— 左臂 ——
  LeftShoulder: {
    label: '左锁骨',
    role: '耸肩/内收肩带',
    rx: { min: -20, max: 30 },
    ry: { min: -25, max: 25 },
    rz: { min: -30, max: 30 },
  },
  LeftArm: {
    label: '左上臂',
    role: '垂臂基线见 anatomical；前后摆用RZ（+前/−后）；勿用RX摆臂',
    // 解剖站立≈(75.5,-8.5,0)；RZ 摆臂叠加
    rx: { min: -90, max: 130 },
    ry: { min: -60, max: 90 },
    rz: { min: -90, max: 90 },
  },
  LeftForeArm: {
    label: '左前臂',
    role: '实测：+RX 屈肘（前臂下折）',
    rx: { min: -10, max: 140 },
    ry: { min: -20, max: 20 },
    rz: { min: -20, max: 20 },
  },
  LeftForeArm1: {
    label: '左前臂段1',
    role: '前臂细分',
    rx: { min: -15, max: 40 },
    ry: { min: -25, max: 25 },
    rz: { min: -25, max: 25 },
  },
  LeftForeArm2: {
    label: '左前臂段2',
    role: '近腕前臂',
    rx: { min: -15, max: 30 },
    ry: { min: -25, max: 25 },
    rz: { min: -25, max: 25 },
  },
  LeftHand: {
    label: '左手腕',
    role: '腕屈伸/偏转',
    rx: { min: -60, max: 60 },
    ry: { min: -40, max: 40 },
    rz: { min: -50, max: 50 },
  },

  // —— 右臂 ——
  RightShoulder: {
    label: '右锁骨',
    role: '耸肩/内收肩带',
    rx: { min: -20, max: 30 },
    ry: { min: -25, max: 25 },
    rz: { min: -30, max: 30 },
  },
  RightArm: {
    label: '右上臂',
    role: '垂臂+RX；前后摆用RZ（−前/+后，与左镜像）',
    rx: { min: -90, max: 130 },
    ry: { min: -90, max: 60 },
    rz: { min: -90, max: 90 },
  },
  RightForeArm: {
    label: '右前臂',
    role: '实测：+RX 屈肘（前臂下折）',
    rx: { min: -10, max: 140 },
    ry: { min: -20, max: 20 },
    rz: { min: -20, max: 20 },
  },
  RightForeArm1: {
    label: '右前臂段1',
    role: '前臂细分',
    rx: { min: -15, max: 40 },
    ry: { min: -25, max: 25 },
    rz: { min: -25, max: 25 },
  },
  RightForeArm2: {
    label: '右前臂段2',
    role: '近腕前臂',
    rx: { min: -15, max: 30 },
    ry: { min: -25, max: 25 },
    rz: { min: -25, max: 25 },
  },
  RightHand: {
    label: '右手腕',
    role: '腕屈伸/偏转',
    rx: { min: -60, max: 60 },
    ry: { min: -40, max: 40 },
    rz: { min: -50, max: 50 },
  },

  // —— 腿 ——
  LeftUpLeg: {
    label: '左大腿',
    role: '侧面实测：+RX向前迈，−RX向后',
    rx: { min: -30, max: 110 },
    ry: { min: -40, max: 40 },
    rz: { min: -45, max: 45 },
  },
  LeftLeg: {
    label: '左小腿',
    role: '膝屈（通常单向）',
    rx: { min: -140, max: 5 },
    ry: { min: -15, max: 15 },
    rz: { min: -15, max: 15 },
  },
  LeftFoot: {
    label: '左脚',
    role: '踝',
    rx: { min: -40, max: 40 },
    ry: { min: -25, max: 25 },
    rz: { min: -30, max: 30 },
  },
  LeftToeBase: {
    label: '左脚趾',
    role: '脚趾弯曲',
    rx: { min: -40, max: 20 },
    ry: { min: -10, max: 10 },
    rz: { min: -10, max: 10 },
  },
  LeftToe_End: {
    label: '左趾末端',
    role: '端点',
    rx: { min: -5, max: 5 },
    ry: { min: -5, max: 5 },
    rz: { min: -5, max: 5 },
  },
  RightUpLeg: {
    label: '右大腿',
    role: '侧面实测：+RX向前迈，−RX向后（与左同号）',
    rx: { min: -30, max: 110 },
    ry: { min: -40, max: 40 },
    rz: { min: -45, max: 45 },
  },
  RightLeg: {
    label: '右小腿',
    role: '膝屈',
    rx: { min: -140, max: 5 },
    ry: { min: -15, max: 15 },
    rz: { min: -15, max: 15 },
  },
  RightFoot: {
    label: '右脚',
    role: '踝',
    rx: { min: -40, max: 40 },
    ry: { min: -25, max: 25 },
    rz: { min: -30, max: 30 },
  },
  RightToeBase: {
    label: '右脚趾',
    role: '脚趾弯曲',
    rx: { min: -40, max: 20 },
    ry: { min: -10, max: 10 },
    rz: { min: -10, max: 10 },
  },
  RightToe_End: {
    label: '右趾末端',
    role: '端点',
    rx: { min: -5, max: 5 },
    ry: { min: -5, max: 5 },
    rz: { min: -5, max: 5 },
  },
};

/** 手指默认限位 */
const FINGER_LIMIT = {
  label: '手指关节',
  role: '屈伸为主',
  rx: { min: -10, max: 90 },
  ry: { min: -20, max: 20 },
  rz: { min: -25, max: 25 },
};

const FINGER_PREFIXES = [
  'LeftHandThumb',
  'LeftHandIndex',
  'LeftHandMiddle',
  'LeftHandRing',
  'LeftHandPinky',
  'RightHandThumb',
  'RightHandIndex',
  'RightHandMiddle',
  'RightHandRing',
  'RightHandPinky',
];

/**
 * @param {string} boneName
 * @returns {JointDef}
 */
export function getJointDef(boneName) {
  if (JOINT_DEFS[boneName]) return JOINT_DEFS[boneName];
  if (FINGER_PREFIXES.some((p) => boneName.startsWith(p))) {
    return { ...FINGER_LIMIT, label: boneName };
  }
  return { ...DEFAULT_LIMIT, label: boneName };
}

/**
 * 站姿预设：相对 T-pose 绑姿的局部欧拉增量（度）
 *
 * 映射原则（有文献依据，非主观捏造）：
 * - 本模型 T-pose ≈ 解剖位肩外展 90°；臂贴身解剖位外展 ≈ 0~4.5°
 * - 实测：Arm +RX 使上臂从 T 下垂 → ArmRX ≈ +(90° − 目标外展角)
 * - 实测：ForeArm +RX 对应屈肘 → ForeArmRX ≈ 肘屈曲角
 *
 * 详见 joint-explore/POSE_SOURCES.md
 */
export const STANDING_POSES = {
  tpose: {
    label: 'T-pose',
    hint: '绑定位姿｜肩外展≈90°（行业绑定参考）',
    source: 'bind / Mixamo-T 类绑定惯例',
    deltas: {},
  },

  /** 标准解剖站立：臂贴身、肘微屈（本模型实测调参，非纯文献换算） */
  anatomical: {
    label: '解剖站立',
    hint: '本模型实测贴身站姿（文献肩外展≈4.5°/肘≈15.5°仅作参考）',
    source: '用户对本 GLB 实测调参；文献参考 Matsumura et al., JOSR 2022',
    deltas: {
      // 用户实测：左 (75.5,-8.5,0)；右最终 (76.5,9.5,-6.5)；前臂左 (14.5,0.5,6.5) 右镜像
      LeftArm: { x: 75.5, y: -8.5, z: 0 },
      RightArm: { x: 76.5, y: 9.5, z: -6.5 },
      LeftForeArm: { x: 14.5, y: 0.5, z: 6.5 },
      RightForeArm: { x: 14.5, y: -0.5, z: -6.5 },
      Head: { x: 0, y: 0, z: 0 },
      Neck: { x: 0, y: 0, z: 0 },
    },
  },

  /** A-pose：自 T 下垂约 45°（现代游戏/MoCap 常用休息绑定） */
  aPose: {
    label: 'A-pose',
    hint: '自 T-pose 下垂≈45°（MoCap/游戏行业常用）',
    source: 'MoCap Online Skeleton Guide — A-Pose ≈ 45° down from T-pose',
    deltas: {
      LeftArm: { x: 45, y: 0, z: 0 },
      RightArm: { x: 45, y: 0, z: 0 },
      LeftForeArm: { x: 10, y: 0, z: 0 },
      RightForeArm: { x: 10, y: 0, z: 0 },
    },
  },

  /**
   * 临床“臂贴身 + 肘90°”准备姿（力量/功能测试常用站姿）
   * VALD：standing, arm at side, elbow flexed 90°, forearm neutral
   */
  armAtSideElbow90: {
    label: '贴身屈肘90°',
    hint: '解剖贴身臂 + 肘屈曲90°（VALD 测试起始姿）',
    source: 'VALD DynaMo Lite — Shoulder Strength standing protocols',
    deltas: {
      LeftArm: { x: 75.5, y: -8.5, z: 0 },
      RightArm: { x: 76.5, y: 9.5, z: -6.5 },
      LeftForeArm: { x: 90, y: 0.5, z: 6.5 },
      RightForeArm: { x: 90, y: -0.5, z: -6.5 },
    },
  },

  /**
   * 临床“肩外展90° + 肘90°”（侧平举屈肘）
   * 肩外展90° ≈ 回到 T 臂高 → ArmRX≈0；肘90° → ForeArmRX≈90
   */
  abduct90Elbow90: {
    label: '外展90°屈肘90°',
    hint: '肩外展90°+肘屈90°（HumanTrak / 临床 ROM 常用）',
    source: 'VALD HumanTrak — Shoulder ER @ 90° abduction start position',
    deltas: {
      LeftArm: { x: 0, y: 0, z: 0 },
      RightArm: { x: 0, y: 0, z: 0 },
      LeftForeArm: { x: 90, y: 0, z: 0 },
      RightForeArm: { x: 90, y: 0, z: 0 },
    },
  },

  /**
   * 单侧讲解手势：支撑侧保持解剖站立；示意侧取外展约40°+肘90°
   * （外展40° → ArmRX = 90−40 = 50；肘90 有临床手势协议支撑）
   */
  speakGesture: {
    label: '单侧示意',
    hint: '左解剖站立；右肩外展≈40°+肘90°（功能手势协议）',
    source: '支撑侧: JOSR 2022；示意侧: VALD 90° elbow + moderate abduction',
    deltas: {
      LeftArm: { x: 75.5, y: -8.5, z: 0 },
      LeftForeArm: { x: 14.5, y: 0.5, z: 6.5 },
      RightArm: { x: 50, y: 9.5, z: -6.5 },
      RightForeArm: { x: 90, y: -0.5, z: -6.5 },
      Head: { x: 0, y: -10, z: 0 },
      Neck: { x: 0, y: -5, z: 0 },
    },
  },

  /**
   * NEW_站姿：生活向自然站姿（参考用户提供的正面站姿照片）
   *
   * 轮廓/骨架识别摘要：
   * - 整体：正面生活站姿，非游戏 T/A；重心略偏角色右腿；站距略宽于并脚
   * - 头颈：面朝前，下巴微抬；肩放松水平
   * - 臂：自然垂于体侧；左臂与腰侧留缝（略开/略后）；右臂略靠前贴大腿前侧；肘软屈；手放松
   * - 髋：微不对称承重；躯干大体朝前
   * - 腿：右腿主承重较直；左腿略前+软膝；双脚尖外展约 15~20°
   *
   * 角度相对 T-pose 绑姿；臂基线参考 anatomical 实测再做生活向微调
   */
  newStand: {
    label: 'NEW_站姿',
    hint: '生活向自然站｜站距收窄·软膝·臂下垂留缝·脚尖微外展·大按钮启动态（探视/摆动）',
    source: '用户参考图正面轮廓识别 → 本 GLB 关节轴向换算',
    /** 点击后启用 poseLife：抬头±15°探视 + 眼球微动/左右渐变 + 微呼吸 */
    alive: true,
    deltas: {
      // 髋/躯干：微承重侧移（幅度收紧，避免跨太大）
      Hips: { x: 0.5, y: -2, z: 1.5 },
      Spine: { x: -1.5, y: 1, z: -0.5 },
      Spine1: { x: -0.5, y: 0.5, z: 0 },
      Spine2: { x: 0, y: 0, z: 0 },
      // 头颈面朝前；抬头±15°探视由 poseLife（同 Idle）叠加
      // 左臂（角色左）：比解剖站略打开，RZ 略后 → 腰侧留三角空隙
      LeftShoulder: { x: 2, y: 0, z: -2 },
      LeftArm: { x: 71, y: -6, z: -4 },
      LeftForeArm: { x: 12, y: 0.5, z: 4 },
      LeftHand: { x: 6, y: 0, z: -4 },
      // 右臂（角色右）：自然下垂，−RZ 向前贴近大腿前侧
      RightShoulder: { x: 2, y: 0, z: 2 },
      RightArm: { x: 73, y: 8, z: -11 },
      RightForeArm: { x: 11, y: -0.5, z: -4 },
      RightHand: { x: 6, y: 0, z: 4 },
      // 腿：站距收窄；左略前软膝、右主承重；脚尖微外展
      LeftUpLeg: { x: 2.5, y: 4, z: 2 },
      LeftLeg: { x: -7, y: 0, z: 0 },
      LeftFoot: { x: 2, y: 4, z: 1 },
      RightUpLeg: { x: -1, y: -4, z: 2 },
      RightLeg: { x: -2, y: 0, z: 0 },
      RightFoot: { x: 2, y: -4, z: -1 },
    },
  },
};

