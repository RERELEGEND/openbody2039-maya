/**
 * OpenBody2039 MCP tools — client-agnostic (any MCP host)
 * Env: Node 20+ · no IDE coupling
 */
import fs from 'node:fs';
import path from 'node:path';
import { planFromIntent } from '../brain/planner.js';
import { buildSaluteStep, buildDanceSteps } from '../brain/library.js';
import { createBridgeClient } from './wsClient.js';
import { loadConfig, assertGraphDir } from './config.js';

const config = loadConfig();
assertGraphDir(config.graphDir);

const bridge = createBridgeClient({
  url: config.wsUrl,
  client: config.clientLabel,
});

function readJson(name) {
  const file = path.join(config.graphDir, name);
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

/**
 * MCP CallToolResult helper
 * @param {unknown} obj
 * @param {{ isError?: boolean }} [opts]
 */
function toolResult(obj, opts = {}) {
  const text = typeof obj === 'string' ? obj : JSON.stringify(obj, null, 2);
  /** @type {{ content: {type:string,text:string}[], isError?: boolean }} */
  const out = { content: [{ type: 'text', text }] };
  if (opts.isError) out.isError = true;
  return out;
}

function fail(code, error, extra = {}) {
  return toolResult({ ok: false, code, error, ...extra }, { isError: true });
}

/** Stable capability card for any agent discovering this server */
export function buildManifest() {
  return {
    ok: true,
    protocol: 'mcp',
    transport: 'stdio',
    name: config.serverName,
    version: config.version,
    product: 'OpenBody2039 MAYA',
    independence: {
      ide: 'none required',
      knowledge: 'bundled body-graph (offline tools/resources)',
      runtime: 'optional WebSocket bridge to an OpenBody-compatible viewer',
    },
    env: {
      OPENBODY_WS_URL: config.wsUrl,
      OPENBODY_GRAPH_DIR: config.graphDir,
      OPENBODY_CLIENT_ID: config.clientLabel,
      OPENBODY_WS_HOST: config.wsHost,
      OPENBODY_WS_PORT: config.wsPort,
    },
    tools: {
      discovery: ['openbody_info', 'body_lookup', 'maya_status'],
      control: ['control_claim', 'control_release', 'control_abort', 'intent_do', 'plan_run'],
      debug: ['pose_set_joint'],
    },
    resources: RESOURCE_DEFS.map((r) => r.uri),
    preferredFlow: [
      'openbody_info',
      'body_lookup (offline OK)',
      'maya_status (needs bridge + viewer)',
      'intent_do or plan_run',
      'control_release',
    ],
    primitives: [
      'stand',
      'wave',
      'walk',
      'stop',
      'express',
      'laugh',
      'speak',
      'dance',
      'sing',
      'nod',
      'shake',
      'turnHead',
      'gazeAt',
      'flowStep',
      'joint',
      'face',
      'salute',
    ],
    locale: ['zh-CN', 'en'],
  };
}

export const RESOURCE_DEFS = [
  {
    uri: 'openbody://manifest',
    name: 'OpenBody manifest',
    description: 'Server capabilities, env, preferred control flow',
    mimeType: 'application/json',
  },
  {
    uri: 'openbody://body-graph/joints',
    name: 'Joints & limits',
    description: 'Bone names, parents, Chinese labels, per-axis limits',
    mimeType: 'application/json',
  },
  {
    uri: 'openbody://body-graph/axes',
    name: 'Measured axis semantics',
    description: 'Verified RX/RY/RZ meaning per bone',
    mimeType: 'application/json',
  },
  {
    uri: 'openbody://body-graph/morphs',
    name: 'Face morph presets',
    description: 'ARKit morph names and expression presets',
    mimeType: 'application/json',
  },
  {
    uri: 'openbody://body-graph/poses',
    name: 'Standing poses',
    description: 'STANDING_POSES deltas',
    mimeType: 'application/json',
  },
  {
    uri: 'openbody://body-graph/cycles',
    name: 'Programmed cycles / API map',
    description: 'window.MAYA namespaces and body cycles',
    mimeType: 'application/json',
  },
  {
    uri: 'openbody://body-graph/site',
    name: 'Site / entry map',
    description: 'Viewer URLs, bridge query, env notes',
    mimeType: 'application/json',
  },
  {
    uri: 'openbody://body-graph/schema',
    name: 'Graph schema (markdown)',
    description: 'Field notes for body-graph JSON files',
    mimeType: 'text/markdown',
  },
];

/**
 * @param {string} uri
 */
export function readResource(uri) {
  if (uri === 'openbody://manifest') {
    return {
      contents: [
        {
          uri,
          mimeType: 'application/json',
          text: JSON.stringify(buildManifest(), null, 2),
        },
      ],
    };
  }
  const map = {
    'openbody://body-graph/joints': ['joints.json', 'application/json'],
    'openbody://body-graph/axes': ['axes.json', 'application/json'],
    'openbody://body-graph/morphs': ['morphs.json', 'application/json'],
    'openbody://body-graph/poses': ['poses.json', 'application/json'],
    'openbody://body-graph/cycles': ['cycles.json', 'application/json'],
    'openbody://body-graph/site': ['site.json', 'application/json'],
    'openbody://body-graph/schema': ['schema.md', 'text/markdown'],
  };
  const hit = map[uri];
  if (!hit) {
    throw Object.assign(new Error(`unknown resource: ${uri}`), { code: 'E_UNKNOWN_RESOURCE' });
  }
  const [file, mimeType] = hit;
  const text = fs.readFileSync(path.join(config.graphDir, file), 'utf8');
  return { contents: [{ uri, mimeType, text }] };
}

export const toolDefs = [
  {
    name: 'openbody_info',
    description:
      'OpenBody2039: return server manifest (version, env, tools, resources, preferred flow). Works fully offline. Call this first when discovering the server.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'maya_status',
    description:
      'OpenBody2039: runtime status of the avatar bridge (online/claim/plan). Requires local WS bridge + viewer with mcp enabled. Offline knowledge still available via body_lookup / resources.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'body_lookup',
    description:
      'OpenBody2039: query the bundled body graph offline — joints, axis semantics, morph presets, standing poses, site map. query examples: "RightArm", "Head", "smile", "newStand", "site", "joints".',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Bone / preset / pose id, or catalog key: joints|axes|morphs|poses|site|cycles',
        },
        kind: {
          type: 'string',
          enum: ['auto', 'joint', 'axis', 'morph', 'pose', 'site', 'cycles'],
          description: 'Optional force type',
        },
      },
      required: ['query'],
    },
  },
  {
    name: 'control_claim',
    description:
      'OpenBody2039: acquire exclusive write lock on the avatar (single writer). Needs bridge + viewer.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'control_release',
    description: 'OpenBody2039: release write lock.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'control_abort',
    description: 'OpenBody2039: abort current motion plan and clear gesture layer.',
    inputSchema: { type: 'object', properties: {}, additionalProperties: false },
  },
  {
    name: 'intent_do',
    description:
      'OpenBody2039: natural-language intent → primitive plan → play on avatar (auto claim). ' +
      'Compound requests run in the order they appear, e.g. "哈哈大笑后换成微笑跟我说你好" → laugh → smile → speak("你好"). ' +
      'Emotion words attach to the speech as a co-speech expression layer (brows/eyes move with intonation, mouth keeps the feeling), ' +
      'e.g. "微笑着说你好" / "自信地介绍自己" / "疑惑地问这是什么". ' +
      'Examples: "wave right hand hello", "挥右手打招呼", "nod", "smile", "哈哈大笑", "跟我说欢迎光临", "敬礼保持2秒", "跳个舞", "唱：小星星", "程序化跳舞". Prefer this over joint-level tools. Dance/sing are rule-based (no LLM).',
    inputSchema: {
      type: 'object',
      properties: {
        text: { type: 'string', description: 'Intent in Chinese or English' },
        holdBase: {
          type: 'boolean',
          description: 'If true, freeze base idle/life layer while gesturing',
        },
        waitMs: { type: 'number', description: 'Wait for plan.done timeout ms (default 30000)' },
      },
      required: ['text'],
    },
  },
  {
    name: 'plan_run',
    description:
      'OpenBody2039: run an explicit primitive step list. ' +
      'Primitives: salute | stand | wave | express | laugh | speak | dance | sing | nod | shake | turnHead | walk | stop | gazeAt | flowStep | joint | face. ' +
      'Example: [{"prim":"wave","side":"right","dur":1.8},{"prim":"express","name":"smile","dur":0.55}]. ' +
      'SALUTE: {"prim":"salute","hold":1.2} — military salute (right hand to brow, elbow at shoulder height); ' +
      'angles solved on the MAYA rig by FK, expanded to a joint keyframe step. Needs pose constraints OFF (default). ' +
      'LAUGH: {"prim":"laugh","dur":2.4} — jaw oscillation + squint + body rocking (novel, not a baked clip). ' +
      'DANCE: {"prim":"dance"} — procedural hip sway by default; optional body-graph/motions/*.json if you add a licensed motion pack locally. ' +
      'SING: {"prim":"sing","text":"小星星"} — long-vowel mouth + sway + optional TTS lyrics (rule-based, no LLM). ' +
      'SPEAK: {"prim":"speak","text":"你好","dur":1.0} — browser TTS (zh-CN) with pinyin-driven viseme mouth animation; omit dur to auto-estimate. ' +
      'Optional "emotion" seeds the co-speech expression layer (brows/eyes follow intonation, mouth keeps the emotion while talking): ' +
      '{"prim":"speak","text":"今天想和你聊聊这件事，你觉得呢？","emotion":"smile"} — try smile | confident | curious | focus | bigSmile | sad. ' +
      'Optional "emotionGain" 0..1 (default 0.55) scales how strongly the emotion bleeds through the speech. ' +
      'FACE (arbitrary morph keyframes, absolute 0..1): {"prim":"face","dur":1.2,"keys":[{"t":0,"weights":{"jawOpen":0,"mouthSmileLeft":0.2}},{"t":0.6,"weights":{"jawOpen":0.7,"eyeSquintLeft":0.5}}]}. ' +
      'JOINT (arbitrary real-time choreography — this is how you design novel motion): ' +
      '{"prim":"joint","dur":2.0,"interp":"ease","keys":[{"t":0,"pose":{"RightArm":{"x":73,"y":8,"z":-11}}},{"t":0.8,"pose":{"RightArm":{"x":30,"y":20,"z":-60},"RightForeArm":{"x":50,"y":0,"z":-10}}},{"t":1.4,"pose":{"RightArm":{"x":30,"y":20,"z":-30}}},{"t":2.0,"pose":{"RightArm":{"x":73,"y":8,"z":-11}}}]}. ' +
      'Angles are delta degrees RELATIVE TO BIND POSE (same convention as pose_set_joint); query axis meaning with body_lookup. ' +
      't is seconds (or f = 0..1 normalized); bones omitted from t=0 auto-start from current pose; add "loop":true to repeat. ' +
      'To HOLD a pose, repeat the same pose in a later key (e.g. t=1.0 and t=3.0 identical). Unknown bone names are skipped and reported in plan.done.warnings.',
    inputSchema: {
      type: 'object',
      properties: {
        steps: {
          type: 'array',
          description: 'Primitive steps',
          items: { type: 'object', additionalProperties: true },
        },
        holdBase: { type: 'boolean' },
        waitMs: { type: 'number' },
      },
      required: ['steps'],
    },
  },
  {
    name: 'pose_set_joint',
    description:
      'OpenBody2039 DEBUG: set one bone local Euler delta in degrees {x,y,z}. Prefer intent_do / plan_run for normal control.',
    inputSchema: {
      type: 'object',
      properties: {
        bone: { type: 'string' },
        x: { type: 'number' },
        y: { type: 'number' },
        z: { type: 'number' },
      },
      required: ['bone'],
    },
  },
];

