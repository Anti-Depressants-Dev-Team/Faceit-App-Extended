import{g as e,i as t,l as n,t as r,y as i}from"./react-dom-yulZmupg.js";import{Y as a}from"./createFaceitExtenderQueryClient-CbFICmfN.js";import{M as o,b as s}from"./faceit-custom-CDtcfe9W.js";import{t as c}from"./queryOptions-Dfvzj6n2.js";import{d as l,f as u,g as d,n as f,p,r as m,v as h}from"./icons-Bp7F8Dhp.js";import{t as g}from"./playerSummary-Dw_z0E9l.js";import{r as _,t as v}from"./SimpleComponents-B6nNOXic.js";function y(e,t){let n=o(e,t);if(!n)throw Error(`Player identity unavailable`);return n}function b(e,t=!1){return c({queryKey:[t?a.PLAYER_SUMMARY:a.PLAYER,{playerId:e}],queryFn:async()=>y(await(t?g(e):s(e)),e),staleTime:3e5,retry:2,retryDelay:e=>3500*(e+1)})}var x=n(),S=t.span`
  position: absolute;
  top: -8px;
  right: -8px;
  z-index: 9999;
  pointer-events: none;
`,C=(e,t,n,r,i,a=`xs`,o,s=!1)=>!n||!e?null:(0,x.jsxs)(_,{variant:`secondary`,size:a===`xs`||a===`sm`?`sm`:`md`,onClick:()=>{i(e.id,t.id),r(`faceitHaveWeMetPopup`)},title:`Have we met?`,style:s?{position:`relative`,overflow:`visible`,display:`flex`,alignItems:`center`,gap:`8px`,justifyContent:`center`}:{position:`relative`,overflow:`visible`,padding:`0`,width:`30px`,height:`30px`,minWidth:`30px`},children:[(0,x.jsx)(h,{style:{width:`16px`,height:`16px`,flexShrink:0}}),s&&(0,x.jsx)(`span`,{children:`Have we met?`}),o!==void 0&&o>0&&(0,x.jsx)(S,{children:(0,x.jsx)(v,{variant:`danger`,children:o>99?`99+`:o})})]}),w=i(e(),1),T=i(r(),1),E=t.div`
  position: relative;
  display: inline-block;
  overflow: visible;
`,D=t.div`
  position: fixed;
  background-color: #1F2937;
  border: 1px solid #374151;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  min-width: 180px;
  z-index: 2147483647;
`,O=t.button.attrs({type:`button`,role:`menuitem`,tabIndex:-1})`
  width: 100%;
  padding: 8px 16px;
  text-align: left;
  background: none;
  border: none;
  color: #E2E8F0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  transition: background-color 0.2s;

  &:hover, &:focus-visible {
    background-color: #374151;
  }
  &:focus-visible { outline: 2px solid #ff5500; outline-offset: -2px; }

  &:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  &:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`,k=({button:e,children:t})=>{let[n,r]=(0,w.useState)(!1),i=(0,w.useRef)(null),a=(0,w.useRef)(null),o=(0,w.useId)(),s=(0,w.useRef)(!1),[c,l]=(0,w.useState)({top:0,left:0,width:0}),u=(0,w.useCallback)(()=>{if(!i.current)return;let e=i.current.getBoundingClientRect();l({top:e.bottom+4,left:e.left,width:e.width})},[]);return(0,w.useEffect)(()=>{let e=i.current?.querySelector(`button`);e?.setAttribute(`aria-haspopup`,`menu`),e?.setAttribute(`aria-expanded`,String(n)),e?.setAttribute(`aria-controls`,o)},[n,o]),(0,w.useEffect)(()=>{if(!n)return;let e=[...a.current?.querySelectorAll(`button:not(:disabled)`)??[]];(s.current?e[e.length-1]:e[0])?.focus({preventScroll:!0}),s.current=!1;let t=()=>{r(!1),i.current?.querySelector(`button`)?.focus({preventScroll:!0})},o=n=>{if(n.key===`Escape`){n.preventDefault(),n.stopImmediatePropagation(),t();return}if(n.key===`Tab`){t();return}if(![`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(n.key))return;n.preventDefault(),n.stopImmediatePropagation();let r=e.indexOf(document.activeElement),i=n.key===`Home`?0:n.key===`End`?e.length-1:(r+(n.key===`ArrowDown`?1:-1)+e.length)%e.length;e[i]?.focus()};window.addEventListener(`keydown`,o,!0),u();let c=e=>{let t=e.target;i.current&&!i.current.contains(t)&&a.current&&!a.current.contains(t)&&r(!1)};return document.addEventListener(`mousedown`,c),window.addEventListener(`scroll`,u,!0),window.addEventListener(`resize`,u),()=>{window.removeEventListener(`keydown`,o,!0),document.removeEventListener(`mousedown`,c),window.removeEventListener(`scroll`,u,!0),window.removeEventListener(`resize`,u)}},[n,u]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(E,{children:(0,x.jsx)(`div`,{ref:i,onClick:()=>r(e=>!e),onKeyDown:e=>{(e.key===`ArrowDown`||e.key===`ArrowUp`)&&(e.preventDefault(),s.current=e.key===`ArrowUp`,r(!0))},children:e})}),n&&T.createPortal((0,x.jsx)(D,{ref:a,id:o,role:`menu`,onClick:e=>{e.target.closest(`button`)&&(r(!1),i.current?.querySelector(`button`)?.focus({preventScroll:!0}))},style:{top:c.top,left:c.left,minWidth:Math.max(180,c.width)},children:t}),document.body)]})},A=(e,t)=>w.createElement(e,t),j=(e,t,n=`xs`,r=!1)=>{if(!e||t.length===0)return null;let i=t=>{switch(t){case`leetify`:{let t=e.platforms?.steam?.id64;return t?{name:`Leetify`,url:`https://leetify.com/app/profile/${t}?utm_source=faceit-extender&utm_medium=browser-extension`,provider:`leetify`,icon:f}:null}case`faceitperf`:return{name:`FaceitPerf.pro`,url:`https://faceitperf.pro/players/${encodeURIComponent(e.nickname)}?utm_source=faceit-extender&utm_medium=browser-extension`,provider:`faceitperf`,icon:d};case`cswatch`:{let t=e.platforms?.steam?.id64;return t?{name:`CSWatch`,url:`https://cswatch.in/player/${t}`,provider:`cswatch`,icon:u}:null}case`facehound`:return{name:`FaceHound`,url:`https://www.facehound.pro/?q=${encodeURIComponent(e.nickname)}&utm_source=faceit-extender&utm_medium=browser-extension`,provider:`facehound`,icon:p};default:return null}},a=t.map(e=>i(e)).filter(e=>e!==null);if(a.length===0)return null;if(a.length===1){let e=a[0],t=e.icon;return(0,x.jsxs)(_,{variant:`secondary`,size:n===`xs`||n===`sm`?`sm`:`md`,title:e.name,onClick:()=>{window.open(e.url,`_blank`,`noopener,noreferrer`)},style:r?{display:`flex`,alignItems:`center`,gap:`8px`,justifyContent:`center`}:{padding:`0`,width:`30px`,height:`30px`,minWidth:`30px`},children:[A(t,{size:16,style:{flexShrink:0}}),r&&(0,x.jsx)(`span`,{children:e.name})]})}return(0,x.jsx)(k,{button:(0,x.jsxs)(_,{variant:`secondary`,size:n===`xs`||n===`sm`?`sm`:`md`,title:`External Links`,style:r?{display:`flex`,alignItems:`center`,gap:`8px`,justifyContent:`center`}:{padding:`0`,width:`30px`,height:`30px`,minWidth:`30px`},children:[A(l,{size:16,style:{flexShrink:0}}),r&&(0,x.jsx)(`span`,{children:`External Links`})]}),children:a.map(e=>{let t=e.icon;return(0,x.jsxs)(O,{onClick:()=>{window.open(e.url,`_blank`,`noopener,noreferrer`)},children:[(0,x.jsx)(`span`,{style:{display:`inline-flex`,alignItems:`center`,width:`16px`,height:`16px`,marginRight:`8px`},children:A(t,{size:16})}),e.name]},e.provider)})})},M=(e,t,n,r=`xs`,i=!1)=>e?(0,x.jsxs)(_,{variant:t?`primary`:`secondary`,size:r===`xs`||r===`sm`?`sm`:`md`,onClick:()=>{n(e)},title:t?`Tracked`:`Track Player`,style:i?{display:`flex`,alignItems:`center`,gap:`8px`,justifyContent:`center`}:{padding:`0`,width:`30px`,height:`30px`,minWidth:`30px`},children:[(0,x.jsx)(m,{style:{width:`16px`,height:`16px`,flexShrink:0}}),i&&(0,x.jsx)(`span`,{children:t?`Tracked`:`Track Player`})]}):null;export{y as a,b as i,j as n,C as r,M as t};