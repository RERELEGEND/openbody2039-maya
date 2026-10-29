/**
 * 原语目录（与 body-graph/cycles.json · PLAN §7 对齐）
 * 环境：Node 20+（MCP / planner）；dance 默认可程序化，可选读 body-graph/motions/*.json
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DANCE_AMASS_JSON = path.resolve(__dirname, '../body-graph/motions/dance.json');

export const PRIMITIVES = {
  stand: { layer: 'base', desc: '站姿 STANDING_POSES' },
  wave: { layer: 'gesture', desc: '挥手（右/左臂）' },
  walk: { layer: 'base', desc: '程序走路' },
  stop: { layer: 'base', desc: '停走路' },
  express: { layer: 'face', desc: '表情预设' },
  nod: { layer: 'gesture', desc: '点头' },
  shake: { layer: 'gesture', desc: '摇头' },
  turnHead: { layer: 'gesture', desc: '转头' },
  gazeAt: { layer: 'face', desc: '看镜头' },
  flowStep: { layer: 'gesture', desc: '动作流一步' },
  joint: { layer: 'gesture', desc: '任意关节关键帧轨迹（agent 现场编排）' },
  face: { layer: 'face', desc: '任意表情(morph)关键帧轨迹（agent 现场编排）' },
  laugh: { layer: 'face+gesture', desc: '哈哈大笑（口型抖动 + 眯眼 + 前仰后合）' },
  speak: { layer: 'face', desc: 'TTS 说话 + 口型（浏览器 Web Speech）' },
  salute: { layer: 'gesture', desc: '军事敬礼（右手至眉，规划器展开为 joint 关键帧）' },
  dance: {
    layer: 'gesture',
    desc: '跳舞（默认程序化摆胯；若本地提供 body-graph/motions/dance.json 则可展开关键帧）',
  },
  sing: {
    layer: 'face+gesture',
    desc: '唱歌（程序化长元音口型 + 轻摆；可选 TTS 歌词，无 LLM）',
  },
};

export const DEFAULT_WAVE = { prim: 'wave', side: 'right', dur: 1.8 };
export const DEFAULT_SMILE = { prim: 'express', name: 'smile', dur: 0.55 };

/**
 * 军事敬礼：右手抬至眉骨、肘部与肩同高偏前、保持后放下。
 *
 * 角度不是手调的经验值，而是在 MAYA3.0 骨架上按「手腕到右太阳穴、指尖到眉骨」
 * 做无约束正向运动学搜索解出来的。桥接实测（newStand base + 手势层合成后）：
 * 肘与肩同高 Δy ≈ 0.00 m、手腕距右眼 0.166 m、指尖距眉骨 0.05 m。
 *
 * 注意：肘屈与上肢外旋跨度超出 JOINT_DEFS 限位（前臂 RX 151 > 140，上臂 RZ -107 < -90），
 * 所以需要执行器走 unclamped 路径 —— 即姿态约束关闭（默认）。开启硬限位时会被压平。
 */
export const SALUTE_STAND = {
  RightArm: { x: 73, y: 8, z: -11 },
  RightForeArm: { x: 11, y: -0.5, z: -4 },
  RightHand: { x: 6, y: 0, z: 4 },
};

export const SALUTE_HOLD = {
  RightArm: { x: 124.2, y: 31.6, z: -106.7 },
  RightForeArm: { x: 150.9, y: 35.7, z: -44.9 },
  // 手型解算目标：指尖落在眉骨表面（z≈0.096），拇指侧朝下，不插进颅骨
  RightHand: { x: 68.1, y: -80.3, z: 38.4 },
};

/** 抬手中途姿态（线性 55% 过渡的近似，让起手有加速感而非匀速） */
const SALUTE_MID = {
  RightArm: { x: 101, y: 21, z: -62 },
  RightForeArm: { x: 88, y: 18, z: -26 },
  RightHand: { x: 40, y: -44, z: 23 },
};

/**
 * 生成敬礼的 joint 步骤（绝对角度，与 pose_set_joint 同一口约）。
 * @param {{ dur?: number, hold?: number }} [opts]
 * @returns {{ prim: 'joint', dur: number, interp: string, keys: object[] }}
 */
export function buildSaluteStep(opts = {}) {
  const hold = Number.isFinite(opts.hold) ? Math.max(0.2, Number(opts.hold)) : 1.0;
  const tHold = 0.55;
  const tRelease = Number((tHold + hold + 0.8).toFixed(2));
  return {
    prim: 'joint',
    dur: tRelease,
    interp: 'ease',
    keys: [
      { t: 0, pose: { ...SALUTE_STAND } },
      { t: 0.3, pose: { ...SALUTE_MID } },
      { t: tHold, pose: { ...SALUTE_HOLD } },
      { t: Number((tHold + hold).toFixed(2)), pose: { ...SALUTE_HOLD } },
      { t: tRelease, pose: { ...SALUTE_STAND } },
    ],
  };
}

/**
 * 跳舞：默认程序化；若存在可选 motions/dance.json 则展开关键帧（第三方数据请自备许可）。
 * @param {{ dur?: number, emotion?: string, style?: 'amass'|'procedural' }} [opts]
 * @returns {object[]}
 */
export function buildDanceSteps(opts = {}) {
  const emotion = opts.emotion || 'bigSmile';
  const wantAmass = opts.style !== 'procedural';
  /** @type {object[]} */
  const out = [{ prim: 'express', name: emotion, dur: 0.4 }];

  if (wantAmass && fs.existsSync(DANCE_AMASS_JSON)) {
    try {
      const raw = JSON.parse(fs.readFileSync(DANCE_AMASS_JSON, 'utf8'));
      const joint = Array.isArray(raw?.steps) ? raw.steps.find((s) => s?.prim === 'joint') : null;
      if (joint?.keys?.length) {
        const dur = Number.isFinite(Number(opts.dur))
          ? Math.max(0.5, Number(opts.dur))
          : Number(joint.dur) || Number(raw.duration) || 4;
        out.push({
          prim: 'joint',
          dur,
          interp: joint.interp || 'ease',
          keys: joint.keys,
        });
        return out;
      }
    } catch {
      /* fall through */
    }
  }

  out.push({
    prim: 'dance',
    dur: Number.isFinite(Number(opts.dur)) ? Math.max(0.5, Number(opts.dur)) : 4.0,
    style: 'procedural',
  });
  return out;
}
