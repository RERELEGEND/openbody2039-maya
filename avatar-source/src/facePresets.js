/**
 * MAYA 3.0 · 面部表情预设表（dev 与 Stage 共用唯一数据源）
 *
 * 设计要点
 * - 权重键全部来自模型实际开放的 51 个 ARKit Morph，已逐名校验，不存在拼写漂移。
 * - 表情按钮默认走「渐变过渡」：tweenToPreset() 使用 easeInOutCubic，
 *   单个表情可用 PRESET_DURATION 覆盖时长，做到快慢有别的渐进感。
 * - 连串动作（眨眼两下 / 叹气 / 挤眉弄眼）用 PRESET_SEQUENCES 描述，
 *   由播放器逐步驱动，每一步仍是渐变。
 *
 * 环境：ubuntu 22.04 · Node 20+ · Vite 6 · three 0.169
 */

/** 即点即响应的表情：不做慢过渡，避免「眨眼要 0.6 秒」的违和感 */
export const PRESET_INSTANT = new Set(['blink', 'winkLeft', 'winkRight', 'openMouth']);

/**
 * 会被注视系统（lookAtCamera / eyeFollowPointer）每帧覆盖的眼部 morph。
 * 命中这些键的表情在生效期间需要让注视系统暂时停写眼球，否则眼部成分永远看不见。
 * 注意：不含 eyeBlink* —— 注视系统不写眨眼，眨眼与注视无冲突。
 */
export const GAZE_CONFLICT_MORPHS = [
  'eyeLookOutLeft',
  'eyeLookInLeft',
  'eyeLookOutRight',
  'eyeLookInRight',
  'eyeLookUpLeft',
  'eyeLookUpRight',
  'eyeLookDownLeft',
  'eyeLookDownRight',
  'eyeWideLeft',
  'eyeWideRight',
  'eyeSquintLeft',
  'eyeSquintRight',
];

/**
 * 该预设是否含眼部朝向/睁合成分（需要注视让位）。
 * @param {string} name
 * @returns {boolean}
 */
export function presetUsesGazeMorphs(name) {
  const w = MORPH_PRESETS[name];
  if (!w) return false;
  return GAZE_CONFLICT_MORPHS.some((m) => (w[m] || 0) > 0);
}

/**
 * 每个表情的推荐过渡时长（秒）。缺省则用面板滑块值（默认 0.6s）。
 * 数值越大越「逐渐」，这是让面部动作有轻重缓急的关键。
 */
export const PRESET_DURATION = {
  neutral: 0.55,
  blink: 0.12,
  winkLeft: 0.16,
  winkRight: 0.16,
  openMouth: 0.3,
  squint: 0.5,
  pucker: 0.55,
  cheekPuff: 0.6,
  smile: 0.55,
  bigSmile: 0.5,
  smileWave: 0.6,
  shy: 0.95,
  relieved: 1.05,
  confident: 0.7,
  smug: 0.75,
  smirk: 0.65,
  flirty: 0.5,
  kiss: 0.7,
  sad: 0.8,
  worried: 1.0,
  pout: 0.9,
  bittersweet: 1.1,
  sleepy: 1.2,
  angry: 0.55,
  proud: 0.8,
  sneer: 0.7,
  disgust: 0.6,
  nauseated: 0.75,
  grimace: 0.45,
  surprise: 0.45,
  gasp: 0.35,
  shock: 0.5,
  fear: 0.6,
  curious: 0.6,
  puzzled: 0.55,
  thinking: 0.8,
  browRaise: 0.4,
  focus: 0.6,
  awkward: 0.7,
  yawn: 1.4,
  chew: 0.4,
  lickLips: 0.55,
  lookLeft: 0.5,
  lookRight: 0.5,
  lookUp: 0.5,
  lookDown: 0.5,
};

/**
 * 连串表情：每一步 { preset, duration, hold }。
 * duration = 过渡到该步的时长；hold = 到位后保持时长。最后一步 hold 用 0。
 */
