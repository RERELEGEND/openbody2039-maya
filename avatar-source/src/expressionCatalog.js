/**
 * MAYA 3.0 · 表情目录（角色 / 协同说话元数据）
 *
 * 真源权重仍在 facePresets.js；本模块只标注：
 *   - role: mood（粘性）| flash（瞬时）| gaze | sequence | utility
 *   - coSpeech: 是否适合作为说话底色
 *   - moodWeights: 说话友好权重（去掉 jawOpen / pucker 等与视素抢嘴的键）
 *
 * 环境：ubuntu 22.04 · Node 20+ · Vite 6 · 浏览器 ES Module
 */

import {
  MORPH_PRESETS,
  PRESET_LABELS,
  PRESET_EMOJI,
  PRESET_DURATION,
  PRESET_INSTANT,
  PRESET_SEQUENCES,
  PRESET_GROUPS,
} from './facePresets.js';

/** 说话层独占的嘴部键：mood 协同版必须剔除，避免顶视素 */
export const SPEECH_OWNED_MORPHS = new Set([
  'jawOpen',
  'jawForward',
  'jawLeft',
  'jawRight',
  'mouthClose',
  'mouthFunnel',
  'mouthPucker',
  'mouthStretchLeft',
  'mouthStretchRight',
  'mouthUpperUpLeft',
  'mouthUpperUpRight',
  'mouthLowerDownLeft',
  'mouthLowerDownRight',
  'mouthPressLeft',
  'mouthPressRight',
  'mouthRollLower',
  'mouthRollUpper',
  'mouthShrugLower',
  'mouthShrugUpper',
]);

/** 协同说话起步白名单（计划 P0） */
export const COSPEECH_MOOD_IDS = [
  'neutral',
  'smile',
  'smileWave',
  'confident',
  'curious',
  'puzzled',
  'focus',
  'relieved',
  'sad',
  'angry',
  'shy',
  'bigSmile',
];

/**
 * 每个预设的角色与意图关键词。
 * 未列出的 key 按启发式推断（见 inferRole）。
 */
