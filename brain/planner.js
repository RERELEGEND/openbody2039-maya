/**
 * 轻量规划：校验原语、填默认时长、并行槽提示
 */
import { PRIMITIVES, buildSaluteStep, buildDanceSteps } from './library.js';
import { parseIntent } from './intent.js';

/**
 * @param {string | object} intent
 */
export function planFromIntent(intent) {
  const parsed = parseIntent(intent);
  const steps = [];
  for (const raw of parsed.steps) {
    const prim = raw.prim;
    if (!prim || !PRIMITIVES[prim]) {
      continue;
    }
    const step = { ...raw };
    // salute 是复合动作：展开成执行器认识的 joint 关键帧
    if (prim === 'salute') {
      steps.push(buildSaluteStep({ hold: step.hold }));
      continue;
    }
    // dance：展开 AMASS joint（或程序化 dance 原语），前面带笑容 mood
    if (prim === 'dance') {
      steps.push(...buildDanceSteps({
        dur: step.dur,
        emotion: step.emotion || 'bigSmile',
        style: step.style,
      }));
      continue;
    }
    if (step.dur == null) {
      if (prim === 'wave') step.dur = 1.8;
      else if (prim === 'express') step.dur = 0.6;
      else if (prim === 'nod') step.dur = 0.9;
      else if (prim === 'shake') step.dur = 1.0;
      else if (prim === 'laugh') step.dur = 2.4;
      else if (prim === 'dance') step.dur = 4.0;
      else if (prim === 'sing') {
        // 有歌词时执行器按字估算；纯哼唱默认 3.2s
        if (!step.text) step.dur = 3.2;
      }
      else if (prim === 'speak') {
        // 留给执行器按字数估算（约 0.27s/字 + 起收势）
        if (step.dur == null) delete step.dur;
      }
      else if (prim === 'walk') step.dur = 2.5;
      else step.dur = 0.5;
    }
    steps.push(step);
  }
  if (!steps.length) {
    return {
      ok: false,
      error: 'no valid steps',
      steps: [],
      holdBase: false,
    };
  }
  return {
    ok: true,
    steps,
    holdBase: parsed.holdBase,
    source: parsed.source,
    text: parsed.text,
  };
}
