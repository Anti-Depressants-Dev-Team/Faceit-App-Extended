'use strict';

const back = document.getElementById('back');
const forward = document.getElementById('forward');
const reload = document.getElementById('reload');

back.addEventListener('click', () => window.shellApi.send('back'));
forward.addEventListener('click', () => window.shellApi.send('forward'));
reload.addEventListener('click', () => {
  window.shellApi.send(document.body.classList.contains('loading') ? 'stop' : 'reload');
});

document.getElementById('extensions').addEventListener('click', () => window.shellApi.openSettings());

function render(state) {
  if (!state) return;
  back.disabled = !state.canGoBack;
  forward.disabled = !state.canGoForward;
  document.body.classList.toggle('loading', Boolean(state.loading));
  reload.title = state.loading ? 'Stop loading' : 'Reload (F5)';
}

window.shellApi.onState(render);
window.shellApi.query().then(render);

// Dim the bar while the window sits in the background. This has to come from
// the main process: the bar loses DOM focus whenever the site view is clicked.
// Appears only once an update has downloaded; clicking restarts into it.
const update = document.getElementById('update');
update.addEventListener('click', () => window.shellApi.installUpdate());
window.shellApi.onUpdateReady((version) => {
  update.title = `Restart to install ${version}`;
  update.hidden = false;
});

window.shellApi.onFocus((focused) => {
  document.body.classList.toggle('window-focused', focused);
});
document.body.classList.add('window-focused');
