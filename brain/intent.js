/**
 * 人话 / 结构化意图 → 原语步骤
 * 环境：Node 20+（跑在 MCP 进程）
 */
import { DEFAULT_SMILE, DEFAULT_WAVE, PRIMITIVES } from './library.js';

/**
 * @param {string | object} intent
 * @returns {{ steps: object[], holdBase: boolean, source: string }}
 */
export function parseIntent(intent) {
  if (intent && typeof intent === 'object') {
    if (Array.isArray(intent.steps)) {
      return {
        steps: intent.steps,
        holdBase: Boolean(intent.holdBase),
        source: 'structured',
      };
    }
    if (intent.prim && PRIMITIVES[intent.prim]) {
      return { steps: [intent], holdBase: Boolean(intent.holdBase), source: 'structured' };
    }
    if (typeof intent.text === 'string') {
      return parseIntent(intent.text);
    }
  }

  const text = String(intent || '').trim();
  const lower = text.toLowerCase();
  /** @type {{ pos: number, step: object }[]} */
  const cand = [];
  let holdBase = false;
  /** 记录匹配位置，最后按出现顺序排序，支持「哈哈大笑后微笑说你好」这类连招 */
  const push = (pos, step) => {
    const p = typeof pos === 'number' && pos >= 0 ? pos : 9999;
    cand.push({ pos: p, step });
  };

  // 哈哈大笑（与「微笑」可共存：哈哈哈在前、微笑在后）
  const laughM = text.match(/哈哈+|大笑|笑出声|laugh/i);
  if (laughM) push(laughM.index, { prim: 'laugh', dur: 2.4 });

  // 跳舞（规则命中 → dance；无 LLM。默认 AMASS，可写「程序化跳舞」）
  const danceM = text.match(/跳(?:一)?(?:支|段|个)?舞|来段舞|跳舞|dance\b/i);
  if (danceM) {
    const durM = text.match(/(?:跳|舞)\D{0,6}?(\d+(?:\.\d+)?)\s*秒/) || text.match(/(\d+(?:\.\d+)?)\s*秒/);
    push(danceM.index, {
      prim: 'dance',
      dur: durM ? Number(durM[1]) : undefined,
      style: /程序|摆胯|procedural/i.test(text) ? 'procedural' : 'amass',
    });
  }

  // 唱歌（规则命中 → sing；歌词用引号/冒号抽取，无 LLM）
  // 「唱：…」「唱一首」「唱歌」「哼歌」均可；单独「唱」+冒号也算
  const singM = text.match(
    /唱(?:一)?(?:首|段|句)?(?:歌)?|哼(?:一)?(?:首|段)?(?:歌)?|sing\b/i,
  );
  if (singM && !/唱反|唱衰|唱空城/i.test(text)) {
    const lyrics = extractSing(text);
    push(singM.index, {
      prim: 'sing',
      text: lyrics || undefined,
      emotion: 'bigSmile',
    });
  }

  // 说话（TTS + 口型）；已命中唱歌时不重复拆 speak，避免「唱：xxx」双通道
  const speech = extractSpeech(text);
  if (speech && !singM) {
    const sp = text.search(/说|讲|念|道一声|speak|say/i);
    push(sp, { prim: 'speak', text: speech });
  }

  // 军事敬礼（优先于挥手/打招呼，避免「敬礼」被「礼」类问候规则吃掉）
  const saluteM = text.match(/敬礼|军礼|行军礼|salute|military\s*salute/i);
  if (saluteM) {
    holdBase = false;
    const holdM = text.match(/保持\s*(\d+(?:\.\d+)?)\s*秒/);
    push(saluteM.index, {
      prim: 'salute',
      hold: holdM ? Number(holdM[1]) : 1.0,
    });
  }

  // 挥手 / 打招呼
  const waveM =
    (saluteM ? null : text.match(/挥手|打招呼|问好|招手|wave|hello|hi\b/i)) ||
    (saluteM ? null : text.match(/挥/));
  if (waveM) {
    const side = /左/.test(text) ? 'left' : 'right';
    push(waveM.index, { ...DEFAULT_WAVE, side });
    if (/笑|微笑|smile/.test(text) || /打招呼|问好/.test(text)) {
      push(waveM.index + 0.1, { ...DEFAULT_SMILE });
    }
  }

  // 站姿
  const standM = text.match(/new\s*站|自然站|生活站|newstand|站好|站姿/i);
  if (standM) {
    let pose = 'newStand';
    if (/解剖/.test(text)) pose = 'anatomical';
    if (/t-?pose|tpose/i.test(text)) pose = 'aPose';
    if (/a-?pose/i.test(text)) pose = 'aPose';
    push(standM.index, { prim: 'stand', pose, dur: 0.5 });
  }

  // 表情目录：mood（粘性，可作说话底色）与 flash（瞬时，不改 speak.emotion）分开。
  // 与 expressionCatalog.js COSPEECH / CATALOG_OVERRIDE 对齐；intent 只把 mood 写进 speak。
  const moodMap = [
    [/微笑|笑容|笑笑|smile/, 'smile'],
    [/大笑|开怀|激动|兴奋|excited|big\s*smile/, 'bigSmile'],
    [/难过|伤心|悲伤|sad/, 'sad'],
    [/生气|愤怒|恼火|angry/, 'angry'],
    [/害羞|不好意思|shy/, 'shy'],
    [/自信|有底气|confident/, 'confident'],
    [/温柔|柔和|gentle/, 'smileWave'],
    [/认真|专注|严肃|focus/, 'focus'],
    [/疑惑|不解|puzzled/, 'puzzled'],
    [/好奇|curious/, 'curious'],
    [/释然|放心|relieved/, 'relieved'],
    [/中性|neutral|复位脸/, 'neutral'],
    // 非协同说话但仍是 mood（可 express，一般不进白名单演示）
    [/思考|想一下|thinking/, 'thinking'],
    [/得意/, 'smug'],
    [/骄傲|proud/, 'proud'],
    [/委屈|难过地|pout/, 'pout'],
    [/疲惫|累了|困|sleepy/, 'sleepy'],
  ];
  const flashMap = [
    [/惊讶|吃惊|诧异|astonish|surprise/, 'surprise'],
    [/眨眼|blink/, 'blink'],
    [/害怕|fear/, 'fear'],
    [/厌恶|disgust/, 'disgust'],
  ];
  const expressMap = [...moodMap, ...flashMap];
  const MOOD_IDS = new Set(moodMap.map(([, name]) => name));

  let bestExpress = null;
  for (const [re, name] of expressMap) {
    const m = text.match(re);
    if (!m) continue;
    if (!bestExpress || m.index < bestExpress.index) bestExpress = { index: m.index, name };
  }
  if (bestExpress) {
    push(bestExpress.index, { prim: 'express', name: bestExpress.name, dur: 0.6 });
  }

  // 同一句里出现多个情绪词时（「哈哈大笑后换成微笑」），后面的那个才是落点。
  const found = [];
  for (const [re, name] of expressMap) {
    const g = new RegExp(re.source, re.flags.includes('g') ? re.flags : `${re.flags}g`);
    let m;
    while ((m = g.exec(text)) !== null) {
      found.push({ index: m.index, name });
      if (m.index === g.lastIndex) g.lastIndex += 1;
    }
  }
  found.sort((a, b) => a.index - b.index);
  const seen = new Set();
  for (const f of found) {
    if (seen.has(f.name)) continue;
    seen.add(f.name);
    if (bestExpress && f.name === bestExpress.name) continue;
    push(f.index, { prim: 'express', name: f.name, dur: 0.6 });
  }

  // 强度词 → emotionGain（很/超级升高，稍微/有点降低）
  let emotionGain;
  if (/非常|特别|超级|很(?!少)|极度|十分/.test(text)) emotionGain = 0.85;
  else if (/稍微|有点|略微|轻轻|一点/.test(text)) emotionGain = 0.35;

  // 点头 / 摇头 / 转头
  const nodM = text.match(/点头|nod/i);
  if (nodM) push(nodM.index, { prim: 'nod', dur: 0.9 });
  const shakeM = text.match(/摇头|shake/i);
  if (shakeM) push(shakeM.index, { prim: 'shake', dur: 1.0 });
  const lookLM = text.match(/看左|向左转头/);
  if (lookLM) push(lookLM.index, { prim: 'turnHead', yaw: 25, dur: 0.7 });
  const lookRM = text.match(/看右|向右转头/);
  if (lookRM) push(lookRM.index, { prim: 'turnHead', yaw: -25, dur: 0.7 });

  // 走路
  const walkM = text.match(/走路|走走|walk/i);
  if (walkM) {
    holdBase = true;
    push(walkM.index, {
      prim: 'walk',
      dur: Number((text.match(/(\d+(?:\.\d+)?)\s*秒/) || [])[1]) || 2.5,
    });
  }
  const stopM = text.match(/停下|站住|stop\s*walk/i);
  if (stopM) push(stopM.index, { prim: 'stop' });

  // 冻结 base
  if (/冻住|别动身体|holdbase|木偶/.test(text)) holdBase = true;

  cand.sort((a, b) => a.pos - b.pos);
  const steps = cand.map((c) => c.step);

  if (!steps.length) {
    // 兜底：当作用 express 或 wave 提示
    steps.push({ prim: 'express', name: 'curious', dur: 0.5 });
    steps.push({ prim: 'nod', dur: 0.8 });
  }

  // 相邻重复的同一表情去掉
  const dedup = [];
  for (const s of steps) {
    const prev = dedup[dedup.length - 1];
    if (
      prev &&
      prev.prim === 'express' &&
      s.prim === 'express' &&
      prev.name === s.name
    ) {
      continue;
    }
    dedup.push(s);
  }

  // speak 只继承 mood（不继承 flash：眨眼/惊讶不改粘性说话底色）
  let lastEmotion = 'neutral';
  for (const s of dedup) {
    if (s.prim === 'express' && MOOD_IDS.has(s.name)) lastEmotion = s.name;
    else if (s.prim === 'speak' || s.prim === 'sing') {
      if (!s.emotion) s.emotion = lastEmotion === 'neutral' && s.prim === 'sing' ? 'bigSmile' : lastEmotion;
      if (emotionGain != null && s.emotionGain == null) s.emotionGain = emotionGain;
    }
  }

  return { steps: dedup, holdBase, source: 'text', text };
}

