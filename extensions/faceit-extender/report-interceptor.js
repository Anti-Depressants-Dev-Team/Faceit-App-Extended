/**
 * Main-world interceptor for FACEIT's native player-report API.
 *
 * Runs in the page's JS context (injected via a <script> tag by the content
 * script) so it can see the site's own fetch / XMLHttpRequest calls — the
 * content script's isolated-world fetch can't observe these.
 *
 * When FACEIT submits a report (POST /api/fbi/v1/users/{userId}/reports) we
 * post the userId + reason/description back to the content script via
 * window.postMessage so it can (optionally) add the player to tracked players.
 */
(function () {
  const REPORT_RE = /\/api\/fbi\/v1\/users\/([^/]+)\/reports\b/;

  const emit = (userId, bodyRaw) => {
    let reason = '';
    let description = '';
    try {
      const body = typeof bodyRaw === 'string' ? JSON.parse(bodyRaw) : bodyRaw;
      if (body && typeof body === 'object') {
        reason = body.reason || '';
        description = body.description || '';
      }
    } catch (_) {
      /* non-JSON body — still report the userId */
    }
    window.postMessage(
      { type: 'FACEIT_EXT_REPORT', userId, reason, description },
      '*'
    );
  };

  const isPost = (method) => (method || 'GET').toUpperCase() === 'POST';

  // --- fetch ---
  const _fetch = window.fetch;
  if (typeof _fetch === 'function') {
    window.fetch = function (input, init) {
      let report;
      try {
        const url = typeof input === 'string' ? input : (input && input.url) || '';
        const method = (init && init.method) || (input && input.method) || 'GET';
        const m = url.match(REPORT_RE);
        if (m && isPost(method)) {
          report = { userId: m[1], body: init && init.body };
        }
      } catch (_) {}
      const pending = _fetch.apply(this, arguments);
      if (!report) return pending;
      return pending.then((response) => {
        if (response.ok) emit(report.userId, report.body);
        return response;
      });
    };
  }

  // --- XMLHttpRequest ---
  const _open = XMLHttpRequest.prototype.open;
  const _send = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open = function (method, url) {
    try {
      this.__feMethod = method;
      this.__feUrl = url;
    } catch (_) {}
    return _open.apply(this, arguments);
  };
  XMLHttpRequest.prototype.send = function (body) {
    try {
      const m = (this.__feUrl || '').match(REPORT_RE);
      if (m && isPost(this.__feMethod)) {
        this.addEventListener('loadend', () => {
          if (this.status >= 200 && this.status < 300) emit(m[1], body);
        }, { once: true });
      }
    } catch (_) {}
    return _send.apply(this, arguments);
  };
})();
