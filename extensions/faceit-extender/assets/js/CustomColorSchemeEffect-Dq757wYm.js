import{c as e,g as t,y as n}from"./react-dom-yulZmupg.js";import{H as r,U as i}from"./createFaceitExtenderQueryClient-CbFICmfN.js";import{a,i as o,n as s,r as c}from"./colorSchemePresets-CCbMdOHo.js";var l=n(t(),1),u={preset:`pepe-green`,customColor:`#5DAF3A`},d=`faceit-extender-color-scheme`,f=o(`#FF4B00`);function p(e){let t=c(e),[n,r]=o(e),i=Math.round(n-f[0]),a=(r/f[1]).toFixed(2);return`
/* Faceit Extender Custom Color Scheme */

/* CSS variables for extension elements injected into the main DOM */
:root {
  --fe-accent: ${t.accent};
  --fe-accent-hover: ${t.accentHover};
  --fe-accent-muted: ${t.accentMuted};
  --fe-accent-border: ${t.accentBorder};
  --fe-accent-text: ${t.accentText};
  --fe-contrast-text: ${t.contrastText};
}

/* Buttons */
[class*="Button" i][class*="primary" i],
[class*="btn" i][class*="primary" i],
button[class*="ActionButton" i],
[class*="Button__Base" i] {
  background-color: ${t.accent} !important;
  border-color: ${t.accentBorder} !important;
}
[class*="Button" i][class*="primary" i],
[class*="btn" i][class*="primary" i],
button[class*="ActionButton" i],
[class*="Button__Base" i],
[class*="Button" i][class*="primary" i] *,
[class*="btn" i][class*="primary" i] *,
button[class*="ActionButton" i] *,
[class*="Button__Base" i] * {
  color: ${t.contrastText} !important;
}
[class*="Button" i][class*="primary" i]:hover,
[class*="btn" i][class*="primary" i]:hover,
button[class*="ActionButton" i]:hover,
[class*="Button__Base" i]:hover {
  background-color: ${t.accentHover} !important;
}

/* Active / selected states */
[class*="Active" i],
[class*="active" i][class*="tab" i],
[class*="Tab" i][aria-selected="true"],
[class*="selected" i] {
  border-color: ${t.accentBorder} !important;
}

/* Progress bars are left native: FACEIT colours their segments by tier
   (empty track, yellow/green fill, white marker) and the extension's own stat
   bars set their tier colour inline. A blanket accent fill made every bar
   look full. */

/* Badges (exclude rank badges and profile badge grid). Border only: FACEIT's
   badge classes cover the red unread counters, grey chips and orange pills
   alike, so a background tint washed out the counters. */
[class*="Badge" i]:not([class*="RankBadge" i]):not([class*="BadgeHolder" i]):not([class*="Rank" i]):not([class*="BadgeGrid" i]):not([class*="BadgeImage" i]) {
  border-color: ${t.accentBorder} !important;
}

/* Links with accent color */
a[class*="Link" i][style*="color"],
[class*="accent" i] {
  color: ${t.accent} !important;
}

/* Tab underline indicators. FACEIT renders one per tab and colours only the
   active one, without any attribute that marks it. Shift FACEIT's orange with a
   filter so the active bar takes the accent and transparent ones stay hidden
   (a background rule painted every tab and clip tiles named "Highlight…"). */
[data-testid="highlight"] {
  filter: hue-rotate(${i}deg) saturate(${a}) !important;
}

/* Nav items active state */
[class*="NavItem" i][class*="active" i],
[class*="MenuItem" i][class*="active" i] {
  background-color: ${t.accentMuted} !important;
  border-color: ${t.accentBorder} !important;
}

/* Headings (exclude highlights grid and status/maintenance banners) */
h1:not([class*="HighlightsGrid" i] *):not([class*="StatusMessageBar" i] *), h2:not([class*="HighlightsGrid" i] *):not([class*="StatusMessageBar" i] *), h3:not([class*="HighlightsGrid" i] *):not([class*="StatusMessageBar" i] *), h4:not([class*="HighlightsGrid" i] *):not([class*="StatusMessageBar" i] *), h5:not([class*="HighlightsGrid" i] *):not([class*="StatusMessageBar" i] *), h6:not([class*="HighlightsGrid" i] *):not([class*="StatusMessageBar" i] *) {
  color: ${t.accent} !important;
}

/* SVG icons in title/heading wrappers (exclude rank badges, highlights grid, and status banners) */
[class*="Title" i]:not([class*="RankBadge" i]):not([class*="BadgeHolder" i]):not([class*="HighlightsGrid" i] *):not([class*="StatusMessageBar" i] *) svg,
[class*="Heading" i]:not([class*="RankBadge" i]):not([class*="BadgeHolder" i]):not([class*="HighlightsGrid" i] *):not([class*="StatusMessageBar" i] *) svg,
[class*="IconWrapper" i]:not([class*="RankBadge" i]):not([class*="BadgeHolder" i]):not([class*="HighlightsGrid" i] *):not([class*="StatusMessageBar" i] *) svg {
  color: ${t.accent} !important;
}

/* Primary-colored SVGs */
svg[color="primary"] {
  color: ${t.accent} !important;
}

/* Error / notification panels */
[class*="ErrorPanel" i][class*="Container" i],
[class*="StyledErrorPanel" i] {
  border-color: ${t.accentBorder} !important;
  box-shadow: ${t.accentMuted} 0px 2px 8px 4px !important;
}
`}function m(e){let t=c(e),n=document.getElementById(`faceit-extender`)?.shadowRoot;if(!n)return;let r=`faceit-extender-color-vars`,i=n.getElementById(r),a=`:host {
  --fe-accent: ${t.accent};
  --fe-accent-hover: ${t.accentHover};
  --fe-accent-muted: ${t.accentMuted};
  --fe-accent-border: ${t.accentBorder};
  --fe-accent-text: ${t.accentText};
  --fe-contrast-text: ${t.contrastText};
}`;i||(i=document.createElement(`style`),i.id=r,n.prepend(i)),i.textContent!==a&&(i.textContent=a)}function h(){(document.getElementById(`faceit-extender`)?.shadowRoot)?.getElementById(`faceit-extender-color-vars`)?.remove()}var g=()=>{let{locale:t}=e(),n=t===`memeify`,[o]=i({key:r.CUSTOM_COLOR_SCHEME,defaultValue:!1}),[c]=i({key:`customColorSchemeConfig`,defaultValue:s}),f=n||o,g=n?u:c,_=(0,l.useRef)(f);_.current=f;let v=(0,l.useRef)(g);v.current=g,(0,l.useEffect)(()=>{let e=()=>{let e=document.getElementById(d);if(!_.current){e?.remove(),h();return}let t=a(v.current),n=p(t);e||(e=document.createElement(`style`),e.id=d,document.head.appendChild(e)),e.textContent=n,m(t)};if(e(),!f)return()=>{document.getElementById(d)?.remove(),h()};let t=null,n=()=>{_.current&&!document.getElementById(d)&&e();let n=document.head;n!==t&&(r.disconnect(),n&&r.observe(n,{childList:!0}),r.observe(document.documentElement,{childList:!0}),t=n)},r=new MutationObserver(n);return n(),()=>{r.disconnect(),document.getElementById(d)?.remove(),h()}},[f,g])};function _(){return g(),null}export{_ as default};