/**
 * 从自然语言里抽歌词：
 * 「唱：小星星」「唱一首《好运来》」→ 文本；无则空串（纯哼唱）。
 * @param {string} text
 * @returns {string}
 */
function extractSing(text) {
  if (!text) return '';
  const quoted = text.match(/[“"「『《]([^”"」』》]{1,80})[”"」』》]/);
  if (quoted) return quoted[1].trim();
  const colon = text.match(
    /(?:唱(?:一)?(?:首|段|句)?(?:歌)?|哼(?:一)?(?:首|段)?(?:歌)?)\s*[:：，,]\s*([\u4e00-\u9fa5A-Za-z0-9，。！？、,.!?\s]{1,80})/i,
  );
  if (colon) {
    const lyric = colon[1].trim().replace(/[，。！？、,.!?\s]+$/, '');
    if (lyric && !/^(歌|一首|一段|一下)$/.test(lyric)) return lyric;
  }
  return '';
}

/**
 * 从自然语言里抽要说的内容：
 * 「跟我说你好」→ 你好；「说“欢迎光临”」→ 欢迎光临。
 * @param {string} text
 * @returns {string}
 */
function extractSpeech(text) {
  if (!text) return '';
  const quoted = text.match(/[“"「『]([^”"」』]{1,60})[”"」』]/);
  if (quoted) return quoted[1].trim();
  // 「介绍我：xxx」「介绍一下：xxx」——冒号后才是要念的内容
  const intro = text.match(
    /(?:介绍(?:一下|我|自己)?|自我介绍)\s*[:：，,]\s*([\u4e00-\u9fa5A-Za-z0-9，。！？、,.!?\s]{1,60})/,
  );
  if (intro) {
    const say = intro[1].trim().replace(/[，。！？、,.!?\s]+$/, '');
    if (say) return say;
  }
  const m = text.match(
    /(?:对我说|跟我说|对观众说|说|讲|念|道一声|问|问道|询问|问一下|say|speak|ask)\s*[:：，,]?\s*([\u4e00-\u9fa5A-Za-z0-9，。！？、,.!?\s]{1,60})/i,
  );
  if (m) {
    const say = m[1].trim().replace(/[，。！？、,.!?\s]+$/, '');
    if (say && !/^(什么|话|一句|两句|一下|道)$/.test(say)) return say;
  }
  if (/你好|您好|hello/i.test(text)) return '你好';
  return '';
}
