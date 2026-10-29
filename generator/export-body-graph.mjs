#!/usr/bin/env node
/**
 * 从本包 avatar-source/ 导出 body-graph/（自包含，不依赖外部 viewer 仓库）
 *
 * 真源默认：OpenBody2039_MAYA/avatar-source/
 * 可选覆盖：OPENBODY_AVATAR_SRC=/path/to/viewer  （须含 src/jointDefs.js 等）
 *
 * 环境：Ubuntu 22.04 · Node 20+
 * 用法：npm run export:graph
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'body-graph');

/** 默认自包含；外部 viewer 仅作同步上游时通过环境变量指向 */
const AVATAR_SRC = process.env.OPENBODY_AVATAR_SRC
  ? path.resolve(process.env.OPENBODY_AVATAR_SRC)
  : path.join(ROOT, 'avatar-source');

const SRC = {
  jointDefs: path.join(AVATAR_SRC, 'src/jointDefs.js'),
  facePresets: path.join(AVATAR_SRC, 'src/facePresets.js'),
  expressionCatalog: path.join(AVATAR_SRC, 'src/expressionCatalog.js'),
  actionFlow: path.join(AVATAR_SRC, 'src/actionFlow.js'),
  verifyMd: path.join(AVATAR_SRC, 'docs/DETAILED_JOINT_VERIFY.md'),
};

/** Mixamo 扩展骨架父骨表（与本 GLB 命名一致；端点/眼也挂上） */
const PARENT_OF = {
  Hips: null,
  Spine: 'Hips',
  Spine1: 'Spine',
  Spine2: 'Spine1',
  Neck: 'Spine2',
  Neck1: 'Neck',
  Neck2: 'Neck1',
  Head: 'Neck2',
  HeadTop_End: 'Head',
  LeftEye: 'Head',
  RightEye: 'Head',
  LeftShoulder: 'Spine2',
  LeftArm: 'LeftShoulder',
  LeftForeArm: 'LeftArm',
  LeftForeArm1: 'LeftForeArm',
  LeftForeArm2: 'LeftForeArm1',
  LeftHand: 'LeftForeArm2',
  RightShoulder: 'Spine2',
  RightArm: 'RightShoulder',
  RightForeArm: 'RightArm',
  RightForeArm1: 'RightForeArm',
  RightForeArm2: 'RightForeArm1',
  RightHand: 'RightForeArm2',
  LeftUpLeg: 'Hips',
  LeftLeg: 'LeftUpLeg',
  LeftFoot: 'LeftLeg',
  LeftToeBase: 'LeftFoot',
  LeftToe_End: 'LeftToeBase',
  RightUpLeg: 'Hips',
  RightLeg: 'RightUpLeg',
  RightFoot: 'RightLeg',
  RightToeBase: 'RightFoot',
  RightToe_End: 'RightToeBase',
};

const FINGER_CHAIN = {
  LeftHandThumb: ['LeftHand', 'LeftHandThumb1', 'LeftHandThumb2', 'LeftHandThumb3', 'LeftHandThumb4'],
  LeftHandIndex: ['LeftHand', 'LeftHandIndex1', 'LeftHandIndex2', 'LeftHandIndex3', 'LeftHandIndex4'],
  LeftHandMiddle: ['LeftHand', 'LeftHandMiddle1', 'LeftHandMiddle2', 'LeftHandMiddle3', 'LeftHandMiddle4'],
  LeftHandRing: ['LeftHand', 'LeftHandRing1', 'LeftHandRing2', 'LeftHandRing3', 'LeftHandRing4'],
  LeftHandPinky: ['LeftHand', 'LeftHandPinky1', 'LeftHandPinky2', 'LeftHandPinky3', 'LeftHandPinky4'],
  RightHandThumb: ['RightHand', 'RightHandThumb1', 'RightHandThumb2', 'RightHandThumb3', 'RightHandThumb4'],
  RightHandIndex: ['RightHand', 'RightHandIndex1', 'RightHandIndex2', 'RightHandIndex3', 'RightHandIndex4'],
  RightHandMiddle: ['RightHand', 'RightHandMiddle1', 'RightHandMiddle2', 'RightHandMiddle3', 'RightHandMiddle4'],
  RightHandRing: ['RightHand', 'RightHandRing1', 'RightHandRing2', 'RightHandRing3', 'RightHandRing4'],
  RightHandPinky: ['RightHand', 'RightHandPinky1', 'RightHandPinky2', 'RightHandPinky3', 'RightHandPinky4'],
};