/**
 * @param {string} name
 * @param {object} args
 */
export async function callTool(name, args = {}) {
  try {
    if (name === 'openbody_info') {
      return toolResult(buildManifest());
    }

    if (name === 'maya_status') {
      try {
        const st = await bridge.status();
        return toolResult({
          ok: true,
          bridge: st.result,
          claimed: bridge.claimed,
          wsUrl: config.wsUrl,
        });
      } catch (err) {
        return fail(err.code || 'E_BRIDGE_OFFLINE', err.message, {
          wsUrl: config.wsUrl,
          hint:
            'Start the OpenBody WS bridge (npm run bridge) and open an OpenBody-compatible viewer with mcp query enabled (default ?mcp=1). Knowledge tools still work offline.',
        });
      }
    }

    if (name === 'body_lookup') {
      const data = bodyLookup(args.query, args.kind || 'auto');
      return toolResult(data, { isError: data.ok === false });
    }

    if (name === 'control_claim') {
      const r = await bridge.claim();
      return toolResult(r, { isError: r.ok === false });
    }

    if (name === 'control_release') {
      const r = await bridge.release();
      return toolResult(r, { isError: r.ok === false });
    }

    if (name === 'control_abort') {
      const r = await bridge.abort();
      return toolResult(r, { isError: r.ok === false });
    }

    if (name === 'intent_do') {
      const planned = planFromIntent({
        text: args.text,
        holdBase: args.holdBase,
      });
      if (!planned.ok) return toolResult(planned, { isError: true });
      const holdBase = args.holdBase ?? planned.holdBase;
      const run = await bridge.planRun(planned.steps, holdBase);
      if (!run.ok) return toolResult(run, { isError: true });
      const planId = run.result?.planId;
      const done = await bridge.waitPlanDone(planId, args.waitMs || 30000);
      return toolResult({ ok: true, planned, planId, done: done.result });
    }

    if (name === 'plan_run') {
      const rawSteps = Array.isArray(args.steps) ? args.steps : [];
      // salute / dance 是复合动作：显式 plan 里也要展开
      const steps = [];
      for (const s of rawSteps) {
        if (s && s.prim === 'salute') steps.push(buildSaluteStep({ hold: s.hold }));
        else if (s && s.prim === 'dance') {
          steps.push(
            ...buildDanceSteps({
              dur: s.dur,
              emotion: s.emotion || 'bigSmile',
              style: s.style,
            }),
          );
        } else steps.push(s);
      }
      const run = await bridge.planRun(steps, Boolean(args.holdBase));
      if (!run.ok) return toolResult(run, { isError: true });
      const planId = run.result?.planId;
      // loop 计划不会结束（直到被 supersede / abort），不能等 plan.done
      const hasLoop = steps.some((s) => s && s.loop === true);
      if (hasLoop) {
        return toolResult({
          ok: true,
          planId,
          running: true,
          note: 'looping plan started; it keeps running until control_abort or a new plan supersedes it',
        });
      }
      const done = await bridge.waitPlanDone(planId, args.waitMs || 30000);
      return toolResult({ ok: true, planId, done: done.result });
    }

    if (name === 'pose_set_joint') {
      const r = await bridge.poseSetDelta(args.bone, {
        x: args.x,
        y: args.y,
        z: args.z,
      });
      return toolResult(r, { isError: r.ok === false });
    }

    return fail('E_UNKNOWN_TOOL', `unknown tool ${name}`);
  } catch (err) {
    return fail(err.code || 'E_ERROR', err.message || String(err));
  }
}

