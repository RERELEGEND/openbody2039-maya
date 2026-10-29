/**
 * MCP ↔ WS 控制器客户端
 * 环境：Node 20+ · ws ^8
 */
import WebSocket from 'ws';

export function createBridgeClient(options = {}) {
  const url =
    options.url ||
    process.env.OPENBODY_WS_URL ||
    'ws://127.0.0.1:8787';
  const clientLabel = options.client || 'mcp';
  const wsUrl = `${url}?role=controller&client=${encodeURIComponent(clientLabel)}`;

  /** @type {WebSocket | null} */
  let ws = null;
  /** @type {Map<string, {resolve: Function, reject: Function, timer: any}>} */
  const pending = new Map();
  /** @type {((ev: object) => void)[]} */
  const eventListeners = [];
  let clientId = null;
  let claimed = false;

  function sendRaw(obj) {
    if (!ws || ws.readyState !== WebSocket.OPEN) {
      throw Object.assign(new Error('bridge offline'), { code: 'E_BRIDGE_OFFLINE' });
    }
    ws.send(JSON.stringify(obj));
  }

  function rpc(method, params = {}, timeoutMs = 15000) {
    const id = `mcp_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        pending.delete(id);
        reject(Object.assign(new Error(`timeout ${method}`), { code: 'E_TIMEOUT' }));
      }, timeoutMs);
      pending.set(id, { resolve, reject, timer });
      try {
        sendRaw({ id, method, params });
      } catch (err) {
        clearTimeout(timer);
        pending.delete(id);
        reject(err);
      }
    });
  }

  function connect() {
    if (ws && (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING)) {
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      ws = new WebSocket(wsUrl);
      const t = setTimeout(() => reject(new Error('connect timeout')), 5000);
      ws.on('open', () => {
        clearTimeout(t);
        resolve();
      });
      ws.on('error', (e) => {
        clearTimeout(t);
        reject(e);
      });
      ws.on('message', (raw) => {
        let data;
        try {
          data = JSON.parse(String(raw));
        } catch {
          return;
        }
        if (data.event === 'hello' && data.result?.id) {
          clientId = data.result.id;
        }
        if (data.event) {
          for (const fn of eventListeners) fn(data);
        }
        if (data.id && pending.has(data.id)) {
          const p = pending.get(data.id);
          pending.delete(data.id);
          clearTimeout(p.timer);
          p.resolve(data);
        }
      });
      ws.on('close', () => {
        claimed = false;
        for (const [, p] of pending) {
          clearTimeout(p.timer);
          p.reject(Object.assign(new Error('ws closed'), { code: 'E_BRIDGE_OFFLINE' }));
        }
        pending.clear();
      });
    });
  }

  async function ensure() {
    await connect();
  }

  async function status() {
    await ensure();
    return rpc('bridge.status');
  }

  async function claim() {
    await ensure();
    const r = await rpc('session.claim', { client: clientLabel });
    if (r.ok) claimed = true;
    return r;
  }

  async function release() {
    if (!ws) return { ok: true, result: { claimed: false } };
    const r = await rpc('session.release');
    claimed = false;
    return r;
  }

  async function abort() {
    await ensure();
    return rpc('plan.abort', { reason: 'mcp_abort' });
  }

  async function planRun(steps, holdBase = false) {
    await ensure();
    if (!claimed) {
      const c = await claim();
      if (!c.ok) return c;
    }
    let out = await rpc('plan.run', { steps, holdBase }, 5000);
    // 写权有 TTL（默认 15s），过期后客户端标记仍是 true，会被桥拒绝；
    // 这里自动重新 claim 并重试一次，避免调用方看到 E_NOT_CLAIMED。
    if (out && out.ok === false && out.code === 'E_NOT_CLAIMED') {
      claimed = false;
      const c = await claim();
      if (!c.ok) return c;
      out = await rpc('plan.run', { steps, holdBase }, 5000);
    }
    return out;
  }

  /**
   * plan.run 后等待 plan.done 事件
   */
  function waitPlanDone(planId, timeoutMs = 30000) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        off();
        reject(Object.assign(new Error('plan timeout'), { code: 'E_PLAN_TIMEOUT' }));
      }, timeoutMs);
      function handler(ev) {
        if (ev.event === 'plan.done' && (!planId || ev.result?.planId === planId)) {
          clearTimeout(timer);
          off();
          resolve(ev);
        }
      }
      function off() {
        const i = eventListeners.indexOf(handler);
        if (i >= 0) eventListeners.splice(i, 1);
      }
      eventListeners.push(handler);
    });
  }

  async function poseSetDelta(bone, deg) {
    await ensure();
    if (!claimed) await claim();
    let out = await rpc('pose.setDelta', { bone, ...deg });
    if (out && out.ok === false && out.code === 'E_NOT_CLAIMED') {
      claimed = false;
      await claim();
      out = await rpc('pose.setDelta', { bone, ...deg });
    }
    return out;
  }

  async function snapshot() {
    await ensure();
    return rpc('query.snapshot');
  }

  function onEvent(fn) {
    eventListeners.push(fn);
    return () => {
      const i = eventListeners.indexOf(fn);
      if (i >= 0) eventListeners.splice(i, 1);
    };
  }

  function close() {
    try {
      ws?.close();
    } catch {
      /* ignore */
    }
    ws = null;
  }

  return {
    connect: ensure,
    status,
    claim,
    release,
    abort,
    planRun,
    waitPlanDone,
    poseSetDelta,
    snapshot,
    onEvent,
    close,
    get claimed() {
      return claimed;
    },
    get clientId() {
      return clientId;
    },
  };
}