export const PRESET_SEQUENCES = {
  doubleBlink: [
    { preset: 'blink', duration: 0.1, hold: 0.1 },
    { preset: 'neutral', duration: 0.1, hold: 0.06 },
    { preset: 'blink', duration: 0.1, hold: 0.1 },
    { preset: 'neutral', duration: 0.12, hold: 0 },
  ],
  sigh: [
    { preset: 'sighIn', duration: 0.55, hold: 0.25 },
    { preset: 'sighOut', duration: 0.7, hold: 0 },
  ],
  eyebrowWaggle: [
    { preset: 'browLeftUp', duration: 0.22, hold: 0.1 },
    { preset: 'browRightUp', duration: 0.22, hold: 0.1 },
    { preset: 'browLeftUp', duration: 0.22, hold: 0.1 },
    { preset: 'smirk', duration: 0.3, hold: 0 },
  ],
};

/**
 * 全部预设权重。键名保持与早期版本完全一致，避免打断既有调用点
 * （speechDrive 心情列表、smileWaveCycle 的 'smileWave'、applyMorphPreset('neutral') 等）。
 */
export const MORPH_PRESETS = {
  neutral: {},
  reset: {},

  /* ── 基础 ───────────────────────────────────────── */
  blink: { eyeBlinkLeft: 1, eyeBlinkRight: 1 },
  doubleBlink: { eyeBlinkLeft: 1, eyeBlinkRight: 1 },
  winkLeft: { eyeBlinkLeft: 1, mouthSmileLeft: 0.35 },
  winkRight: { eyeBlinkRight: 1, mouthSmileRight: 0.35 },
  openMouth: { jawOpen: 0.85 },
  squint: {
    eyeSquintLeft: 0.85,
    eyeSquintRight: 0.85,
    cheekSquintLeft: 0.45,
    cheekSquintRight: 0.45,
    browDownLeft: 0.25,
    browDownRight: 0.25,
  },
  pucker: {
    mouthPucker: 0.9,
    mouthFunnel: 0.35,
    eyeSquintLeft: 0.15,
    eyeSquintRight: 0.15,
  },
  cheekPuff: { cheekPuff: 1, mouthPucker: 0.2 },

  /* ── 亲和 ───────────────────────────────────────── */
  smile: {
    mouthSmileLeft: 0.8,
    mouthSmileRight: 0.8,
    cheekSquintLeft: 0.25,
    cheekSquintRight: 0.25,
    // 杜兴式微笑：眼睛微弯才不「假笑」
    eyeSquintLeft: 0.14,
    eyeSquintRight: 0.14,
  },
  bigSmile: {
    mouthSmileLeft: 1,
    mouthSmileRight: 1,
    cheekSquintLeft: 0.55,
    cheekSquintRight: 0.55,
    eyeSquintLeft: 0.35,
    eyeSquintRight: 0.35,
    jawOpen: 0.2,
  },
  /** 微笑挥手：轻柔社交笑（动态层再叠呼吸/眉眼微动） */
  smileWave: {
    mouthSmileLeft: 0.38,
    mouthSmileRight: 0.38,
    cheekSquintLeft: 0.16,
    cheekSquintRight: 0.16,
    eyeSquintLeft: 0.11,
    eyeSquintRight: 0.11,
    browOuterUpLeft: 0.07,
    browOuterUpRight: 0.07,
    browInnerUp: 0.05,
  },
  shy: {
    mouthSmileLeft: 0.45,
    mouthSmileRight: 0.45,
    browInnerUp: 0.55,
    eyeLookDownLeft: 0.5,
    eyeLookDownRight: 0.5,
    cheekSquintLeft: 0.3,
    cheekSquintRight: 0.3,
  },
  relieved: {
    eyeBlinkLeft: 0.5,
    eyeBlinkRight: 0.5,
    mouthSmileLeft: 0.5,
    mouthSmileRight: 0.5,
    browInnerUp: 0.25,
    jawOpen: 0.1,
    cheekSquintLeft: 0.25,
    cheekSquintRight: 0.25,
  },
  confident: {
    browOuterUpLeft: 0.5,
    browOuterUpRight: 0.5,
    mouthSmileLeft: 0.6,
    mouthSmileRight: 0.6,
    eyeSquintLeft: 0.45,
    eyeSquintRight: 0.45,
    mouthDimpleLeft: 0.4,
    mouthDimpleRight: 0.4,
  },
  smug: {
    mouthSmileLeft: 0.7,
    mouthSmileRight: 0.7,
    eyeSquintLeft: 0.5,
    eyeSquintRight: 0.5,
    browOuterUpLeft: 0.35,
    cheekSquintLeft: 0.4,
    cheekSquintRight: 0.4,
    mouthDimpleLeft: 0.35,
    mouthDimpleRight: 0.35,
  },
  smirk: {
    mouthSmileLeft: 1,
    mouthSmileRight: 0.25,
    browOuterUpLeft: 0.6,
    eyeSquintLeft: 0.4,
    cheekSquintLeft: 0.3,
  },
  flirty: {
    eyeBlinkLeft: 0.95,
    mouthSmileLeft: 0.75,
    mouthSmileRight: 0.6,
    browOuterUpLeft: 0.5,
    cheekSquintLeft: 0.3,
  },
  kiss: {
    mouthPucker: 1,
    mouthFunnel: 0.3,
    cheekSquintLeft: 0.45,
    cheekSquintRight: 0.45,
    eyeSquintLeft: 0.45,
    eyeSquintRight: 0.45,
  },

  /* ── 低落 ───────────────────────────────────────── */
  sad: {
    mouthFrownLeft: 0.75,
    mouthFrownRight: 0.75,
    browInnerUp: 0.55,
    browDownLeft: 0.35,
    browDownRight: 0.35,
    mouthStretchLeft: 0.2,
    mouthStretchRight: 0.2,
  },
  worried: {
    browInnerUp: 0.9,
    browOuterUpLeft: 0.3,
    browOuterUpRight: 0.3,
    mouthFrownLeft: 0.5,
    mouthFrownRight: 0.5,
    eyeLookDownLeft: 0.2,
    eyeLookDownRight: 0.2,
  },
  pout: {
    mouthPucker: 0.7,
    mouthFrownLeft: 0.6,
    mouthFrownRight: 0.6,
    browInnerUp: 0.8,
    eyeLookDownLeft: 0.35,
    eyeLookDownRight: 0.35,
  },
  bittersweet: {
    mouthSmileLeft: 0.5,
    mouthSmileRight: 0.5,
    mouthFrownLeft: 0.35,
    mouthFrownRight: 0.35,
    browInnerUp: 0.75,
    eyeSquintLeft: 0.4,
    eyeSquintRight: 0.4,
  },
  sleepy: {
    eyeBlinkLeft: 0.65,
    eyeBlinkRight: 0.65,
    browDownLeft: 0.3,
    browDownRight: 0.3,
    jawOpen: 0.22,
    mouthShrugUpper: 0.2,
  },

  /* ── 强硬 ───────────────────────────────────────── */
  angry: {
    browDownLeft: 0.9,
    browDownRight: 0.9,
    noseSneerLeft: 0.45,
    noseSneerRight: 0.45,
    mouthFrownLeft: 0.4,
    mouthFrownRight: 0.4,
    eyeSquintLeft: 0.35,
    eyeSquintRight: 0.35,
    jawOpen: 0.12,
  },
  proud: {
    noseSneerLeft: 0.35,
    noseSneerRight: 0.35,
    browDownLeft: 0.5,
    browDownRight: 0.5,
    mouthPressLeft: 0.4,
    mouthPressRight: 0.4,
    // 傲气＝下巴抬高、视线俯视对方
    eyeLookDownLeft: 0.3,
    eyeLookDownRight: 0.3,
    jawForward: 0.25,
  },
  sneer: {
    mouthSmileLeft: 0.55,
    noseSneerLeft: 0.7,
    noseSneerRight: 0.5,
    browDownLeft: 0.6,
    browDownRight: 0.5,
    eyeSquintLeft: 0.35,
  },
  disgust: {
    noseSneerLeft: 0.85,
    noseSneerRight: 0.85,
    mouthUpperUpLeft: 0.55,
    mouthUpperUpRight: 0.55,
    browDownLeft: 0.4,
    browDownRight: 0.4,
    eyeSquintLeft: 0.3,
    eyeSquintRight: 0.3,
  },
  nauseated: {
    noseSneerLeft: 1,
    noseSneerRight: 1,
    mouthUpperUpLeft: 0.7,
    mouthUpperUpRight: 0.7,
    browDownLeft: 0.5,
    browDownRight: 0.5,
    eyeSquintLeft: 0.6,
    eyeSquintRight: 0.6,
    jawOpen: 0.25,
  },
  grimace: {
    mouthStretchLeft: 0.9,
    mouthStretchRight: 0.9,
    jawOpen: 0.35,
    noseSneerLeft: 0.4,
    noseSneerRight: 0.4,
    browDownLeft: 0.3,
    browDownRight: 0.3,
    eyeSquintLeft: 0.3,
    eyeSquintRight: 0.3,
  },

  /* ── 惊惧 ───────────────────────────────────────── */
  surprise: {
    jawOpen: 0.45,
    browInnerUp: 0.7,
    browOuterUpLeft: 0.55,
    browOuterUpRight: 0.55,
    eyeWideLeft: 0.7,
    eyeWideRight: 0.7,
  },
  gasp: {
    jawOpen: 0.55,
    eyeWideLeft: 0.8,
    eyeWideRight: 0.8,
    browOuterUpLeft: 0.6,
    browOuterUpRight: 0.6,
  },
  shock: {
    jawOpen: 0.8,
    eyeWideLeft: 0.95,
    eyeWideRight: 0.95,
    browOuterUpLeft: 0.8,
    browOuterUpRight: 0.8,
    browInnerUp: 0.5,
  },
  fear: {
    browInnerUp: 0.8,
    browOuterUpLeft: 0.65,
    browOuterUpRight: 0.65,
    eyeWideLeft: 0.85,
    eyeWideRight: 0.85,
    jawOpen: 0.35,
    mouthStretchLeft: 0.35,
    mouthStretchRight: 0.35,
  },

  /* ── 疑惑思考 ───────────────────────────────────── */
  curious: {
    browOuterUpLeft: 0.55,
    browInnerUp: 0.35,
    eyeSquintLeft: 0.25,
    mouthPucker: 0.3,
    eyeLookUpLeft: 0.2,
  },
  puzzled: {
    browInnerUp: 0.7,
    browDownLeft: 0.5,
    mouthPucker: 0.35,
    mouthLeft: 0.3,
    eyeSquintLeft: 0.2,
  },
  thinking: {
    eyeLookUpLeft: 0.7,
    eyeLookUpRight: 0.5,
    browDownLeft: 0.4,
    browInnerUp: 0.3,
    mouthPressLeft: 0.5,
    mouthPressRight: 0.35,
    jawLeft: 0.15,
  },
  browRaise: {
    browOuterUpLeft: 0.9,
    browInnerUp: 0.3,
    eyeWideLeft: 0.4,
    mouthSmileLeft: 0.2,
  },
  focus: {
    browDownLeft: 0.6,
    browDownRight: 0.6,
    eyeSquintLeft: 0.4,
    eyeSquintRight: 0.4,
    mouthPressLeft: 0.35,
    mouthPressRight: 0.35,
  },
  awkward: {
    mouthPressLeft: 0.6,
    mouthPressRight: 0.6,
    mouthStretchLeft: 0.35,
    mouthStretchRight: 0.35,
    browInnerUp: 0.5,
    eyeLookDownLeft: 0.3,
    eyeLookDownRight: 0.3,
  },

  /* ── 生理动作 ───────────────────────────────────── */
  yawn: {
    jawOpen: 1,
    eyeBlinkLeft: 0.8,
    eyeBlinkRight: 0.8,
    browInnerUp: 0.4,
    mouthStretchLeft: 0.25,
    mouthStretchRight: 0.25,
  },
  chew: {
    jawOpen: 0.25,
    mouthClose: 0.4,
    jawLeft: 0.2,
    cheekPuff: 0.15,
    mouthRollLower: 0.2,
  },
  lickLips: {
    mouthRollLower: 0.5,
    mouthRollUpper: 0.4,
    jawOpen: 0.15,
    mouthPucker: 0.25,
  },
  eyebrowWaggle: {
    browOuterUpLeft: 0.9,
    browDownRight: 0.7,
    mouthSmileLeft: 0.4,
    eyeBlinkLeft: 0.4,
  },

  /* ── 视线 ───────────────────────────────────────── */
  lookLeft: { eyeLookOutLeft: 0.85, eyeLookInRight: 0.85 },
  lookRight: { eyeLookInLeft: 0.85, eyeLookOutRight: 0.85 },
  lookUp: {
    eyeLookUpLeft: 0.85,
    eyeLookUpRight: 0.85,
    browOuterUpLeft: 0.2,
    browOuterUpRight: 0.2,
  },
  lookDown: {
    eyeLookDownLeft: 0.85,
    eyeLookDownRight: 0.85,
    browDownLeft: 0.15,
    browDownRight: 0.15,
  },

  /* ── 连串动作的中间态（不作为按钮出现）─────────────── */
  sighIn: {
    jawOpen: 0.42,
    browInnerUp: 0.5,
    eyeBlinkLeft: 0.35,
    eyeBlinkRight: 0.35,
    mouthFunnel: 0.3,
  },
  sighOut: {
    jawOpen: 0.18,
    mouthFunnel: 0.45,
    mouthShrugLower: 0.35,
    browDownLeft: 0.25,
    browDownRight: 0.25,
    cheekPuff: 0.18,
  },
  browLeftUp: { browOuterUpLeft: 0.95, browInnerUp: 0.2, eyeWideLeft: 0.35 },
  browRightUp: { browOuterUpRight: 0.95, browInnerUp: 0.2, eyeWideRight: 0.35 },
};

