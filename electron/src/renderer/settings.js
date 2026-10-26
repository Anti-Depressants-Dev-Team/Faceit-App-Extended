'use strict';

const api = window.settingsApi;

const $ = (id) => document.getElementById(id);
const listEl = $('list');
const countEl = $('count');
const detail = $('detail');
const stage = $('stage');
const tabs = $('tabs');
const tabButtons = [...tabs.querySelectorAll('button')];
const resetBtn = $('reset');
const reloadPageBtn = $('reload-page');
const toggle = $('d-switch');

/** @type {Array<any>} */
let extensions = [];
let selectedKey = null;
/** 'popup' | 'options' */
let selectedPage = 'popup';
let pageOpen = false;
let busy = false;

function remembered(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

function remember(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // not important
  }
}

// ------------------------------------------------------------------ toast ---

let toastTimer = null;
function toast(message) {
  const el = $('toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}

// ------------------------------------------------------------------ panel ---

/** Keep the native extension view glued to the stage box. */
function syncPanel() {
  const r = stage.getBoundingClientRect();
  // 1px inset so the stage's hairline border stays visible.
  api.setPanelBounds({ x: r.left + 1, y: r.top + 1, width: r.width - 2, height: r.height - 2 });
}

new ResizeObserver(syncPanel).observe(stage);
window.addEventListener('resize', syncPanel);

function placeholder(title, body) {
  $('ph-title').textContent = title;
  $('ph-body').textContent = body;
}

async function openPage() {
  const ext = current();
  pageOpen = false;
  if (!ext) return api.hidePage();

  if (!ext.enabled) {
    api.hidePage();
    placeholder('This extension is off', 'Switch it on to change its settings.');
    return;
  }
  if (!ext.loaded) {
    api.hidePage();
    placeholder("This extension didn't load", ext.error || 'Check the log for details.');
    return;
  }
  if (!ext.hasPopup && !ext.hasOptions) {
    api.hidePage();
    placeholder('Nothing to configure', 'This extension has no settings page. It works on faceit.com as soon as it is on.');
    return;
  }

  const which = selectedPage === 'options' && ext.hasOptions ? 'options' : ext.hasPopup ? 'popup' : 'options';
  placeholder('Loading…', '');
  syncPanel();
  const result = await api.showPage(ext.key, which);
  pageOpen = Boolean(result && result.ok);
  // A narrow popup is centred, so nothing should show around it.
  if (pageOpen) placeholder('', '');
  else {
    placeholder("Couldn't open the settings page", (result && result.reason) || '');
  }
}

// ----------------------------------------------------------------- render ---

function current() {
  return extensions.find((e) => e.key === selectedKey) || null;
}

function statusText(ext) {
  if (ext.enabled && !ext.loaded) return { text: 'Failed to load', bad: true };
  return { text: `v${ext.version}${ext.enabled ? '' : ' · off'}`, bad: false };
}

function renderList() {
  const on = extensions.filter((e) => e.enabled).length;
  countEl.textContent = `${on} of ${extensions.length} on`;

  listEl.replaceChildren(
    ...extensions.map((ext) => {
      const li = document.createElement('li');
      li.className = `ext-row${ext.enabled ? '' : ' off'}`;
      li.setAttribute('role', 'option');
      li.setAttribute('aria-selected', String(ext.key === selectedKey));
      li.tabIndex = ext.key === selectedKey ? 0 : -1;
      li.dataset.key = ext.key;

      const icon = document.createElement('img');
      icon.className = 'ext-row-icon';
      icon.alt = '';
      if (ext.icon) icon.src = ext.icon;

      const text = document.createElement('div');
      text.className = 'ext-row-text';
      const name = document.createElement('div');
      name.className = 'ext-row-name';
      name.textContent = ext.name;
      const sub = document.createElement('div');
      const status = statusText(ext);
      sub.className = `ext-row-sub${status.bad ? ' bad' : ''}`;
      sub.textContent = status.text;
      text.append(name, sub);

      const sw = document.createElement('button');
      sw.type = 'button';
      sw.className = 'switch';
      sw.setAttribute('role', 'switch');
      sw.setAttribute('aria-checked', String(ext.enabled));
      sw.setAttribute('aria-label', `${ext.name} ${ext.enabled ? 'on' : 'off'}`);
      sw.disabled = busy;
      sw.innerHTML = '<span class="track"><span class="thumb"></span></span>';
      sw.addEventListener('click', (event) => {
        event.stopPropagation();
        setEnabled(ext.key, !ext.enabled);
      });

      li.append(icon, text, sw);
      li.addEventListener('click', () => select(ext.key));
      li.addEventListener('keydown', onRowKey);
      return li;
    })
  );
}

function renderDetail() {
  const ext = current();
  detail.hidden = !ext;
  if (!ext) return;

  $('d-icon').src = ext.icon || '';
  $('d-name').textContent = ext.name;
  $('d-meta').textContent =
    ext.fullName && ext.fullName !== ext.name ? `v${ext.version} · ${ext.fullName}` : `v${ext.version}`;
  $('d-desc').textContent = ext.description;

  $('d-note').hidden = !ext.note;
  $('d-note').textContent = ext.note || '';
  const failed = ext.enabled && !ext.loaded;
  $('d-error').hidden = !failed;
  $('d-error').textContent = failed ? `Failed to load: ${ext.error || 'unknown error'}` : '';

  toggle.setAttribute('aria-checked', String(ext.enabled));
  toggle.disabled = busy;
  $('d-switch-label').textContent = ext.enabled ? 'On' : 'Off';

  const both = ext.hasPopup && ext.hasOptions;
  tabs.hidden = !(ext.hasPopup || ext.hasOptions);
  const active = selectedPage === 'options' && ext.hasOptions ? 'options' : ext.hasPopup ? 'popup' : 'options';
  for (const btn of tabButtons) {
    const page = btn.dataset.page;
    const available = page === 'popup' ? ext.hasPopup : ext.hasOptions;
    btn.hidden = !available;
    btn.disabled = !ext.loaded;
    btn.setAttribute('aria-selected', String(page === active));
    if (!both && available) btn.textContent = 'Settings';
    else btn.textContent = page === 'popup' ? 'Quick settings' : 'All options';
  }

  resetBtn.disabled = !ext.loaded || busy;
  reloadPageBtn.disabled = !ext.loaded;
  disarmReset();

  // The note / error lines shift the stage down.
  requestAnimationFrame(syncPanel);
}

function render() {
  renderList();
  renderDetail();
}

// ---------------------------------------------------------------- actions ---

function select(key) {
  if (key === selectedKey) return;
  selectedKey = key;
  remember('fx.selected', key);
  render();
  openPage();
}

async function setEnabled(key, enabled) {
  if (busy) return;
  busy = true;
  render();
  try {
    extensions = await api.setEnabled(key, enabled);
    const ext = extensions.find((e) => e.key === key);
    if (ext && enabled && !ext.loaded) toast(`${ext.name} failed to load`);
    else if (ext) toast(`${ext.name} ${enabled ? 'on' : 'off'} · reloading FACEIT`);
  } finally {
    busy = false;
    render();
    if (key === selectedKey) openPage();
  }
}

let resetTimer = null;
function disarmReset() {
  clearTimeout(resetTimer);
  resetBtn.classList.remove('armed');
  resetBtn.textContent = 'Reset data';
}

resetBtn.addEventListener('click', async () => {
  const ext = current();
  if (!ext) return;

  // First click arms, second click within a few seconds resets.
  if (!resetBtn.classList.contains('armed')) {
    resetBtn.classList.add('armed');
    resetBtn.textContent = 'Click again to reset';
    resetTimer = setTimeout(disarmReset, 4000);
    return;
  }

  disarmReset();
  busy = true;
  render();
  try {
    const result = await api.reset(ext.key);
    if (result.ok) {
      extensions = result.list;
      toast(`${ext.name} reset to defaults`);
    } else {
      toast(`Couldn't reset: ${result.error}`);
    }
  } finally {
    busy = false;
    render();
    openPage();
  }
});

toggle.addEventListener('click', () => {
  const ext = current();
  if (ext) setEnabled(ext.key, !ext.enabled);
});

for (const btn of tabButtons) {
  btn.addEventListener('click', () => {
    if (selectedPage === btn.dataset.page) return;
    selectedPage = btn.dataset.page;
    remember('fx.page', selectedPage);
    renderDetail();
    openPage();
  });
}

reloadPageBtn.addEventListener('click', () => {
  if (pageOpen) api.reloadPage();
  else openPage();
});

$('reload-site').addEventListener('click', () => {
  api.reloadSite();
  toast('Reloading FACEIT');
});

function onRowKey(event) {
  const index = extensions.findIndex((e) => e.key === selectedKey);
  let next = null;
  if (event.key === 'ArrowDown') next = extensions[Math.min(extensions.length - 1, index + 1)];
  else if (event.key === 'ArrowUp') next = extensions[Math.max(0, index - 1)];
  else if (event.key === ' ' || event.key === 'Enter') {
    const ext = current();
    if (ext) setEnabled(ext.key, !ext.enabled);
    event.preventDefault();
    return;
  }
  if (next) {
    event.preventDefault();
    select(next.key);
    listEl.querySelector(`[data-key="${CSS.escape(next.key)}"]`)?.focus();
  }
}

// ------------------------------------------------------------------- init ---

api.onChanged((list) => {
  extensions = list;
  render();
});

api.onPageError((message) => {
  pageOpen = false;
  api.hidePage();
  placeholder("Couldn't open the settings page", message);
});

(async () => {
  selectedPage = remembered('fx.page', 'popup');
  extensions = await api.list();
  const saved = remembered('fx.selected', null);
  selectedKey = extensions.some((e) => e.key === saved) ? saved : extensions[0]?.key || null;
  render();
  openPage();
})();
