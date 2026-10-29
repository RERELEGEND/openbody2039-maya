/**
 * 单写者会话：claim / heartbeat / 超时释放
 * 环境：Node 20+
 */

const DEFAULT_TTL_MS = 15_000;

/**
 * @param {{ ttlMs?: number, onRelease?: (reason: string) => void }} [opts]
 */
export function createSession(opts = {}) {
  const ttlMs = opts.ttlMs ?? DEFAULT_TTL_MS;
  const onRelease = opts.onRelease ?? (() => {});

  /** @type {{ clientId: string, clientLabel: string, claimedAt: number, lastBeat: number } | null} */
  let holder = null;
  /** @type {ReturnType<typeof setInterval> | null} */
  let timer = null;

  function clearTimer() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function armTimer() {
    clearTimer();
    timer = setInterval(() => {
      if (!holder) return;
      if (Date.now() - holder.lastBeat > ttlMs) {
        release('timeout');
      }
    }, Math.min(2000, Math.floor(ttlMs / 3)));
  }

  function status() {
    if (!holder) {
      return { claimed: false, clientId: null, clientLabel: null, ageMs: 0 };
    }
    return {
      claimed: true,
      clientId: holder.clientId,
      clientLabel: holder.clientLabel,
      ageMs: Date.now() - holder.claimedAt,
      idleMs: Date.now() - holder.lastBeat,
    };
  }

  /**
   * @param {string} clientId
   * @param {string} [clientLabel]
   */
  function claim(clientId, clientLabel = 'controller') {
    if (!clientId) {
      return { ok: false, code: 'E_BAD_CLIENT', error: 'clientId required' };
    }
    if (holder && holder.clientId !== clientId) {
      return {
        ok: false,
        code: 'E_BUSY',
        error: `held by ${holder.clientLabel || holder.clientId}`,
        result: status(),
      };
    }
    const now = Date.now();
    holder = {
      clientId,
      clientLabel,
      claimedAt: holder?.claimedAt ?? now,
      lastBeat: now,
    };
    armTimer();
    return { ok: true, result: { claimed: true, ...status() } };
  }

  /**
   * @param {string} clientId
   * @param {string} [reason]
   */
  function release(reason = 'release', clientId = null) {
    if (!holder) {
      return { ok: true, result: { claimed: false, released: false } };
    }
    if (clientId && holder.clientId !== clientId && reason === 'release') {
      return { ok: false, code: 'E_NOT_CLAIMED', error: 'not your claim' };
    }
    holder = null;
    clearTimer();
    onRelease(reason);
    return { ok: true, result: { claimed: false, released: true, reason } };
  }

  /** @param {string} clientId */
  function heartbeat(clientId) {
    if (!holder || holder.clientId !== clientId) {
      return { ok: false, code: 'E_NOT_CLAIMED', error: 'no claim' };
    }
    holder.lastBeat = Date.now();
    return { ok: true, result: status() };
  }

  /** @param {string} clientId */
  function requireClaim(clientId) {
    if (!holder || holder.clientId !== clientId) {
      return { ok: false, code: 'E_NOT_CLAIMED', error: 'claim required' };
    }
    holder.lastBeat = Date.now();
    return { ok: true };
  }

  function dispose() {
    clearTimer();
    holder = null;
  }

  return { claim, release, heartbeat, requireClaim, status, dispose, ttlMs };
}
