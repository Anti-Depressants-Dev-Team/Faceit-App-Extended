const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./useMatchroomFactionMapRadar-D2bzKHmQ.js","./react-dom-yulZmupg.js","./client-CYgUK-Dx.js","./createFaceitExtenderQueryClient-CbFICmfN.js","./mapIcons-7zl6uhGN.js","./useUserMapWinRates-BwI9G5Et.js","./usePlayerStatsByYear-drbA1zuM.js","./faceit-custom-CDtcfe9W.js","./config-BtyybfZj.js","./playerStatsByYearOptions-Bo47EsJi.js","./queryOptions-Dfvzj6n2.js","./cs2Maps-BAmWhL9o.js","../../src/pages/contentApp/index.js","./StyledRoot-CpD4TNt7.js","./reactRoot-DlzkSMau.js","./playerTrackingStorage-G0t8rMga.js","./colorSchemePresets-CCbMdOHo.js","./extensionAssetUrl-oIreGExj.js","./crossContextStore-BkQHDV6z.js","./statsWorkerPool-DdGYHd6I.js","./mapWinRatesFromStatsByYear-BtYth3k7.js","./useMatch-DnD_7kGP.js","./useMutation-EBeuDPUT.js","./useMapIcons-DlCGUNNo.js","./playerMapStatsOptions-CbVYuS72.js","./playerMatchesOptions-ieWLRQXp.js","./useStableQueryResults-CY1mIoXe.js","./useMatchroomRecommendation-YgVhuyX2.js","./usePlayerStatsV1Raw-q4QDZPYn.js","./useAiAuthToken-CRzh2KOB.js","./extensionApi-Cg9BTNq2.js","./useMatchroom2dViewer-_xjrg47S.js","./matchDemoDownload-CE2D1wLC.js","./extensionContext-rMCe_0Ha.js"])))=>i.map(i=>d[i]);
import{c as e,g as t,l as n,u as r,v as i,y as a}from"./react-dom-yulZmupg.js";import{t as o}from"./client-CYgUK-Dx.js";import{B as s,G as c,H as l,K as u,Q as d,U as f,W as p,Y as m,_ as h,g,q as _}from"./createFaceitExtenderQueryClient-CbFICmfN.js";import{D as v,P as y,S as b,f as x,k as S,m as ee}from"./faceit-custom-CDtcfe9W.js";import{t as te}from"./config-BtyybfZj.js";import{o as ne,s as C}from"./playerTrackingStorage-G0t8rMga.js";import{D as re,E as w,T as ie,g as ae,h as T,i as oe,l as se,s as ce,u as le}from"../../src/pages/contentApp/index.js";import{n as ue}from"./usePlayerHistory-Cwqfey5A.js";import{t as de}from"./usePlayerStatsV1Raw-q4QDZPYn.js";import{t as fe}from"./usePlayerStatsByYear-drbA1zuM.js";import{a as E,n as pe,o as me,r as he}from"./statsWorkerPool-DdGYHd6I.js";import{a as ge,i as _e,n as ve,o as ye,r as be,s as xe,t as Se}from"./faceitStats-DbbgNFzl.js";import{a as Ce,i as we,l as Te,o as Ee,r as De,s as Oe,u as ke}from"./useMatchScoreboardSummary-YfGGe9aK.js";import{i as Ae,n as je,r as Me,t as Ne}from"./killClutchInsights-B_551Pv9.js";import{t as Pe}from"./useMatch-DnD_7kGP.js";import{t as D}from"./select-B_KhLdGP.js";import{i as Fe,n as Ie,r as O,t as Le}from"./countryDisplay-BDky4DKu.js";import{t as Re}from"./playerSummary-Dw_z0E9l.js";import{r as k,t as ze}from"./nicknameHelpers-DbBkDI2a.js";import{t as Be}from"./inputKeys-C_yW6TVd.js";import{t as A}from"./matchroom-Cj-amRFC.js";import{t as Ve}from"./useMapIcons-DlCGUNNo.js";import{t as He}from"./faceitHaveWeMetStore-CYiKXXz3.js";import{i as j,n as Ue,r as We,t as Ge}from"./playerTrackingButton-DQ2gx219.js";import{n as M}from"./auto-copy-server-data-DjVFaxjR.js";import{t as Ke}from"./useSupporterEntitlement-Ctc6eUIu.js";import{r as qe}from"./supporterBadge-DVCiWJaH.js";import{t as Je}from"./playerMatchesOptions-ieWLRQXp.js";import{i as Ye,t as Xe}from"./playerCardGradients-CE571085.js";var N=a(t(),1),Ze=new Set;function Qe(e){try{let t=`${e}:${window.location.pathname.match(/\/room\/([^/?#]+)/)?.[1]??``}`;if(Ze.has(t))return;Ze.add(t);let n=globalThis.chrome?.runtime;n?.sendMessage({action:d,event:e},()=>void n.lastError)}catch{}}var $e=[`faceit-extender-matchroom-stats-dropdown`,`faceit-extender-matchroom-recommendation`,`faceit-extender-matchroom-map-radar`],et=[],P=0,tt=e=>{let t=$e.indexOf(e.id);if(t!==-1)return t-$e.length;let n=et.indexOf(e.id);return n===-1?P:n+1},nt=`16px`,rt=(e,t,n)=>{let r=e.style;r.marginTop!==t&&(r.marginTop=t),r.marginBottom!==n&&(r.marginBottom=n),r.marginLeft!==`0px`&&(r.marginLeft=`0px`),r.marginRight!==`0px`&&(r.marginRight=`0px`)};function it(e,t){let n=tt(t);n<P?rt(t,`0px`,nt):rt(t,nt,`0px`);let r=Array.from(e.children).filter(e=>e!==t),i=-1;r.forEach((e,t)=>{tt(e)<=n&&(i=t)});let a=r[i+1]??null;(t.parentElement!==e||t.nextElementSibling!==a)&&e.insertBefore(t,a)}var F=`#2e2e2e`,at=(e,t,n)=>{let r=(0,N.useRef)(null);(0,N.useEffect)(()=>()=>{r.current?.remove(),r.current=null},[]),(0,N.useEffect)(()=>{if(!e){let e=document.getElementById(`faceit-extender-matchroom-stats-dropdown`);e&&e.parentNode&&e.remove();return}let i=()=>document.querySelector(`div[name="info"]`),a=()=>{let e=i();if(!e)return!1;let a=document.getElementById(`faceit-extender-matchroom-stats-dropdown`);if(a){it(e,a);let n=a.querySelector(`#faceit-extender-matchroom-stats-select`);return n&&n.value!==t&&(n.value=t),!0}let o=document.createElement(`div`);o.id=`faceit-extender-matchroom-stats-dropdown`,o.style.cssText=`
                background-color: rgb(9, 9, 12);
                border: 1px solid rgba(229, 231, 235, 0.2);
                border-radius: 8px;
                padding: 6px 8px;
                margin-bottom: 8px;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 8px;
                width: 100%;
                box-sizing: border-box;
            `;let s=document.createElement(`label`);s.setAttribute(`for`,`faceit-extender-matchroom-stats-select`),s.id=`faceit-extender-matchroom-stats-label`,s.textContent=`Period`,s.title=`Stats period`,s.style.cssText=`
                color: #e5e7eb;
                font-size: 12px;
                font-weight: 500;
                white-space: nowrap;
                font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                user-select: none;
                cursor: pointer;
                margin: 0;
            `;let c=document.createElement(`select`);return c.id=`faceit-extender-matchroom-stats-select`,c.style.cssText=`
                background-color: #374151;
                color: #e5e7eb;
                border: 1px solid ${F};
                border-radius: 6px;
                padding: 4px 28px 4px 10px;
                font-size: 12px;
                height: 28px;
                font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                cursor: pointer;
                outline: none;
                transition: background-color 0.2s ease, border-color 0.2s ease;
                flex: 1;
                min-width: 128px;
                appearance: none;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23e5e7eb' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
                background-repeat: no-repeat;
                background-position: right 10px center;
                background-size: 12px;
            `,c.addEventListener(`mouseenter`,()=>{c.style.backgroundColor=`#4b5563`}),c.addEventListener(`mouseleave`,()=>{c.style.backgroundColor=`#374151`}),c.addEventListener(`focus`,()=>{c.style.backgroundColor=`#4b5563`,c.style.borderColor=F,c.style.boxShadow=`0 0 0 2px ${F}33`}),c.addEventListener(`blur`,()=>{c.style.backgroundColor=`#374151`,c.style.borderColor=F,c.style.boxShadow=`none`}),E.forEach(({value:e,label:t})=>{let n=document.createElement(`option`);n.value=e,n.textContent=t,c.appendChild(n)}),c.value=t,c.addEventListener(`change`,e=>{e.preventDefault(),e.stopPropagation();let t=e.target.value;n(t),Qe(`matchroom_stats_period_changed`)}),o.appendChild(s),o.appendChild(c),it(e,o),r.current=o,!0};a();let o=null,s=e=>(e.target instanceof Element?e.target:null)?.closest(`div[name="info"]`)?!0:[...e.addedNodes,...e.removedNodes].some(e=>e instanceof Element&&(e.matches(`div[name="info"], #faceit-extender-matchroom-stats-dropdown`)||!!e.querySelector(`div[name="info"], #faceit-extender-matchroom-stats-dropdown`))),c=re(e=>{e.some(s)&&(o||=setTimeout(()=>{o=null,a()},200))});return()=>{c(),o&&clearTimeout(o)}},[t,n,e])},ot=8e3,st=6,ct=[`div[class*="ListContentPlayer__Holder"]`,`div[class*="PlayerHolder"]`,`div[class*="PlayerCard"]`].join(`,`),lt=()=>{let e=s(),[t]=f({key:l.MATCHROOM_COUNTRY_FLAGS,defaultValue:!1}),{data:n,isSuccess:r}=Pe(),i=(0,N.useRef)(!0),a=(0,N.useRef)(new Set),o=(0,N.useRef)(new Map),c=(0,N.useRef)(!1),u=(0,N.useRef)(!1),d=(0,N.useRef)(()=>{}),p=(0,N.useRef)(new Map),h=(0,N.useRef)(null),g=(0,N.useCallback)(()=>D.all(ct).filter(e=>e.querySelector(`div[class*="NicknameContainer"], div[class*="Nickname__Name"], div[class*="Nickname__Container"]`)),[]),_=(0,N.useCallback)(e=>{let t=[`div[class*="NicknameContainer"]`,`div[class*="Nickname__Name"]`,`div[class*="Nickname__Container"]`,`h5`],n=null;for(let r of t)if(n=e.querySelector(r),n)break;if(!n)return null;let r=ze(n);if(!r)return null;let i=null;if(i=e.getAttribute(`data-player-id`),!i){let t=e.querySelector(`[id^="extra-info-wrapper-"]`);if(t){let e=t.id.match(/extra-info-wrapper-(.+)/);e&&(i=e[1])}}return{playerId:i,nickname:r,nicknameElement:n}},[]),v=(0,N.useCallback)(e=>{if(!r||!n)return null;let t=[...n.teams.faction1.roster,...n.teams.faction2.roster],i=k(e),a=t.find(e=>k(e.nickname)===i);return a?a.id:null},[r,n]),y=(0,N.useCallback)((e,t)=>{if(!e||!t)return;let n=e.querySelector(`[data-country-indicator="true"]`);if(!n&&e.parentElement){let t=e.previousElementSibling;t&&t.getAttribute(`data-country-indicator`)===`true`&&(n=t);let r=e.nextElementSibling;!n&&r&&r.getAttribute(`data-country-indicator`)===`true`&&(n=r)}if(n){let e=n.querySelector(`img[data-country-flag]`),r=n.querySelector(`span[data-country-flag]`);e?(e.src=Ie(t),e.alt=`${O(t)} (${t.toUpperCase()})`,e.title=`${O(t)} (${t.toUpperCase()})`):r&&(r.textContent=Le(t),r.setAttribute(`title`,`${O(t)} (${t.toUpperCase()})`));return}let r=document.createElement(`span`);r.setAttribute(`data-country-indicator`,`true`),r.style.cssText=`
            display: inline-flex;
            align-items: center;
            margin-right: 6px;
            vertical-align: middle;
            line-height: 1;
        `;let i=document.createElement(`img`);i.setAttribute(`data-country-flag`,`true`),i.src=Ie(t),i.alt=`${O(t)} (${t.toUpperCase()})`,i.title=`${O(t)} (${t.toUpperCase()})`,i.style.cssText=`
            display: inline-block;
            width: 20px;
            height: 15px;
            object-fit: cover;
            border-radius: 2px;
            vertical-align: middle;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
            border: 0.5px solid rgba(255, 255, 255, 0.1);
        `,i.onerror=()=>{i.style.display=`none`;let e=document.createElement(`span`);e.textContent=Le(t),e.style.cssText=`
                display: inline-block;
                font-size: 14px;
                line-height: 1;
                vertical-align: middle;
            `,r.appendChild(e)},r.appendChild(i);try{e.firstChild&&(e.firstChild.nodeType,Node.TEXT_NODE),e.insertBefore(r,e.firstChild);let t=window.getComputedStyle(e);t.display===`flex`&&t.flexDirection===`column`&&(e.style.display=`inline-flex`,e.style.flexDirection=`row`,e.style.alignItems=`center`)}catch(e){console.error(`[useMatchroomPlayerCountry] Error inserting country indicator:`,e)}},[]),b=(0,N.useCallback)(async()=>{if(i.current&&t){if(c.current){u.current=!0;return}if(r&&n){c.current=!0;try{let t=g(),n=new Set,r=!1;await Promise.all(t.map(async t=>{let i=_(t);if(!i||!i.nicknameElement)return;let s=i.playerId;if(!s&&(s=v(i.nickname),!s))return;if(a.current.has(s)){n.add(s);let e=o.current.get(s);e?.country&&i.nicknameElement&&y(i.nicknameElement,e.country);return}let c=p.current.get(s);if(!(c&&c.attempts>=st)){if(c&&Date.now()-c.at<ot){r=!0;return}try{let r=await e.fetchQuery({queryKey:[m.PLAYER_SUMMARY,{playerId:s}],queryFn:async()=>{let e=await Re(s);if(!e)throw Error(`player summary unavailable`);return e},staleTime:3e5});p.current.delete(s),n.add(s);let a=r&&typeof r.country==`string`&&r.country?r.country:null;o.current.set(s,{playerId:s,nickname:i.nickname,country:a,element:t}),a&&y(i.nicknameElement,a)}catch(e){let t=p.current.get(s);p.current.set(s,{at:Date.now(),attempts:(t?.attempts??0)+1}),r=!0,console.error(`[useMatchroomPlayerCountry] Error fetching player data:`,e)}}})),r&&i.current&&h.current===null&&(h.current=setTimeout(()=>{h.current=null,i.current&&d.current()},8050)),a.current=n}finally{c.current=!1,u.current&&i.current&&(u.current=!1,queueMicrotask(()=>d.current()))}}}},[t,r,n,g,_,v,y,e]);d.current=b,(0,N.useEffect)(()=>{if(i.current=!0,!t){document.querySelectorAll(`[data-country-indicator="true"]`).forEach(e=>e.remove()),a.current.clear(),o.current.clear();return}b();let e=null,n=re(n=>{i.current&&t&&n.some(e=>Fe(e,`div[class*="ListContentPlayer__Holder"], div[class*="PlayerHolder"], div[class*="PlayerCard"]`))&&(e&&clearTimeout(e),e=setTimeout(()=>{i.current&&t&&b()},300))});return()=>{i.current=!1,u.current=!1,h.current&&=(clearTimeout(h.current),null),e&&clearTimeout(e),n()}},[t,b]),(0,N.useEffect)(()=>{let e=o.current;return()=>{document.querySelectorAll(`[data-country-indicator="true"]`).forEach(e=>e.remove()),a.current.clear(),e.clear()}},[])},I={Dust2:`de_dust2`,Mirage:`de_mirage`,Nuke:`de_nuke`,Ancient:`de_ancient`,Train:`de_train`,Inferno:`de_inferno`,Overpass:`de_overpass`,Anubis:`de_anubis`,Vertigo:`de_vertigo`},ut=()=>{let[e]=f({key:l.AUTO_MAP_MESSAGE,defaultValue:!1}),[t]=f({key:l.AUTO_MAP_PRETALK,defaultValue:!1}),{data:n}=Pe(),r=n?.voting?.map?.pick?.[0],i=r?n?.voting?.map?.entities?.find(e=>e.guid===r)??n?.maps?.find(e=>e.guid===r):[`CONFIGURING`,`READY`,`ONGOING`,`PAUSED`].includes(n?.state??n?.status??``)?n?.maps?.[0]:void 0,a=i?.gameMapId||i?.className||r,o=i?a&&/^(de|cs|ar)_/.test(a)?a:I[i.name]:void 0,[s]=f({key:Be.AUTO_MAP_PRETALK_TEXT,defaultValue:``,waitForStorage:!0}),c=A(),u=n?.state??n?.status??``,d=[`CONFIGURING`,`READY`,`ONGOING`,`PAUSED`].includes(u),p=(0,N.useCallback)(async()=>{if(!o)return``;let e=`${o}MessageEnabled`,t=`${o}Message`,n=await new Promise(n=>chrome.storage.sync.get([e,t],e=>n(e))),r=n[t];return n[e]&&typeof r==`string`?r:``},[o]),m=(0,N.useCallback)(async()=>typeof s==`string`?s:``,[s]);dt(!!(e&&d&&o),n?.id,`mapMessageSent`,p),dt(!(!t||n?.id!==c||[`FINISHED`,`CANCELLED`,`ABORTED`].includes(u)),c,`mapPretalkSent`,m)};function dt(e,t,n,r){(0,N.useEffect)(()=>{if(!e||!t)return;let i=!0,a=!1,o=null,s=()=>{let e=o;o=null,e?.input.isConnected&&e.input.value===e.message&&((Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,`value`)?.set)?.call(e.input,``),e.input.dispatchEvent(new Event(`input`,{bubbles:!0})),e.input.dispatchEvent(new Event(`change`,{bubbles:!0})))},c=null,l=async()=>{if(!i||a)return;let e=A();if(!e)return;let c=`${e}_${n}`;if(!sessionStorage.getItem(c)&&e===t){a=!0;try{let t=await r();if(!i||A()!==e||sessionStorage.getItem(c)||!t.trim())return;let n=([...document.querySelectorAll(`[role="log"][id]`)].find(t=>t.id.startsWith(`scrollable-container-team-${e}_`))?.closest(`[class*=roomChatContainer]`))?.querySelector(`[data-chat-input-surface] textarea`);if(!n||n.disabled||n.readOnly||n.value.trim())return;n.focus();let a=Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,`value`)?.set;if(!a)return;if(o={input:n,message:t},a.call(n,t),n.dispatchEvent(new Event(`input`,{bubbles:!0})),n.dispatchEvent(new Event(`change`,{bubbles:!0})),await new Promise(e=>setTimeout(e,0)),!i||A()!==e||!n.isConnected){s();return}if(n.value!==t){o=null;return}o=null;for(let e of[`keydown`,`keyup`])n.dispatchEvent(new KeyboardEvent(e,{key:`Enter`,code:`Enter`,keyCode:13,which:13,bubbles:!0}));await new Promise(e=>setTimeout(e,0)),i&&A()===e&&n.isConnected&&!n.value.trim()&&sessionStorage.setItem(c,`1`)}catch(e){console.error(`[AutoMapMessage] Error sending message:`,e)}finally{a=!1}}},u=w(()=>{c===null&&(c=setTimeout(()=>{c=null,l()},300))});return l(),()=>{i=!1,s(),u(),c!==null&&clearTimeout(c)}},[e,t,n,r])}var L=`faceit-extender-matchroom-toggle-row`;function R(){let e=document.createElement(`div`);return e.id=L,e.setAttribute(`aria-label`,`Lobby controls`),e.style.cssText=`
    display: flex;
    align-items: center;
    gap: 6px;
    flex: none;
    margin-left: auto;
    box-sizing: border-box;
  `,e}var ft=()=>{let e=document.getElementById(`faceit-extender-matchroom-stats-dropdown`),t=document.querySelector(`div[name="info"]`),n=e?.isConnected?e:t,r=document.getElementById(L);return n?(r||=R(),r.parentElement!==n&&n.appendChild(r),r):r?.isConnected?r:null},pt=`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  min-width: 28px;
  min-height: 28px;
  max-width: 28px;
  max-height: 28px;
  flex: none;
  padding: 0;
  border-radius: 7px;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
  font-size: 0;
  line-height: 0;
`,z=`http://www.w3.org/2000/svg`;function B(e,t){let n=document.createElementNS(z,e);for(let[e,r]of Object.entries(t))n.setAttribute(e,r);return n}function mt(){let e=document.createElementNS(z,`svg`);return Object.entries({width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`}).forEach(([t,n])=>e.setAttribute(t,n)),e.appendChild(B(`path`,{d:`M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z`})),e.appendChild(B(`circle`,{cx:`12`,cy:`12`,r:`3`})),e}function ht(){let e=document.createElementNS(z,`svg`);return Object.entries({width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`}).forEach(([t,n])=>e.setAttribute(t,n)),e.appendChild(B(`line`,{x1:`6`,y1:`20`,x2:`6`,y2:`12`})),e.appendChild(B(`line`,{x1:`12`,y1:`20`,x2:`12`,y2:`4`})),e.appendChild(B(`line`,{x1:`18`,y1:`20`,x2:`18`,y2:`14`})),e}function gt(){let e=document.createElementNS(z,`svg`);return Object.entries({width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`}).forEach(([t,n])=>e.setAttribute(t,n)),e.appendChild(B(`rect`,{x:`3`,y:`3`,width:`7`,height:`7`,rx:`1`})),e.appendChild(B(`rect`,{x:`14`,y:`3`,width:`7`,height:`7`,rx:`1`})),e.appendChild(B(`rect`,{x:`3`,y:`14`,width:`7`,height:`7`,rx:`1`})),e.appendChild(B(`rect`,{x:`14`,y:`14`,width:`7`,height:`7`,rx:`1`})),e}var _t=new Set,V=null;function H(e){_t.add(e),V||=w(()=>{let e=ft();if(e)for(let t of _t)try{t(e)}catch{}});let t=ft();return t&&e(t),()=>{_t.delete(e),_t.size===0&&(V?.(),V=null)}}function vt(e,t,n){let r=(0,N.useRef)({on:t,setOn:n});r.current={on:t,setOn:n},(0,N.useEffect)(()=>H(n=>{let i=document.getElementById(e.id);i||(i=document.createElement(`button`),i.id=e.id,i.type=`button`,i.setAttribute(`aria-label`,e.label),i.style.cssText=pt,i.style.order=String(e.order),i.appendChild(e.createIcon())),i.parentElement!==n&&n.appendChild(i),i.onclick=e=>{e.stopPropagation(),r.current.setOn(!r.current.on)},i.getAttribute(`aria-pressed`)!==String(t)&&(i.setAttribute(`aria-pressed`,String(t)),i.title=e.title[Number(t)],i.style.background=t?e.background:`rgba(17, 17, 20, 0.6)`,i.style.border=t?e.border:`1px solid rgba(229, 231, 235, 0.2)`,i.style.color=t?e.color:`#e5e7eb`)}),[e,t])}var yt={id:`faceit-extender-focus-btn`,label:`Focus on match information`,order:3,createIcon:mt,title:[`Focus: OFF`,`Focus: ON`],background:`rgba(59, 130, 246, 0.18)`,border:`1px solid rgba(59, 130, 246, 0.7)`,color:`#3b82f6`},bt=`data-faceit-extender-focus`,xt=`faceit-extender-focus-style`,St=`
body[${bt}="true"] div[name="roster1"],
body[${bt}="true"] div[name="roster2"] {
  display: none !important;
}
`,U=()=>{let[e,t]=f({key:l.FOCUS_MODE_MATCHROOM,defaultValue:!1});(0,N.useEffect)(()=>{let e=document.getElementById(xt);return e||(e=document.createElement(`style`),e.id=xt,e.textContent=St,document.head.appendChild(e)),()=>{e?.remove()}},[]),(0,N.useEffect)(()=>(e?document.body.setAttribute(bt,`true`):document.body.removeAttribute(bt),()=>{document.body.removeAttribute(bt)}),[e]),vt(yt,!!e,t)},W={1:{d:`M11.625 15V10.5262L10.5 10.9971V9.80233L12.1047 9H13.1424V15H11.625Z`,transform:`matrix(1.026794 0 0 0.9086 -0.503212 0.771038)`},2:{d:`M9.83 15V14.181C9.83 13.8534 9.83862 13.5718 9.85586 13.3362C9.8731 13.1006 9.91046 12.8994 9.96793 12.7328C10.0311 12.5661 10.1289 12.4253 10.261 12.3103C10.3932 12.1897 10.5743 12.0805 10.8041 11.9828L12.1145 11.4569C12.2811 11.3879 12.4047 11.3276 12.4852 11.2759C12.5656 11.2184 12.6174 11.1494 12.6403 11.069C12.6633 10.9885 12.6748 10.8764 12.6748 10.7328C12.6748 10.5546 12.6461 10.4253 12.5886 10.3448C12.5311 10.2586 12.4277 10.2069 12.2783 10.1897C12.1289 10.1667 11.9191 10.1552 11.649 10.1552C11.5225 10.1552 11.3645 10.1609 11.1748 10.1724C10.9909 10.1839 10.7926 10.1983 10.58 10.2155C10.3674 10.2328 10.1576 10.2529 9.95069 10.2759V9.18966C10.1403 9.15517 10.3559 9.12356 10.5972 9.09483C10.8386 9.06609 11.0857 9.0431 11.3386 9.02586C11.5972 9.00862 11.8357 9 12.0541 9C12.3415 9 12.6116 9.02011 12.8645 9.06035C13.1231 9.09483 13.3501 9.16667 13.5455 9.27586C13.7409 9.38506 13.8932 9.54885 14.0024 9.76724C14.1174 9.98563 14.1748 10.2787 14.1748 10.6466C14.1748 11.0144 14.1346 11.3103 14.0541 11.5345C13.9794 11.7586 13.8674 11.9368 13.7179 12.069C13.5685 12.2011 13.3875 12.3103 13.1748 12.3966L11.6921 12.9741C11.5771 13.0201 11.488 13.069 11.4248 13.1207C11.3674 13.1667 11.3271 13.2299 11.3041 13.3103C11.2811 13.3851 11.2697 13.4856 11.2697 13.6121V13.8362H14.1748V15H9.83Z`,transform:`matrix(0.881606 0 0 0.9226 1.383817 0.561249)`},3:{d:`M11.7535 15C11.5603 15 11.3501 14.9915 11.1228 14.9744C10.8956 14.9631 10.6711 14.9432 10.4495 14.9148C10.2336 14.8807 10.0405 14.8494 9.87 14.821V13.7557C10.0745 13.7727 10.2848 13.7898 10.5007 13.8068C10.7166 13.8239 10.9211 13.8381 11.1143 13.8494C11.3132 13.8551 11.4808 13.858 11.6172 13.858C11.8728 13.858 12.0745 13.8494 12.2223 13.8324C12.3757 13.8097 12.4836 13.7528 12.5461 13.6619C12.6143 13.571 12.6484 13.4233 12.6484 13.2188C12.6484 13.0256 12.6257 12.8807 12.5802 12.7841C12.5348 12.6818 12.4552 12.6136 12.3416 12.5795C12.228 12.5455 12.0689 12.5284 11.8643 12.5284H10.8842V11.4034H11.8643C12.0461 11.4034 12.1882 11.3892 12.2905 11.3608C12.3984 11.3267 12.4751 11.267 12.5206 11.1818C12.5717 11.0909 12.5973 10.9545 12.5973 10.7727C12.5973 10.5682 12.5689 10.4233 12.512 10.3381C12.4552 10.2472 12.3501 10.1932 12.1967 10.1761C12.0433 10.1534 11.8217 10.142 11.5319 10.142C11.3672 10.142 11.1853 10.1477 10.9865 10.1591C10.7933 10.1705 10.6001 10.1847 10.4069 10.2017C10.2194 10.2131 10.0518 10.2301 9.90409 10.2528V9.17898C10.0689 9.14489 10.2592 9.11364 10.4751 9.08523C10.6967 9.05682 10.9183 9.03693 11.1399 9.02557C11.3672 9.00852 11.5745 9 11.762 9C12.2109 9 12.5831 9.03409 12.8785 9.10227C13.1797 9.17045 13.4183 9.26989 13.5944 9.40057C13.7706 9.53125 13.8956 9.69318 13.9694 9.88636C14.049 10.0739 14.0887 10.2926 14.0887 10.5426C14.0887 10.9688 14.0035 11.2869 13.8331 11.4972C13.6626 11.7074 13.4098 11.8494 13.0745 11.9233V11.9574C13.3018 12.0085 13.495 12.0824 13.6541 12.179C13.8132 12.2756 13.9325 12.4176 14.012 12.6051C14.0973 12.7926 14.1399 13.0455 14.1399 13.3636C14.1399 13.608 14.1058 13.8324 14.0376 14.0369C13.9751 14.2358 13.8586 14.4091 13.6882 14.5568C13.5177 14.6989 13.2762 14.8097 12.9638 14.8892C12.6513 14.9631 12.2478 15 11.7535 15Z`,transform:`matrix(0.895103 0 0 0.9366 1.123928 0.435248)`},4:{d:`M12.3105 15V13.7965H9.45V12.7587L11.5081 9H13.1477L11.0372 12.6279H12.3541L12.7901 11.1802H13.8105V12.6279H14.5517V13.7965H13.8105V15H12.3105Z`,transform:`matrix(0.826548 0 0 0.9086 1.971934 0.771038)`},5:{d:`M11.7524 15C11.5628 15 11.353 14.9914 11.1231 14.9741C10.8932 14.9626 10.6662 14.9454 10.4421 14.9224C10.2179 14.8937 10.0139 14.8592 9.83 14.819V13.75C10.0311 13.7672 10.238 13.7845 10.4507 13.8017C10.6691 13.8132 10.876 13.8247 11.0714 13.8362C11.2668 13.842 11.4363 13.8448 11.58 13.8448C11.8099 13.8448 11.9938 13.8362 12.1317 13.819C12.2697 13.796 12.376 13.7586 12.4507 13.7069C12.5311 13.6552 12.5857 13.5805 12.6145 13.4828C12.6432 13.3793 12.6576 13.25 12.6576 13.0948C12.6576 12.9282 12.6403 12.796 12.6059 12.6983C12.5771 12.5948 12.5225 12.5201 12.4421 12.4741C12.3616 12.4224 12.2495 12.3879 12.1059 12.3707C11.9622 12.3534 11.7783 12.3448 11.5541 12.3448C11.4047 12.3448 11.2323 12.3506 11.0369 12.3621C10.8415 12.3678 10.6461 12.3793 10.4507 12.3966C10.2553 12.408 10.0714 12.4224 9.89897 12.4397V9H13.7266V10.1638H11.2093V11.2759C11.307 11.2644 11.4191 11.2529 11.5455 11.2414C11.6777 11.2299 11.8099 11.2213 11.9421 11.2155C12.0743 11.2098 12.1949 11.2069 12.3041 11.2069C12.6777 11.2069 12.9852 11.2471 13.2266 11.3276C13.4679 11.408 13.6576 11.5259 13.7955 11.681C13.9334 11.8305 14.0283 12.0144 14.08 12.2328C14.1375 12.4511 14.1662 12.704 14.1662 12.9914C14.1662 13.342 14.1317 13.6437 14.0628 13.8966C13.9938 14.1494 13.8702 14.3592 13.6921 14.5259C13.5197 14.6868 13.2754 14.8075 12.9593 14.8879C12.649 14.9626 12.2467 15 11.7524 15Z`,transform:`matrix(0.856234 0 0 0.9226 1.659005 0.645038)`},6:{d:`M12.0831 15C11.6797 15 11.3359 14.9801 11.0518 14.9403C10.7677 14.9006 10.5291 14.821 10.3359 14.7017C10.1484 14.5824 9.995 14.4006 9.87568 14.1562C9.81886 14.0256 9.77057 13.8636 9.73079 13.6705C9.69102 13.4716 9.66261 13.2358 9.64557 12.9631C9.62852 12.6847 9.62 12.3693 9.62 12.017C9.62 11.7216 9.62568 11.4545 9.63705 11.2159C9.65409 10.9716 9.67966 10.7528 9.71375 10.5597C9.75352 10.3608 9.80466 10.1875 9.86716 10.0398C9.96943 9.77273 10.1143 9.56534 10.3018 9.41761C10.495 9.26989 10.7422 9.16477 11.0433 9.10227C11.3444 9.03409 11.7109 9 12.1427 9C12.3075 9 12.495 9.00852 12.7052 9.02557C12.9211 9.04261 13.1456 9.06534 13.3785 9.09375C13.6115 9.11648 13.8302 9.14773 14.0348 9.1875V10.2528C13.8302 10.2301 13.6228 10.2102 13.4126 10.1932C13.2081 10.1761 13.0206 10.1648 12.8501 10.1591C12.6797 10.1477 12.5376 10.142 12.424 10.142C12.1285 10.142 11.8927 10.1619 11.7166 10.2017C11.5405 10.2358 11.4069 10.3068 11.316 10.4148C11.2308 10.517 11.174 10.6676 11.1456 10.8665C11.1172 11.0653 11.103 11.3295 11.103 11.6591H11.1541C11.1995 11.608 11.2677 11.5511 11.3586 11.4886C11.4495 11.4261 11.5831 11.3722 11.7592 11.3267C11.941 11.2756 12.1797 11.25 12.4751 11.25C12.7876 11.25 13.0632 11.2727 13.3018 11.3182C13.5405 11.3636 13.7393 11.4489 13.8984 11.5739C14.0575 11.6932 14.1768 11.8665 14.2564 12.0938C14.3359 12.321 14.3757 12.6165 14.3757 12.9801C14.3757 13.3438 14.3444 13.6563 14.2819 13.9176C14.2194 14.1733 14.103 14.3807 13.9325 14.5398C13.7677 14.6989 13.5376 14.8153 13.2422 14.8892C12.9467 14.9631 12.5603 15 12.0831 15ZM12.0149 13.875C12.2081 13.875 12.3643 13.8693 12.4836 13.858C12.6086 13.8409 12.7052 13.8097 12.7734 13.7642C12.8416 13.7131 12.8899 13.6392 12.9183 13.5426C12.9467 13.4403 12.9609 13.3068 12.9609 13.142C12.9609 12.9659 12.9467 12.8267 12.9183 12.7244C12.8899 12.6165 12.8416 12.5398 12.7734 12.4943C12.7109 12.4432 12.6172 12.4119 12.4922 12.4006C12.3672 12.3835 12.2081 12.375 12.0149 12.375C11.8103 12.375 11.6484 12.3864 11.5291 12.4091C11.4098 12.4318 11.3189 12.4716 11.2564 12.5284C11.1995 12.5795 11.1626 12.6477 11.1456 12.733C11.1285 12.8125 11.12 12.9119 11.12 13.0313C11.12 13.2358 11.1342 13.3949 11.1626 13.5085C11.1967 13.6222 11.2478 13.7074 11.316 13.7642C11.3842 13.8153 11.4751 13.8466 11.5888 13.858C11.7024 13.8693 11.8444 13.875 12.0149 13.875Z`,transform:`matrix(0.830162 0 0 0.9366 2.040408 0.435248)`},7:{d:`M10.3843 15L12.5907 10.1773H9.8V9H14.1866V10.0727L12.05 15H10.3843Z`,transform:`matrix(0.911503 0 0 0.9086 0.967267 0.771038)`},8:{d:`M12 15C11.4872 15 11.0647 14.9631 10.7325 14.8892C10.4062 14.8153 10.1527 14.7074 9.97203 14.5653C9.7972 14.4233 9.67483 14.2528 9.6049 14.054C9.53497 13.8494 9.5 13.6193 9.5 13.3636C9.5 13.0398 9.54079 12.7869 9.62238 12.6051C9.70979 12.4176 9.83508 12.2756 9.99825 12.179C10.1614 12.0824 10.3596 12.0085 10.5927 11.9574V11.9233C10.243 11.8494 9.98077 11.7074 9.80594 11.4972C9.63695 11.2869 9.55245 10.9687 9.55245 10.5426C9.55245 10.2926 9.59033 10.071 9.66609 9.87784C9.74767 9.68466 9.87879 9.52273 10.0594 9.39205C10.2459 9.26136 10.4965 9.16477 10.8112 9.10227C11.1317 9.03409 11.528 9 12 9C12.472 9 12.8654 9.03409 13.1801 9.10227C13.5006 9.16477 13.7512 9.26136 13.9318 9.39205C14.1183 9.52273 14.2494 9.68466 14.3252 9.87784C14.4068 10.071 14.4476 10.2926 14.4476 10.5426C14.4476 10.9687 14.3601 11.2869 14.1853 11.4972C14.0163 11.7074 13.757 11.8494 13.4073 11.9233V11.9574C13.6463 12.0085 13.8444 12.0824 14.0017 12.179C14.1649 12.2756 14.2873 12.4176 14.3689 12.6051C14.4563 12.7869 14.5 13.0398 14.5 13.3636C14.5 13.6193 14.465 13.8494 14.3951 14.054C14.3252 14.2528 14.1999 14.4233 14.0192 14.5653C13.8386 14.7074 13.5851 14.8153 13.2587 14.8892C12.9324 14.9631 12.5128 15 12 15ZM12 13.892C12.2622 13.892 12.4633 13.8807 12.6031 13.858C12.743 13.8295 12.8392 13.767 12.8916 13.6705C12.9499 13.5682 12.979 13.4119 12.979 13.2017C12.979 13.0426 12.9645 12.9148 12.9353 12.8182C12.912 12.7216 12.8625 12.6506 12.7867 12.6051C12.7168 12.554 12.6177 12.5199 12.4895 12.5028C12.3613 12.4858 12.1981 12.4773 12 12.4773C11.8019 12.4773 11.6387 12.4858 11.5105 12.5028C11.3823 12.5199 11.2832 12.554 11.2133 12.6051C11.1434 12.6506 11.0938 12.7216 11.0647 12.8182C11.0414 12.9148 11.0297 13.0426 11.0297 13.2017C11.0297 13.4119 11.0559 13.5682 11.1084 13.6705C11.1608 13.767 11.257 13.8295 11.3969 13.858C11.5425 13.8807 11.7436 13.892 12 13.892ZM12 11.4545C12.2681 11.4545 12.4662 11.4403 12.5944 11.4119C12.7284 11.3835 12.8158 11.321 12.8566 11.2244C12.9033 11.1278 12.9266 10.983 12.9266 10.7898C12.9266 10.5852 12.9033 10.4375 12.8566 10.3466C12.8158 10.25 12.7284 10.1875 12.5944 10.1591C12.4662 10.125 12.2681 10.108 12 10.108C11.7378 10.108 11.5396 10.125 11.4056 10.1591C11.2716 10.1875 11.1842 10.25 11.1434 10.3466C11.1026 10.4375 11.0822 10.5852 11.0822 10.7898C11.0822 10.983 11.1026 11.1278 11.1434 11.2244C11.1842 11.321 11.2716 11.3835 11.4056 11.4119C11.5396 11.4403 11.7378 11.4545 12 11.4545Z`,transform:`matrix(0.83328 0 0 0.9366 2.000248 0.435248)`},9:{d:`M11.853 15C11.6882 15 11.495 14.9915 11.2734 14.9744C11.0575 14.9574 10.8331 14.9347 10.6001 14.9062C10.3728 14.8778 10.1598 14.8466 9.96091 14.8125V13.7472C10.1768 13.7699 10.3842 13.7898 10.5831 13.8068C10.7876 13.8239 10.978 13.8381 11.1541 13.8494C11.3302 13.8551 11.4694 13.858 11.5717 13.858C11.8728 13.858 12.1086 13.8409 12.2791 13.8068C12.4552 13.767 12.5859 13.696 12.6711 13.5938C12.762 13.4858 12.8217 13.3324 12.8501 13.1335C12.8842 12.9347 12.9012 12.6705 12.9012 12.3409H12.8501C12.8047 12.392 12.7336 12.4489 12.637 12.5114C12.5461 12.5739 12.4126 12.6307 12.2365 12.6818C12.0603 12.7273 11.8245 12.75 11.5291 12.75C11.2109 12.75 10.9325 12.7273 10.6939 12.6818C10.4609 12.6364 10.2649 12.554 10.1058 12.4347C9.9467 12.3097 9.82454 12.1335 9.73932 11.9063C9.65977 11.679 9.62 11.3835 9.62 11.0199C9.62 10.6563 9.65125 10.3466 9.71375 10.0909C9.78193 9.82955 9.89841 9.61932 10.0632 9.46023C10.228 9.30114 10.4581 9.18466 10.7535 9.1108C11.0547 9.03693 11.441 9 11.9126 9C12.3615 9 12.7365 9.02557 13.0376 9.0767C13.3388 9.12216 13.5802 9.21591 13.762 9.35795C13.9495 9.49432 14.0888 9.70455 14.1797 9.98864C14.2535 10.2216 14.3047 10.5 14.3331 10.8239C14.3615 11.1477 14.3757 11.5341 14.3757 11.983C14.3757 12.3182 14.3643 12.6193 14.3416 12.8864C14.3245 13.1534 14.2933 13.3892 14.2478 13.5938C14.2024 13.7983 14.1399 13.9773 14.0603 14.1307C13.9467 14.3466 13.7933 14.5199 13.6001 14.6506C13.4069 14.7756 13.1683 14.8665 12.8842 14.9233C12.6001 14.9744 12.2564 15 11.853 15ZM11.9808 11.625C12.1853 11.625 12.3473 11.6136 12.4666 11.5909C12.5916 11.5682 12.6825 11.5312 12.7393 11.4801C12.7961 11.4233 12.8331 11.3551 12.8501 11.2756C12.8672 11.1903 12.8757 11.0881 12.8757 10.9687C12.8757 10.7642 12.8586 10.6051 12.8245 10.4915C12.7961 10.3778 12.7478 10.2955 12.6797 10.2443C12.6115 10.1875 12.5206 10.1534 12.4069 10.142C12.2933 10.1307 12.1512 10.125 11.9808 10.125C11.7933 10.125 11.637 10.1335 11.512 10.1506C11.387 10.1619 11.2905 10.1932 11.2223 10.2443C11.1541 10.2898 11.1058 10.3636 11.0774 10.4659C11.0547 10.5625 11.0433 10.6932 11.0433 10.858C11.0433 11.0341 11.0547 11.1761 11.0774 11.2841C11.1058 11.3864 11.1541 11.4631 11.2223 11.5142C11.2905 11.5597 11.3842 11.5909 11.5035 11.608C11.6285 11.6193 11.7876 11.625 11.9808 11.625Z`,transform:`matrix(0.831928 0 0 0.9366 2.023415 0.435248)`}},Ct=`M 6.5, 18.4 A 8.4, 8.4 0 1 1 17.5, 18.4`;function wt(e){return e<=1?`var(--f-palette-gray-0, #EEEEEE)`:e<=3?`var(--f-palette-activeGreen-50, #1CE400)`:e<=7?`var(--f-palette-amber-50, #FFC700)`:`var(--f-palette-orange-50, #FF4B00)`}var G=0;function Tt(e){let t=W[e];if(!t)return null;G+=1;let n=`fe-nlv-bg-${G}`,r=wt(e);return`<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-fe-native-level="${e}"><title>Skill level ${e}</title><defs><radialGradient id="${n}" cx="0.5" cy="0.5" r="0.55"><stop offset="0.4" stop-color="#5D5D5D"/><stop offset="1" stop-color="#242424"/></radialGradient></defs><circle r="50%" cx="50%" cy="50%" fill="#060606"/><path d="${Ct}" stroke="url(#${n})" stroke-width="2.4"/><path d="${Ct}" stroke="${r}" stroke-width="2.4" pathLength="10" style="stroke-dasharray:10.1,10000;stroke-dashoffset:${(10-.99*e).toFixed(2)}px"/><path d="${t.d}" transform="${t.transform}" fill="${r}"/></svg>`}var Et=`faceit-extender-team-average-`,K=e=>typeof e==`number`&&Number.isFinite(e)&&e>0,q=e=>e.reduce((e,t)=>e+t,0)/e.length,Dt=[500,750,900,1050,1200,1350,1530,1750,2e3];function J(e){let t=Dt.findIndex(t=>e<=t);return t===-1?10:t+1}function Ot(e,t){if(!e)return null;let n=(e.roster??[]).map(e=>e.elo).filter(K),r=K(e.stats?.rating)?e.stats.rating:n.length?q(n):null;if(r===null)return null;let i=Math.round(r);return{elo:i,level:(t?ce(i):null)??J(i)}}function kt(e,t,n){let r=(e??``).trim().toLowerCase();if(r){if(r===(n.teams.faction1.name??``).trim().toLowerCase())return`faction1`;if(r===(n.teams.faction2.name??``).trim().toLowerCase())return`faction2`}return t===0?`faction1`:`faction2`}var At=e=>Number.isInteger(e.level)?String(e.level):e.level.toFixed(1),Y=(e,t,n,r)=>`${e.elo}|${e.level}|${t.elo}|${t.level}|${n}|${r}`;function jt(e){let{id:t,summary:n,labels:r,levelsOverTen:i,collectionType:a}=e,o=document.createElement(`span`);o.id=t,o.dataset.signature=Y(n,r,i,a),o.title=`${r.elo} ${n.elo} · ${r.level} ${At(n)}`,o.style.cssText=`display:inline-flex;align-items:center;gap:4px;box-sizing:border-box;padding:2px;border-radius:99999px;background:rgba(6,6,6,0.6);color:#f1f1f1;font-size:12px;font-weight:700;line-height:1;white-space:nowrap;`;let s=document.createElement(`span`);s.style.cssText=`display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;flex:0 0 auto;`,s.setAttribute(`aria-hidden`,`true`);let c=Math.round(n.level),l=i&&a===`pepe`,u=n.level>=10||l?le(c,i,a):Tt(c);u?(s.innerHTML=u,s.querySelector(`svg`)?.setAttribute(`style`,`width:100%;height:100%;`)):(s.textContent=String(c),s.style.cssText+=`border-radius:50%;border:2px solid #aeb7c4;box-sizing:border-box;font-size:12px;`);let d=document.createElement(`span`);return d.textContent=String(n.elo),d.style.cssText=`padding-right:8px;`,o.append(s,d),o}var Mt=`[class*="HeaderWrapper"] [class*="styles__Faction-"]`,X=`[class*="StyledFactionName"]`,Nt=`[class*="styles__FactionDetails"]`,Pt=[`faction1`,`faction2`],Z=()=>{let{data:t,isSuccess:n}=Pe(),{levelsOverTen:r,levelCollectionType:i}=oe(),{t:a}=e(),o=a(`matchroom.teamAvg.elo`),s=a(`matchroom.teamAvg.level`);(0,N.useEffect)(()=>{if(!n||!t?.teams?.faction1||!t.teams.faction2)return;let e={elo:o,level:s},a=()=>{document.querySelectorAll(Mt).forEach((n,a)=>{let o=n.querySelector(Nt);if(!o||a>1)return;let s=kt(n.querySelector(X)?.textContent,a,t),c=`${Et}${s}`,l=Ot(t.teams[s],r),u=o.querySelector(`[id^="${Et}"]`);if(!l){u?.remove();return}let d=Y(l,e,r,i);u&&u.id===c&&u.dataset.signature===d||(u?.remove(),o.append(jt({id:c,summary:l,labels:e,levelsOverTen:r,collectionType:i})))})};a();let c=w(a);return()=>{c(),Pt.forEach(e=>document.getElementById(`${Et}${e}`)?.remove())}},[n,t,r,i,o,s])},Q=`faceit-extender-hide-native-level10`,Ft=`
  [class*="EndSlotContainer"]:has([data-custom-level]) svg[class*="SkillIcon"] {
    display: none !important;
  }
`,It=()=>{let{levelsOverTen:e}=oe();(0,N.useEffect)(()=>{if(!e){document.getElementById(Q)?.remove();return}let t=document.getElementById(Q);return t||(t=document.createElement(`style`),t.id=Q,t.textContent=Ft,document.head.appendChild(t)),()=>{document.getElementById(Q)?.remove()}},[e])},Lt=null,Rt={id:`faceit-extender-mapstats-btn`,label:`Show player map stats`,order:2,createIcon:gt,title:[`Map stats: OFF`,`Map stats: ON`],background:`rgba(16, 185, 129, 0.18)`,border:`1px solid rgba(16, 185, 129, 0.7)`,color:`#10b981`},zt=()=>{let e=A()??null,[t,n]=f({key:l.MAP_STATS_MATCHROOM,defaultValue:!1});(0,N.useEffect)(()=>{e&&Lt!==e&&(Lt=e,n(!1))},[e,n]),vt(Rt,!!t,n)},Bt=null,Vt={id:`faceit-extender-mapchart-btn`,label:`Show map comparison as bars`,order:4,createIcon:ht,title:[`Map chart: Spider`,`Map chart: Bars`],background:`rgba(96, 165, 250, 0.18)`,border:`1px solid rgba(96, 165, 250, 0.7)`,color:`#60a5fa`},Ht=()=>{let e=A()??null,[t,n]=f({key:l.MAP_CHART_BARS_MATCHROOM,defaultValue:!1});(0,N.useEffect)(()=>{e&&Bt!==e&&(Bt=e,n(!1))},[e,n]),vt(Vt,!!t,n)},Ut=`faceit-extender-ai-btn`,Wt=()=>{let[e,t]=f({key:l.MATCH_RECOMMENDATION_MATCHROOM,defaultValue:!0,waitForStorage:!0}),[n,r]=f({key:l.MATCH_RECOMMENDATION_AUTO,defaultValue:!1}),i=(0,N.useRef)({enabled:e,automatic:n,setEnabled:t,setAutomatic:r});i.current={enabled:e,automatic:n,setEnabled:t,setAutomatic:r},(0,N.useEffect)(()=>{let t=t=>{if(!e){document.getElementById(Ut)?.remove();return}let r=document.getElementById(Ut);if(!r){r=document.createElement(`button`),r.id=Ut,r.type=`button`,r.style.cssText=pt+`position:relative;font-size:12px;line-height:1;font-weight:700;order:0;overflow:visible;`;let e=document.createElement(`span`);e.textContent=`AI`,r.appendChild(e);let n=document.createElement(`span`);n.dataset.aiBadge=`true`,n.style.cssText=`position:absolute;top:-6px;right:-6px;min-width:14px;height:14px;padding:0 3px;box-sizing:border-box;border-radius:8px;background:#292333;color:#ede9fe;font-size:11px;line-height:14px;text-align:center;pointer-events:none;`,r.appendChild(n),t.appendChild(r)}r.onclick=e=>{e.stopPropagation();let t=i.current;t.enabled?t.automatic?(t.setEnabled(!1),t.setAutomatic(!1)):t.setAutomatic(!0):(t.setAutomatic(!1),t.setEnabled(!0))};let a=e&&n,o=document.documentElement.dataset.fextAiTokensUnlimited===`true`,s=e?a?`On · Auto-fetch enabled`:`On · Manual report`:`Off`,c=e?a?`Turn briefing off`:o?`Enable auto-fetch`:`Enable auto-fetch (one token per new report)`:`Show briefing without generating`,l=document.documentElement.dataset.fextAiFindings||`0`;r.setAttribute(`aria-pressed`,String(e)),r.setAttribute(`aria-label`,`AI Match Briefing: ${s}. ${l} findings. ${c}`),r.title=`AI Match Briefing\n${s} — ${l} findings\nClick: ${c}`,r.dataset.mode=e?a?`auto`:`manual`:`off`,r.style.background=a?`#6d28d9`:e?`rgba(167,139,250,.12)`:`rgba(17,17,20,.6)`,r.style.border=e?`1px solid #a78bfa`:`1px solid rgba(229,231,235,.2)`,r.style.color=a?`#fff`:e?`#c4b5fd`:`#aeb7c4`;let u=r.querySelector(`[data-ai-badge]`);u.textContent!==l&&(u.textContent=l),u.style.display=l===`0`?`none`:``},r=H(t),a=()=>{let e=ft();e&&t(e)};return window.addEventListener(`fext-ai-findings-changed`,a),()=>{r(),window.removeEventListener(`fext-ai-findings-changed`,a)}},[e,n])},Gt=o(),Kt=(e,t=!0)=>h({queryKey:[m.PLAYER_STATS,{playerResourceId:e}],queryFn:async()=>await ee(e,`cs2`),enabled:!!e&&t,staleTime:3e5,retry:3,retryDelay:e=>3500*(e+1)}),qt=(e,t=!0,n=!1)=>{let{data:r,isSuccess:i,isPending:a,isError:o,error:s}=h({...j(e,n),enabled:!!e}),{data:c,isSuccess:l,isPending:u,fetchStatus:d}=Kt(r?.id||``,t);return{player:r&&t&&l&&c?{...r,extendedStats:c}:r,isSuccessPlayerData:i,isLoading:a,isError:o,error:s,isLoadingStats:t&&(a||u&&d!==`idle`)}},Jt={"FACEIT RATING":100,ADR:90,[Se]:85,KAST:80,"AVG KILLS":70,"ROUND SWING":60,KPR:55,"CLUTCHES WON":50,DPR:45,"MULTI-KILL":40,"3K+ PER MATCH":35},Yt=Object.entries(Jt).sort((e,t)=>t[1]-e[1]).slice(0,5).map(([e])=>e);function Xt(e){let t=document.createElement(`span`);t.dataset.fextMoreStatsPlaceholder=`true`,t.setAttribute(`aria-hidden`,`true`),t.style.cssText=`width:22px;height:22px;visibility:hidden;`,e.appendChild(t)}function Zt(e){return Jt[e.startsWith(`RATING · `)?`FACEIT RATING`:e.startsWith(`SWING · `)?`ROUND SWING`:e.toUpperCase()]??0}function Qt(e,t=5){let n=e.map((e,t)=>({tile:e,index:t})).sort((e,t)=>Zt(t.tile.label)-Zt(e.tile.label)||e.index-t.index).map(({tile:e})=>e);return{primary:n.slice(0,t),secondary:n.slice(t)}}function $t(e){let t=e=>e?.textContent?.replace(/\s+/g,` `).trim()??``,n=t(e.querySelector(`[data-stat-value]`)??e.firstElementChild),r=t(e.querySelector(`[data-stat-label]`)??e.lastElementChild);return n&&r&&n!==r?`${r} - ${n}`:null}function en(e){return e.map(e=>$t(e.element)).filter(Boolean).join(` | `)}function tn(e,t){let n=en(t);if(n)for(let r of t){r.element.setAttribute(`data-fext-copyable`,`true`);let t=`Click to copy this player's stats`;r.element.title=r.element.title?`${r.element.title}\n${t}`:t,r.element.addEventListener(`click`,async()=>{await M(n)&&(e.setAttribute(`data-fext-copied`,`true`),setTimeout(()=>e.removeAttribute(`data-fext-copied`),900))})}}var nn=`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>`;function rn(e,t){let{primary:n,secondary:r}=Qt(t);if(tn(e,[...n,...r]),e.replaceChildren(...n.map(e=>e.element)),e.setAttribute(`data-fext-tiered`,String(n.length)),e.style.setProperty(`--fext-primary-cols`,String(Math.max(n.length,1))),r.length===0)return;let i=`fext-more-stats-${e.id}`,a=document.createElement(`button`);a.type=`button`,a.setAttribute(`data-fext-more-stats`,`true`),a.setAttribute(`aria-expanded`,`false`),a.setAttribute(`aria-controls`,i),a.setAttribute(`aria-label`,`Show ${r.length} more stats`),a.title=r.map(e=>e.label).join(` · `),a.innerHTML=nn;let o=document.createElement(`section`);o.id=i,o.setAttribute(`data-fext-more-panel`,`true`),o.setAttribute(`aria-label`,`More stats`),o.style.gridTemplateColumns=`repeat(${Math.min(r.length,6)}, minmax(0, 1fr))`,o.hidden=!0,o.append(...r.map(e=>e.element));let s=!1,c,l=e=>{o.hidden=!e,a.setAttribute(`aria-expanded`,String(e))},u=()=>{clearTimeout(c),l(!0)},d=()=>{clearTimeout(c),c=setTimeout(()=>{!s&&!a.matches(`:focus-visible`)&&l(!1)},150)};a.addEventListener(`mouseenter`,u),a.addEventListener(`mouseleave`,d),o.addEventListener(`mouseenter`,u),o.addEventListener(`mouseleave`,d),a.addEventListener(`focus`,u),a.addEventListener(`blur`,()=>{s=!1,d()}),a.addEventListener(`click`,()=>{s=!s,l(s)}),a.addEventListener(`keydown`,e=>{e.key!==`Escape`||o.hidden||(e.stopPropagation(),s=!1,l(!1))}),e.append(a,o)}function an(e,t){let n=()=>{let n=Math.ceil((t-Date.now())/1e3);return e.textContent=n>0?`FACEIT is limiting stats requests · retrying in ${n}s`:`Retrying…`,n>0};if(!n())return;let r=setInterval(()=>{(!e.isConnected||!n())&&clearInterval(r)},1e3)}function on(e,t,n,r=!1,i=!1,a=`FACEIT RATING`,o=`ROUND SWING`,s=0){let c=!r&&!i&&s>Date.now(),l=`${t??`pending`}|${n??`pending`}|${r}|${i}|${a}|${o}|${c?s:0}`;if(e.dataset.fextPlaceholderKey===l&&e.querySelector(r?`[data-fext-stats-unavailable]`:c?`[data-fext-stats-waiting]`:`[data-fext-stats-skeleton]`))return;if(e.dataset.fextPlaceholderKey=l,e.title=i?`No matches in the selected stats period.`:r?`Stats are unavailable for the selected period.`:c?`FACEIT asked us to wait before requesting more stats. They load automatically when it allows.`:`Loading player stats`,e.style.display=`grid`,e.setAttribute(`data-fext-tiered`,String(Yt.length)),e.style.setProperty(`--fext-primary-cols`,String(Yt.length)),e.replaceChildren(),i){let t=document.createElement(`div`);t.setAttribute(`data-fext-stats-unavailable`,`empty-period`),t.setAttribute(`role`,`status`),t.style.cssText=`grid-column:1/-1;padding:10px 4px;color:#9ca3af;font-size:11px;text-align:center;`,t.textContent=`No matches in the selected stats period`,e.appendChild(t);return}let u=(t,n)=>{let i=Te({label:t,value:n},Oe.matchroom);r&&n===`N/A`&&i.setAttribute(`data-fext-stats-unavailable`,t),e.appendChild(i)},d=t=>e.appendChild(ke(t));if(c){t!=null&&u(a,t.toFixed(2));let n=document.createElement(`div`);n.setAttribute(`data-fext-stats-waiting`,String(s)),n.setAttribute(`role`,`status`),n.style.cssText=`grid-column:span ${Yt.length-(t==null?0:1)};align-self:center;padding:10px 4px;color:#9ca3af;font-size:11px;text-align:center;`,e.appendChild(n),an(n,s),Xt(e);return}for(let e of Yt)e===`FACEIT RATING`&&t!=null?u(a,t.toFixed(2)):r?u(e,`N/A`):d(e);Xt(e)}var sn=class extends Error{constructor(e=`RequestQueue cleared`){super(e),this.name=`RequestQueueAbortError`}},cn=class extends Error{retryAfterMs;constructor(e){super(`Rate limited (429)`),this.retryAfterMs=e,this.name=`RateLimitError`}},ln=new class{concurrency;minIntervalMs;backoff;queue=[];running=0;backoffUntil=0;backoffMs=0;constructor(e,t,n={initialMs:2e3,maxMs:6e4}){this.concurrency=e,this.minIntervalMs=t,this.backoff=n}async run(e){await this.acquire();try{await this.waitForBackoff();let t=await e();return this.onSuccess(),t}catch(e){throw e instanceof cn&&this.onRateLimit(e.retryAfterMs),e}finally{setTimeout(()=>this.release(),this.minIntervalMs)}}clear(e=`RequestQueue cleared`){let t=this.queue;this.queue=[];for(let n of t)n.reject(new sn(e));return t.length}acquire(){return new Promise((e,t)=>{if(this.running<this.concurrency){this.running++,e();return}this.queue.push({resolve:()=>{this.running++,e()},reject:t})})}release(){this.running--;let e=this.queue.shift();e&&e.resolve()}async waitForBackoff(){for(;this.backoffUntil>Date.now();)await new Promise(e=>setTimeout(e,this.backoffUntil-Date.now()));this.backoffMs=0,this.backoffUntil=0}onRateLimit(e){Date.now()>=this.backoffUntil&&(this.backoffMs=0),this.backoffMs=e&&Number.isFinite(e)&&e>0?e:this.backoffMs===0?this.backoff.initialMs:Math.min(this.backoffMs*2,this.backoff.maxMs),this.backoffUntil=Math.max(this.backoffUntil,Date.now()+this.backoffMs)}onSuccess(){this.backoffMs=0,this.backoffUntil=0}}(1,2500,{initialMs:6e4,maxMs:3e5}),un=0,dn=0,fn=e=>new Promise(t=>setTimeout(t,e));function pn(e){let t=new URL(e),n;if((n=t.pathname.match(/^\/api\/users\/v1\/nicknames\/([^/]+)$/))||(n=t.pathname.match(/^\/users\/v1\/nicknames\/([^/]+)$/)))return`/players?nickname=${encodeURIComponent(decodeURIComponent(n[1]))}`;if(n=t.pathname.match(/^\/api\/v4\/players\/([^/]+)$/))return`/players/${encodeURIComponent(n[1])}`;if(n=t.pathname.match(/^\/api\/v4\/players\/([^/]+)\/history\/([^/]+)$/)){let e=new URLSearchParams(t.search);return e.set(`game`,n[2]),`/players/${encodeURIComponent(n[1])}/history?${e}`}return(n=t.pathname.match(/^\/api\/v4\/players\/([^/]+)\/games\/([^/]+)\/stats$/))?`/players/${encodeURIComponent(n[1])}/games/${encodeURIComponent(n[2])}/stats${t.search}`:null}async function mn(e,t){let n=new Headers(t?.headers),r=S.get(`t`);if(!r)try{r=localStorage.getItem(`token`)||``}catch{}if(r&&!n.has(`Authorization`)&&n.set(`Authorization`,`Bearer ${r}`),e.includes(`/statistics/v1/`))return b(e,{...t,headers:n});for(;;){let e=Date.now(),t=0;try{t=Number(localStorage.getItem(`fext_faceit_rate_limit_until`)||0),(!Number.isFinite(t)||t<=e)&&(t=0,localStorage.removeItem(`fext_faceit_rate_limit_until`))}catch{}dn<=e&&(dn=0);let n=Math.max(0,un-e,dn-e,t-e);if(n>0){await fn(n);continue}un=e+500;break}let i=await fetch(e,{...t,headers:n});if(i.status===429){let n=i.headers.get(`Retry-After`),r=n?Number(n):NaN,a=Number.isFinite(r)?r*1e3:n?Date.parse(n)-Date.now():NaN,o=Math.max(1e3,Number.isFinite(a)?a:6e4);dn=Date.now()+o;try{localStorage.setItem(`fext_faceit_rate_limit_until`,String(dn))}catch{}if(!t?.method||t.method===`GET`){let t=pn(e);if(t)try{let e=await fetch(`${te}/api/faceit/data${t}`,{headers:{Accept:`application/json`}});if(e.ok)return e}catch{}}}return i}var hn=(e,t)=>{let n=e&&typeof e==`object`?e:{},r=(n.payload&&typeof n.payload==`object`?n.payload:n)[t];return!!(r&&typeof r==`object`&&Array.isArray(r.seasons))},gn=(e,t)=>{let n=e&&typeof e==`object`?e:{},r=(n.payload&&typeof n.payload==`object`?n.payload:n)[t],i=r&&typeof r==`object`?r.seasons:void 0;if(!Array.isArray(i))return{peak:0,matches:0,seasons:0};let a=0,o=0;for(let e of i){let t=e&&typeof e==`object`?e:{},n=Number(t.eloHighest),r=Number(t.matches);Number.isFinite(n)&&(a=Math.max(a,n)),Number.isFinite(r)&&r>0&&(o+=r)}return{peak:a,matches:o,seasons:i.length}},_n=`https://www.faceit.com/api`,vn=e=>{if(!e)return;let t=Number.parseFloat(e);if(Number.isFinite(t))return t*1e3;let n=Date.parse(e);if(!Number.isNaN(n))return Math.max(0,n-Date.now())},yn=ie.getState().lastUrl;ie.subscribe(e=>{e.lastUrl!==yn&&(yn=e.lastUrl,ln.clear(`Navigated to ${e.lastUrl}`)>0&&e.queryClient&&e.queryClient.removeQueries({queryKey:[m.PLAYER_PEAK_ELO]}))});var bn=`peak-elo:v6:`,xn=`faceit-extender-cache`,Sn=`responses`,Cn=null,wn=3e4,Tn=0,En=()=>Cn||(typeof indexedDB>`u`||Date.now()<Tn?Promise.resolve(null):(Cn=new Promise(e=>{let t=!1,n=n=>{t||(t=!0,clearTimeout(r),n||(Cn=null,Tn=Date.now()+wn),e(n))},r=setTimeout(()=>n(null),2500);try{let e=indexedDB.open(xn,1);e.onupgradeneeded=()=>{e.result.objectStoreNames.contains(Sn)||e.result.createObjectStore(Sn)},e.onsuccess=()=>{let r=e.result;if(t){r.close();return}r.onversionchange=()=>{r.close(),Cn=null},n(r)},e.onerror=()=>n(null),e.onblocked=()=>n(null)}catch{n(null)}}),Cn)),Dn=async e=>{let t=await En();if(t)return new Promise(n=>{try{let r=t.transaction(Sn).objectStore(Sn).get(e);r.onsuccess=()=>{let i=r.result;if(!i)return n(void 0);if(typeof i.expiresAt==`number`&&i.expiresAt<Date.now()){try{t.transaction(Sn,`readwrite`).objectStore(Sn).delete(e)}catch{}return n(void 0)}n(i.data??i)},r.onerror=()=>n(void 0)}catch{n(void 0)}})},On=async(e,t,n)=>{let r=await En();r&&await new Promise(i=>{try{let a=r.transaction(Sn,`readwrite`);a.objectStore(Sn).put({data:t,savedAt:Date.now(),...n?{expiresAt:Date.now()+n}:{}},e),a.oncomplete=()=>i(),a.onerror=()=>i(),a.onabort=()=>i()}catch{i()}})},kn=async e=>{let t=await Dn(bn+e);return t&&typeof t.peak==`number`?t:null},An=async(e,t,n)=>{let r=await kn(e),i={peak:Math.max(r?.peak??0,t),historyScanned:!!(r?.historyScanned||n)};return await On(bn+e,i),i},jn=2,Mn=new Map,Nn=async(e,t)=>{let n=`peak-elo-seasons:v2:${t}:${e}`,r=await Dn(n);if(r!==void 0&&hn(r,t))return r;let i=await v(`/statistics/v1/${t}/players/${e}/seasons`);if(i&&hn(y(i,{deep:!0}),t)){let e=y(i,{deep:!0});return await On(n,e,864e5),e}for(let r=0;r<jn;r++)try{let r=await ln.run(async()=>{let n=await mn(`${_n}/statistics/v1/${t}/players/${e}/seasons`,{credentials:`include`});if(n.status===429)throw new cn(vn(n.headers.get(`Retry-After`)));if(!n.ok)throw Error(`HTTP ${n.status}`);let r=y(await n.json(),{deep:!0});if(!hn(r,t))throw Error(`No seasons in the answer`);return r});return await On(n,r,864e5),r}catch(e){if(!(e instanceof cn))throw e}throw new cn},Pn=(e,t)=>{let n=`${t}:${e}`,r=Mn.get(n);if(r)return r;let i=Nn(e,t).finally(()=>Mn.delete(n));return Mn.set(n,i),i},Fn=async(e,t,n)=>{let r=gn(await Pn(e,t),t);return{peak:Math.max(n,r.peak),scanned:r.matches}},In=async(e,t,n)=>{let r=`${t}:${e}`,i=Math.max(n,0),a=await kn(r);if(i>(a?.peak??0)&&(a=await An(r,i,!1)),a?.historyScanned&&a.peak>0)return{peak:a.peak,scanned:0,source:i>a.peak?`current`:`stored`};let o=await Fn(e,t,Math.max(a?.peak??0,i));return{peak:(await An(r,Math.max(o.peak,i),!0)).peak,scanned:o.scanned,source:`history`}},Ln=e=>Math.floor(Math.max(e,0)/50),Rn=15e3,zn=6,Bn=(e,t,n,r=`cs2`)=>h({queryKey:[m.PLAYER_PEAK_ELO,{playerId:e,game:r,eloBucket:Ln(n)}],queryFn:()=>In(e,r,n),enabled:t&&!!e&&n>0,staleTime:1/0,gcTime:1/0,retry:zn,retryDelay:Rn,refetchOnWindowFocus:!1,refetchOnMount:!1,refetchOnReconnect:!1}),Vn=2,Hn=8,Un=new WeakSet,Wn=e=>e?.getBoundingClientRect();function Gn(e,t,n){let r=e.querySelector(`[class*="NicknameContainer"]`),i=e.querySelector(`[class*="EndSlotContainer"]`);if(!r||!i||!t.isConnected||!n.isConnected)return;t.style.removeProperty(`margin-top`),n.style.removeProperty(`padding-left`),n.style.removeProperty(`padding-right`);let a=t.getBoundingClientRect();if(!a.height)return;let o=parseFloat(getComputedStyle(t).marginTop)||0,s=r.getBoundingClientRect(),c=i.getBoundingClientRect(),l=n.getBoundingClientRect(),u=a.top-(Math.max(s.bottom,c.bottom)+Vn),d=Wn(e.querySelector(`[class*="AvatarHolder"], [class*="StyledAvatar"]`)),f=[...t.children].filter(e=>e!==n&&e.getBoundingClientRect().height>0).map(e=>e.getBoundingClientRect().top);d&&f.length&&(u=Math.min(u,Math.min(...f)-(d.bottom+Hn))),u=Math.max(0,Math.round(u)),t.style.setProperty(`margin-top`,`${Math.round(o-u)}px`,`important`),n.style.setProperty(`padding-left`,`${Math.max(0,Math.round(s.left-l.left))}px`,`important`);let p=e=>e.getBoundingClientRect().width>0,m=([...i.querySelectorAll(`[data-custom-level]`)].find(p)??[...i.querySelectorAll(`svg[class*="SkillIcon"]`)].find(p))?.getBoundingClientRect().right??c.right;if(n.style.setProperty(`padding-right`,`${Math.max(0,Math.round(l.right-m))}px`,`important`),n.setAttribute(`data-fe-tucked`,`true`),!Un.has(e)&&typeof ResizeObserver<`u`){Un.add(e);let t=0;new ResizeObserver(()=>{t||=requestAnimationFrame(()=>{t=0;let n=e.querySelector(`[id^="extra-info-wrapper-"]`),r=n?.querySelector(`[id^="extra-info-container-"]`);n&&r&&Gn(e,n,r)})}).observe(e)}}var Kn=e=>{if(!e)return 0;let t=new Date,n=new Date(e),r=t.getTime()-n.getTime();return r<0?0:r/864e5},qn=e=>{let t=Kn(e?.createdAt);return t<15?100:t<30?90:t<60?75:t<90?60:t<180?45:t<365?30:t<730?15:0},Jn=e=>{let t=e.extendedStats;if(!t)return 0;let n=Number.parseInt(t.matches),r=Number.parseFloat(t.winRate),i=Number.parseFloat(t.averageKDRatio),a=Number.parseFloat(t.averageHeadshots),o=Number.parseFloat(t.averageKRRatio),s=0;return n<100&&r>60?s+=30:r>60&&(s+=15),i>1.2&&(s+=30),o>.75&&(s+=30),a>50&&(s+=20),Math.min(s,100)},Yn=e=>{let t=Kn(e?.createdAt),n=e?.games?.cs2;if(!n)return 0;let r=n.skillLevel,i=n.faceitElo,a=r-Math.min(1+Math.floor(t/30),10);return a>4?100:a>3?85:a>2?60:a>1?40:i>1500&&t<90?80:0},Xn=e=>{let t=0;e?.friends?.length<20&&(t+=20);let n=Object.keys(e?.games||{});return n.filter(e=>e!==`cs2`&&e!==`csgo`).length+ +!!n.some(e=>e===`cs2`||e===`csgo`)<=1&&(t+=20),e?.memberships?.includes(`premium`)||(t+=15),Math.min(t,100)},Zn=e=>{let t=e?.games?.cs2?.tags||[],n=t.includes(`ac_req`),r=t.includes(`idv_req`);return n&&r?80:n||r?40:0},Qn=e=>{let t=Kn(e?.createdAt),n=e?.games?.cs2?.skillLevel||0,r=Number.parseInt(e?.extendedStats?.matches??`0`);return t>730&&n>0&&n<=5&&r>200?60:0},$n=(e,t)=>{if(!t||!Array.isArray(t)||t.length===0)return 0;let n=new Date().getFullYear().toString(),r=new Date,i=String(r.getMonth()+1).padStart(2,`0`),a=String(r.getDate()).padStart(2,`0`),o=null;for(let e of t)if(e&&e[n]&&typeof e[n]==`object`){o=e[n];break}if(!o)return 0;let s=e.extendedStats;if(!s)return 0;let c=Number.parseFloat(s.averageKDRatio),l=Number.parseFloat(s.averageKRRatio),u=Number.parseInt(s.matches),d=null;o[i]&&typeof o[i]==`object`&&(d=o[i]);let f=null;d&&d[a]&&typeof d[a]==`object`&&(f=d[a]);let p=0,m=0,h=0,g=0,_=0,v=0;for(let e in o)if(typeof o[e]==`object`){let t=o[e];for(let e in t)if(typeof t[e]==`object`){let n=t[e];_+=n.m3||0,v+=n.m4||0,g+=n.m8||0}}v>0&&(m=_/v),g>0&&(h=_/g);let y=0,b=0;if(d){let e=0,t=0,n=0;for(let r in d)if(typeof d[r]==`object`){let i=d[r];e+=i.m3||0,t+=i.m4||0,n+=i.m8||0}t>0&&(y=e/t),n>0&&(b=e/n)}let x=0,S=0;if(f){let e=f.m3||0,t=f.m4||0,n=f.m8||0;t>0&&(x=e/t),n>0&&(S=e/n)}if(u>50){if(m>0&&c>0){let e=(m-c)/c;e>.5?p+=35:e>.3&&(p+=25)}if(h>0&&l>0){let e=(h-l)/l;e>.5?p+=30:e>.3&&(p+=20)}if(y>0&&c>0){let e=(y-c)/c;e>.6?p+=40:e>.4&&(p+=30)}if(b>0&&l>0){let e=(b-l)/l;e>.6?p+=35:e>.4&&(p+=25)}if(x>0&&c>0&&f.m8&&f.m8>5){let e=(x-c)/c;e>.8?p+=45:e>.5&&(p+=35)}if(S>0&&l>0&&f.m8&&f.m8>5){let e=(S-l)/l;e>.8?p+=40:e>.5&&(p+=30)}}m>0&&y>0&&x>0&&Math.abs(y-m)/m>.4&&(p+=15);let ee=Kn(e?.createdAt);if(ee<90&&m>1.3&&u<200&&(p+=20),d&&u>0){let e=0;for(let t in d)typeof d[t]==`object`&&(e+=1);let t=r.getDate(),n=e/t*30,i=u/Math.max(1,ee/30);if(i>0){let e=n/i;e>2&&(p+=15),e>3&&(p+=25)}}return Math.min(p,100)},er=(e,t)=>{if(!e)throw Error(`Player data is required`);if(!e.extendedStats)throw Error(`Extended stats are required`);let n=Kn(e?.createdAt),r=Number.parseInt(e.extendedStats.matches);if(!Number.isFinite(r))return`N/A`;let i=e?.games?.cs2?.skillLevel||0,a=qn(e),o=Jn(e),s=Yn(e),c=Xn(e),l=$n(e,t),u=Zn(e),d=Qn(e);if(!(u>0||d>0)&&(n>365&&r>1e3||i<=5&&r>1e3))return`0%`;let f=[{score:a,weight:2.5},{score:o,weight:3},{score:s,weight:2},{score:c,weight:1.5},{score:l,weight:2.5},{score:u,weight:3},{score:d,weight:2.5}],p=f.reduce((e,t)=>e+t.weight,0),m=f.reduce((e,t)=>e+t.score*t.weight,0)/p;e.verificationLevel===2?m*=.9:e.verificationLevel===3&&(m*=.8);let h=Number.parseFloat(String(e.extendedStats.averageKDRatio??``)),g=Number.parseFloat(String(e.extendedStats.averageKRRatio??``));h<1&&(m*=.8),g<.7&&(m*=.8),(n<365||r<500)&&(h>1.8?m+=35:h>1.5&&(m+=25));let _=Math.max(0,1-Math.max(0,r-200)/2800);return m*=_,m=Math.max(0,Math.min(m,99)),Number.isFinite(m)?Math.round(m).toString()+`%`:`N/A`},tr=e=>e.toLowerCase(),nr=e=>`nick:${e.trim().toLowerCase()}`,rr=p(e=>({tags:{},setTags:t=>{let n={};for(let e of t||[])n[e.playerId?tr(e.playerId):nr(e.nickname)]=e;e({tags:n})},clear:()=>e({tags:{}})})),ir=e=>{let t=parseInt(e.replace(`%`,``));if(isNaN(t))throw Error(`Invalid probabilityRate: ${e}`);if(t>=0&&t<=25)return ar(t,0,25,[255,255,255],[255,255,0]);if(t>25&&t<=50)return ar(t,25,50,[255,255,0],[255,165,0]);if(t>50&&t<=75)return ar(t,50,75,[255,165,0],[255,0,0]);if(t>75&&t<=100)return ar(t,75,100,[255,0,0],[128,0,128]);throw Error(`Probability rate out of range: ${t}`)},ar=(e,t,n,r,i)=>{let a=(e-t)/(n-t);return`rgb(${Math.round(r[0]+a*(i[0]-r[0]))},${Math.round(r[1]+a*(i[1]-r[1]))},${Math.round(r[2]+a*(i[2]-r[2]))})`},or=()=>{let e=document.querySelector(`div[class*="MatchRoom__MainHolder"]`);if(e)return e;let t=document.querySelector(`div[name="roster1"]`),n=document.querySelector(`div[name="roster2"]`);if(t&&n){let e=t.parentElement;for(;e&&!e.contains(n);)e=e.parentElement;if(e)return e}let r=document.querySelectorAll(`div[class*="RosterPlayer__Holder-"]`);return r.length>0?r[0].closest(`div[class*="MatchRoom__"]`):null},sr=(e,t)=>{requestAnimationFrame(()=>{try{if(!t()||!e.isConnected)return;let n=D.all(`svg[class*="SkillIcon"]`,e);for(let e of n)try{if(e.closest(`[class*="Badge"], [class*="BadgeHolder"]`)||e.closest(`[data-custom-level]`)||!e.isConnected||e.hasAttribute(`data-level-10-hidden`))continue;let t=D(`title`,e)?.textContent?.toLowerCase().includes(`skill level 10`),n=!!D(`path[fill="#FE1F00"]`,e);(t||n)&&(e instanceof HTMLElement?(e.style.display=`none`,e.setAttribute(`data-level-10-hidden`,`true`)):(e.setAttribute(`style`,`display: none;`),e.setAttribute(`data-level-10-hidden`,`true`)))}catch{continue}}catch{}})};function cr(e){return e>=1.15?`#10b981`:e>=1?`#4ade80`:e>=.9?`#fbbf24`:`#ef4444`}function lr(e){let t=document.createElement(`div`);t.setAttribute(`data-faceit-extender-map-table`,`true`);let n=`grid-column: 1 / -1;`;if(e.length===0)return t.style.cssText=`${n} color: #9ca3af; font-size: 11px; padding: 6px 2px;`,t.textContent=`No map data`,t;t.style.cssText=`${n} display: grid; grid-template-columns: repeat(4, 1fr); column-gap: 8px; row-gap: 10px; width: 100%; box-sizing: border-box;`;for(let n of e){let e=document.createElement(`div`);e.style.cssText=`display: flex; flex-direction: column; align-items: center; min-width: 0;`;let r=document.createElement(`div`);r.style.cssText=`font-size: 13px; font-weight: 600; color: ${cr(n.kd)}; line-height: 1.1; white-space: nowrap;`,r.textContent=n.kd.toFixed(2);let i=document.createElement(`div`);i.style.cssText=`font-size: 9px; line-height: 1.1; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 3px; white-space: nowrap;`,i.textContent=n.code;let a=document.createElement(`div`);a.style.cssText=`font-size: 8px; line-height: 1.1; color: #6b7280; margin-top: 2px; white-space: nowrap;`,a.textContent=`${n.games} • ${n.winrate}%`,e.title=`${n.code}: ${n.games} games, ${n.kd.toFixed(2)} KD, ${n.winrate}% win rate`,e.appendChild(r),e.appendChild(i),e.appendChild(a),t.appendChild(e)}return t}var ur=[[`MIR`,`de_mirage`],[`DUS`,`de_dust2`],[`INF`,`de_inferno`],[`NUK`,`de_nuke`],[`ANC`,`de_ancient`],[`ANU`,`de_anubis`],[`CAC`,`de_cache`]];function dr(e,t,n){let r=[...e].sort((e,t)=>Number(t.date)-Number(e.date));if(t===`last30matches`)return r.slice(0,30);let i=new Date(n),a;return a=t===`day`?new Date(i.getFullYear(),i.getMonth(),i.getDate()).getTime():t===`week`?n-6048e5:t===`month`?new Date(i.getFullYear(),i.getMonth(),1).getTime():t===`quarter`?me(i).getTime():new Date(i.getFullYear(),0,1).getTime(),r.filter(e=>Number(e.date)>=a)}function fr(e,t,n=Date.now()){if(!Array.isArray(e)||e.length===0)return[];let r=dr(e,t,n),i={};for(let e of r){let t=e.i1;if(!t)continue;let n=i[t]||(i[t]={games:0,wins:0,kills:0,deaths:0});n.games+=1,n.wins+=+!!Number(e.i10),n.kills+=Number(e.i6)||0,n.deaths+=Number(e.i8)||0}let a=[];for(let[e,t]of ur){let n=i[t];n&&n.games!==0&&a.push({code:e,games:n.games,kd:n.deaths>0?n.kills/n.deaths:n.kills,winrate:Math.round(n.wins/n.games*100)})}return a}var pr=(e,t=`cs2`,n=100,r=!0)=>h({...Je(e,t,n),enabled:!!e&&r});function mr(e,t){if(!Array.isArray(e)||e.length===0)return null;let n=e.slice(-5).map(e=>String(e)===`1`?`W`:`L`),r=n.filter(e=>e===`W`).length,i=n.length-r,a=0,o=null;if(n.length>0){o=n[n.length-1];for(let e=n.length-1;e>=0&&n[e]===o;e--)a++}return{results:n,wins:r,losses:i,streak:a,streakType:o,bestStreak:Ae(t)}}function hr(e){let t=new Date,n=[],r=0;for(let i=6;i>=0;i--){let a=new Date(t);a.setDate(t.getDate()-i);let o=String(a.getFullYear()),s=String(a.getMonth()+1).padStart(2,`0`),c=String(a.getDate()).padStart(2,`0`),l=je(e,o),u=l?l[s]:null,d=u&&typeof u==`object`?u[c]:null,f=0,p=0;d&&typeof d==`object`&&(f=Ae(d.m1),p=Ae(d.m2)),n.push({matches:f,wins:p,date:`${o}-${s}-${c}`}),r+=f}return{bars:n,totalMatches:r}}var gr=`This has been reported by the faceit-extender extension.
https://faceit-extender.com
As part of the automatic treshold`,_r=6e4,vr=new WeakMap,yr=async e=>{try{let t=await fetch(`https://www.faceit.com/api/fbi/v1/users/${e}/reports`,{method:`POST`,credentials:`include`,headers:{accept:`application/json, text/plain, */*`,"content-type":`application/json`,"faceit-referer":`web-next`,origin:`https://www.faceit.com`},body:JSON.stringify({reason:`multi_account`,description:gr})});if(!t.ok)throw Error(`Report failed: ${t.status} ${t.statusText}`);return!0}catch{return!1}},br=(e,t)=>{if(!e||!e.extendedStats)return!1;try{let n=er(e);return parseInt(n.replace(`%`,``),10)>=t}catch{return!1}},xr=async(e,t,n,r=!1)=>{if(n.has(e.id))return!1;let i=vr.get(n)?.get(e.id)||0;if(Date.now()<i||!br(e,t))return!1;if(n.add(e.id),!await yr(e.id)){n.delete(e.id);let t=vr.get(n);return t||(t=new Map,vr.set(n,t)),t.set(e.id,Date.now()+_r),!1}try{if(r&&!await ne(e.id)){let n=er(e);await C(e.id,e.nickname,`Auto-reported by faceit-extender (smurf probability ${n}, threshold ${t}%).`,[`auto-reported`])}}catch{}return!0},$=n(),Sr=(0,N.createContext)(null),Cr=`[id^="extra-info-"], [id^="extended-stats-container-"]`,wr=`div[class*="MatchRoom__MainHolder"], div[name="roster1"], div[name="roster2"], div[class*="RosterPlayer__Holder-"]`;function Tr(e){return!!(e.target.nodeType===Node.ELEMENT_NODE?e.target:e.target.parentElement)?.closest(Cr)}function Er(e){return Array.from(e.addedNodes).some(e=>{if(e.nodeType!==Node.ELEMENT_NODE)return!1;let t=e;return t.matches(wr)||!!t.querySelector(wr)})}function Dr({children:e}){let t=(0,N.useRef)(new Set),n=(0,N.useRef)(null),r=(0,N.useCallback)(e=>(t.current.add(e),()=>{t.current.delete(e)}),[]);return(0,N.useEffect)(()=>{let e=()=>{t.current.forEach(e=>{try{e()}catch{}})},r=()=>{n.current&&clearTimeout(n.current),n.current=setTimeout(()=>{n.current=null,e()},80)},i=null,a=null,o=new MutationObserver(e=>{if(!i){if(document.body!==a&&s(),!e.some(Er)||(i=or(),!i))return;s(),r();return}if(document.body!==a||!i.isConnected){i=or(),s(),r();return}let t=e.filter(e=>{let t=e.target.nodeType===Node.ELEMENT_NODE?e.target:e.target.parentElement;return!(!t||t!==i&&!i?.contains(t))});t.length&&!t.every(Tr)&&r()}),s=()=>{o.disconnect();let e=document.body;if(a=e,i){o.observe(i,{childList:!0,subtree:!0});for(let t=i.parentElement;t&&(o.observe(t,{childList:!0}),t!==e);t=t.parentElement);}else e&&o.observe(e,{childList:!0,subtree:!0});document.documentElement&&o.observe(document.documentElement,{childList:!0})};return i=or(),s(),()=>{o.disconnect(),n.current&&=(clearTimeout(n.current),null)}},[]),(0,$.jsx)(Sr.Provider,{value:r,children:e})}function Or(){let e=(0,N.useContext)(Sr);if(!e)throw Error(`useMatchRoomDomObserverSubscribe must be used within MatchRoomDomObserverProvider`);return e}var kr=()=>{let e=window;if(e.__fextCardReflection||!matchMedia(`(hover: hover) and (pointer: fine)`).matches||matchMedia(`(prefers-reduced-motion: reduce)`).matches)return;e.__fextCardReflection=!0;let t=null,n=0,r=0,i=0,a=0,o=0,s=()=>{i+=(n-i)*.18,a+=(r-a)*.18,t&&(t.style.setProperty(`--fext-mx`,`${i.toFixed(1)}px`),t.style.setProperty(`--fext-my`,`${a.toFixed(1)}px`)),o=Math.abs(n-i)+Math.abs(r-a)>.3?requestAnimationFrame(s):0};document.addEventListener(`pointermove`,e=>{if(e.pointerType!==`mouse`)return;let c=e.target?.closest?.(`div[class*="ListContentPlayer__Background"]`),l=c&&c.querySelector(`[id^="extra-info-wrapper-"]`)?c:null;if(l!==t&&(t=l,t)){let o=t.getBoundingClientRect();i=n=e.clientX-o.left,a=r=e.clientY-o.top}if(!t)return;let u=t.getBoundingClientRect();n=e.clientX-u.left,r=e.clientY-u.top,o||=requestAnimationFrame(s)},{passive:!0})},Ar=()=>{if(document.getElementById(`faceit-extender-insight-layout`))return;let e=document.createElement(`style`);e.id=`faceit-extender-insight-layout`,e.textContent=`
    [id^="extra-info-wrapper-"] {
      display: flex;
      flex-direction: column;
      /* FACEIT's avatar frame hangs ~10px below the name row; start the badge line clear of it. */
      margin-top: 12px !important;
      margin-bottom: 0;
    }
    /* Follow FACEIT's card surface and align with its native body. */
    [class*="ListContentPlayer__Holder"] > [id^="extra-info-wrapper-"] {
      box-sizing: border-box;
      /* 8px under the last block, the same as FACEIT's own card padding. */
      padding: 0 8px 8px;
    }
    /* A slow, low-contrast sheen on FACEIT's own card surface. Keep the native
       grey visible and put every card child above the decorative layer. */
    div[class*="ListContentPlayer__Background"]:has([id^="extra-info-wrapper-"]) {
      position: relative;
      isolation: isolate;
    }
    div[class*="ListContentPlayer__Background"]:has([id^="extra-info-wrapper-"])::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 0;
      border-radius: inherit;
      pointer-events: none;
      opacity: 0.12;
      background:
        radial-gradient(115% 130% at 14% 4%, rgba(224, 235, 246, 0.12), transparent 54%),
        radial-gradient(105% 125% at 86% 96%, rgba(181, 204, 223, 0.09), transparent 58%);
      background-size: 140% 140%;
      animation: faceit-extender-card-glass-wave 22s ease-in-out infinite alternate;
      transition: opacity 600ms ease;
    }
    /* Performance tint (set per card from its stat tiles), faint and fading out to the right
       so the tiles' own colours stay the loudest thing on the card. */
    div[class*="ListContentPlayer__Background"][style*="--fext-perf-tint"]:has([id^="extra-info-wrapper-"])::before {
      opacity: 0.42;
      background: var(--fext-perf-tint);
      animation-name: faceit-extender-card-tint-drift;
      background-size: 160% 160%;
      -webkit-mask-image: linear-gradient(105deg, #000 0%, rgba(0, 0, 0, 0.55) 55%, transparent 100%);
      mask-image: linear-gradient(105deg, #000 0%, rgba(0, 0, 0, 0.55) 55%, transparent 100%);
    }
    /* Pointer reflection: a soft light that follows the cursor over the hovered card.
       --fext-mx / --fext-my are eased in JS; the layer only exists on mouse devices. */
    @media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) {
      div[class*="ListContentPlayer__Background"]:has([id^="extra-info-wrapper-"])::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 0;
        border-radius: inherit;
        pointer-events: none;
        opacity: 0;
        background: radial-gradient(260px circle at var(--fext-mx, 50%) var(--fext-my, 0%), rgba(255, 255, 255, 0.10), rgba(255, 255, 255, 0.03) 38%, transparent 68%);
        transition: opacity 220ms ease-out;
      }
      div[class*="ListContentPlayer__Background"]:hover:has([id^="extra-info-wrapper-"])::after { opacity: 1; }
      /* The tint comes up a little under the pointer too. */
      div[class*="ListContentPlayer__Background"][style*="--fext-perf-tint"]:hover:has([id^="extra-info-wrapper-"])::before { opacity: 0.58; }
    }
    div[class*="ListContentPlayer__Background"]:has([id^="extra-info-wrapper-"]) > * {
      position: relative;
      z-index: 1;
    }
    /* The tint drifts slowly across the card as well as breathing, so its colours shift subtly. */
    /* No transform: a scaled layer counts as overflow and made the roster columns scroll. */
    @keyframes faceit-extender-card-tint-drift {
      from { background-position: 0% 0%; }
      to   { background-position: 100% 60%; }
    }
    @keyframes faceit-extender-card-glass-wave {
      from { background-position: 0% 0%; opacity: 0.10; }
      to   { background-position: 100% 60%; opacity: 0.20; }
    }
    @media (prefers-reduced-motion: reduce) {
      div[class*="ListContentPlayer__Background"]:has([id^="extra-info-wrapper-"])::before {
        animation: none;
        opacity: 0.12;
      }
    }
    /* Badge row: quiet label/value pairs on one line instead of boxed pills.
       The stat tiles and the 7-day block below keep their original design. */
    [id^="extra-info-container-"] {
      gap: 8px !important;
      row-gap: 2px !important;
      align-items: center !important;
      flex-wrap: wrap !important;
      min-width: 0 !important;
      padding: 0 !important;            /* flush with the stat tiles and the 7-day block below */
      margin-bottom: 0 !important;
    }
    [id^="extra-info-container-"] > [data-badge-order="9"],
    [id^="extra-info-container-"] > [data-badge-order="10"],
    [id^="extra-info-container-"] > [data-badge-order="11"] { width: 20px !important; height: 20px !important; align-items: center !important; }
    [id^="extra-info-container-"] > [data-badge-order="10"],
    [id^="extra-info-container-"] > [data-badge-order="11"] { margin-left: -1px !important; }
    [id^="extra-info-container-"] > [data-badge-order]:not([data-badge-order="9"]):not([data-badge-order="10"]):not([data-badge-order="11"]) {
      gap: 4px !important;
      padding: 0 !important;
      height: 20px !important;
      background: transparent !important;
      border: 0 !important;
      border-radius: 0 !important;
      box-shadow: none !important;
    }
    /* 20px line boxes, nudged 1px up: caps and digits sit low in their box next to the icon glyphs. */
    [id^="extra-info-container-"] > [data-badge-order] > span { line-height: 20px !important; position: relative; top: -1px; }
    [id^="extra-info-container-"] > [data-badge-order] > span:first-child {
      font-size: 9px !important;
      font-weight: 600 !important;
      letter-spacing: 0.04em !important;
      color: #aeb7c4 !important;
    }
    [id^="extra-info-container-"] > [data-badge-order] > span:last-child {
      font-size: 12px !important;
      font-variant-numeric: tabular-nums;
    }
    /* Brighter blue/purple so the values clear 6:1 on the dark card. */
    [id^="extra-info-container-"] [data-match-count-value] { color: #60a5fa !important; }
    [id^="extra-info-container-"] [data-peak-elo-value] { color: #c084fc !important; }
    [id^="extra-info-container-"] > [data-badge-order="9"] { margin-left: auto !important; }
    /* Moved up into FACEIT's header (see tuckBadgeRow): clicks on the empty part reach FACEIT's card. */
    [id^="extra-info-container-"][data-fe-tucked] { pointer-events: none; position: relative; z-index: 1; }
    [id^="extra-info-container-"][data-fe-tucked] > * { pointer-events: auto; }
    /* SMURF, PEAK and the other values sit on the right; the recent-form dots stay on the left. */
    [id^="extra-info-container-"] { justify-content: flex-end !important; }
    [id^="extra-info-container-"] > [data-badge-order="0"] { margin-right: auto !important; }
    [id^="extra-info-wrapper-"] [id^="extra-info-container-"] > [data-badge-order="9"] button,
    [id^="extra-info-wrapper-"] [id^="extra-info-container-"] > [data-badge-order="10"] button,
    [id^="extra-info-wrapper-"] [id^="extra-info-container-"] > [data-badge-order="11"] button {
      width: 20px !important; height: 20px !important; min-width: 20px !important; max-width: 20px !important; min-height: 20px !important; max-height: 20px !important;
      border: 1px solid transparent !important;
      border-radius: 6px !important;
      background: transparent !important;
      color: #9ca3af !important;
      transition: background 150ms ease, color 150ms ease, border-color 150ms ease, transform 100ms cubic-bezier(0.23, 1, 0.32, 1) !important;
    }
    [id^="extra-info-container-"] > [data-badge-order] button svg { width: 13px !important; height: 13px !important; }
    /* The "met N times" count on a 20px icon: smaller, tucked into the corner. */
    [id^="extra-info-container-"] > [data-badge-order="9"] button + span,
    [id^="extra-info-container-"] > [data-badge-order="9"] span[class*="BadgeWrapper"],
    [id^="extra-info-container-"] > [data-badge-order="9"] > div > span:last-child { top: -5px !important; right: -5px !important; transform: scale(.8); transform-origin: top right; }
    @media (hover: hover) and (pointer: fine) {
      [id^="extra-info-container-"] > [data-badge-order] button:hover {
        background: rgba(255, 255, 255, 0.07) !important; border-color: rgba(255, 255, 255, 0.12) !important; color: #f3f4f6 !important;
      }
    }
    [id^="extra-info-container-"] > [data-badge-order] button:active { transform: scale(0.95); }

    /* Actions float over the player-card art (top-left, 60x84 from 13px above the card) and
       only show on hover or keyboard focus. Touch devices keep them in the stats line. */
    @media (hover: hover) and (pointer: fine) {
      [class*="ListContentPlayer__Holder"] > [id^="extra-info-wrapper-"],
      [class*="ListContentPlayer__Holder"] > [id^="extra-info-wrapper-"] > [id^="extra-info-container-"] { position: static !important; }
      [id^="extra-info-container-"] > [data-badge-order="9"],
      [id^="extra-info-container-"] > [data-badge-order="10"],
      [id^="extra-info-container-"] > [data-badge-order="11"] {
        position: absolute !important;
        top: 50px !important;
        width: 22px !important; height: 22px !important;
        margin: 0 !important;
        z-index: 6 !important;
        opacity: 0;
        transform: translateY(6px) scale(0.92);
        pointer-events: none;
        transition: opacity 180ms ease-out, transform 260ms cubic-bezier(0.23, 1, 0.32, 1);
      }
      [id^="extra-info-container-"] > [data-badge-order="9"]  { left: -6px !important; }
      [id^="extra-info-container-"] > [data-badge-order="10"] { left: 19px !important; transition-delay: 40ms; }
      [id^="extra-info-container-"] > [data-badge-order="11"] { left: 44px !important; transition-delay: 80ms; }
      div[class*="ListContentPlayer__Background"]:is(:hover, :focus-within) [id^="extra-info-container-"] > :is([data-badge-order="9"], [data-badge-order="10"], [data-badge-order="11"]) {
        opacity: 1;
        transform: none;
        pointer-events: auto;
      }
      [id^="extra-info-wrapper-"] [id^="extra-info-container-"] > :is([data-badge-order="9"], [data-badge-order="10"], [data-badge-order="11"]) button {
        width: 22px !important; height: 22px !important; min-width: 22px !important; max-width: 22px !important; min-height: 22px !important; max-height: 22px !important;
        border-radius: 999px !important;
        border: 1px solid rgba(255, 255, 255, 0.14) !important;
        background: rgba(14, 14, 18, 0.78) !important;
        -webkit-backdrop-filter: blur(8px);
        backdrop-filter: blur(8px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.08) !important;
        color: #e5e7eb !important;
      }
      [id^="extra-info-wrapper-"] [id^="extra-info-container-"] > :is([data-badge-order="9"], [data-badge-order="10"], [data-badge-order="11"]) button:hover {
        background: rgba(40, 40, 48, 0.9) !important;
        border-color: rgba(255, 255, 255, 0.28) !important;
      }
      /* The 'met N' count on the floating button: a small dot-sized tag on its corner. */
      [id^="extra-info-container-"] > [data-badge-order="9"] button > span {
        top: -4px !important;
        right: -5px !important;
        transform: scale(0.68);
        transform-origin: top right;
      }
      /* At rest the encounter count rests on the avatar, where the Have we met button rises on
         hover (the button carries the same count), so the stats line keeps its single row. */
      [id^="extra-info-container-"] > [data-encounter] {
        position: absolute !important;
        top: 54px !important;
        left: -4px !important;
        height: 16px !important;
        padding: 0 6px !important;
        gap: 0 !important;
        border-radius: 999px !important;
        background: #dc2626 !important;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5) !important;
        z-index: 5 !important;
        transition: opacity 160ms ease-out, transform 200ms cubic-bezier(0.23, 1, 0.32, 1);
      }
      [id^="extra-info-container-"] > [data-encounter] > span:first-child { display: none !important; }
      [id^="extra-info-container-"] > [data-encounter] > span:last-child {
        font-size: 10px !important;
        line-height: 16px !important;
        top: 0 !important;
        color: #fff !important;
      }
      div[class*="ListContentPlayer__Background"]:is(:hover, :focus-within) [id^="extra-info-container-"] > [data-encounter] {
        opacity: 0;
        transform: translateY(4px) scale(0.9);
        pointer-events: none;
      }
      @keyframes faceit-extender-action-float { from { translate: 0 0; } to { translate: 0 -2px; } }
      div[class*="ListContentPlayer__Background"]:is(:hover, :focus-within) [id^="extra-info-container-"] > :is([data-badge-order="9"], [data-badge-order="10"], [data-badge-order="11"]) > * {
        animation: faceit-extender-action-float 1.8s ease-in-out 300ms infinite alternate;
      }
      [id^="extra-info-container-"] > [data-badge-order="10"] > * { animation-delay: 420ms !important; }
      [id^="extra-info-container-"] > [data-badge-order="11"] > * { animation-delay: 540ms !important; }
    }
    @media (hover: hover) and (pointer: fine) and (prefers-reduced-motion: reduce) {
      [id^="extra-info-container-"] > :is([data-badge-order="9"], [data-badge-order="10"], [data-badge-order="11"]) { transition: opacity 120ms linear; transform: none; }
      [id^="extra-info-container-"] > :is([data-badge-order="9"], [data-badge-order="10"], [data-badge-order="11"]) > * { animation: none !important; }
    }

    /* Our insights make roster cards (and an open briefing) taller than FACEIT's grid row, and
       each Overview column scrolls on its own (overflow: auto): both teams got inner scrollbars
       and an open briefing was cut off at the bottom of the middle column. Let all three columns
       size to their content; the grid row grows and the page scrolls once. */
    [class*="Overview__Grid"]:has([id^="extra-info-wrapper-"]) > [class*="Overview__Column"] {
      overflow: visible !important;
    }
    /* The grid itself hid overflow both ways, so a popover on the bottom card (the AI scout
       read) was cut off and could not be scrolled to. Keep clipping sideways (FACEIT's party
       bracket pokes 8px out) but let it extend down into the page's scroll area. */
    [class*="Overview__Grid"]:has([id^="extra-info-wrapper-"]) {
      overflow-x: clip !important;
      overflow-y: visible !important;
    }

    [id^="extra-info-wrapper-"] > [id^="extra-info-container-"]       { order: 1; }
    [id^="extra-info-wrapper-"] > [data-extended-stats-separator]     { order: 2; }
    [id^="extra-info-wrapper-"] > [id^="extended-stats-container-"]   { order: 3; }
    [id^="extra-info-wrapper-"] > [id^="weekly-activity-container-"]  { order: 4; }

    /* Badges row (layout is set inline when the row is created) */
    [id^="extra-info-container-"] > [data-badge-order="0"]  { order: 0; flex-grow: 0; flex-shrink: 0; }
    [id^="extra-info-container-"] > [data-badge-order="1"]  { order: 1; flex-grow: 0; flex-shrink: 0; }
    [id^="extra-info-container-"] > [data-badge-order="2"]  { order: 2; flex-grow: 0; flex-shrink: 0; }
    [id^="extra-info-container-"] > [data-badge-order="3"]  { order: 3; flex-grow: 0; flex-shrink: 0; }
    [id^="extra-info-container-"] > [data-badge-order="4"]  { order: 4; flex-grow: 0; flex-shrink: 0; }
    [id^="extra-info-container-"] > [data-badge-order="5"]  { order: 5; flex-grow: 0; flex-shrink: 0; }
    [id^="extra-info-container-"] > [data-badge-order="6"]  { order: 6; flex-grow: 0; flex-shrink: 0; }
    [id^="extra-info-container-"] > [data-badge-order="7"]  { order: 7; flex-grow: 0; flex-shrink: 0; }
    [id^="extra-info-container-"] > [data-badge-order="8"]  { order: 8; flex-grow: 0; flex-shrink: 0; }
    /* Action buttons: small square icons in a row */
    [id^="extra-info-container-"] > [data-badge-order="9"]  { order: 9; flex: none; }
    [id^="extra-info-container-"] > [data-badge-order="10"] { order: 10; flex: none; }
    [id^="extra-info-container-"] > [data-badge-order="11"] { order: 11; flex: none; }
    [id^="extra-info-container-"] > [data-badge-order="9"] button,
    [id^="extra-info-container-"] > [data-badge-order="10"] button,
    [id^="extra-info-container-"] > [data-badge-order="11"] button {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      width: 30px !important;
      height: 30px !important;
      min-width: 30px !important;
      max-width: 30px !important;
      padding: 0 !important;
      white-space: nowrap !important;
    }

    /* Separator - subtle gradient line */
    [data-extended-stats-separator] {
      margin: 4px 0 !important;
      height: 1px !important;
      background: linear-gradient(to right, transparent, rgba(229, 231, 235, 0.08), transparent) !important;
    }

    [id^="extended-stats-container-"] {
      display: grid !important;
      grid-template-columns: repeat(6, minmax(0, 1fr)) !important;
      gap: 6px !important;
      padding: 0 !important;
    }
    /* Only keep space under the tiles when the 7-day block follows them. */
    [id^="extra-info-wrapper-"]:has(> [id^="weekly-activity-container-"]) > [id^="extended-stats-container-"] { padding-bottom: 6px !important; }
    [id^="extended-stats-container-"] > div {
      min-width: 0 !important;
      width: 100% !important;
      max-width: none !important;
    }
    /* FACEIT's summary and ours would otherwise show two stats rows per card. */
    [class*="ListContentPlayer__Holder"]:has([id^="extended-stats-container-"]) > [class*="RosterPlayerStatsV2__Container"] {
      display: none !important;
    }

    /* Native enhanced stats reserve 60px below the card for their stats row.
       Our replacement lives in the card's normal flow, so keep the base 12px gap. */
    [class*="styles__Holder-"]:has(> [class*="ListContentPlayer__Background"] [id^="extended-stats-container-"]):has(> [class*="ListContentPlayer__Background"] [class*="RosterPlayerStatsV2__Container"]) {
      padding-bottom: 12px !important;
    }

    /* First row: the highest-weighted stats plus the arrow that opens the rest
       (see matchroomStatTiers.ts). */
    [id^="extended-stats-container-"][data-fext-tiered] {
      grid-template-columns: repeat(var(--fext-primary-cols, 5), minmax(0, 1fr)) 22px !important;
      position: relative !important;
      overflow: visible !important;
      /* Above the Last 7 days block, so the open panel paints over it. */
      z-index: 5 !important;
    }
    [id^="extended-stats-container-"] > button[data-fext-more-stats] {
      appearance: none; box-sizing: border-box;
      align-self: center; justify-self: center;
      display: inline-flex; align-items: center; justify-content: center;
      min-width: 22px; max-width: 22px; min-height: 22px; max-height: 22px;
      width: 22px; height: 22px; padding: 0; margin: 0;
      border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 6px;
      background: rgba(255, 255, 255, 0.04); color: #9ca3af; cursor: pointer;
      transition: background 0.15s ease, color 0.15s ease, transform 0.15s ease;
    }
    [id^="extended-stats-container-"] > button[data-fext-more-stats]:hover,
    [id^="extended-stats-container-"] > button[data-fext-more-stats][aria-expanded="true"] {
      background: rgba(255, 255, 255, 0.1); color: #f3f4f6;
    }
    [data-fext-more-stats][aria-expanded="true"] svg { transform: rotate(180deg); }
    [data-fext-more-stats]:focus-visible { outline: 2px solid var(--fe-accent, #e79b32); outline-offset: 2px; }
    [data-fext-more-panel] {
      position: absolute; left: 0; right: 0; top: calc(100% + 6px); z-index: 20;
      display: grid; gap: 10px; padding: 12px;
      background: rgb(17, 17, 22); border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 12px; box-shadow: 0 14px 34px rgba(0, 0, 0, 0.55);
    }
    [data-fext-more-panel][hidden] { display: none; }
    /* The native card isolates its children. Raise the whole open card above
       later roster cards so its stats panel remains visible and interactive. */
    [class*="styles__Holder-"]:has(> [class*="ListContentPlayer__Background"] [data-fext-more-panel]:not([hidden])),
    [class*="styles__Holder-"]:has(> [class*="ListContentPlayer__Background"] [data-ai-player-scout-host="true"]:is(:hover, :focus-within)) {
      z-index: 30 !important;
    }
    [data-fext-copyable] { cursor: copy; border-radius: 6px; transition: background 0.2s ease; }
    [data-fext-copyable]:hover { background: rgba(255, 255, 255, 0.04); }
    [id^="extended-stats-container-"][data-fext-copied] { background: rgba(34, 197, 94, 0.14) !important; border-radius: 8px !important; }
    [data-fext-more-panel] > div { min-width: 0 !important; width: 100% !important; max-width: none !important; }

    /* Loading placeholders: one soft pulse for tiles and badges alike. */
    @keyframes faceit-extender-skeleton-pulse { 0%, 100% { opacity: 0.55; } 50% { opacity: 1; } }
    [data-fext-skeleton-bar] { animation: faceit-extender-skeleton-pulse 1.4s ease-in-out infinite; }
    @media (prefers-reduced-motion: reduce) { [data-fext-skeleton-bar] { animation: none; } }

    /* Stat tile text, shared by the first row and the More stats panel */
    [id^="extended-stats-container-"] > div > div:first-child,
    [data-fext-more-panel] > div > div:first-child {
      font-size: 13px !important;
      font-weight: 700 !important;
      font-variant-numeric: tabular-nums;
    }
    /* Tier word (SUPERSTAR, GOOD…): keeps its tier colour, just large enough to read. */
    [id^="extended-stats-container-"] > div > div:nth-child(3),
    [data-fext-more-panel] > div > div:nth-child(3) {
      font-size: 8.5px !important;
      font-weight: 600 !important;
      line-height: 11px !important;
      letter-spacing: 0.03em !important;
      white-space: nowrap;
    }
    [id^="extended-stats-container-"] [data-stat-label],
    [data-fext-more-panel] [data-stat-label] {
      width: 100%;
      min-height: 22px;
      font-size: 9px !important;
      line-height: 11px !important;
      letter-spacing: 0 !important;
      color: #aeb7c4 !important;
    }

    /* Weekly activity */
    [id^="weekly-activity-container-"] {
      padding: 4px 6px !important;
      margin-bottom: 2px !important;
      gap: 3px !important;
      background: rgba(17, 17, 20, 0.6) !important;
      border: 1px solid rgba(229, 231, 235, 0.08) !important;
      border-radius: 12px !important;
    }
    [id^="weekly-activity-container-"] > div:first-child {
      min-width: 40px !important;
    }
    [id^="weekly-activity-container-"] > div:first-child > div:first-child {
      font-size: 9px !important;
    }
    [id^="weekly-activity-container-"] > div:first-child > div:last-child {
      font-size: 8px !important;
      margin-top: 1px !important;
    }
    [id^="weekly-activity-container-"] > div > div[style*="height:24px"],
    [id^="weekly-activity-container-"] > div > div[style*="height: 24px"] {
      height: 12px !important;
    }
    [id^="weekly-activity-container-"] div[style*="font-size:9px"] {
      font-size: 7px !important;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }
    [data-ai-player-scout-host="true"] {
      position: relative !important; overflow: visible !important;
      flex-direction: column !important; align-items: stretch !important;
      border-radius: 8px !important;
      border-color: var(--fe-accent, #a78bfa) !important;
      box-shadow: inset 0 0 0 1px var(--fe-accent-border, rgba(167,139,250,.48)), 0 0 16px rgba(109,40,217,.14) !important;
    }
    [data-ai-player-scout-host="true"][data-ai-player-team="enemy"] {
      border-color: #fb7185 !important;
      box-shadow: inset 0 0 0 1px rgba(251,113,133,.52), 0 0 16px rgba(225,29,72,.12) !important;
    }
    [data-ai-player-scout-badge] {
      position: relative; max-width: 100%; box-sizing: border-box; margin: 2px 0 0;
      display: flex; width: fit-content; align-items: center; flex-wrap: nowrap; gap: 4px; padding: 1px 4px;
      border: 1px solid var(--fe-accent-border, rgba(167,139,250,.45)); border-radius: 999px;
      background: rgba(35,25,58,.94); color: var(--fe-accent-text, #c4b5fd);
      font: 800 8px/1.35 'Helvetica Neue', Helvetica, Arial, sans-serif;
      letter-spacing: .65px; text-transform: uppercase; white-space: nowrap; pointer-events: none;
    }
    [data-ai-player-scout-badge] > b {
      white-space: nowrap; flex: none;
    }
    [data-ai-player-scout-badge] > span {
      min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
    [data-ai-player-scout-host="true"] > [class*="ListContentPlayer__Body"] {
      width: 100% !important; max-width: 100% !important; min-width: 0 !important;
      box-sizing: border-box !important;
    }
    [data-ai-player-scout-host="true"] [class*="MiddleSlotWrapper"],
    [data-ai-player-scout-host="true"] [class*="NamesContainer"] {
      min-width: 0 !important; max-width: 100% !important;
    }
    /* Reserve the native ELO slot before sizing the nickname and scout text.
       FACEIT's content-sized middle slot otherwise grows with long badges. */
    [data-ai-player-scout-host="true"] [class*="MiddleSlotWrapper"] {
      flex: 1 1 0% !important; width: 0 !important;
    }
    [data-ai-player-scout-host="true"] [class*="NamesContainer"] {
      width: 100% !important; box-sizing: border-box !important;
    }
    [data-ai-player-scout-host="true"] [class*="MiddleSlotWrapper"] ~ * {
      flex-shrink: 0 !important;
    }
    [data-ai-player-team="enemy"] [data-ai-player-scout-badge] {
      border-color: rgba(251,113,133,.48); background: rgba(63,20,31,.94); color: #fda4af;
    }
    [data-ai-player-scout-tooltip] {
      position: absolute; left: 8px; right: 8px; top: calc(100% - 4px); z-index: 10002;
      padding: 11px 12px; border-radius: 8px; border: 1px solid var(--fe-accent-border, rgba(167,139,250,.32));
      background: rgba(17,17,23,.98); box-shadow: 0 14px 34px rgba(0,0,0,.55);
      color: #cbd5e1; font: 10.5px/1.45 'Helvetica Neue', Helvetica, Arial, sans-serif;
      opacity: 0; visibility: hidden; transform: translateY(-4px); pointer-events: none;
      transition: opacity .14s ease, visibility .14s ease, transform .14s ease;
    }
    [data-ai-player-scout-host="true"]:hover > [data-ai-player-scout-tooltip],
    [data-ai-player-scout-host="true"]:focus-within > [data-ai-player-scout-tooltip] {
      opacity: 1; visibility: visible; transform: translateY(0);
    }
    /* One popover at a time: the More stats panel replaces the scout tooltip. */
    [data-ai-player-scout-host="true"]:has([data-fext-more-panel]:not([hidden])) > [data-ai-player-scout-tooltip] {
      opacity: 0; visibility: hidden;
    }
  `,document.head.appendChild(e)},jr={good:`#86efac`,bad:`#fbbf24`,neutral:`#9ca3af`};function Mr(e,t,n){e=e.querySelector(`div[class*="ListContentPlayer__Holder"]`)??e;let r=e.querySelector(`div[class*="NamesContainer"]`);if(!r)return;let i=`ai-player-scout-${n}`,a=`ai-player-scout-badge-${n}`;for(let t of document.querySelectorAll(`[id="${i}"], [id="${a}"]`)){if(t.parentElement===(t.id===a?r:e))continue;let n=t.parentElement;t.remove(),n?.removeAttribute(`data-ai-player-scout-host`),n?.removeAttribute(`data-ai-player-team`)}let o=JSON.stringify(t),s=e.querySelector(`#${i}`),c=e.querySelector(`#${a}`),l=t.side===`them`?`enemy`:`own`;if(e.getAttribute(`data-ai-player-scout-host`)!==`true`&&e.setAttribute(`data-ai-player-scout-host`,`true`),e.getAttribute(`data-ai-player-team`)!==l&&e.setAttribute(`data-ai-player-team`,l),s?.dataset.aiScoutFingerprint===o&&c)return;s?.remove(),c?.remove();let u=document.createElement(`span`);if(u.id=a,u.setAttribute(`data-ai-player-scout-badge`,`true`),t.star){let e=document.createElement(`b`);e.style.cssText=`color:#fde047;`,e.textContent=`★`,e.title=`Best ADR and K/D together on this team`,u.append(e)}let d=document.createElement(`span`);d.style.color=jr[t.tone],d.textContent=t.title.split(/: | · /)[0],u.append(d);let f=document.createElement(`div`);f.id=i,f.dataset.aiScoutFingerprint=o,f.setAttribute(`data-ai-player-scout-tooltip`,`true`);let p=document.createElement(`strong`);p.style.cssText=`display:block;font-size:12px;margin-bottom:5px;color:${jr[t.tone]};`,p.textContent=t.title;let m=document.createElement(`div`);m.style.cssText=`color:#aeb8c5;`,m.textContent=t.detail,f.append(p,m);let h=(e,t,n)=>{let r=document.createElement(`div`);r.style.cssText=`margin-top:7px;padding-top:7px;border-top:1px solid rgba(255,255,255,.09);color:#cbd5e1;`;let i=document.createElement(`b`);i.style.cssText=`color:${n};margin-right:5px;`,i.textContent=e,r.append(i,document.createTextNode(t)),f.append(r)};t.star&&t.starDetail&&h(`★ Star`,t.starDetail,`#fde047`),t.tip&&h(`Play it`,t.tip,`var(--fe-accent,#a78bfa)`),r.append(u),e.append(f)}var Nr=[6e3,12e3,2e4,3e4,45e3],Pr=(0,N.memo)(({playerId:e,rosterIndex:t})=>{Ve();let[n]=f({key:l.SMURFING_CHANCE,defaultValue:!1}),{levelsOverTen:r,levelCollectionType:i}=oe(),[a]=f({key:l.FACEIT_HAVE_WE_MET_MATCHROOM,defaultValue:!1}),[o]=f({key:l.PLAYER_TRACKING_MATCHROOM,defaultValue:!1}),[s]=f({key:l.EXTERNAL_LINKS_LEETIFY_MATCHROOM,defaultValue:!1}),[d]=f({key:l.EXTERNAL_LINKS_FACEITPERF_MATCHROOM,defaultValue:!1}),[p]=f({key:l.EXTERNAL_LINKS_CSWATCH_MATCHROOM,defaultValue:!1}),[m]=f({key:l.EXTERNAL_LINKS_FACEHOUND_MATCHROOM,defaultValue:!1}),[h]=f({key:l.AUTO_REPORT,defaultValue:!1}),[v]=f({key:l.AUTO_REPORT_TRACK_PLAYER,defaultValue:!1}),[y]=f({key:Be.AUTO_REPORT_THRESHOLD,defaultValue:60}),[b]=f({key:l.EXTENDED_STATS_MATCHROOM,defaultValue:!1}),[x]=f({key:l.SHOW_CSGO_ELO_MATCHROOM,defaultValue:!1}),[S]=f({key:l.SHOW_MATCH_COUNT_MATCHROOM,defaultValue:!1}),[ee]=f({key:l.SHOW_PEAK_ELO_MATCHROOM,defaultValue:!1}),[te]=f({key:l.SHOW_RECENT_FORM_MATCHROOM,defaultValue:!1}),[C]=f({key:l.SHOW_MULTI_KILL_DETAIL_MATCHROOM,defaultValue:!1}),[re]=f({key:l.SHOW_CLUTCH_RATE_MATCHROOM,defaultValue:!1}),[w]=f({key:l.SHOW_WEEKLY_ACTIVITY_MATCHROOM,defaultValue:!1}),[E]=f({key:l.MAP_STATS_MATCHROOM,defaultValue:!1}),[me]=f({key:l.MATCH_RECOMMENDATION_MATCHROOM,defaultValue:!0}),Se=te||S,Ae=typeof y==`number`?y:60,{setPlayerNicknames:je}=He(),{openDialog:Fe}=ae(),{lastUrl:Ie}=ie(),{openModal:O}=T(),Le=rr(e=>e.tags),Re=Or(),{data:A,isSuccess:j}=g(),{data:M,isSuccess:Je}=Pe(),{player:Ze,isSuccessPlayerData:Qe,isLoadingStats:$e}=qt(e,n||h||S,!n&&!h),et=M?[...M.teams.faction1.roster,...M.teams.faction2.roster].find(t=>t.id===e)??null:null,P=Ze??et,tt=Qe||!!et,{data:nt}=Ke(P?.nickname),{mutateAsync:rt}=ue(),it=P?.games?.cs2?.faceitElo||0,{data:F,isFetching:at}=Bn(P?.id||e,ee,it,`cs2`),{data:ot}=de(P?.id||``,`cs2`,!!P?.id&&Se,!0),{data:st}=pr(P?.id||``,`cs2`,100,!!P?.id&&E),[ct,lt]=f({key:`extendedStatsPeriod`,defaultValue:`last30matches`}),I=[`day`,`week`,`month`,`quarter`,`year`,`last30matches`].includes(ct)?ct:`year`;(0,N.useEffect)(()=>{ct!==I&&lt(I)},[ct,I,lt]);let ut=(0,N.useMemo)(()=>new Date().getFullYear().toString(),[]),dt=(0,N.useMemo)(()=>(new Date().getFullYear()-1).toString(),[]),L=P?.id||e,{data:R,isFetching:ft,isError:pt,isSuccess:z,failureCount:B,refetch:mt}=fe(L,`cs2`,ut,I,b||w||n),[ht,gt]=(0,N.useState)(0);(0,N.useEffect)(()=>{if(R){gt(0);return}return gt(u(c)),_(e=>{e===`faceit:stats-time-user-games`&&gt(0)})},[R,B,ft]);let _t=Number(R?.find(e=>e&&typeof e==`object`&&e[ut])?.[ut]?.m1),{data:V}=fe(L,`cs2`,dt,I,b&&I===`last30matches`&&!!R&&!(_t>=30)),[H,vt]=(0,N.useState)(null),[yt,bt]=(0,N.useState)(null),[xt,St]=(0,N.useState)(null),U=(0,N.useRef)(!0),W=(0,N.useRef)(new Map),Ct=(0,N.useRef)(null),wt=(0,N.useRef)(new Set),G=(0,N.useRef)(null),Tt=(0,N.useRef)(null),Et=(0,N.useRef)(!1),K=(0,N.useRef)(null),q=(0,N.useMemo)(()=>P?{nickname:P.nickname,nicknameLower:k(P.nickname),level:P.games?.cs2?.skillLevel,elo:P.games?.cs2?.faceitElo,csgoElo:P.games?.csgo?.faceitElo}:null,[P]),Dt=(0,N.useMemo)(()=>e&&Le[tr(e)]||(q?Le[nr(q.nickname)]:null)||null,[Le,e,q]),J=(0,N.useMemo)(()=>{if(!H)return null;let e=I===`last30matches`?H.last30matches:I===`day`?H.day:I===`week`?H.week:I===`month`?H.month:I===`quarter`?H.quarter??null:H.year;return e&&!xe(e)?e:null},[H,I]),Ot=Ce(I),{data:kt,isFetching:At}=De(e,I,`cs2`,b&&!Ot),Y=(0,N.useMemo)(()=>Ot?we(J):Ee(kt,J),[Ot,J,kt]),jt=!Ot&&At,Mt=(0,N.useMemo)(()=>be(J,Y),[J,Y]),X=(0,N.useMemo)(()=>{if(!ot)return null;let e=ot.lifetime;return e?mr(e.s0,e.s2):null},[ot]),{multiKillDetail:Nt,clutchRate:Pt}=(0,N.useMemo)(()=>b?Ne(R,I):{multiKillDetail:null,clutchRate:null},[b,R,I]),Z=(0,N.useMemo)(()=>!w||!R?null:hr(R),[w,R]),Q=(0,N.useMemo)(()=>Me(Nt,Pt,{multiKills:C,clutch:re}),[C,Nt,re,Pt]),Ft=(0,N.useCallback)(()=>{let e=Ct.current;if(e){try{chrome.storage.onChanged.removeListener(e)}catch{}Ct.current=null}},[]),It=(0,N.useCallback)((e,t)=>{let n=W.current.get(e);if(n){try{n.unmount()}catch{}W.current.delete(e)}let r=(0,Gt.createRoot)(t);return W.current.set(e,r),r},[]),Lt=(0,N.useCallback)(()=>{Ft(),[`have-we-met-${e}`,`external-links-${e}`,`player-tracking-${e}`].forEach(e=>{let t=W.current.get(e);if(t){try{t.unmount()}catch{}W.current.delete(e)}});let t=D(`#ai-player-scout-${e}`),n=D(`#ai-player-scout-badge-${e}`),r=t?.parentElement||n?.parentElement;r?.removeAttribute(`data-ai-player-scout-host`),r?.removeAttribute(`data-ai-player-team`),[`extra-info-wrapper-${e}`,`extra-info-container-${e}`,`track-player-container-${e}`,`external-links-${e}`,`extended-stats-container-${e}`,`ai-player-scout-${e}`,`ai-player-scout-badge-${e}`].forEach(e=>{let t=D(`#${e}`);t&&t.remove()})},[e,Ft]);(0,N.useEffect)(()=>(U.current=!0,()=>{U.current=!1,Lt()}),[Lt]),(0,N.useEffect)(()=>()=>{Lt()},[Lt]),(0,N.useEffect)(()=>{if(!n){let t=D(`#smurf-indicator-${e}`);t&&t.remove();return}},[n,e]),(0,N.useEffect)(()=>{if(!b||I!==`last30matches`||!R){vt(e=>e?{...e,last30matches:null}:null);return}let e=V?[...Array.isArray(R)?R:[R],...Array.isArray(V)?V:[V]]:Array.isArray(R)?R:[R],t=!1;return pe(`last30matches`,{playerStatsByYear:e},R,`last30|${he(V)}`).then(e=>{if(t)return;St(R);let n=e.success?e.stats:null;vt(e=>e?{...e,last30matches:n??null}:n?{year:null,month:null,week:null,day:null,last30matches:n}:null)}),()=>{t=!0}},[b,I,R,V,e]);let Rt=(0,N.useRef)(b);(0,N.useEffect)(()=>{if(b&&L){let e=!Rt.current&&b;if(Rt.current=b,e){let e=setTimeout(()=>{mt()},100);return()=>clearTimeout(e)}}else Rt.current=b},[b,L,mt]),(0,N.useEffect)(()=>{if(!b||!R){vt(null);return}let e=new Date,t=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}`,n=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`,r=!1;return pe(`all`,{playerStatsByYear:R,currentYear:ut,currentMonth:t,currentDay:n},R,`${ut}|${n}`).then(e=>{if(!r){bt(R);let t=e.success?e.stats:null;vt(e=>t?{...t,last30matches:e?.last30matches??null}:e)}}),()=>{r=!0}},[b,R,ut]);let[zt,Bt]=(0,N.useState)(0),Vt=zt>=Nr.length;(0,N.useEffect)(()=>{if(!(!b||!L||!z&&!pt||ft||R||Vt))return Tt.current=setTimeout(()=>{Bt(e=>e+1),mt()},Nr[zt]),()=>{Tt.current&&clearTimeout(Tt.current),Tt.current=null}},[b,L,z,pt,ft,R,mt,zt,Vt]),(0,N.useEffect)(()=>{if(!q||!U.current)return;(b||w)&&(Ar(),kr());let r=e=>{let t=!!R&&(I===`last30matches`?xt===R:yt===R),n=t&&(H!==null||I===`week`&&Z?.totalMatches===0);on(e,Y?.faceitRating??null,Y?ye(Y):null,t||(pt||z&&!R)&&Vt,n,_e(Y),_e(Y,`swing`),R?0:ht)},i=t=>{let n=t.querySelector(`#weekly-activity-container-${e}`);if(!w||!Z){n&&n.remove();return}let r=n;if(!r){r=document.createElement(`div`),r.id=`weekly-activity-container-${e}`,r.style.cssText=`
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 4px;
          width: 100%;
          padding: 8px 12px;
          margin-bottom: 8px;
          background: rgba(17, 17, 20, 0.6);
          border: 1px solid rgba(229, 231, 235, 0.08);
          border-radius: 6px;
          box-sizing: border-box;
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        `;let n=t.querySelector(`#extra-info-container-${e}`);n&&n.parentElement===t?n.insertAdjacentElement(`afterend`,r):t.insertBefore(r,t.firstChild)}let i=JSON.stringify(Z);if(r.dataset.weeklyActivityFingerprint===i)return;r.dataset.weeklyActivityFingerprint=i;let a=Math.max(1,...Z.bars.map(e=>e.matches));if(Z.totalMatches===0){r.innerHTML=`<div style="font-size:11px;color:#9ca3af;"><span style="color:#e5e7eb;font-weight:600;">Last 7 days</span> · no matches</div>`;return}let o=[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],s=Z.bars.map(e=>{let t=e.matches/a*100,n=Math.max(0,Math.min(e.matches,e.wins)),r=Math.max(0,e.matches-n),i=e.matches>0?n/e.matches*100:0,s=o[new Date(e.date+`T00:00:00`).getDay()],c=e.matches>0?`${e.date} · ${n} ${n===1?`win`:`wins`} · ${r} ${r===1?`loss`:`losses`} · ${e.matches} ${e.matches===1?`match`:`matches`}`:`${e.date} · no matches`;return`
            <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;" title="${c}">
              <div style="width:100%;height:24px;display:flex;align-items:flex-end;justify-content:center;">
                <div role="img" aria-label="${c}" style="width:70%;height:${Math.max(3,t)}%;display:flex;flex-direction:column-reverse;overflow:hidden;background:rgba(156,163,175,.15);border-radius:2px;">
                  ${n>0?`<div data-weekly-wins="${n}" style="width:100%;height:${i}%;background:#10b981;flex-shrink:0;"></div>`:``}
                  ${r>0?`<div data-weekly-losses="${r}" style="width:100%;height:${100-i}%;background:#ef4444;flex-shrink:0;"></div>`:``}
                </div>
              </div>
              <div style="font-size:9px;color:#9ca3af;">${s}</div>
            </div>
          `}).join(``);r.innerHTML=`
        <div style="display:flex;flex-direction:column;justify-content:center;min-width:64px;">
          <div style="font-size:11px;color:#e5e7eb;font-weight:600;">Last 7 days</div>
          <div style="font-size:10px;color:#9ca3af;margin-top:2px;">${Z.totalMatches} ${Z.totalMatches===1?`match`:`matches`}</div>
        </div>
        <div style="display:flex;flex:1;gap:6px;align-items:flex-end;">${s}</div>
      `},c=()=>{if(!U.current)return;let c=or();if(!c){let e=D(`div[name="roster1"]`),t=D(`div[name="roster2"]`);if(!e&&!t)return}let l=c||document.body,u=document.getElementById(`extra-info-wrapper-${e}`),f=null,g=null;if(u&&u.isConnected&&(f=u.closest(`div[class*="ListContentPlayer__Holder"]`),f&&(g=D(`div[class*="Nickname__Name"]`,f),g||=D(`div[class*="Nickname__Container"]`,f))),!f&&P&&q&&Je&&M){let n=[];try{n=D.all(`div[class*="CanvasHolder"] div[class*="Holder"]:has(> div[class*="ListContentPlayer__Background"])`,l)}catch{let e=D.all(`div[class*="CanvasHolder"]`,l);for(let t of e){let e=D.all(`div[class*="Holder"]`,t);for(let t of e)D(`div[class*="ListContentPlayer__Background"]`,t)&&n.push(t)}}let r=[...M.teams.faction1.roster,...M.teams.faction2.roster];for(let t of n){let n=D(`div[class*="NicknameContainer"]`,t);if(!n)continue;let i=n.textContent?.trim()||``;if(!i)continue;let a=r.find(e=>k(e.nickname)===k(i));if(a&&a.id===P.id){let r=t.querySelectorAll(`[id^="extra-info-wrapper-"]`),i=t.querySelector(`#extra-info-wrapper-${e}`),a=Array.from(r).some(t=>t.id!==`extra-info-wrapper-${e}`);if(i||!a&&r.length===0){f=t,g=n;break}}}if(!f&&t!==void 0){let n=D(`div[name="roster1"]`,l),r=D(`div[name="roster2"]`,l),i=n?D.all(`div[class*="ListContentPlayer__Holder"]`,n):[],a=r?D.all(`div[class*="ListContentPlayer__Holder"]`,r):[],o=[...i,...a];if(t<o.length){let n=o[t],r=n.querySelectorAll(`[id^="extra-info-wrapper-"]`),i=n.querySelector(`#extra-info-wrapper-${e}`),a=Array.from(r).some(t=>t.id!==`extra-info-wrapper-${e}`);(i||!a&&r.length===0)&&(f=n,g=D(`div[class*="NicknameContainer"], div[class*="Nickname__Name"], div[class*="Nickname__Container"]`,f))}}}if(!f&&q&&P)for(let t of[`div[class*="Nickname__Name"]`,`div[class*="Nickname__Container"]`,`h5`,`a > h5`,`div[class*="NameContainer"] > a > h5`]){let n=D.all(t,l);for(let t of n){if(!t)continue;let n=t.textContent?.trim()||``;if(k(n)!==q.nicknameLower)continue;let r=null;if(r=t.closest(`div[class*="ListContentPlayer__Holder"]`),!r){let e=t.parentElement,n=0;for(;e&&!r&&n<10;){if(e.className&&typeof e.className==`string`&&e.className.includes(`ListContentPlayer__Holder`)){r=e;break}let t=e.querySelector(`div[class*="ListContentPlayer__Holder"]`);if(t){r=t;break}e=e.parentElement,n++}}if(r){let n=r.querySelectorAll(`[id^="extra-info-wrapper-"]`),i=r.querySelector(`#extra-info-wrapper-${e}`),a=Array.from(n).some(t=>t.id!==`extra-info-wrapper-${e}`);if(i||!a&&n.length===0){f=r,g=t;break}}}if(f)break}if(!f&&P){let e=D.all(`a[href*="/players/${P.id}"]`,c);for(let t of e)if(f=t.closest(`div[class*="ListContentPlayer__Holder"]`),f){g||(g=D(`div[class*="Nickname__Name"]`,f),g||=D(`div[class*="Nickname__Container"]`,f));break}}if(!f&&P){let t=D.all(`a[href*="/players/"], a[href*="player/"], a[href*="/en/players/"]`,l);for(let n of t)if((n.getAttribute(`href`)||``).includes(P.id)){let t=n.closest(`div[class*="ListContentPlayer__Holder"], div[class*="Holder"]`);if(t){let n=t.querySelectorAll(`[id^="extra-info-wrapper-"]`),r=t.querySelector(`#extra-info-wrapper-${e}`),i=Array.from(n).some(t=>t.id!==`extra-info-wrapper-${e}`);if(r||!i&&n.length===0){f=t,g=D(`div[class*="Nickname__Name"]`,f),g||=D(`div[class*="Nickname__Container"]`,f);break}}}}if(f&&!f.matches(`div[class*="ListContentPlayer__Holder"]`)&&(f=f.querySelector(`div[class*="ListContentPlayer__Holder"]`)??f),!f){u&&!u.isConnected&&u.remove();return}P&&g&&!f.hasAttribute(`data-tracking-click-handler-${e}`)&&(f.setAttribute(`data-tracking-click-handler-${e}`,`checking`),ne(P.id).then(t=>{if(!U.current){f.removeAttribute(`data-tracking-click-handler-${e}`);return}if(!t){f.setAttribute(`data-tracking-click-handler-${e}`,`not-tracked`);return}if(!f.isConnected||!g.isConnected){f.removeAttribute(`data-tracking-click-handler-${e}`);return}f.setAttribute(`data-tracking-click-handler-${e}`,`attached`),g&&(g.style.cursor=`pointer`,g.style.textDecoration=`underline`,g.style.textDecorationColor=`rgba(99, 102, 241, 0.6)`);let n=P,r=P.id;f.addEventListener(`click`,e=>{let t=e.target.closest(`div[class*="Nickname__Name"], div[class*="Nickname__Container"]`);if(!t)return;let i=t.closest(`a`);if(i&&i.href){if(!i.href.includes(`/players/${r}`))return}else if(!f.contains(t))return;return e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),i&&i.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation()},{once:!0,capture:!0}),O(n),!1},!0)}).catch(t=>{console.error(`Error checking if player is tracked:`,t),f.removeAttribute(`data-tracking-click-handler-${e}`)}));let _=document.getElementById(`extra-info-wrapper-${e}`);if(_||=D(`#extra-info-wrapper-${e}`,f),!_){_=document.createElement(`div`),_.id=`extra-info-wrapper-${e}`,_.style.cssText=`margin-top: 8px; width: 100%; position: relative; overflow: visible; z-index: 1;`;let t=D(`div[class*="ListContentPlayer__Body"]`,f);t&&t.parentElement===f?t.insertAdjacentElement(`afterend`,_):f.appendChild(_)}else if(!_.isConnected||_.parentElement!==f){let e=D(`div[class*="ListContentPlayer__Body"]`,f);e&&e.parentElement===f?e.insertAdjacentElement(`afterend`,_):f.appendChild(_)}f&&!g&&(g=D(`div[class*="Nickname__Name"]`,f),g||=D(`div[class*="Nickname__Container"]`,f));let y=f.querySelector(`#ai-player-scout-${e}`);me&&Dt?(Ar(),Mr(f,Dt,e)):(y?.remove(),f.querySelector(`#ai-player-scout-badge-${e}`)?.remove(),f.removeAttribute(`data-ai-player-scout-host`),f.removeAttribute(`data-ai-player-team`));let C=[];s&&C.push(`leetify`),d&&C.push(`faceitperf`),p&&C.push(`cswatch`),m&&C.push(`facehound`);let re=a&&A&&P&&A.id!==P.id,w=C.length>0&&P&&j,ie=o&&P&&j&&A&&A.id!==P.id,ae=n||re||w||ie||x||S||ee||te,T=_.querySelector(`#extra-info-container-${e}`);if(T||=document.getElementById(`extra-info-container-${e}`),T||=D(`#extra-info-container-${e}`),ae){if(T)T.parentElement!==_&&_.appendChild(T);else{T=document.createElement(`div`),T.id=`extra-info-container-${e}`;for(let e of[`pointerdown`,`mousedown`,`pointerup`,`mouseup`,`click`])T.addEventListener(e,e=>{e.target?.closest?.(`[data-badge-order="9"], [data-badge-order="10"], [data-badge-order="11"], [data-encounter]`)&&e.stopPropagation()});T.style.cssText=`
              display: flex;
              flex-wrap: wrap;
              gap: 4px;
              align-items: center;
              justify-content: flex-start;
              width: 100%;
              padding: 3px 8px;
              margin-bottom: 4px;
              box-sizing: border-box;
              position: relative;
              overflow: visible;
              z-index: 2;
            `,_.appendChild(T)}}else T&&=([`have-we-met-${e}`,`external-links-${e}`,`player-tracking-${e}`].forEach(e=>{let t=W.current.get(e);if(t){try{t.unmount()}catch{}W.current.delete(e)}}),T.remove(),null);let oe=n&&P?.extendedStats?er(P,R||null):null;if(h&&P?.extendedStats&&A&&A.id!==P.id&&xr(P,Ae,wt.current,v).catch(()=>{}),n&&oe!==null&&/^\d{1,3}%$/.test(oe)&&T&&!T.querySelector(`[data-smurfing-indicator]`)){Ar();let e=document.createElement(`div`);e.setAttribute(`data-smurfing-indicator`,`true`),e.setAttribute(`data-badge-order`,`1`);let t=ir(oe);e.style.cssText=`
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 5px;
            padding: 3px 8px;
            background: rgba(17, 17, 20, 0.8);
            border: 1px solid ${t}40;
            border-radius: 20px;
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            white-space: nowrap;
          `,e.innerHTML=`<span style="font-size:9px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.4px;">Smurf</span><span style="font-size:12px;font-weight:700;color:${t};">${oe}</span>`,T.appendChild(e)}else if(!n&&T){let e=T.querySelector(`[data-smurfing-indicator]`);e&&e.remove()}if(T&&T.querySelector(`[data-extender-user-badge]`)?.remove(),T?.querySelector(`[data-supporter-badge]`)?.remove(),f&&qe(f,Math.max(0,Math.min(20,nt?.badgeLevel||0)),{compact:!0}),x&&T&&!T.querySelector(`[data-csgo-elo="${e}"]`)){let t=document.createElement(`div`);t.setAttribute(`data-csgo-elo`,e),t.setAttribute(`data-badge-order`,`2`),t.style.cssText=`
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 5px;
            padding: 3px 8px;
            background: rgba(255, 153, 0, 0.1);
            border: 1px solid rgba(255, 153, 0, 0.3);
            border-radius: 20px;
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            white-space: nowrap;
          `;let n=q?.csgoElo?q.csgoElo.toString():`N/A`;t.innerHTML=`
            <span style="font-size:9px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.4px;">CS:GO</span><span data-csgo-elo-value style="font-size:12px;font-weight:700;color:${q?.csgoElo?`#ff9900`:`#9ca3af`};">${n}</span>
          `,T.appendChild(t)}else if(!x&&T){let t=T.querySelector(`[data-csgo-elo="${e}"]`);t&&t.remove()}else if(x&&T){let t=T.querySelector(`[data-csgo-elo="${e}"]`);if(t){let e=t.querySelector(`[data-csgo-elo-value]`);if(e){let t=q?.csgoElo?q.csgoElo.toString():`N/A`,n=q?.csgoElo?`#ff9900`:`#9ca3af`;e.textContent=t,e.style.color=n}}}if(S&&T){let t=ot?.lifetime?.m1??P?.extendedStats?.matches,n=!ot&&$e&&(t==null||t===``),r=t!=null&&t!==``?String(t):`N/A`,i=T.querySelector(`[data-match-count="${e}"]`);if(i){let e=i.querySelector(`[data-match-count-value]`);if(e&&n)e.querySelector(`[data-fext-skeleton-bar]`)||(e.innerHTML=`<span data-fext-skeleton-bar style="display:inline-block;width:28px;height:0.75em;vertical-align:-0.05em;background:rgba(156,163,175,.18);border-radius:3px;"></span>`);else if(e&&e.textContent!==r){let t=r===`N/A`?`#9ca3af`:`#3b82f6`;e.textContent=r,e.style.color=t}}else{let t=document.createElement(`div`);t.setAttribute(`data-match-count`,e),t.setAttribute(`data-badge-order`,`3`),t.style.cssText=`
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 5px;
              padding: 3px 8px;
              background: rgba(59, 130, 246, 0.1);
              border: 1px solid rgba(59, 130, 246, 0.3);
              border-radius: 20px;
              font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
              white-space: nowrap;
            `,t.innerHTML=`
              <span style="font-size:9px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.4px;">Matches</span><span data-match-count-value style="font-size:12px;font-weight:700;color:${r===`N/A`?`#9ca3af`:`#3b82f6`};">${n?`<span data-fext-skeleton-bar style="display:inline-block;width:28px;height:0.75em;vertical-align:-0.05em;background:rgba(156,163,175,.18);border-radius:3px;"></span>`:r}</span>
            `,T.appendChild(t)}}else if(!S&&T){let t=T.querySelector(`[data-match-count="${e}"]`);t&&t.remove()}if(ee&&T){let t=F?.peak,n=t&&t>0?String(Math.round(t)):null,r=T.querySelector(`[data-peak-elo="${e}"]`);if(!r){r=document.createElement(`div`),r.setAttribute(`data-peak-elo`,e),r.setAttribute(`data-badge-order`,`4`),r.style.cssText=`
              display:flex;flex-direction:row;align-items:center;gap:5px;padding:3px 8px;
              background:rgba(168,85,247,.1);border:1px solid rgba(168,85,247,.3);
              border-radius:20px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;white-space:nowrap;
            `;let t=document.createElement(`span`);t.style.cssText=`font-size:9px;color:#9ca3af;text-transform:uppercase;letter-spacing:.4px;`,t.textContent=`Peak`;let n=document.createElement(`span`);n.setAttribute(`data-peak-elo-value`,``),n.style.cssText=`font-size:12px;font-weight:700;color:#a855f7;`,r.append(t,n),T.appendChild(r)}let i=r.querySelector(`[data-peak-elo-value]`);if(i){if(!n&&(at||it<=0)){if(!i.querySelector(`[data-peak-elo-skeleton]`)){i.textContent=``;let e=document.createElement(`span`);e.setAttribute(`data-peak-elo-skeleton`,`true`),e.style.cssText=`display:block;width:34px;height:10px;border-radius:5px;background:linear-gradient(90deg,rgba(168,85,247,.16),rgba(216,180,254,.5),rgba(168,85,247,.16));`,e.animate([{opacity:.45},{opacity:1},{opacity:.45}],{duration:1200,iterations:1/0,easing:`ease-in-out`}),i.appendChild(e)}}else i.textContent=n??`N/A`,i.style.color=n?`#a855f7`:`#9ca3af`}r.title=F?`Highest CS2 ELO found across ${F.scanned.toLocaleString()} historical matches`:`Loading historical CS2 peak ELO…`}else T&&T.querySelector(`[data-peak-elo="${e}"]`)?.remove();if(f?.querySelector(`[class*="NicknameContainer"] [data-recent-form="${e}"]`)?.remove(),te&&X&&T){let t=T.querySelector(`[data-recent-form="${e}"]`);t||(t=document.createElement(`div`),t.setAttribute(`data-recent-form`,e),t.setAttribute(`data-badge-order`,`0`),t.setAttribute(`role`,`img`),t.style.cssText=`display:flex;align-items:center;gap:2px;flex:none;`,T.appendChild(t));let n=[...X.results].reverse(),r=n.map(e=>`<span style="width:5px;height:5px;border-radius:50%;background:${e===`W`?`#10b981`:`#ef4444`};display:inline-block;flex-shrink:0;"></span>`).join(``);t.innerHTML!==r&&(t.innerHTML=r);let i=`Form, last ${X.results.length}: ${X.wins}-${X.losses} (${n.join(` `)}, latest first)${X.streak>1?` · current streak ${X.streakType}${X.streak}`:``} · best streak ${X.bestStreak}`;t.setAttribute(`title`,i),t.setAttribute(`aria-label`,i)}else T?.querySelector(`[data-recent-form="${e}"]`)?.remove();if(f&&_&&T&&Gn(f,_,T),A&&P&&A.id===P.id){let t=T?.querySelector(`[data-have-we-met-${e}]`);if(t){let n=W.current.get(`have-we-met-${e}`);if(n){try{n.unmount()}catch{}W.current.delete(`have-we-met-${e}`)}t.remove()}}else if(!a&&T){let t=T.querySelector(`[data-have-we-met-${e}]`);if(t){let n=W.current.get(`have-we-met-${e}`);if(n){try{n.unmount()}catch{}W.current.delete(`have-we-met-${e}`)}t.remove()}}else if(a&&A&&P&&A.id!==P.id&&T&&!T.querySelector(`[data-have-we-met-${e}]`)){let t=document.createElement(`div`);t.setAttribute(`data-have-we-met-${e}`,`true`),t.setAttribute(`data-badge-order`,`9`),t.style.cssText=`display: flex; align-items: center; position: relative; overflow: visible;`;try{It(`have-we-met-${e}`,t).render(We(P,A,j,Fe,je)),T.appendChild(t),A&&A.id&&rt({playerResourceId:A.id,offset:0,limit:100}).then(t=>{let n=t.filter(e=>e.playingPlayers&&e.playingPlayers.includes(P.id)&&e.playingPlayers.includes(A.id)).length,r=W.current.get(`have-we-met-${e}`);r&&U.current&&r.render(We(P,A,j,Fe,je,void 0,n));let i=document.getElementById(`extra-info-container-${e}`);if(!i||!U.current)return;let a=i.querySelector(`[data-encounter="${e}"]`);if(n<=0){a?.remove();return}if(!a){a=document.createElement(`div`),a.setAttribute(`data-encounter`,e),a.setAttribute(`data-badge-order`,`5`),a.setAttribute(`role`,`button`),a.tabIndex=0,a.style.cssText=`display:flex;align-items:center;gap:4px;cursor:pointer;white-space:nowrap;`;let t=()=>{je(P.id,A.id),Fe(`faceitHaveWeMetPopup`)};a.addEventListener(`click`,t),a.addEventListener(`keydown`,e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),t())}),i.appendChild(a)}a.innerHTML=`<span style="font-size:9px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.4px;">Met</span><span style="font-size:12px;font-weight:700;color:#f87171;">${n>99?`99+`:String(n)}\u00d7</span>`;let o=`You played together in ${n} of your last ${t.length} matches. Click for the matches.`;a.title=o,a.setAttribute(`aria-label`,o)}).catch(()=>{})}catch{}}if(C.length>0&&P&&j&&T&&!T.querySelector(`[data-external-links-${e}]`)){let t=document.createElement(`div`);t.setAttribute(`data-external-links-${e}`,`true`),t.setAttribute(`data-badge-order`,`10`),t.style.cssText=`display: flex; align-items: center; position: relative; overflow: visible; z-index: 10000;`;try{It(`external-links-${e}`,t).render(Ue(P,C)),T.appendChild(t)}catch{}}else if(C.length===0&&T){let t=T.querySelector(`[data-external-links-${e}]`);if(t){let n=W.current.get(`external-links-${e}`);if(n){try{n.unmount()}catch{}W.current.delete(`external-links-${e}`)}t.remove()}}if(A&&P&&A.id===P.id){Ft();let t=T?.querySelector(`[data-player-tracking-${e}]`);if(t){let n=W.current.get(`player-tracking-${e}`);if(n){try{n.unmount()}catch{}W.current.delete(`player-tracking-${e}`)}t.remove()}}else if(!o&&T){Ft();let t=T.querySelector(`[data-player-tracking-${e}]`);if(t){let n=W.current.get(`player-tracking-${e}`);if(n){try{n.unmount()}catch{}W.current.delete(`player-tracking-${e}`)}t.remove()}}else if(o&&P&&j&&A&&A.id!==P.id&&T&&!T.querySelector(`[data-player-tracking-${e}]`)){let t=document.createElement(`div`);t.setAttribute(`data-player-tracking-${e}`,`true`),t.setAttribute(`data-badge-order`,`11`),t.style.cssText=`display: flex; align-items: center;`;try{ne(P.id).then(n=>{if(!U.current||!t.isConnected)return;let r=It(`player-tracking-${e}`,t),i=async e=>{try{O(e)}catch(e){console.error(`Error opening tracking modal:`,e)}},a=async()=>{try{let e=await ne(P.id);if(!U.current||!t.isConnected)return;r.render(Ge(P,e,i))}catch(e){console.error(`Error updating button state:`,e)}},o=e=>{e.faceitExtenderTrackedPlayers&&a()};Ft(),Ct.current=o,chrome.storage.onChanged.addListener(o),r.render(Ge(P,n,i))}),T.appendChild(t)}catch{}}if(T&&T.children.length===0&&([`have-we-met-${e}`,`external-links-${e}`,`player-tracking-${e}`].forEach(e=>{let t=W.current.get(e);if(t){try{t.unmount()}catch{}W.current.delete(e)}}),T.remove()),_&&i(_),_){if(b&&P){let t=_.querySelector(`#extended-stats-container-${e}`);if(!t){if(!_.querySelector(`[data-extended-stats-separator]`)){let t=document.createElement(`div`);t.setAttribute(`data-extended-stats-separator`,`true`),t.style.cssText=`
                  width: 100%;
                  height: 1px;
                  background: linear-gradient(to right, transparent, rgba(229, 231, 235, 0.15), transparent);
                  margin: 16px 0;
                `;let n=_.querySelector(`#extra-info-container-${e}`);n&&n.parentElement===_?n.insertAdjacentElement(`afterend`,t):_.appendChild(t)}t=document.createElement(`div`),t.id=`extended-stats-container-${e}`,G.current=null,t.style.cssText=`display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; width: 100%; padding: 8px 0;`;let n=_.querySelector(`[data-extended-stats-separator]`),r=_.querySelector(`#extra-info-container-${e}`);n&&n.parentElement===_?n.insertAdjacentElement(`afterend`,t):r&&r.parentElement===_?r.insertAdjacentElement(`afterend`,t):_.appendChild(t)}if(t&&(J||E)){let e=K.current!==null&&K.current!==I,n=E?lr(fr(st,I)):null,i=JSON.stringify({stats:J,period:I,hltv:Mt?.rating,faceit:Y,faceitLoading:jt,extra:Q,mapView:E,mapHtml:n?n.innerHTML:null}),a=G.current,o=!a||a!==i||e;if(o&&E&&n)G.current=i,K.current=I,t.style.display=`block`,t.removeAttribute(`data-fext-tiered`),t.removeAttribute(`title`),delete t.dataset.fextPlaceholderKey,t.innerHTML=``,t.appendChild(n);else if(o&&J){G.current=i,K.current=I,t.style.display=`grid`;let e=ve(Y,Mt,jt);e.push(jt&&!Y?{label:`ROUND SWING`,value:``,loading:!0}:{label:_e(Y,`swing`),title:ge(Y,`swing`),value:ye(Y)},{label:`DPR`,value:J.dpr},{label:`KAST`,value:J.kast===`N/A`?`N/A`:`${J.kast}%`},{label:`MULTI-KILL`,value:J.multiKill===`N/A`?`N/A`:`${J.multiKill}%`},{label:`ADR`,value:J.adr},{label:`KPR`,value:J.kpr},{label:`AVG KILLS`,value:J.avgKills},...Q);let n=[];e.forEach(({label:e,value:t,color:r,loading:i,title:a})=>{if(i){n.push({label:e,element:ke(e)});return}let o=Te({label:e,value:t,color:r,title:a},Oe.matchroom);n.push({label:e,element:o})}),t.removeAttribute(`title`),delete t.dataset.fextPlaceholderKey,rn(t,n)}else o&&!J&&(G.current=null,r(t))}else t&&!J&&(G.current=null,r(t))}else if(!b){let t=_.querySelector(`#extended-stats-container-${e}`);t&&t.remove();let n=_.querySelector(`[data-extended-stats-separator]`);if(n){let t=Array.from(_.children).some(t=>t.id!==`extended-stats-container-${e}`&&t.id!==`extra-info-container-${e}`&&!t.hasAttribute(`data-extended-stats-separator`)),r=_.querySelector(`#extra-info-container-${e}`);t||r&&r.children.length>0||n.remove()}}}},l=document.getElementById(`extra-info-wrapper-${e}`);if(l){if(i(l),b&&P){let t=l.querySelector(`#extended-stats-container-${e}`);if(!t){if(!l.querySelector(`[data-extended-stats-separator]`)){let t=document.createElement(`div`);t.setAttribute(`data-extended-stats-separator`,`true`),t.style.cssText=`
              width: 100%;
              height: 1px;
              background: linear-gradient(to right, transparent, rgba(229, 231, 235, 0.15), transparent);
              margin: 16px 0;
            `;let n=l.querySelector(`#extra-info-container-${e}`);n&&n.parentElement===l?n.insertAdjacentElement(`afterend`,t):l.appendChild(t)}t=document.createElement(`div`),t.id=`extended-stats-container-${e}`,G.current=null,t.style.cssText=`display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; width: 100%; padding: 8px 0;`;let n=l.querySelector(`[data-extended-stats-separator]`),r=l.querySelector(`#extra-info-container-${e}`);n&&n.parentElement===l?n.insertAdjacentElement(`afterend`,t):r&&r.parentElement===l?r.insertAdjacentElement(`afterend`,t):l.appendChild(t)}if(t&&(J||E)){let e=K.current!==null&&K.current!==I,n=E?lr(fr(st,I)):null,i=JSON.stringify({stats:J,period:I,hltv:Mt?.rating,faceit:Y,mapView:E,mapHtml:n?n.innerHTML:null}),a=G.current,o=!a||a!==i||e;if(o&&E&&n)G.current=i,K.current=I,t.style.display=`block`,t.removeAttribute(`data-fext-tiered`),t.removeAttribute(`title`),delete t.dataset.fextPlaceholderKey,t.innerHTML=``,t.appendChild(n);else if(o&&J){G.current=i,K.current=I,t.style.display=`grid`;let e=ve(Y,Mt,jt);e.push(jt&&!Y?{label:`ROUND SWING`,value:``,loading:!0}:{label:_e(Y,`swing`),title:ge(Y,`swing`),value:ye(Y)},{label:`DPR`,value:J.dpr},{label:`KAST`,value:J.kast===`N/A`?`N/A`:`${J.kast}%`},{label:`MULTI-KILL`,value:J.multiKill===`N/A`?`N/A`:`${J.multiKill}%`},{label:`ADR`,value:J.adr},{label:`KPR`,value:J.kpr},{label:`AVG KILLS`,value:J.avgKills},...Q);let n=[];e.forEach(({label:e,value:t,color:r,loading:i,title:a})=>{if(i){n.push({label:e,element:ke(e)});return}let o=Te({label:e,value:t,color:r,title:a},Oe.matchroom);n.push({label:e,element:o})}),t.removeAttribute(`title`),delete t.dataset.fextPlaceholderKey,rn(t,n)}else o&&!J&&(G.current=null,r(t))}else t&&!J&&(G.current=null,r(t))}else if(!b){let t=l.querySelector(`#extended-stats-container-${e}`);t&&t.remove();let n=l.querySelector(`[data-extended-stats-separator]`);if(n){let t=Array.from(l.children).some(t=>t.id!==`extended-stats-container-${e}`&&t.id!==`extra-info-container-${e}`&&!t.hasAttribute(`data-extended-stats-separator`)),r=l.querySelector(`#extra-info-container-${e}`);t||r&&r.children.length>0||n.remove()}}}let u=requestAnimationFrame(()=>{U.current&&c()}),f=Re(()=>{U.current&&c()});return()=>{cancelAnimationFrame(u),f()}},[Re,q,P,e,t,n,Mt,b,H,yt,xt,J,I,a,o,x,S,ee,F,at,it,A,j,Fe,je,s,d,p,m,h,v,Ae,G,O,R,z,pt,Vt,ht,rt,M,Je,te,w,X,Z,Q,Y,jt,E,st,It,Ft,me,Dt,nt?.badgeLevel,$e,ot]),(0,N.useEffect)(()=>{tt&&P&&(Et.current=!0)},[tt,P]);let Ht=(0,N.useCallback)(()=>{try{if(!U.current||!P)return;let e=or();if(!e)return;let t=et?.elo??se(P),n=t==null?null:ce(t),r=n==null?null:le(n,!0,i);if(!r)return;let a=M?[...M.teams.faction1.roster,...M.teams.faction2.roster].find(e=>e.id===P.id)?.nickname:void 0,o=new Set([k(P.nickname),a?k(a):``].filter(Boolean)),s=document.getElementById(`extra-info-wrapper-${P.id}`)?.closest(`div[class*="ListContentPlayer__Holder"]`);for(let t of[`div[class*="Nickname__Name"]`,`div[class*="Nickname__Container"]`,`span[class*="Nickname"]`,`h5`,`a > h5`]){let n=s?[s]:D.all(t,e);for(let e of n){if(!e||!s&&!o.has(ze(e)))continue;let t=s||e.closest(`div[class*="ListContentPlayer__Holder"]`);if(t||=e.closest(`div[class*="PopoverStyled"]`)||e.closest(`div[class*="PlayerCard"]`)||e.closest(`div[class*="Holder"]`),!t)continue;let n=D(`[class*="EndSlotContainer"]`,t);if(!n)continue;if(D(`[data-custom-level="${P.id}"]`,n)){sr(n,()=>U.current);return}if(!n.isConnected)continue;let i=new DOMParser().parseFromString(r,`image/svg+xml`);if(D(`parsererror`,i))continue;let a=i.documentElement;if(!a)continue;let c=document.createElement(`div`);c.setAttribute(`data-custom-level`,P.id),c.setAttribute(`data-player-id`,P.id),c.style.display=`inline-flex`,c.style.alignItems=`center`,c.style.marginLeft=`8px`,c.style.flexShrink=`0`,c.style.width=`28px`,c.style.minWidth=`28px`;let l=a.cloneNode(!0);l.setAttribute(`width`,`28`),l.setAttribute(`height`,`28`),l.setAttribute(`style`,`display: block; width: 28px; height: 28px; flex-shrink: 0;`),c.appendChild(l),n.isConnected&&(n.appendChild(c),sr(n,()=>U.current));return}}}catch{}},[P,et,i,M]);return(0,N.useEffect)(()=>{if(!r||!P||!U.current)return;let e=null,t=()=>{e&&clearTimeout(e),e=setTimeout(()=>{U.current&&Ht()},150)};Ht();let n=Re(()=>{U.current&&t()});return()=>{e&&clearTimeout(e),n()}},[r,P,Ie,tt,i,Ht,Re]),(0,N.useEffect)(()=>{if(!b)return;let t=``,n=null,r=()=>{let n=document.getElementById(`extended-stats-container-${e}`),r=n?.closest(`div[class*="ListContentPlayer__Background"]`);if(!n||!r)return;let i=[...n.querySelectorAll(`:scope > div > div:first-child`)].map(e=>e.style.color).filter(e=>e&&!/156,\s*163,\s*175/.test(e)),a=i.filter(Ye).length,o=`${a}|${i.join(`;`)}`;if(o===t)return;t=o;let s=i.length?Xe(a,i,!0):null;s?r.style.setProperty(`--fext-perf-tint`,s):r.style.removeProperty(`--fext-perf-tint`)};r();let i=Re(()=>{n&&clearTimeout(n),n=setTimeout(r,200)});return()=>{n&&clearTimeout(n),i(),(document.getElementById(`extended-stats-container-${e}`)?.closest(`div[class*="ListContentPlayer__Background"]`))?.style.removeProperty(`--fext-perf-tint`)}},[e,b,Re]),null});Pr.displayName=`Player`;var Fr=i({default:()=>zr}),Ir=(0,N.lazy)(()=>r(async()=>{let{MatchroomFactionMapRadar:e}=await import(`./useMatchroomFactionMapRadar-D2bzKHmQ.js`);return{MatchroomFactionMapRadar:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]),import.meta.url).then(({MatchroomFactionMapRadar:e})=>({default:e}))),Lr=(0,N.lazy)(()=>r(async()=>{let{MatchroomRecommendation:e}=await import(`./useMatchroomRecommendation-YgVhuyX2.js`);return{MatchroomRecommendation:e}},__vite__mapDeps([27,1,2,3,8,5,6,7,4,9,10,12,13,14,15,11,16,17,18,28,20,19,21,22,26,29,30]),import.meta.url).then(({MatchroomRecommendation:e})=>({default:e}))),Rr=(0,N.lazy)(()=>r(async()=>{let{Matchroom2dViewerFeature:e}=await import(`./useMatchroom2dViewer-_xjrg47S.js`);return{Matchroom2dViewerFeature:e}},__vite__mapDeps([31,1,7,3,4,8,12,13,14,2,15,11,16,17,18,32,33]),import.meta.url).then(({Matchroom2dViewerFeature:e})=>({default:e}))),zr=(0,N.memo)(()=>{(0,N.useEffect)(()=>{Qe(`matchroom_view`)},[]);let{data:e,isSuccess:t}=Pe(),[n]=f({key:l.EXTENDED_STATS_MATCHROOM,defaultValue:!1}),[r]=f({key:l.MATCH_RECOMMENDATION_MATCHROOM,defaultValue:!0,waitForStorage:!0}),[i,a]=f({key:l.MATCH_RECOMMENDATION_AUTO,defaultValue:!1}),[o,s]=f({key:`extendedStatsPeriod`,defaultValue:`last30matches`}),c=[`day`,`week`,`month`,`quarter`,`year`,`last30matches`].includes(o)?o:`year`;o!==c&&s(c);let{data:u}=g(),d=(0,N.useRef)(null);if(n&&t&&e?.teams&&u?.id!==void 0&&d.current!==e.id){d.current=e.id;let t=[e.teams.faction1.roster,e.teams.faction2.roster];(t.findIndex(e=>e.some(e=>e.id===u?.id))===0?[t[1],t[0]]:t).flat().forEach(e=>{e?.id&&x(e.id).catch(()=>{})})}let{lastLoc:p}=ie(),m=(0,N.useRef)({matchId:null,roster:[]}),h=(0,N.useMemo)(()=>{let n=m.current.matchId===(p??null)?m.current.roster:[];if(!t||!e||!e.teams)return n;let r=[...e.teams.faction1.roster,...e.teams.faction2.roster],i=new Map;r.forEach((e,t)=>{typeof e?.id==`string`&&e.id.trim()&&!i.has(e.id)&&i.set(e.id,{playerId:e.id,rosterIndex:t})});let a=Array.from(i.values());return a.length===0?n:(m.current={matchId:p??null,roster:a},a)},[t,e,p]);at(n,c,s),lt(),ut(),U(),zt(),Ht(),Wt();let _=e?.state===`FINISHED`||e?.status===`FINISHED`;return Z(),It(),(0,$.jsxs)($.Fragment,{children:[n&&(0,$.jsx)(N.Suspense,{fallback:null,children:(0,$.jsx)(Ir,{statsPeriod:c})}),_&&(0,$.jsx)(N.Suspense,{fallback:null,children:(0,$.jsx)(Rr,{})}),r&&(0,$.jsx)(N.Suspense,{fallback:null,children:(0,$.jsx)(Lr,{enabled:r,autoGenerate:i,onToggleAutoGenerate:()=>a(!i)})}),(0,$.jsx)(Dr,{children:h.map(({playerId:e,rosterIndex:t})=>(0,$.jsx)(Pr,{playerId:e,rosterIndex:t},e))})]})});zr.displayName=`MatchRoom`;export{it as a,zr as default,ft as i,rr as n,Qe as o,er as r,Fr as t};