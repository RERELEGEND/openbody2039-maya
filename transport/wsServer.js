#!/usr/bin/env node
/**
 * OpenBody2039 WebSocket 桥服务
 * - 浏览器以 role=browser 连接（一页一会话）
 * - 控制器（冒烟脚本 / 未来 MCP）以 role=controller 连接
 * - 写操作需 session.claim；转发 pose.* / query.* / plan.* 到浏览器
 *
 * 环境：Ubuntu 22.04 · Node 20+ · ws ^8
 * 用法：npm run bridge
 * 端口：OPENBODY_WS_PORT 或默认 8787
 */
import { WebSocketServer, WebSocket } from 'ws';
import { createSession } from './session.js';

const PORT = Number(process.env.OPENBODY_WS_PORT || 8787);
const HOST = process.env.OPENBODY_WS_HOST || '127.0.0.1';

/** @type {import('ws').WebSocket | null} */
let browserSocket = null;
let browserReady = false;

const session = createSession({
  onRelease: (reason) => {
    broadcastControllers({ event: 'session.released', result: { reason } });
  },
});

/** @type {Map<import('ws').WebSocket, { id: string, role: string, label: string }>} */
const clients = new Map();

let idSeq = 1;
function nextId(prefix) {
  return `${prefix}_${idSeq++}_${Date.now().toString(36)}`;
}

function send(ws, obj) {
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify(obj));
  }
}

function broadcastControllers(obj) {
  for (const [ws, meta] of clients) {
    if (meta.role === 'controller') send(ws, obj);
  }
}

function bridgeStatus() {
  return {
    browserOnline: Boolean(browserSocket && browserSocket.readyState === WebSocket.OPEN),
    browserReady,
    session: session.status(),
    controllers: [...clients.values()].filter((c) => c.role === 'controller').length,
  };
}

/**
 * 向浏览器发请求并等应答
 * @param {object} msg
 * @param {number} [timeoutMs]
 */
function callBrowser(msg, timeoutMs = 8000) {
  return new Promise((resolve, reject) => {
    if (!browserSocket || browserSocket.readyState !== WebSocket.OPEN) {
      reject(Object.assign(new Error('browser offline'), { code: 'E_BRIDGE_OFFLINE' }));
      return;
    }
    const id = msg.id ?? nextId('req');
    const payload = { ...msg, id };
    const timer = setTimeout(() => {
      browserSocket?.off?.('message', onMsg);
      reject(Object.assign(new Error('browser timeout'), { code: 'E_BRIDGE_TIMEOUT' }));
    }, timeoutMs);

    function onMsg(raw) {
      let data;
      try {
        data = JSON.parse(String(raw));
      } catch {
        return;
      }
      if (data.id !== id) return;
      clearTimeout(timer);
      browserSocket.off('message', onMsg);
      resolve(data);
    }
    browserSocket.on('message', onMsg);
    send(browserSocket, payload);
  });
}

async function handleControllerMessage(ws, meta, data) {
  const id = data.id;
  const method = data.method;
  const params = data.params || {};

  if (!method) {
    send(ws, { id, ok: false, code: 'E_BAD_REQUEST', error: 'method required' });
    return;
  }

  if (method === 'ping' || method === 'bridge.status') {
    send(ws, { id, ok: true, result: bridgeStatus() });
    return;
  }

  if (method === 'session.claim') {
    const r = session.claim(meta.id, params.client || meta.label || 'controller');
    send(ws, { id, ok: r.ok, code: r.code, error: r.error, result: r.result });
    return;
  }

  if (method === 'session.release') {
    const r = session.release('release', meta.id);
    send(ws, { id, ok: r.ok, code: r.code, error: r.error, result: r.result });
    return;
  }

  if (method === 'session.heartbeat') {
    const r = session.heartbeat(meta.id);
    send(ws, { id, ok: r.ok, code: r.code, error: r.error, result: r.result });
    return;
  }

  if (method === 'session.status') {
    send(ws, { id, ok: true, result: { ...bridgeStatus() } });
    return;
  }

  const writeMethods = new Set([
    'pose.setDelta',
    'pose.setMany',
    'pose.apply',
    'pose.reset',
    'plan.run',
    'plan.abort',
    'face.set',
    'face.morph',
  ]);

  if (writeMethods.has(method)) {
    const gate = session.requireClaim(meta.id);
    if (!gate.ok) {
      send(ws, { id, ok: false, code: gate.code, error: gate.error });
      return;
    }
  }

  try {
    const reply = await callBrowser({ id, method, params });
    send(ws, {
      id,
      ok: reply.ok !== false,
      code: reply.code,
      error: reply.error,
      result: reply.result,
    });
  } catch (err) {
    send(ws, {
      id,
      ok: false,
      code: err.code || 'E_BRIDGE_OFFLINE',
      error: err.message || String(err),
    });
  }
}

function handleBrowserMessage(_ws, data) {
  if (data.event === 'browser.ready') {
    browserReady = true;
    broadcastControllers({ event: 'browser.ready', result: bridgeStatus() });
    return;
  }
  if (data.event) {
    broadcastControllers(data);
  }
}

const wss = new WebSocketServer({ host: HOST, port: PORT });

wss.on('listening', () => {
  console.log(`[openbody] WS bridge listening ws://${HOST}:${PORT}`);
});

wss.on('connection', (ws, req) => {
  const url = new URL(req.url || '/', `http://${HOST}`);
  const role = url.searchParams.get('role') || 'controller';
  const label = url.searchParams.get('client') || role;
  const id = nextId(role === 'browser' ? 'br' : 'ctl');
  clients.set(ws, { id, role, label });

  if (role === 'browser') {
    if (browserSocket && browserSocket.readyState === WebSocket.OPEN) {
      send(ws, { event: 'error', code: 'E_BUSY', error: 'another browser already connected' });
      ws.close(4000, 'busy');
      return;
    }
    browserSocket = ws;
    browserReady = false;
    console.log(`[openbody] browser connected ${id}`);
    send(ws, { event: 'hello', result: { role: 'browser', id, session: session.status() } });
  } else {
    console.log(`[openbody] controller connected ${id} (${label})`);
    send(ws, {
      event: 'hello',
      result: { role: 'controller', id, ...bridgeStatus() },
    });
  }

  ws.on('message', async (raw) => {
    let data;
    try {
      data = JSON.parse(String(raw));
    } catch {
      send(ws, { ok: false, code: 'E_BAD_JSON', error: 'invalid json' });
      return;
    }
    const meta = clients.get(ws);
    if (!meta) return;
    if (meta.role === 'browser') {
      handleBrowserMessage(ws, data);
      return;
    }
    try {
      await handleControllerMessage(ws, meta, data);
    } catch (err) {
      send(ws, {
        id: data.id,
        ok: false,
        code: 'E_INTERNAL',
        error: err.message || String(err),
      });
    }
  });

  ws.on('close', () => {
    const meta = clients.get(ws);
    clients.delete(ws);
    if (meta?.role === 'browser' && browserSocket === ws) {
      browserSocket = null;
      browserReady = false;
      console.log(`[openbody] browser disconnected ${meta.id}`);
      broadcastControllers({ event: 'browser.offline', result: bridgeStatus() });
    }
    if (meta?.role === 'controller') {
      const st = session.status();
      if (st.claimed && st.clientId === meta.id) {
        session.release('disconnect', meta.id);
      }
      console.log(`[openbody] controller disconnected ${meta.id}`);
    }
  });
});

process.on('SIGINT', () => {
  session.dispose();
  wss.close(() => process.exit(0));
});
