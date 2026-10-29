#!/usr/bin/env node
/**
 * P2–P5 端到端验收
 * 前置：npm run bridge；浏览器 /?mcp=1 已加载
 */
import { createBridgeClient } from '../mcp/wsClient.js';
import { planFromIntent } from '../brain/planner.js';
import { callTool } from '../mcp/tools.js';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

async function main() {
  console.log('=== P5 E2E ===');

  // 1) body_lookup 离线
  const lookup = await callTool('body_lookup', { query: 'RightArm' });
  const lookupText = lookup.content[0].text;
  const lookupJson = JSON.parse(lookupText);
  assert(lookupJson.ok && lookupJson.joint?.name === 'RightArm', 'body_lookup RightArm');
  assert(lookupJson.joint.limits?.rx, 'RightArm limits');
  assert(lookupJson.axisSummary?.rx || lookupJson.axisSummary?.rz, 'RightArm axis');
  console.log('✓ body_lookup offline');

  const site = JSON.parse((await callTool('body_lookup', { query: 'site' })).content[0].text);
  assert(site.data?.pages?.length >= 1, 'site pages');
  console.log('✓ site map');

  // 2) 桥 + intent
  const bridge = createBridgeClient({ client: 'e2e-p5' });
  await bridge.connect();
  const st = await bridge.status();
  assert(st.result?.browserOnline, 'browser online — open /?mcp=1');
  console.log('✓ bridge online');

  const claim = await bridge.claim();
  assert(claim.ok, 'claim');

  // 非法骨
  const bad = await bridge.poseSetDelta('NoSuchBone', { x: 1, y: 0, z: 0 });
  assert(bad.code === 'E_BONE_UNKNOWN', 'E_BONE_UNKNOWN');
  console.log('✓ E_BONE_UNKNOWN');

  // plan wave
  const planned = planFromIntent('挥右手打招呼');
  assert(planned.ok && planned.steps.some((s) => s.prim === 'wave'), 'intent wave');
  const run = await bridge.planRun(planned.steps, false);
  assert(run.ok && run.result?.planId, 'plan.run');
  const done = await bridge.waitPlanDone(run.result.planId, 25000);
  assert(done.event === 'plan.done', 'plan.done');
  console.log('✓ intent wave plan.done', done.result);

  // 掉线 release：再开一客户端抢占应 E_BUSY，释放后可 claim
  const bridge2 = createBridgeClient({ client: 'e2e-busy' });
  await bridge2.connect();
  const busy = await bridge2.claim();
  assert(busy.ok === false && busy.code === 'E_BUSY', 'E_BUSY while held');
  console.log('✓ E_BUSY');

  await bridge.release();
  const claim2 = await bridge2.claim();
  assert(claim2.ok, 'claim after release');
  await bridge2.release();
  bridge2.close();
  console.log('✓ release / re-claim');

  // 断开自动 release
  const bridge3 = createBridgeClient({ client: 'e2e-disc' });
  await bridge3.connect();
  await bridge3.claim();
  bridge3.close();
  await new Promise((r) => setTimeout(r, 400));
  const bridge4 = createBridgeClient({ client: 'e2e-after-disc' });
  await bridge4.connect();
  const afterDisc = await bridge4.claim();
  assert(afterDisc.ok, 'claim after disconnect auto-release');
  await bridge4.release();
  bridge4.close();
  console.log('✓ disconnect auto-release');

  // 自包含真源（开源面不依赖外部 viewer 路径）
  assert(
    fs.existsSync(path.join(ROOT, 'avatar-source/src/facePresets.js')),
    'avatar-source facePresets',
  );
  assert(
    fs.existsSync(path.join(ROOT, 'avatar-source/src/jointDefs.js')),
    'avatar-source jointDefs',
  );
  console.log('✓ self-contained avatar-source');

  // Cursor Skill 可选（MCP 不依赖）
  const skillSrc = path.join(ROOT, 'skill/openbody2039-maya/SKILL.md');
  assert(fs.existsSync(skillSrc), 'skill source in package');
  console.log('✓ skill source bundled (optional for hosts)');

  bridge.close();
  console.log('=== P5 E2E OK ===');
}

main().catch((err) => {
  console.error('P5 E2E FAIL', err);
  process.exit(1);
});