export const PRESET_LABELS = {
  neutral: '中性',
  smile: '微笑',
  bigSmile: '大笑',
  smileWave: '微笑挥手',
  shy: '害羞',
  relieved: '释然',
  confident: '自信',
  smug: '得意',
  smirk: '坏笑',
  flirty: '挑逗',
  kiss: '飞吻',
  sad: '难过',
  worried: '担忧',
  pout: '委屈',
  bittersweet: '哭笑不得',
  sleepy: '困倦',
  angry: '生气',
  proud: '傲气',
  sneer: '冷笑',
  disgust: '厌恶',
  nauseated: '反胃',
  grimace: '咧嘴',
  surprise: '惊讶',
  gasp: '轻惊',
  shock: '震惊',
  fear: '害怕',
  curious: '好奇',
  puzzled: '疑惑',
  thinking: '思考',
  browRaise: '挑眉',
  focus: '专注',
  awkward: '尴尬',
  yawn: '打哈欠',
  chew: '咀嚼',
  lickLips: '舔唇',
  eyebrowWaggle: '挤眉弄眼',
  doubleBlink: '眨两下',
  sigh: '叹气',
  pucker: '嘟嘴',
  cheekPuff: '鼓腮',
  openMouth: '张嘴',
  squint: '眯眼',
  blink: '眨眼',
  winkLeft: '左眨眼',
  winkRight: '右眨眼',
  lookLeft: '看左',
  lookRight: '看右',
  lookUp: '看上',
  lookDown: '看下',
};

