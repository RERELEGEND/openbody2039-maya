/**
 * MAYA 动作流：手动逐步 / 自动 API 顺序播放
 * 依赖：浏览器 ES module；由 main.js 注入 adapters
 * 环境：Node 20 / Vite 6 / Three.js ~0.172（仅编排，不直接渲染）
 */

/**
 * @typedef {{
 *   id: string,
 *   label: string,
 *   kind: 'showcase' | 'handsMorph' | 'hands1' | 'smileWave' | 'smileWaveFromHands' | 'newStand' | 'form' | 'wait',
 *   form?: 'word' | 'cloudPerson' | 'solid',
 *   holdSec?: number,
 * }} FlowStepDef
 */

/** 默认产品动作流（按产品节奏逐步加步） */
export const DEFAULT_ACTION_FLOW = [
  {
    id: 'wordMaya',
    label: '① 点云字 MAYA',
    kind: 'form',
    form: 'word',
    holdSec: 2.5,
  },
  {
    id: 'cloudPerson',
    label: '② 点云人',
    kind: 'form',
    form: 'cloudPerson',
    holdSec: 2.5,
  },
  {
    id: 'solidPerson',
    label: '③ 实体人',
    kind: 'form',
    form: 'solid',
    holdSec: 2.5,
  },
  {
    id: 'handsMorph',
    label: '④ 看手1-看手2',
    kind: 'handsMorph',
    holdSec: 0.35,
  },
  {
    id: 'smileWave',
    label: '⑤ 看手2→微笑挥手',
    kind: 'smileWaveFromHands',
    holdSec: 3,
  },
  {
    id: 'newStand',
    label: '⑥ 挥手→NEW_站姿',
    kind: 'newStand',
    holdSec: 4,
  },
];

/**
 * @param {object} options
 * @param {() => {
 *   playShowcase: () => void,
 *   stopShowcase: () => void,
 *   isShowcasePlaying: () => boolean,
 *   setForm: (f: string) => void,
 *   getForm: () => string,
 *   isMorphing?: () => boolean,
 *   setSolidRevealMode?: (mode: string) => void,
 *   playHands1: () => void,
 *   stopHands1: () => void,
 *   isHands1Playing: () => boolean,
 *   getHands1Elapsed?: () => number,
 *   playHandsMorph: () => void,
 *   stopHandsMorph: (opts?: { keepPose?: boolean }) => void,
 *   isHandsMorphPlaying: () => boolean,
 *   getHandsMorphPhase: () => string,
 *   playHands2ToSmile?: () => void,
 *   stopHands2ToSmile?: (opts?: { keepPose?: boolean }) => void,
 *   isHands2ToSmilePlaying?: () => boolean,
 *   getHands2ToSmilePhase?: () => string,
 *   playSmileWave: () => void,
 *   playSmileWaveSoft?: () => void,
 *   stopSmileWave: (opts?: { keepPose?: boolean }) => void,
 *   isSmileWavePlaying: () => boolean,
 *   playSmileToNewStand?: () => void,
 *   stopSmileToNewStand?: (opts?: { keepPose?: boolean }) => void,
 *   isSmileToNewStandPlaying?: () => boolean,
 *   getSmileToNewStandPhase?: () => string,
 *   playNewStand?: () => void,
 *   playNewStandSoft?: () => void,
 *   stopNewStand?: () => void,
 *   isNewStandActive?: () => boolean,
 *   stopAllBodyActions?: (opts?: { keepPose?: boolean }) => void,
 * }} options.getAdapters
 * @param {(msg: string) => void} [options.onStatus]
 * @param {(state: object) => void} [options.onState]
 * @param {FlowStepDef[]} [options.steps]
 */