for (const chain of Object.values(FINGER_CHAIN)) {
  for (let i = 1; i < chain.length; i++) {
    PARENT_OF[chain[i]] = chain[i - 1];
  }
}

function mustExist(file, label) {
  if (!fs.existsSync(file)) {
    throw new Error(`缺少 ${label}: ${file}`);
  }
}

function writeJson(name, data) {
  const file = path.join(OUT, name);
  fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
  return file;
}

/**
 * 解析 DETAILED_JOINT_VERIFY.md → 每骨每轴语义摘要
 * @param {string} md
 */
function parseVerifyAxes(md) {
  /** @type {Record<string, object>} */
  const bones = {};
  const sections = md.split(/^## `/m).slice(1);

  for (const section of sections) {
    const nameMatch = section.match(/^([^`]+)`/);
    if (!nameMatch) continue;
    const bone = nameMatch[1].trim();
    const probeMatch = section.match(/测点：`([^`]+)`/);
    const angleMatch = section.match(/试验角：±(\d+)°/);
    const probe = probeMatch ? probeMatch[1] : null;
    const testDeg = angleMatch ? Number(angleMatch[1]) : null;

    /** @type {Record<string, object>} */
    const axes = {};
    const axisBlocks = section.split(/^### /m).slice(1);

    for (const block of axisBlocks) {
      const head = block.match(/^(RX|RY|RZ)\s*([+−\-])(\d+)°/);
      if (!head) continue;
      const axis = head[1].toLowerCase();
      const signChar = head[2];
      const sign = signChar === '+' ? 'pos' : 'neg';
      const deg = Number(head[3]);

      const semanticLine =
        block.match(/【语义确认】([^\n]+)/)?.[1]?.trim() ||
        block.match(/【主结果】([^\n]+)/)?.[1]?.trim() ||
        null;
      const detailLine = block.match(/【详证】([^\n]+)/)?.[1]?.trim() ||
        block.match(/【定量】([^\n]+)/)?.[1]?.trim() ||
        null;
      const quantMatch = block.match(
        /定量 \(dx,dy,dz\)=\(`([^`]+)`,\s*`([^`]+)`,\s*`([^`]+)`\)，mag=`([^`]+)`/,
      );
      const quant = quantMatch
        ? {
            dx: Number(quantMatch[1]),
            dy: Number(quantMatch[2]),
            dz: Number(quantMatch[3]),
            mag: Number(quantMatch[4]),
          }
        : null;

      if (!axes[axis]) axes[axis] = {};
      axes[axis][sign] = {
        deg: sign === 'pos' ? deg : -deg,
        semantic: semanticLine,
        detail: detailLine,
        endpointDelta: quant,
      };
    }

    bones[bone] = { bone, probe, testDeg, axes };
  }

  return bones;
}

function summarizeAxisSemantics(entry) {
  if (!entry?.axes) return {};
  /** @type {Record<string, string>} */
  const out = {};
  for (const axis of ['rx', 'ry', 'rz']) {
    const a = entry.axes[axis];
    if (!a) continue;
    const parts = [];
    if (a.pos?.semantic) parts.push(`+${axis.toUpperCase()}: ${a.pos.semantic.replace(/^[+\-−]?R[XYZ]\s*[：:→\s]*/, '').trim()}`);
    if (a.neg?.semantic) parts.push(`−${axis.toUpperCase()}: ${a.neg.semantic.replace(/^[+\-−]?R[XYZ]\s*[：:→\s]*/, '').trim()}`);
    if (parts.length) out[axis] = parts.join('｜');
  }
  return out;
}

async function main() {
  for (const [k, p] of Object.entries(SRC)) mustExist(p, k);
  fs.mkdirSync(OUT, { recursive: true });

  const jointMod = await import(pathToFileURL(SRC.jointDefs).href);
  const faceMod = await import(pathToFileURL(SRC.facePresets).href);
  const catalogMod = await import(pathToFileURL(SRC.expressionCatalog).href);
  const flowMod = await import(pathToFileURL(SRC.actionFlow).href);

  const { JOINT_DEFS, STANDING_POSES, getJointDef } = jointMod;
  const {
    MORPH_PRESETS,
    PRESET_LABELS,
    PRESET_EMOJI,
    PRESET_DURATION,
    PRESET_GROUPS,
    PRESET_INSTANT,
    PRESET_SEQUENCES,
    GAZE_CONFLICT_MORPHS,
  } = faceMod;
  const { exportCatalogForGraph, COSPEECH_MOOD_IDS } = catalogMod;
  const { DEFAULT_ACTION_FLOW } = flowMod;

  const verifyMd = fs.readFileSync(SRC.verifyMd, 'utf8');
  const axesRaw = parseVerifyAxes(verifyMd);
  const verifiedBoneNames = Object.keys(axesRaw).sort();

  // —— joints.json ——
  const namedBones = Object.keys(JOINT_DEFS);
  const fingerBones = verifiedBoneNames.filter((n) =>
    /^(Left|Right)Hand(Thumb|Index|Middle|Ring|Pinky)\d$/.test(n),
  );
  const allBoneNames = [...new Set([...namedBones, ...fingerBones, ...verifiedBoneNames])].sort();

  const joints = {
    meta: {
      generatedAt: new Date().toISOString(),
      source: 'avatar-source/src/jointDefs.js',
      // 相对包根；禁止写入本机绝对路径（开源面）
      avatarSrcRoot: path.relative(ROOT, AVATAR_SRC) || 'avatar-source',
      counts: {
        jointDefsNamed: namedBones.length,
        verifiedProbeJoints: verifiedBoneNames.length,
        exportedBones: allBoneNames.length,
        runtimeSkinnedBonesNote: 73,
      },
      units: 'degrees, local Euler delta vs bind pose',
      note: '执行时只写运行时存在的骨名；知识面以实测+JOINT_DEFS为准',
    },
    fingerRule: {
      prefixes: [
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
      ],
      defaultLimit: getJointDef('LeftHandIndex1'),
    },
    bones: allBoneNames.map((name) => {
      const def = getJointDef(name);
      return {
        name,
        parent: PARENT_OF[name] ?? null,
        label: def.label,
        role: def.role,
        limits: { rx: def.rx, ry: def.ry, rz: def.rz },
        inJointDefs: Boolean(JOINT_DEFS[name]),
        verified: Boolean(axesRaw[name]),
      };
    }),
  };
  writeJson('joints.json', joints);

  // —— axes.json ——
  const axes = {
    meta: {
      generatedAt: new Date().toISOString(),
      source: 'avatar-source/docs/DETAILED_JOINT_VERIFY.md',
      worldHint: '角色前方≈世界+Z；+Y向上',
      boneCount: verifiedBoneNames.length,
    },
    bones: verifiedBoneNames.map((name) => {
      const raw = axesRaw[name];
      return {
        name,
        probe: raw.probe,
        testDeg: raw.testDeg,
        summary: summarizeAxisSemantics(raw),
        trials: raw.axes,
      };
    }),
  };
  writeJson('axes.json', axes);

  // —— morphs.json ——
  const morphNameSet = new Set();
  for (const weights of Object.values(MORPH_PRESETS)) {
    for (const k of Object.keys(weights || {})) morphNameSet.add(k);
  }
  for (const m of GAZE_CONFLICT_MORPHS || []) morphNameSet.add(m);

  // 目录元数据（role / coSpeech / moodWeights）来自 expressionCatalog；权重真源仍是 facePresets
  const catalogEntries = exportCatalogForGraph();
  const catalogByKey = new Map(catalogEntries.map((e) => [e.key, e]));

  const presets = Object.keys(MORPH_PRESETS).map((key) => {
    const cat = catalogByKey.get(key) || {};
    return {
      key,
      label: PRESET_LABELS[key] || key,
      emoji: PRESET_EMOJI[key] || null,
      durationSec: PRESET_DURATION[key] ?? null,
      instant: PRESET_INSTANT instanceof Set ? PRESET_INSTANT.has(key) : false,
      isSequence: Boolean(PRESET_SEQUENCES?.[key]),
      role: cat.role || 'flash',
      coSpeech: Boolean(cat.coSpeech),
      defaultGain: cat.defaultGain ?? 0.55,
      intentKeywords: cat.intentKeywords || [],
      weights: MORPH_PRESETS[key],
      moodWeights: cat.moodWeights || {},
    };
  });

  const morphs = {
    meta: {
      generatedAt: new Date().toISOString(),
      source: 'avatar-source/src/facePresets.js + expressionCatalog.js',
      arkitMorphCountObservedInPresets: morphNameSet.size,
      presetCount: presets.length,
      moodCount: presets.filter((p) => p.role === 'mood').length,
      coSpeechMoodIds: COSPEECH_MOOD_IDS || [],
      note: '模型开放 51 个 ARKit Morph；role/coSpeech 由 expressionCatalog 导出；禁止手改本 JSON，改 avatar-source 后 export:graph',
    },
    morphNames: [...morphNameSet].sort(),
    gazeConflictMorphs: [...(GAZE_CONFLICT_MORPHS || [])],
    groups: PRESET_GROUPS,
    sequences: PRESET_SEQUENCES,
    presets,
  };
  writeJson('morphs.json', morphs);

  // —— poses.json ——
  const poses = {
    meta: {
      generatedAt: new Date().toISOString(),
      source: 'avatar-source/src/jointDefs.js → STANDING_POSES',
    },
    poses: Object.fromEntries(
      Object.entries(STANDING_POSES).map(([id, pose]) => [
        id,
        {
          id,
          label: pose.label,
          hint: pose.hint,
          source: pose.source,
          alive: Boolean(pose.alive),
          deltas: pose.deltas,
        },
      ]),
    ),
  };
  writeJson('poses.json', poses);

  // —— cycles.json ——
  const cycles = {
    meta: {
      generatedAt: new Date().toISOString(),
      sources: [
        'avatar-source/src/actionFlow.js',
        'OpenBody PROTOCOL (compatible viewer facade)',
      ],
      note: 'cycles describe OpenBody-compatible viewer conventions; not bound to a specific product repo',
    },
    facade: {
      version: '2.0.0',
      entry: 'window.MAYA',
      ready: 'MAYA.whenReady()',
    },
    namespaces: [
      { key: 'flow', global: '__MAYA_ACTION_FLOW', methods: ['playAuto', 'stop', 'pause', 'resume', 'next', 'run', 'listSteps', 'getStatus'] },
      { key: 'pose', global: '__MAYA_POSE', methods: ['listBones', 'setDelta', 'getDelta', 'applyPose', 'resetAll', 'walkPlay', 'walkStop', 'walkPlaying'] },
      { key: 'fx', global: '__MAYA_FX', methods: ['setForm', 'getForm', 'playShowcase', 'stopShowcase'] },
      { key: 'anim', global: '__MAYA_ANIM', methods: ['play', 'stop', 'list', 'current'] },
      { key: 'view', global: '__MAYA_VIEW', methods: ['getRoot', 'focusBone', 'setCameraFront', 'setCameraSide', 'setCameraTop'] },
      { key: 'reveal', global: '__MAYA_REVEAL', methods: ['play', 'skip', 'isPlaying'] },
      { key: 'speech', global: null, methods: ['startMic', 'stopMic', 'isActive', 'setEmotion', 'getEmotion'] },
    ],
    bodyCycles: [
      { id: 'smileWave', global: '__MAYA_SMILE_WAVE', mayaPath: 'MAYA.cycles.smileWave', meaning: '微笑挥手' },
      { id: 'discoverHands', global: '__MAYA_DISCOVER_HANDS', mayaPath: 'MAYA.cycles.discoverHands', meaning: '看手1' },
      { id: 'discoverHands2', global: '__MAYA_DISCOVER_HANDS2', mayaPath: 'MAYA.cycles.discoverHands2', meaning: '看手2' },
      { id: 'discoverHandsMorph', global: '__MAYA_DISCOVER_HANDS_MORPH', mayaPath: 'MAYA.cycles.discoverHandsMorph', meaning: '看手过渡' },
      { id: 'hands2ToSmile', global: '__MAYA_HANDS2_TO_SMILE', mayaPath: 'MAYA.cycles.hands2ToSmile', meaning: '看手2→挥手' },
      { id: 'smileToNewStand', global: '__MAYA_SMILE_TO_NEWSTAND', mayaPath: 'MAYA.cycles.smileToNewStand', meaning: '挥手→NEW站姿' },
    ],
    actionFlowDefault: DEFAULT_ACTION_FLOW,
    primitivesPlanned: [
      { prim: 'stand', mapsTo: 'STANDING_POSES.*' },
      { prim: 'wave', mapsTo: '__MAYA_SMILE_WAVE / smileWave' },
      { prim: 'walk', mapsTo: 'MAYA.pose.walkPlay/Stop' },
      { prim: 'express', mapsTo: 'facePresets tween' },
      { prim: 'nod', mapsTo: 'Head/Neck short curve' },
      { prim: 'shake', mapsTo: 'Head RY short curve' },
      { prim: 'turnHead', mapsTo: 'Head/Neck' },
      { prim: 'gazeAt', mapsTo: 'lookAt / eye morph' },
      { prim: 'flowStep', mapsTo: 'MAYA.flow.run(stepId)' },
    ],
  };
  writeJson('cycles.json', cycles);

  // —— site.json（静态约定，生成器写入以便单一出口） ——
  const site = {
    meta: {
      generatedAt: new Date().toISOString(),
      package: 'OpenBody2039_MAYA',
      avatarSource: 'avatar-source/',
      note: 'Self-contained MCP; any viewer implementing PROTOCOL can attach to the bridge',
    },
    env: {
      os: 'Ubuntu 22.04',
      node: '>=20',
    },
    pages: [
      {
        id: 'viewer',
        path: '/',
        role: '兼容 viewer · 桥接目标（建议 ?mcp=1）',
        bridge: true,
      },
    ],
    bridge: {
      query: 'mcp=1',
      wsUrlDefault: 'ws://127.0.0.1:8787',
      portEnv: 'OPENBODY_WS_PORT',
      defaultPort: 8787,
      status: 'p1_available',
      enableQuery: 'mcp=1',
    },
    dev: {
      mcp: 'npm run mcp',
      bridge: 'npm run bridge',
      exportGraph: 'npm run export:graph',
      avatarSrcEnv: 'OPENBODY_AVATAR_SRC',
      typicalViewerUrl: 'http://127.0.0.1:5173/?mcp=1',
    },
    counts: {
      runtimeSkinnedBones: 73,
      verifiedProbeJoints: verifiedBoneNames.length,
      jointDefsNamed: namedBones.length,
      facePresets: presets.length,
      standingPoses: Object.keys(STANDING_POSES).length,
    },
  };
  writeJson('site.json', site);

  // —— schema.md ——
  const schema = `# body-graph 字段说明

> 由 \`npm run export:graph\` 生成。真源是本包 \`avatar-source/\`，勿手改 JSON。

## 文件

| 文件 | 内容 |
|---|---|
| \`joints.json\` | 骨名 / 父骨 / 中文 label·role / 逐轴限位 |
| \`axes.json\` | 实测轴语义摘要 + 端点位移试验 |
| \`morphs.json\` | ARKit morph 名并集 + 表情预设 |
| \`poses.json\` | \`STANDING_POSES\` |
| \`cycles.json\` | 兼容 viewer 门面 / 动作流 / 计划原语 |
| \`site.json\` | 桥约定、数量口径 |
| \`motions/\` | （可选，默认不发布）第三方动作包；缺省时 dance 走程序化原语 |

## 关节口径（三套，勿混）

1. **运行时蒙皮骨 ≈ 73** — 兼容 viewer \`listBones\`
2. **实测验证关节 = ${verifiedBoneNames.length}** — \`avatar-source/docs/DETAILED_JOINT_VERIFY.md\`
3. **JOINT_DEFS 具名 = ${namedBones.length}** + 手指前缀规则 — \`avatar-source/src/jointDefs.js\`

## 角度约定

- 单位：度
- 含义：相对绑定位姿（T-pose）的**局部欧拉增量**
- 写入：协议 \`pose_set_joint\` / viewer \`setDelta\`
- 世界提示：角色前方 ≈ +Z，+Y 向上

## 重跑

\`\`\`bash
cd OpenBody2039_MAYA
npm run export:graph
# 可选：从外部 viewer 树同步后导出
# OPENBODY_AVATAR_SRC=/path/to/viewer npm run export:graph
\`\`\`
`;
  fs.writeFileSync(path.join(OUT, 'schema.md'), schema, 'utf8');

  console.log('avatar-source →', path.relative(ROOT, AVATAR_SRC) || 'avatar-source');
  console.log('body-graph exported →', OUT);
  console.log(
    JSON.stringify(
      {
        joints: allBoneNames.length,
        verified: verifiedBoneNames.length,
        presets: presets.length,
        poses: Object.keys(STANDING_POSES).length,
      },
      null,
      2,
    ),
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