export const PRESET_EMOJI = {
  neutral: '😐',
  smile: '🙂',
  bigSmile: '😄',
  smileWave: '👋',
  shy: '😊',
  relieved: '😌',
  confident: '😎',
  smug: '😏',
  smirk: '😼',
  flirty: '😜',
  kiss: '😘',
  sad: '😢',
  worried: '😟',
  pout: '🥺',
  bittersweet: '🥲',
  sleepy: '😴',
  angry: '😠',
  proud: '😤',
  sneer: '😒',
  disgust: '🤢',
  nauseated: '🤮',
  grimace: '😬',
  surprise: '😯',
  gasp: '😲',
  shock: '😱',
  fear: '😨',
  curious: '🧐',
  puzzled: '🤨',
  thinking: '🤔',
  browRaise: '😯',
  focus: '🎯',
  awkward: '😅',
  yawn: '🥱',
  chew: '😋',
  lickLips: '😛',
  eyebrowWaggle: '😝',
  doubleBlink: '😑',
  sigh: '😮‍💨',
  pucker: '😗',
  cheekPuff: '😗',
  openMouth: '😮',
  squint: '😑',
  blink: '😑',
  winkLeft: '😉',
  winkRight: '😉',
  lookLeft: '👈',
  lookRight: '👉',
  lookUp: '👆',
  lookDown: '👇',
};