const CATALOG_OVERRIDE = {
  neutral: { role: 'mood', coSpeech: true, intentKeywords: ['中性', 'neutral', '复位脸'], defaultGain: 0.4 },
  smile: { role: 'mood', coSpeech: true, intentKeywords: ['微笑', '笑容', '笑笑', 'smile'], defaultGain: 0.55 },
  smileWave: { role: 'mood', coSpeech: true, intentKeywords: ['温柔', '柔和', 'gentle'], defaultGain: 0.5 },
  confident: { role: 'mood', coSpeech: true, intentKeywords: ['自信', '有底气', 'confident'], defaultGain: 0.55 },
  curious: { role: 'mood', coSpeech: true, intentKeywords: ['好奇', 'curious'], defaultGain: 0.55 },
  puzzled: { role: 'mood', coSpeech: true, intentKeywords: ['疑惑', '不解', 'puzzled'], defaultGain: 0.55 },
  focus: { role: 'mood', coSpeech: true, intentKeywords: ['认真', '专注', '严肃', 'focus'], defaultGain: 0.5 },
  relieved: { role: 'mood', coSpeech: true, intentKeywords: ['释然', '放心', 'relieved'], defaultGain: 0.5 },
  sad: { role: 'mood', coSpeech: true, intentKeywords: ['难过', '伤心', '悲伤', 'sad'], defaultGain: 0.5 },
  angry: { role: 'mood', coSpeech: true, intentKeywords: ['生气', '愤怒', '恼火', 'angry'], defaultGain: 0.55 },
  shy: { role: 'mood', coSpeech: true, intentKeywords: ['害羞', '不好意思', 'shy'], defaultGain: 0.5 },
  bigSmile: { role: 'mood', coSpeech: true, intentKeywords: ['大笑', '开怀', '激动', '兴奋', 'excited'], defaultGain: 0.5 },

  smug: { role: 'mood', coSpeech: false, intentKeywords: ['得意'], defaultGain: 0.5 },
  smirk: { role: 'mood', coSpeech: false, intentKeywords: ['坏笑'], defaultGain: 0.5 },
  worried: { role: 'mood', coSpeech: false, intentKeywords: ['担忧'], defaultGain: 0.5 },
  pout: { role: 'mood', coSpeech: false, intentKeywords: ['委屈'], defaultGain: 0.5 },
  bittersweet: { role: 'mood', coSpeech: false, intentKeywords: ['哭笑不得'], defaultGain: 0.5 },
  sleepy: { role: 'mood', coSpeech: false, intentKeywords: ['疲惫', '累了', '困', 'sleepy'], defaultGain: 0.45 },
  proud: { role: 'mood', coSpeech: false, intentKeywords: ['骄傲'], defaultGain: 0.5 },
  thinking: { role: 'mood', coSpeech: false, intentKeywords: ['思考', '想一下', 'thinking'], defaultGain: 0.5 },
  awkward: { role: 'mood', coSpeech: false, intentKeywords: ['尴尬'], defaultGain: 0.5 },

  blink: { role: 'flash', coSpeech: false, intentKeywords: ['眨眼', 'blink'] },
  winkLeft: { role: 'flash', coSpeech: false },
  winkRight: { role: 'flash', coSpeech: false },
  openMouth: { role: 'flash', coSpeech: false },
  squint: { role: 'flash', coSpeech: false },
  pucker: { role: 'flash', coSpeech: false },
  cheekPuff: { role: 'flash', coSpeech: false },
  surprise: { role: 'flash', coSpeech: false, intentKeywords: ['惊讶', '吃惊', 'surprise', '诧异', 'astonish'] },
  gasp: { role: 'flash', coSpeech: false },
  shock: { role: 'flash', coSpeech: false },
  fear: { role: 'flash', coSpeech: false, intentKeywords: ['害怕', 'fear'] },
  flirty: { role: 'flash', coSpeech: false },
  kiss: { role: 'flash', coSpeech: false },
  sneer: { role: 'flash', coSpeech: false },
  disgust: { role: 'flash', coSpeech: false, intentKeywords: ['厌恶', 'disgust'] },
  nauseated: { role: 'flash', coSpeech: false },
  grimace: { role: 'flash', coSpeech: false },
  browRaise: { role: 'flash', coSpeech: false },
  yawn: { role: 'flash', coSpeech: false },
  chew: { role: 'flash', coSpeech: false },
  lickLips: { role: 'flash', coSpeech: false },

  lookLeft: { role: 'gaze', coSpeech: false },
  lookRight: { role: 'gaze', coSpeech: false },
  lookUp: { role: 'gaze', coSpeech: false },
  lookDown: { role: 'gaze', coSpeech: false },

  doubleBlink: { role: 'sequence', coSpeech: false },
  sigh: { role: 'sequence', coSpeech: false },
  eyebrowWaggle: { role: 'sequence', coSpeech: false },

  reset: { role: 'utility', coSpeech: false },
};

/**
 * @param {string} id
 * @returns {'mood'|'flash'|'gaze'|'sequence'|'utility'}
 */
function inferRole(id) {
  if (PRESET_SEQUENCES[id]) return 'sequence';
  if (/^look(Left|Right|Up|Down)$/.test(id)) return 'gaze';
  if (PRESET_INSTANT.has(id)) return 'flash';
  if (id === 'reset' || id === 'neutral') return id === 'reset' ? 'utility' : 'mood';
  // 默认：有持续情绪面貌的当 mood，其余 flash
  const warm = ['smile', 'bigSmile', 'smileWave', 'shy', 'relieved', 'confident', 'smug', 'smirk'];
  const low = ['sad', 'worried', 'pout', 'bittersweet', 'sleepy'];
  const hard = ['angry', 'proud'];
  const think = ['curious', 'puzzled', 'thinking', 'focus', 'awkward'];
  if ([...warm, ...low, ...hard, ...think].includes(id)) return 'mood';
  return 'flash';
}

/**
 * 从完整预设抽出说话友好权重（剔视素嘴部键；blink 也不进 mood 底色）。
 * @param {Record<string, number>} full
 * @returns {Record<string, number>}
 */