export function createActionFlow(options) {
  const { getAdapters, onStatus, onState } = options;
  /** @type {FlowStepDef[]} */
  let steps = (options.steps || DEFAULT_ACTION_FLOW).map((s) => ({ ...s }));

  let running = false;
  let paused = false;
  let autoMode = false;
  let index = -1;
  let stepToken = 0;
  /** @type {ReturnType<typeof setTimeout> | null} */
  let waitTimer = null;

  function emitStatus(msg) {
    onStatus?.(msg);
  }

  function emitState() {
    onState?.({
      running,
      paused,
      autoMode,
      index,
      stepId: index >= 0 && index < steps.length ? steps[index].id : null,
      steps: steps.map((s, i) => ({
        ...s,
        active: i === index && running,
        done: i < index,
      })),
    });
  }

  function clearWait() {
    if (waitTimer) {
      clearTimeout(waitTimer);
      waitTimer = null;
    }
  }

  function sleep(ms, token) {
    return new Promise((resolve) => {
      clearWait();
      waitTimer = setTimeout(() => {
        waitTimer = null;
        if (token === stepToken) resolve();
      }, ms);
    });
  }

  function waitUntil(pred, token, timeoutMs = 120000, intervalMs = 80) {
    const t0 = performance.now();
    return new Promise((resolve, reject) => {
      const tick = () => {
        if (token !== stepToken) {
          resolve(false);
          return;
        }
        if (paused) {
          setTimeout(tick, intervalMs);
          return;
        }
        try {
          if (pred()) {
            resolve(true);
            return;
          }
        } catch (err) {
          reject(err);
          return;
        }
        if (performance.now() - t0 > timeoutMs) {
          resolve(false);
          return;
        }
        setTimeout(tick, intervalMs);
      };
      tick();
    });
  }

  /**
   * @param {{ keepPose?: boolean }} [opts]
   */
  function stopBodyActions(opts = {}) {
    const keepPose = !!opts.keepPose;
    const a = getAdapters?.();
    a?.stopAllBodyActions?.({ keepPose });
    a?.stopShowcase?.();
    a?.stopHands1?.();
    a?.stopHandsMorph?.({ keepPose });
    a?.stopHands2ToSmile?.({ keepPose });
    a?.stopSmileToNewStand?.({ keepPose });
    a?.stopSmileWave?.({ keepPose });
  }

  /**
   * @param {FlowStepDef} step
   * @param {number} token
   */
  async function executeStep(step, token) {
    const a = getAdapters?.();
    if (!a) throw new Error('动作流 adapters 未就绪');

    emitStatus(`执行：${step.label}`);
    emitState();

    if (step.kind === 'showcase') {
      a.stopShowcase?.();
      a.playShowcase();
      await sleep(200, token);
      const ok = await waitUntil(
        () => !a.isShowcasePlaying(),
        token,
        180000
      );
      if (!ok && token === stepToken) {
        emitStatus('秀场超时或被中断');
      }
      return;
    }

    if (step.kind === 'hands1') {
      a.stopSmileWave?.();
      a.stopHandsMorph?.();
      // 确保实体可见后再从解剖站姿抬到看手1
      if (a.getForm?.() !== 'solid') {
        a.setSolidRevealMode?.('xyDown');
        a.setForm('solid');
        await sleep(120, token);
        await waitUntil(
          () => !a.isMorphing?.() && a.getForm?.() === 'solid',
          token,
          60000
        );
      }
      a.playHands1();
      await waitUntil(
        () => (a.getHands1Elapsed?.() ?? 0) >= 3.17,
        token,
        25000
      );
      await sleep((step.holdSec ?? 2.5) * 1000, token);
      return;
    }

    if (step.kind === 'handsMorph') {
      a.stopSmileWave?.();
      a.stopHands1?.();
      // 与面板「看手1-看手2」一致；确保实体可见
      if (a.getForm?.() !== 'solid') {
        a.setSolidRevealMode?.('xyDown');
        a.setForm('solid');
        await sleep(120, token);
        await waitUntil(
          () => !a.isMorphing?.() && a.getForm?.() === 'solid',
          token,
          60000
        );
      }
      a.playHandsMorph();
      await waitUntil(
        () => a.getHandsMorphPhase?.() === 'hands2-wait',
        token,
        60000
      );
      await sleep((step.holdSec ?? 2.5) * 1000, token);
      return;
    }

    if (step.kind === 'smileWave') {
      a.stopHandsMorph?.();
      a.stopHands2ToSmile?.();
      a.playSmileWave();
      await sleep((step.holdSec ?? 3) * 1000, token);
      a.stopSmileWave?.();
      return;
    }

    if (step.kind === 'smileWaveFromHands') {
      // 看手2 live → 丝滑衔接 → 同款微笑挥手（禁止硬切回解剖）
      if (a.getForm?.() !== 'solid') {
        a.setSolidRevealMode?.('xyDown');
        a.setForm('solid');
        await sleep(120, token);
        await waitUntil(
          () => !a.isMorphing?.() && a.getForm?.() === 'solid',
          token,
          60000
        );
      }
      // 若第④步仍在 hands2-wait，软停保留姿态；未在播则由 morph.play 种入看手2
      if (a.isHandsMorphPlaying?.()) {
        a.stopHandsMorph?.({ keepPose: true });
      }
      emitStatus('⑤ 看手2 → 微笑挥手衔接中…');
      a.playHands2ToSmile?.();
      await waitUntil(
        () =>
          a.getHands2ToSmilePhase?.() === 'hands2-to-wave' ||
          a.getHands2ToSmilePhase?.() === 'wave-ready' ||
          a.isHands2ToSmilePlaying?.() ||
          a.isSmileWavePlaying?.(),
        token,
        5000
      );
      // 等衔接走完再进入挥手 hold（衔接本体才是第⑤步）
      await waitUntil(
        () =>
          a.getHands2ToSmilePhase?.() === 'wave-ready' ||
          a.isSmileWavePlaying?.(),
        token,
        30000
      );
      if (!a.isSmileWavePlaying?.()) {
        a.playSmileWaveSoft?.();
      }
      emitStatus('⑤ 微笑挥手中…');
      await sleep((step.holdSec ?? 3) * 1000, token);
      // 软停保留挥手末姿，交给⑥过渡（禁止硬切回解剖）
      a.stopSmileWave?.({ keepPose: true });
      return;
    }

    if (step.kind === 'newStand') {
      // 挥手末姿 → 丝滑放下右臂 → NEW_站姿活站姿
      if (a.getForm?.() !== 'solid') {
        a.setSolidRevealMode?.('xyDown');
        a.setForm('solid');
        await sleep(120, token);
        await waitUntil(
          () => !a.isMorphing?.() && a.getForm?.() === 'solid',
          token,
          60000
        );
      }
      if (a.isSmileWavePlaying?.()) {
        a.stopSmileWave?.({ keepPose: true });
      }
      a.stopHands2ToSmile?.({ keepPose: true });
      a.stopHandsMorph?.({ keepPose: true });
      emitStatus('⑥ 挥手 → NEW_站姿衔接中…');
      a.playSmileToNewStand?.();
      await waitUntil(
        () =>
          a.getSmileToNewStandPhase?.() === 'smile-to-newstand' ||
          a.getSmileToNewStandPhase?.() === 'newstand-ready' ||
          a.isSmileToNewStandPlaying?.() ||
          a.isNewStandActive?.(),
        token,
        5000
      );
      await waitUntil(
        () =>
          a.getSmileToNewStandPhase?.() === 'newstand-ready' ||
          a.isNewStandActive?.(),
        token,
        30000
      );
      if (!a.isNewStandActive?.()) {
        a.playNewStandSoft?.();
      }
      emitStatus('⑥ NEW_站姿保持中…');
      await sleep((step.holdSec ?? 4) * 1000, token);
      // 「保持」：步结束不关 poseLife
      return;
    }

    if (step.kind === 'form' && step.form) {
      a.stopShowcase?.();
      // 点云/字 → 实体：与秀场一致，强制上→下平面扫描
      if (step.form === 'solid') {
        a.setSolidRevealMode?.('xyDown');
      }
      a.setForm(step.form);
      await sleep(120, token);
      // 等变形结束再进入停留
      await waitUntil(
        () => !a.isMorphing?.() && a.getForm?.() === step.form,
        token,
        60000
      );
      await sleep((step.holdSec ?? 1.2) * 1000, token);
      return;
    }

    if (step.kind === 'wait') {
      await sleep((step.holdSec ?? 1) * 1000, token);
    }
  }

  async function runFrom(startIndex, asAuto) {
    const token = ++stepToken;
    running = true;
    paused = false;
    autoMode = !!asAuto;
    clearWait();
    emitState();

    try {
      for (let i = startIndex; i < steps.length; i++) {
        if (token !== stepToken) return;
        index = i;
        emitState();
        await executeStep(steps[i], token);
        if (token !== stepToken) return;
        if (!autoMode) {
          // 手动逐步：跑完当前步后停住，等 next()
          running = false;
          emitStatus(`已完成：${steps[i].label} · 可点「下一步」或单项按钮`);
          emitState();
          return;
        }
      }
      if (token === stepToken) {
        running = false;
        autoMode = false;
        index = steps.length;
        emitStatus('动作流全部完成');
        emitState();
      }
    } catch (err) {
      console.warn('[actionFlow]', err);
      running = false;
      autoMode = false;
      emitStatus(`动作流出错：${err?.message || err}`);
      emitState();
    }
  }

  function playAuto() {
    stopBodyActions();
    index = -1;
    emitStatus('自动播放动作流…');
    runFrom(0, true);
  }

  function stop() {
    stepToken += 1;
    clearWait();
    running = false;
    paused = false;
    autoMode = false;
    stopBodyActions();
    emitStatus('动作流已停止');
    emitState();
  }

  function pause() {
    if (!running) return;
    paused = true;
    emitStatus('动作流已暂停');
    emitState();
  }

  function resume() {
    if (!running || !paused) return;
    paused = false;
    emitStatus('动作流继续');
    emitState();
  }

  function next() {
    if (running && autoMode) return;
    const start = index < 0 ? 0 : index + 1;
    if (start >= steps.length) {
      emitStatus('已是最后一步');
      emitState();
      return;
    }
    const nextStep = steps[start];
    // 进入看手2→挥手 / 挥手→NEW：保留当前姿态，禁止回解剖
    const softKinds = new Set(['smileWaveFromHands', 'newStand']);
    stopBodyActions({
      keepPose: softKinds.has(nextStep?.kind),
    });
    runFrom(start, false);
  }

  /**
   * 手动跑某一步（不推进自动队列）
   * @param {string} stepId
   */
  function run(stepId) {
    const i = steps.findIndex((s) => s.id === stepId);
    if (i < 0) {
      emitStatus(`未知步骤：${stepId}`);
      return;
    }
    const step = steps[i];
    const softKinds = new Set(['smileWaveFromHands', 'newStand']);
    stopBodyActions({
      keepPose: softKinds.has(step?.kind),
    });
    index = i;
    runFrom(i, false);
  }

  /**
   * @param {FlowStepDef[]} nextSteps
   */
  function setSequence(nextSteps) {
    stop();
    steps = (nextSteps || []).map((s) => ({ ...s }));
    index = -1;
    emitStatus(`已载入 ${steps.length} 步动作流`);
    emitState();
  }

  function listSteps() {
    return steps.map((s) => ({ ...s }));
  }

  function getStatus() {
    return {
      running,
      paused,
      autoMode,
      index,
      stepId: index >= 0 && index < steps.length ? steps[index].id : null,
      total: steps.length,
    };
  }

  return {
    playAuto,
    stop,
    pause,
    resume,
    next,
    run,
    setSequence,
    listSteps,
    getStatus,
    isPlaying: () => running,
    DEFAULT_ACTION_FLOW,
  };
}