/** 面板分组（仅决定按钮排布顺序，不影响可用性） */
export const PRESET_GROUPS = [
  {
    id: 'basic',
    label: '基础',
    keys: ['neutral', 'blink', 'doubleBlink', 'winkLeft', 'winkRight', 'openMouth', 'squint', 'pucker', 'cheekPuff'],
  },
  {
    id: 'warm',
    label: '亲和',
    keys: ['smile', 'bigSmile', 'smileWave', 'shy', 'relieved', 'confident', 'smug', 'smirk', 'flirty', 'kiss'],
  },
  {
    id: 'low',
    label: '低落',
    keys: ['sad', 'worried', 'pout', 'bittersweet', 'sleepy', 'sigh'],
  },
  {
    id: 'hard',
    label: '强硬',
    keys: ['angry', 'proud', 'sneer', 'disgust', 'nauseated', 'grimace'],
  },
  {
    id: 'alert',
    label: '惊惧',
    keys: ['surprise', 'gasp', 'shock', 'fear'],
  },
  {
    id: 'think',
    label: '疑惑思考',
    keys: ['curious', 'puzzled', 'thinking', 'browRaise', 'focus', 'awkward'],
  },
  {
    id: 'idle',
    label: '生理动作',
    keys: ['yawn', 'chew', 'lickLips', 'eyebrowWaggle'],
  },
  {
    id: 'gaze',
    label: '视线',
    keys: ['lookLeft', 'lookRight', 'lookUp', 'lookDown'],
  },
];