/**
 * @param {string} query
 * @param {string} kind
 */
function bodyLookup(query, kind) {
  const q = String(query || '').trim();
  if (!q) return { ok: false, error: 'query required' };

  if (kind === 'site' || q === 'site') {
    return { ok: true, kind: 'site', data: readJson('site.json') };
  }
  if (kind === 'cycles' || q === 'cycles') {
    return { ok: true, kind: 'cycles', data: readJson('cycles.json') };
  }
  if (kind === 'joints' || q === 'joints') {
    const j = readJson('joints.json');
    return { ok: true, kind: 'joints', meta: j.meta, count: j.bones.length };
  }
  if (kind === 'axes' || q === 'axes') {
    const a = readJson('axes.json');
    return { ok: true, kind: 'axes', meta: a.meta, count: a.bones.length };
  }
  if (kind === 'morphs' || q === 'morphs') {
    const m = readJson('morphs.json');
    return {
      ok: true,
      kind: 'morphs',
      meta: m.meta,
      groups: m.groups,
      presetKeys: m.presets.map((p) => p.key),
      moods: m.presets.filter((p) => p.role === 'mood').map((p) => ({
        key: p.key,
        label: p.label,
        coSpeech: Boolean(p.coSpeech),
      })),
      coSpeechMoodIds: m.meta?.coSpeechMoodIds || [],
    };
  }
  if (kind === 'moods' || q === 'mood' || q === 'moods') {
    const m = readJson('morphs.json');
    const moods = m.presets.filter((p) => p.role === 'mood');
    return {
      ok: true,
      kind: 'moods',
      coSpeechMoodIds: m.meta?.coSpeechMoodIds || [],
      moods: moods.map((p) => ({
        key: p.key,
        label: p.label,
        emoji: p.emoji,
        coSpeech: Boolean(p.coSpeech),
        defaultGain: p.defaultGain,
        intentKeywords: p.intentKeywords || [],
      })),
    };
  }
  if (kind === 'poses' || q === 'poses') {
    const p = readJson('poses.json');
    return { ok: true, kind: 'poses', ids: Object.keys(p.poses) };
  }

  const joints = readJson('joints.json');
  const bone = joints.bones.find((b) => b.name.toLowerCase() === q.toLowerCase());
  if (bone || kind === 'joint') {
    const axes = readJson('axes.json');
    const axis = axes.bones.find((b) => b.name === (bone?.name || q));
    return {
      ok: Boolean(bone || axis),
      kind: 'joint',
      joint: bone || null,
      axisSummary: axis?.summary || null,
      axisProbe: axis?.probe || null,
    };
  }

  const morphs = readJson('morphs.json');
  const preset = morphs.presets.find(
    (p) => p.key.toLowerCase() === q.toLowerCase() || p.label === q,
  );
  if (preset || kind === 'morph') {
    return { ok: Boolean(preset), kind: 'morph', preset: preset || null };
  }

  const poses = readJson('poses.json');
  const pose = poses.poses[q] || Object.values(poses.poses).find((p) => p.label === q);
  if (pose || kind === 'pose') {
    return { ok: Boolean(pose), kind: 'pose', pose: pose || null };
  }

  const fuzzyBones = joints.bones
    .filter((b) => b.name.toLowerCase().includes(q.toLowerCase()) || b.label.includes(q))
    .slice(0, 12)
    .map((b) => ({ name: b.name, label: b.label, role: b.role }));
  return {
    ok: fuzzyBones.length > 0,
    kind: 'search',
    query: q,
    matches: fuzzyBones,
  };
}

export function getBridge() {
  return bridge;
}

export function getConfig() {
  return config;
}
