#!/usr/bin/env node
/**
 * P1 冒烟：claim → pose.setDelta(Head) → query.snapshot → release
 * 前置：npm run bridge；主 viewer 已开 /?mcp=1 且模型加载完成
 *
 * 环境：Node 20+ · ws ^8
 * 可选：OPENBODY_WS_URL=ws://127.0.0.1:8787
 */
import WebSocket from 'ws';

const URL = process.env.OPENBODY_WS_URL || 'ws://127.0.0.1:8787';
const wsUrl = `${URL}?role=controller&client=smoke-p1`;

function waitOpen(ws) {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error('connect timeout')), 5000);
    ws.once('open', () => {
      clearTimeout(t);
      resolve();
    });
    ws.once('error', (e) => {
      clearTimeout(t);
      reject(e);
    });
  });
}

function rpc(ws, method, params = {}) {
  const id = `smoke_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error(`timeout ${method}`)), 12000);
    function onMsg(raw) {
      let data;
      try {
        data = JSON.parse(String(raw));
      } catch {
        return;
      }
      if (data.id !== id) return;
      clearTimeout(t);
      ws.off('message', onMsg);
      resolve(data);
    }
    ws.on('message', onMsg);
    ws.send(JSON.stringify({ id, method, params }));
  });
}

async function waitBrowser(ws, tries = 30) {
  for (let i = 0; i < tries; i++) {
    const st = await rpc(ws, 'bridge.status');
    if (st.result?.browserOnline) return st.result;
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error('browser not online — open http://127.0.0.1:5173/?mcp=1');
}

async function main() {
  const ws = new WebSocket(wsUrl);
  await waitOpen(ws);
  console.log('connected', wsUrl);

  const status = await waitBrowser(ws);
  console.log('bridge', status);

  const claim = await rpc(ws, 'session.claim', { client: 'smoke-p1' });
  console.log('claim', claim);
  if (!claim.ok) process.exit(1);

  const denied = await rpc(ws, 'pose.setDelta', { bone: 'NoSuchBone', x: 1, y: 0, z: 0 });
  console.log('unknown bone', denied);
  if (denied.code !== 'E_BONE_UNKNOWN') {
    console.error('expected E_BONE_UNKNOWN');
    process.exit(1);
  }

  const set = await rpc(ws, 'pose.setDelta', { bone: 'Head', x: -12, y: 8, z: 0 });
  console.log('setDelta Head', set);
  if (!set.ok) process.exit(1);

  const snap = await rpc(ws, 'query.snapshot');
  console.log('snapshot Head', snap.result?.deltas?.Head);
  const h = snap.result?.deltas?.Head;
  if (!h || Math.abs(h.x - (set.result?.applied?.x ?? -12)) > 0.2) {
    console.error('snapshot mismatch', h);
    process.exit(1);
  }

  const release = await rpc(ws, 'session.release');
  console.log('release', release);

  ws.close();
  console.log('P1 smoke OK');
}

main().catch((err) => {
  console.error('P1 smoke FAIL', err);
  process.exit(1);
});