/**
 * 把一个容器渲染成「emoji + 中文」的分组表情面板。
 * dev(:5173) 与 Stage 复用同一函数，保证两边表情完全一致。
 *
 * @param {HTMLElement | null} container  目标容器（如 #preset-instant）
 * @param {(key: string) => void} onPick  点击某个表情时回调
 * @returns {number} 生成的按钮数量
 */
export function renderPresetPalette(container, onPick) {
  if (!container) return 0;
  container.innerHTML = '';
  let count = 0;

  PRESET_GROUPS.forEach((group) => {
    const keys = group.keys.filter((key) => key in MORPH_PRESETS);
    if (keys.length === 0) return;

    const wrap = document.createElement('div');
    wrap.className = 'preset-group';
    wrap.dataset.presetGroup = group.id;

    const title = document.createElement('span');
    title.className = 'preset-group__title';
    title.textContent = group.label;
    wrap.appendChild(title);

    const row = document.createElement('div');
    row.className = 'preset-group__row';
    keys.forEach((key) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.dataset.preset = key;
      btn.title = `${PRESET_LABELS[key] || key} (${key})`;
      btn.textContent = `${PRESET_EMOJI[key] || '•'} ${PRESET_LABELS[key] || key}`;
      btn.addEventListener('click', () => onPick(key));
      row.appendChild(btn);
      count += 1;
    });

    wrap.appendChild(row);
    container.appendChild(wrap);
  });

  return count;
}

