// Replaces EXT's wp-db.js in the patched copy (see FILE_OVERRIDES in main.js).
//
// EXT keeps uploaded wallpapers in IndexedDB, but IndexedDB can't open on
// chrome-extension:// pages in Electron ("Internal error opening backing
// store"). chrome.storage.local works in every extension context - the upload
// page, the popup, and the wallpaper frame EXT puts behind faceit.com - so the
// files live there instead, base64 encoded and split into chunks to keep each
// write a sensible size.
//
// Same interface as the original: window.ExtWpDb.{get, put, del, clear, migrate}.
(() => {
  'use strict';

  const PREFIX = 'fxwp:';
  const INDEX = `${PREFIX}__index`;
  // Characters of base64 per stored chunk. Must be a multiple of 4 so every
  // chunk decodes on its own.
  const CHUNK = 4 * 1024 * 1024;

  const store = chrome.storage.local;
  const headKey = (id) => `${PREFIX}${id}`;
  const partKey = (id, n) => `${PREFIX}${id}:${n}`;

  const read = async (key) => (await store.get(key))[key];

  const blobToBase64 = (blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result).split(',')[1] || '');
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(blob);
    });

  const base64ToBytes = (b64) => {
    const bin = atob(b64);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i += 1) bytes[i] = bin.charCodeAt(i);
    return bytes;
  };

  async function readIndex() {
    const ids = await read(INDEX);
    return Array.isArray(ids) ? ids : [];
  }

  async function del(id) {
    id = String(id);
    const head = await read(headKey(id));
    const keys = [headKey(id)];
    if (head && head.parts) for (let n = 0; n < head.parts; n += 1) keys.push(partKey(id, n));
    await store.remove(keys);
    const ids = await readIndex();
    if (ids.includes(id)) await store.set({ [INDEX]: ids.filter((x) => x !== id) });
  }

  async function put(id, blob) {
    id = String(id);
    if (!(blob instanceof Blob)) blob = new Blob([blob]);
    await del(id);

    const b64 = await blobToBase64(blob);
    const parts = Math.max(1, Math.ceil(b64.length / CHUNK));
    // One write per chunk, head last: a half-written file is never visible.
    for (let n = 0; n < parts; n += 1) {
      await store.set({ [partKey(id, n)]: b64.slice(n * CHUNK, (n + 1) * CHUNK) });
    }
    await store.set({ [headKey(id)]: { type: blob.type, size: blob.size, parts } });

    const ids = await readIndex();
    if (!ids.includes(id)) await store.set({ [INDEX]: [...ids, id] });
    return id;
  }

  async function get(id) {
    id = String(id);
    const head = await read(headKey(id));
    if (!head || !head.parts) return undefined;

    const chunks = [];
    for (let n = 0; n < head.parts; n += 1) {
      const part = await read(partKey(id, n));
      if (typeof part !== 'string') return undefined;
      chunks.push(base64ToBytes(part));
    }
    return new Blob(chunks, { type: head.type || '' });
  }

  async function clear() {
    for (const id of await readIndex()) await del(id);
    await store.remove(INDEX);
  }

  // The original moved data-URL wallpapers from older EXT versions out of
  // chrome.storage into IndexedDB. Do the same into this store.
  async function migrate() {
    const all = await store.get(['extWpData', 'extWpMeta']);
    if (typeof all.extWpData !== 'string') return;

    const meta = all.extWpMeta;
    const id = (meta && meta.libId) || 'legacy';
    try {
      await put(id, await (await fetch(all.extWpData)).blob());
    } catch {
      return;
    }
    await store.remove('extWpData');
    if (meta && !meta.idb) {
      await store.set({ extWpMeta: { ...meta, libId: meta.libId || 'legacy', idb: true, dataKey: undefined } });
    }
  }

  window.ExtWpDb = { get, put, del, clear, migrate };
})();