export function toMoodWeights(full) {
  /** @type {Record<string, number>} */
  const out = {};
  if (!full || typeof full !== 'object') return out;
  for (const [k, v] of Object.entries(full)) {
    if (typeof v !== 'number' || v <= 0) continue;
    if (SPEECH_OWNED_MORPHS.has(k)) continue;
    if (k === 'eyeBlinkLeft' || k === 'eyeBlinkRight') continue;
    out[k] = v;
  }
  return out;
}

/**
 * @typedef {{
 *   id: string,
 *   role: 'mood'|'flash'|'gaze'|'sequence'|'utility',
 *   coSpeech: boolean,
 *   label: string,
 *   emoji: string,
 *   durationSec: number|null,
 *   defaultGain: number,
 *   intentKeywords: string[],
 *   weights: Record<string, number>,
 *   moodWeights: Record<string, number>,
 * }} ExpressionEntry
 */

/** @type {Map<string, ExpressionEntry>} */
const CACHE = new Map();

/**
 * @param {string} id
 * @returns {ExpressionEntry|null}
 */
export function getExpressionEntry(id) {
  if (!id || !(id in MORPH_PRESETS) && id !== 'neutral') {
    if (id !== 'neutral' && !(id in MORPH_PRESETS)) return null;
  }
  if (CACHE.has(id)) return CACHE.get(id);

  const ov = CATALOG_OVERRIDE[id] || {};
  const role = ov.role || inferRole(id);
  const coSpeech = Boolean(
    ov.coSpeech != null ? ov.coSpeech : COSPEECH_MOOD_IDS.includes(id),
  );
  const full = MORPH_PRESETS[id] || {};
  const entry = {
    id,
    role,
    coSpeech: role === 'mood' && coSpeech,
    label: PRESET_LABELS[id] || id,
    emoji: PRESET_EMOJI[id] || '•',
    durationSec: PRESET_DURATION[id] ?? null,
    defaultGain: Number.isFinite(ov.defaultGain) ? ov.defaultGain : 0.55,
    intentKeywords: Array.isArray(ov.intentKeywords) ? ov.intentKeywords : [],
    weights: { ...full },
    moodWeights: toMoodWeights(full),
  };
  CACHE.set(id, entry);
  return entry;
}

/** @returns {ExpressionEntry[]} */
export function listAllExpressions() {
  return Object.keys(MORPH_PRESETS)
    .filter((k) => k !== 'reset')
    .map((id) => getExpressionEntry(id))
    .filter(Boolean);
}

/** @returns {ExpressionEntry[]} */
export function listMoods() {
  return listAllExpressions().filter((e) => e.role === 'mood');
}

/** 协同说话白名单（有序） */
export function listCoSpeechMoods() {
  return COSPEECH_MOOD_IDS.map((id) => getExpressionEntry(id)).filter(Boolean);
}

export function isMood(id) {
  const e = getExpressionEntry(id);
  return e?.role === 'mood';
}

export function isFlash(id) {
  const e = getExpressionEntry(id);
  return e?.role === 'flash' || e?.role === 'sequence';
}

/**
 * 说话期用的权重：优先 moodWeights；非 mood 则仍过滤嘴部键。
 * @param {string} id
 * @returns {Record<string, number>}
 */
export function getCoSpeechWeights(id) {
  const e = getExpressionEntry(id);
  if (!e) return {};
  if (e.coSpeech || e.role === 'mood') return { ...e.moodWeights };
  return toMoodWeights(e.weights);
}

/**
 * 供生成器 / MCP 序列化的扁平目录。
 */
export function exportCatalogForGraph() {
  return listAllExpressions().map((e) => ({
    key: e.id,
    label: e.label,
    emoji: e.emoji,
    role: e.role,
    coSpeech: e.coSpeech,
    durationSec: e.durationSec,
    defaultGain: e.defaultGain,
    intentKeywords: e.intentKeywords,
    instant: PRESET_INSTANT.has(e.id),
    isSequence: Boolean(PRESET_SEQUENCES[e.id]),
    weights: e.weights,
    moodWeights: e.moodWeights,
  }));
}

export {
  MORPH_PRESETS,
  PRESET_LABELS,
  PRESET_EMOJI,
  PRESET_DURATION,
  PRESET_GROUPS,
  PRESET_SEQUENCES,
  PRESET_INSTANT,
};