/**
 * 面部表情功能总装：把「面板 UI + 渐变时长策略 + 连串播放」全部内聚到本模块，
 * 使宿主（main.js / runtimeBoot.js）只需极少接线，降低被误回退的风险。
 *
 * 关键设计：本模块**不直接写 Morph**，一律通过宿主注入的 tweenToPreset / applyPreset，
 * 保证全工程只有一个 Morph 写入源，避免与语音、动作流互相打架。
 * 连串播放用自带 rAF 驱动，因此宿主无需在渲染循环里挂钩子。
 *
 * @param {object} host
 * @param {(name: string, opts?: { duration?: number }) => void} host.tweenToPreset 渐变到某预设
 * @param {(name: string) => void} host.applyPreset 立即应用某预设
 * @param {() => boolean} [host.isSpeechActive] 语音开麦中（此时唇形优先，放弃连串）
 * @param {() => boolean} [host.isTweenActive] 宿主渐变进行中
 * @param {() => HTMLElement | null} [host.getPanel] 面板容器，默认 #preset-instant
 * @returns {{
 *   mount: (container?: HTMLElement | null) => number,
 *   pickPreset: (key: string) => void,
 *   startSequence: (name: string) => boolean,
 *   stopSequence: () => void,
 *   isSequenceActive: () => boolean,
 * }}
 */
export function createFacePresets(host) {
  const {
    tweenToPreset,
    applyPreset,
    isSpeechActive = () => false,
    isTweenActive = () => false,
    getPanel = () => document.getElementById('preset-instant'),
  } = host;

  const sequence = { active: false, steps: [], index: -1, holdTimer: 0, rafId: 0, lastTime: 0 };

  function stopSequence() {
    sequence.active = false;
    sequence.steps = [];
    sequence.index = -1;
    sequence.holdTimer = 0;
    if (sequence.rafId && typeof cancelAnimationFrame === 'function') {
      cancelAnimationFrame(sequence.rafId);
    }
    sequence.rafId = 0;
  }

  function stepOnce(delta) {
    if (isSpeechActive()) {
      stopSequence();
      return;
    }
    // 等宿主当前这一步渐变走完
    if (isTweenActive()) return;

    if (sequence.holdTimer > 0) {
      sequence.holdTimer -= delta;
      if (sequence.holdTimer > 0) return;
    }

    sequence.index += 1;
    if (sequence.index >= sequence.steps.length) {
      stopSequence();
      return;
    }

    const step = sequence.steps[sequence.index];
    tweenToPreset(step.preset, { duration: step.duration });
    sequence.holdTimer = Number(step.hold) || 0;
  }

  function tick(now) {
    if (!sequence.active) {
      sequence.rafId = 0;
      return;
    }
    // 上限 0.1s：标签页被挂起后回来不会一次跳完
    const delta = Math.min(0.1, (now - sequence.lastTime) / 1000);
    sequence.lastTime = now;
    stepOnce(delta);
    sequence.rafId = sequence.active ? requestAnimationFrame(tick) : 0;
  }

  function startSequence(name) {
    const steps = PRESET_SEQUENCES[name];
    if (!steps || steps.length === 0) return false;
    stopSequence();
    sequence.active = true;
    sequence.steps = steps;
    sequence.index = -1;
    sequence.holdTimer = 0;
    sequence.lastTime = performance.now();
    sequence.rafId = requestAnimationFrame(tick);
    return true;
  }

  function pickPreset(key) {
    stopSequence();
    if (startSequence(key)) return; // 连串动作（眨两下 / 叹气 / 挤眉弄眼）
    if (PRESET_INSTANT.has(key)) applyPreset(key); // 眨眼类：即时响应
    else tweenToPreset(key, { duration: PRESET_DURATION[key] }); // 其余：按推荐时长渐变
  }

  return {
    mount(container) {
      return renderPresetPalette(container ?? getPanel(), pickPreset);
    },
    pickPreset,
    startSequence,
    stopSequence,
    isSequenceActive: () => sequence.active,
  };
}

