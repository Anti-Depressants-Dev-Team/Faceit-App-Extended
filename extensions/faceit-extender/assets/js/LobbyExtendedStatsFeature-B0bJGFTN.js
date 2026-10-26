import{g as e,y as t}from"./react-dom-yulZmupg.js";import{j as n,l as r}from"./faceit-custom-CDtcfe9W.js";import{E as i,t as a}from"../../src/pages/contentApp/index.js";import{t as o}from"./playerStatsByYearOptions-Bo47EsJi.js";import{a as s,t as c}from"./statsWorkerPool-DdGYHd6I.js";import{a as l,i as u,o as d,r as f,s as p,t as m}from"./faceitStats-DbbgNFzl.js";import{a as h,i as g,l as ee,n as _,o as v,s as y,t as b}from"./useMatchScoreboardSummary-YfGGe9aK.js";import{r as x,t as S}from"./killClutchInsights-B_551Pv9.js";import{t as C}from"./select-B_KhLdGP.js";import{n as w,r as T,t as E}from"./nicknameHelpers-DbBkDI2a.js";import{n as D,r as O,t as k}from"./playerCardGradients-CE571085.js";import{n as A}from"./playerLobby-BfyjQqTk.js";var j=t(e(),1),M=`cubic-bezier(0.22, 1, 0.36, 1)`;function N(e,t,n,{duration:r=450,delay:i=0}={}){if(typeof e.animate==`function`)return e.animate([t,n],{duration:r,delay:i,easing:M,fill:`both`})}function te(e){if(e<=4)return Math.max(1,e);let t=[4,3,5],n=t=>e%t||t;return t.reduce((e,t)=>n(t)/t>n(e)/e?t:e)}var P=(e,t,n,r)=>a().fetchQuery(o(e,t,n)),F=(e,t)=>{let a=A(e=>e.detectedPlayers),o=(0,j.useRef)(t);o.current=t;let s=A(e=>e.setStatsPeriod),D=A(e=>e.setExtendedStatsEnabled),O=A(e=>e.updateDetectedPlayers),k=A(e=>e.initializePlayerStats),M=A(e=>e.setPlayerData),F=A(e=>e.setPlayerStatsByYear),I=A(e=>e.setPlayerExtendedStats),L=A(e=>e.setPlayerWorker),R=A(e=>e.getPlayerStats),z=A(e=>e.cleanupAll),B=(0,j.useRef)(null),V=(0,j.useRef)(new WeakMap),H=(0,j.useRef)(!0),U=(0,j.useRef)(new Set),W=(0,j.useRef)(!1),G=(0,j.useCallback)(async(e,t)=>{try{if(t===`last30matches`){let r=new Date().getFullYear(),i=n(r).map(n=>P(e,`cs2`,n,t)),a=(await Promise.all(i)).filter(e=>e!=null);return a.length===0?(console.warn(`[useLobbyExtendedStats] No stats-by-year data found`),null):{playerStatsByYear:a,startDate:null,endDate:null}}return null}catch(e){return console.error(`[useLobbyExtendedStats] Error fetching match history:`,e),null}},[]);(0,j.useLayoutEffect)(()=>{s(t)},[t,s]),(0,j.useLayoutEffect)(()=>{D(e)},[e,D]);let K=t,q=e,J=(0,j.useCallback)(()=>C.all(`div[class*="PlayerCardWrapper"], div[class*="Party__StyledPlayerCard"], div[class*="PlayerCard"]`).filter(e=>!e.querySelector(`div[class*="AddContainer"]`)),[]),Y=(0,j.useCallback)(e=>{let t=e.querySelector(`span[class*="Nickname"], div[class*="Nickname"], span[class*="styles__Nickname"]`);if(!t)return null;let n=w(t);if(!n)return null;let r=e.querySelector(`svg[data-player-id]`);if(!r){let t=e.querySelectorAll(`svg`);for(let e of Array.from(t))if(e.hasAttribute(`data-player-id`)){r=e;break}}let i=r?.getAttribute(`data-player-id`)||null;return i||(i=e.getAttribute(`data-player-id`),i||=e.querySelector(`[data-player-id]`)?.getAttribute(`data-player-id`)||null),{playerId:i,nickname:n}},[]),ne=(0,j.useCallback)(async e=>{try{return(await r(e))?.id||null}catch(e){return console.error(`[useLobbyExtendedStats] Error resolving player ID:`,e),null}},[]),X=(0,j.useCallback)(async e=>{if(q&&H.current&&e()&&!W.current){W.current=!0;try{let t=J(),n=[];for(let r of t){if(!e())return;try{let t=Y(r);if(!t)continue;let i=t.playerId;if(!i||i.startsWith(`nickname:`)){let n=i?.replace(`nickname:`,``)||t.nickname,r=await ne(n);if(!e())return;if(r)i=r;else{console.warn(`[useLobbyExtendedStats] Could not resolve player ID for:`,n);continue}}if(n.find(e=>e.playerId===i))continue;n.push({playerId:i,nickname:t.nickname,element:r})}catch(e){console.error(`[useLobbyExtendedStats] Error processing player card:`,e)}}if(!e())return;let r=new Set(n.map(e=>e.playerId));document.querySelectorAll(`[id^="lobby-stats-"]`).forEach(e=>{let t=e.id.replace(`lobby-stats-`,``);(e.closest(`div[class*="PlayerCard"]`)?.querySelector(`div[class*="AddContainer"]`)||!r.has(t))&&e.remove()}),O(n)}finally{W.current=!1}}},[q,J,Y,ne,O]);(0,j.useEffect)(()=>{if(H.current=!0,!q){z(),document.querySelectorAll(`[id^="lobby-stats-"]`).forEach(e=>e.remove()),U.current=new Set;return}let e=!1,t=[],n=()=>!e;(async()=>{if(await X(n),!e)for(let e of[300,600,1e3,1500,2e3,3e3])t.push(setTimeout(()=>{X(n)},e))})();let r=()=>document.querySelector(`div[class*="CardContainer"], div[class*="styles__CardContainer"]`),a=null,o=null,s=new MutationObserver(t=>{if(e||!H.current||!q)return;let r=e=>{if(e.nodeType!==Node.ELEMENT_NODE)return!1;let t=e;return t.matches?.(`div[class*="PlayerCardWrapper"], div[class*="Party__StyledPlayerCard"]`)||t.querySelector?.(`div[class*="PlayerCardWrapper"], div[class*="Party__StyledPlayerCard"]`)||t.matches?.(`div[class*="AddContainer"]`)||t.querySelector?.(`div[class*="AddContainer"]`)};t.some(e=>Array.from(e.addedNodes).some(r)||Array.from(e.removedNodes).some(r))&&(a&&clearTimeout(a),a=setTimeout(()=>{!e&&H.current&&q&&X(n)},300))}),c=r();return c||(c=document.body,o=i(()=>{let e=r();e&&e!==c&&(s.disconnect(),s.observe(e,{childList:!0,subtree:!0}),c=e,o&&=(o(),null))})),s.observe(c,{childList:!0,subtree:!0}),B.current=s,()=>{e=!0,H.current=!1,t.forEach(clearTimeout),a&&clearTimeout(a),B.current&&=(B.current.disconnect(),null),o&&o()}},[q,X,z]);let Z=(0,j.useCallback)((t,n,r=`empty`)=>{if(!H.current||!e)return;let i=document.getElementById(`lobby-stats-${t}`);if(!i){let e=T(n),r=C.all(`span[class*="Nickname"], div[class*="Nickname"]`),a=null;for(let t of r){let n=E(t);if(T(n)===e&&(a=t.closest(`div[class*="PlayerCardWrapper"], div[class*="Party__StyledPlayerCard"], div[class*="PlayerCard"]`),a&&!a.querySelector(`div[class*="AddContainer"]`)))break}if(!a)return;i=document.createElement(`div`),i.id=`lobby-stats-${t}`,i.style.cssText=`
                width: 100%;
                box-sizing: border-box;
                padding: 10px;
                margin-top: 8px;
                border-radius: 6px;
                border-top: 1px solid rgba(229, 231, 235, 0.1);
                background-color: rgba(18, 18, 18, 0.8);
                display: block;
            `,a.appendChild(i)}for(;i.firstChild;)i.removeChild(i.firstChild);let a=document.createElement(`div`);a.style.cssText=`color: #9ca3af; font-size: 11px; padding: 8px 4px; text-align: center;`,a.textContent=r===`empty`?`No data for selected period`:`Stats could not be loaded. Try another period or reload the page.`,i.appendChild(a)},[e]),Q=(0,j.useCallback)(async(t,n,r,i,a=null,o)=>{if(!H.current||!e)return;let s=null;if(i===`day`&&r.day?s=r.day:i===`week`&&r.week?s=r.week:i===`month`&&r.month?s=r.month:i===`quarter`&&r.quarter?s=r.quarter:(i===`year`||i===`last30matches`)&&r.year&&(s=r.year),!s)return;if(p(s)){Z(t,n);return}let c=o?.querySelector(`span[class*="Nickname"], div[class*="Nickname"]`),w=o?.isConnected&&!o.querySelector(`div[class*="AddContainer"]`)&&c&&T(E(c))===T(n)?o:null;if(!w){let e=T(n),t=C.all(`span[class*="Nickname"], div[class*="Nickname"]`);for(let n of t){if(T(E(n))!==e)continue;let t=n.closest(`div[class*="PlayerCardWrapper"], div[class*="Party__StyledPlayerCard"], div[class*="PlayerCard"]`);if(t&&!t.querySelector(`div[class*="AddContainer"]`)){w=t;break}}}if(!w)return;let D=document.getElementById(`lobby-stats-${t}`),O=!D||!w.contains(D);D?w.contains(D)||w.appendChild(D):(D=document.createElement(`div`),D.id=`lobby-stats-${t}`,D.style.cssText=`
                width: 100%;
                box-sizing: border-box;
                padding: 10px;
                margin-top: 8px;
                border-radius: 6px;
                border-top: 1px solid rgba(229, 231, 235, 0.1);
                background-color: rgba(18, 18, 18, 0.8);
                display: block;
            `,w.appendChild(D));let k=(V.current.get(D)||0)+1;V.current.set(D,k);let A={rating:h(i)?g(s):_(t,i)},{multiKillDetail:j,clutchRate:M}=S(a,i);if(!document.getElementById(`faceit-ext-pulse-style`)){let e=document.createElement(`style`);e.id=`faceit-ext-pulse-style`,e.textContent=`@keyframes faceit-ext-pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`,document.head.appendChild(e)}let P=e=>{if(e.loading){let t=document.createElement(`div`);t.style.cssText=`display: flex; flex-direction: column; align-items: center; width: 100%;`;let n=document.createElement(`div`);n.style.cssText=`width: 48px; height: 11px; background: rgba(156,163,175,0.15); border-radius: 4px; margin-bottom: 2px; animation: faceit-ext-pulse 1.5s ease-in-out infinite;`;let r=document.createElement(`div`);r.style.cssText=`width: 100%; height: 3px; background: rgba(156,163,175,0.1); border-radius: 2px; margin-bottom: 1px;`;let i=document.createElement(`div`);i.style.cssText=`width: 36px; height: 7px; background: rgba(156,163,175,0.1); border-radius: 3px; margin-top: 1px;`;let a=document.createElement(`div`);return a.style.cssText=`font-size: 7px; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.3px; margin-top: 1px; line-height: 1.1;`,a.textContent=e.label,t.appendChild(n),t.appendChild(r),t.appendChild(i),t.appendChild(a),t}return ee({label:e.label,value:e.value,color:e.color,title:e.title},{...y.lobby,valueFontSize:`13px`,statusFontSize:`8px`,labelFontSize:`8px`,statusLineHeight:`1.3`,labelLineHeight:`1.3`,labelLetterSpacing:`0`})},F=()=>{let e=[];A.rating===void 0?e.push({label:`FACEIT RATING`,value:``,loading:!0}):A.rating&&e.push({label:u(A.rating),title:l(A.rating),value:A.rating.faceitRating.toFixed(2)});let t=f(s,A.rating);return t?e.push({label:m,value:t.rating.toFixed(2),color:t.color}):A.rating===void 0&&e.push({label:m,value:``,loading:!0}),e.push(A.rating===void 0?{label:`ROUND SWING`,value:``,loading:!0}:{label:u(A.rating,`swing`),title:l(A.rating,`swing`),value:d(A.rating)},{label:`DPR`,value:s.dpr},{label:`KAST`,value:s.kast===`N/A`?`N/A`:`${s.kast}%`},{label:`MULTI-KILL`,value:s.multiKill===`N/A`?`N/A`:`${s.multiKill}%`},{label:`ADR`,value:s.adr},{label:`KPR`,value:s.kpr},{label:`AVG KILLS`,value:s.avgKills}),e.push(...x(j,M)),e},I=document.createDocumentFragment(),L=document.createElement(`div`);L.style.cssText=`display: grid; gap: 10px 8px; width: 100%;`,L.className=`lobby-stats-grid`;let R=e=>{let t=F();e.style.gridTemplateColumns=`repeat(${te(t.length)}, minmax(0, 1fr))`,t.forEach(t=>e.appendChild(P(t)))};R(L),I.appendChild(L),A.rating===void 0&&!h(i)&&b(t,i).then(e=>{A.rating=v(e,s)},()=>{A.rating=v(null,s)}).then(()=>{if(!H.current||V.current.get(D)!==k)return;let e=D.querySelector(`.lobby-stats-grid`);if(e){for(;e.firstChild;)e.removeChild(e.firstChild);R(e)}});let z=document.createElement(`div`);for(z.style.cssText=`
            width: 100%;
            text-align: center;
            margin-top: 8px;
            padding-top: 6px;
            border-top: 1px solid rgba(229, 231, 235, 0.1);
            font-size: 7px;
            color: rgba(156, 163, 175, 0.6);
            letter-spacing: 0.4px;
            text-transform: uppercase;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.2;
        `,z.textContent=`Powered by faceit-extender`,I.appendChild(z);D.firstChild;)D.removeChild(D.firstChild);D.appendChild(I),O&&H.current&&N(D,{opacity:0,transform:`translateY(-10px)`},{opacity:1,transform:`translateY(0)`},{duration:450,delay:180});let B=()=>{H.current&&e&&(D.querySelectorAll(`[data-slider-fill="true"]`).forEach(e=>{if(e instanceof HTMLElement){let t=e.getAttribute(`data-fill-percentage`),n=e.style.width,r=window.getComputedStyle(e).opacity;t&&(!n||!n.includes(`%`))&&e.style.setProperty(`width`,`${t}%`,`important`),r!==`1`&&e.style.setProperty(`opacity`,`1`,`important`)}}),D.querySelectorAll(`[id^="lobby-stats-"] > div > div > div`).forEach(e=>{if(e instanceof HTMLElement&&e.querySelector(`[data-slider-fill="true"]`)){let t=e.style.height;(!t||t===`auto`||!t.includes(`px`))&&e.style.setProperty(`height`,`3px`,`important`)}}))};B(),requestAnimationFrame(()=>{B()})},[e,Z]),$=(0,j.useCallback)((t,n)=>{if(!H.current||!e)return;let r=T(n),i=C.all(`span[class*="Nickname"], div[class*="Nickname"]`),a=null;for(let e of i){let t=E(e);if(T(t)===r&&(a=e.closest(`div[class*="PlayerCardWrapper"], div[class*="Party__StyledPlayerCard"], div[class*="PlayerCard"]`),a&&!a.querySelector(`div[class*="AddContainer"]`)))break}if(!a)return;let o=document.getElementById(`lobby-stats-${t}`);o||(o=document.createElement(`div`),o.id=`lobby-stats-${t}`,o.style.cssText=`
                width: 100%;
                box-sizing: border-box;
                padding: 10px;
                margin-top: 8px;
                border-radius: 6px;
                border-top: 1px solid rgba(229, 231, 235, 0.1);
                background-color: rgba(18, 18, 18, 0.8);
                display: block;
            `,a.appendChild(o)),o.innerHTML=`<div style="color: #9ca3af; font-size: 10px; padding: 4px;">Loading stats...</div>`},[e]);(0,j.useEffect)(()=>{if(!q||a.length===0)return;let e=async e=>{let{playerId:t,nickname:n}=e,r=R(t);if(r?.worker&&r.currentPeriod===K&&r.extendedStats){let i=document.getElementById(`lobby-stats-${t}`),a=e.element.querySelector(`span[class*="Nickname"], div[class*="Nickname"]`),o=a&&T(E(a))===T(n)?a.closest(`div[class*="PlayerCardWrapper"], div[class*="Party__StyledPlayerCard"], div[class*="PlayerCard"]`):null;if(i&&o?.contains(i))return;i&&o?.isConnected&&!o.querySelector(`div[class*="AddContainer"]`)?o.appendChild(i):Q(t,n,r.extendedStats,K,r.statsByYear,o||void 0);return}document.getElementById(`lobby-stats-${t}`)&&$(t,n),k(t);let i=R(t);if(!i){console.warn(`[useLobbyExtendedStats] Failed to initialize player stats for:`,t);return}let a=i.currentPeriod!==K,s=!i.worker||a,l=i.worker,u=()=>H.current&&o.current===K&&R(t)?.worker===l&&A.getState().extendedStatsEnabled;if(s){a&&i.extendedStats&&I(t,null);let e=c(K),r=K;if(e.onmessage=i=>{if(!H.current)return;let a=R(t);if(!a){console.warn(`[useLobbyExtendedStats] No stats entry found for player:`,t);return}if(r===o.current&&a.worker===e){if(i.data.success&&i.data.stats){let e=i.data.stats,o={year:r===`year`||r===`last30matches`?e:null,month:r===`month`?e:null,quarter:r===`quarter`?e:null,week:r===`week`?e:null,day:r===`day`?e:null};I(t,o),Q(t,n,o,r,a.statsByYear)}else console.warn(`[useLobbyExtendedStats] Worker returned error or no stats:`,i.data),I(t,null),Z(t,n)}},e.onerror=r=>{u()&&R(t)?.worker===e&&(console.error(`[useLobbyExtendedStats] Worker error for`,t,`:`,r),I(t,null),Z(t,n))},L(t,e,K),l=e,a&&i.statsByYear){if(K===`last30matches`){let r=await G(t,K);if(!u())return;if(!r){Z(t,n,`error`);return}e&&e.postMessage({playerStatsByYear:r.playerStatsByYear})}else{let t=new Date,n=t.getFullYear().toString(),r=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}`,a=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}-${String(t.getDate()).padStart(2,`0`)}`;e.postMessage({playerStatsByYear:i.statsByYear,currentYear:n,currentMonth:r,currentDay:a})}return}}i.player||M(t,{id:t,nickname:n});let d=R(t);if(d){if(K===`last30matches`)try{let e=await G(d.player.id,K);if(!u())return;e&&d.worker?d.worker.postMessage({playerStatsByYear:e.playerStatsByYear}):(console.warn(`[useLobbyExtendedStats] No date range data returned for:`,d.player.id),Z(t,n,`error`))}catch(e){if(!u())return;Z(t,n,`error`),console.error(`[useLobbyExtendedStats] Error fetching date range data:`,e)}else if(!d.statsByYear&&d.player)try{let e=new Date().getFullYear().toString(),r=await P(d.player.id,`cs2`,e,K);if(!u())return;if(r){F(t,r);let e=R(t);if(e?.worker){let t=new Date,n=t.getFullYear().toString(),i=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}`,a=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}-${String(t.getDate()).padStart(2,`0`)}`;e.worker.postMessage({playerStatsByYear:r,currentYear:n,currentMonth:i,currentDay:a})}}else console.warn(`[useLobbyExtendedStats] No stats returned for:`,d.player.id),Z(t,n)}catch(e){if(!u())return;Z(t,n,`error`),console.error(`[useLobbyExtendedStats] Error fetching stats:`,e)}else if(d.statsByYear&&d.worker){let e=new Date,r=e.getFullYear().toString(),i=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}`,o=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`;a&&$(t,n),d.worker.postMessage({playerStatsByYear:d.statsByYear,currentYear:r,currentMonth:i,currentDay:o})}d.extendedStats&&Q(t,n,d.extendedStats,K,d.statsByYear)}};a.forEach(t=>{e(t).catch(e=>{console.error(`[useLobbyExtendedStats] Error processing player:`,e)})})},[a,q,K,k,R,M,F,I,L,Q,$,Z,G]),(0,j.useEffect)(()=>()=>{document.querySelectorAll(`[id^="lobby-stats-"]`).forEach(e=>e.remove())},[]),(0,j.useEffect)(()=>{if(!q)return;let e=new Set(a.map(e=>e.playerId)),t=U.current;Array.from(t).filter(t=>!e.has(t)).forEach(e=>{let t=document.getElementById(`lobby-stats-${e}`);t&&t.remove()}),U.current=e},[a,q])},I=`faceit-extender-lobby-stats-dropdown`,L=`data-faceit-extender-lobby-stats-wrap`,R=`#2e2e2e`,z=()=>{let e=document.getElementById(I);if(!e)return;let t=e.closest(`[${L}="true"]`);t?t.remove():e.remove()},B=(e,t,n)=>{let r=A(e=>e.setStatsPeriod);(0,j.useEffect)(()=>{if(!e){z();return}let a=()=>document.querySelector(`div[class*="PartyControl__PartyControlContent"], div[class*="PartyControlContainer"]`),o=()=>{let e=a();if(!e)return!1;let i=document.getElementById(I);if(i&&i.parentNode){let e=i.querySelector(`#faceit-extender-lobby-stats-select`);return e&&(e.value=t,e.style.borderColor=R),!0}let o=e.querySelector(`div[class*="PublishPartySwitchBase__Container"]`),c=`transparent`,l=`8px`,u=`8px 0`;if(o){let e=window.getComputedStyle(o);c=e.backgroundColor||c,l=e.borderRadius||l,u=e.padding||u}let d=document.createElement(`div`);d.id=I,d.style.cssText=`
                display: flex;
                align-items: center;
                background-color: ${c};
                border-radius: ${l};
                padding: ${u};
                gap: 8px;
            `;let f=document.createElement(`label`);f.setAttribute(`for`,`faceit-extender-lobby-stats-select`),f.textContent=`Stats Period`,f.style.cssText=`
                color: rgba(255,255,255,0.6);
                font-size: 12px;
                font-weight: 400;
                font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                user-select: none;
                cursor: pointer;
                margin: 0;
                line-height: 1.5;
            `;let p=document.createElement(`select`);if(p.id=`faceit-extender-lobby-stats-select`,p.style.cssText=`
                background-color: #181818;
                color: #e5e7eb;
                border: 1px solid ${R};
                border-radius: 6px;
                padding: 5px 28px 5px 10px;
                font-size: 12px;
                font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
                cursor: pointer;
                outline: none;
                transition: background-color 0.2s ease, border-color 0.2s ease;
                min-width: 100px;
                appearance: none;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23e5e7eb' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
                background-repeat: no-repeat;
                background-position: right 10px center;
                background-size: 12px;
            `,p.addEventListener(`mouseenter`,()=>{p.style.backgroundColor=`#242424`}),p.addEventListener(`mouseleave`,()=>{p.style.backgroundColor=`#181818`}),p.addEventListener(`focus`,()=>{p.style.backgroundColor=`#242424`,p.style.boxShadow=`0 0 0 2px #ff5500`}),p.addEventListener(`blur`,()=>{p.style.backgroundColor=`#181818`,p.style.boxShadow=`none`}),s.forEach(({value:e,label:t})=>{let n=document.createElement(`option`);n.value=e,n.textContent=t,p.appendChild(n)}),p.value=t,p.addEventListener(`change`,e=>{let t=e.target.value;n(t),r(t)}),d.appendChild(f),d.appendChild(p),o&&o.parentElement)o.nextSibling?o.parentElement.insertBefore(d,o.nextSibling):o.parentElement.appendChild(d);else{let t=e.querySelector(`[${L}="true"]`)??document.createElement(`div`);t.setAttribute(L,`true`),t.style.cssText=`width: 100%; display: flex; justify-content: flex-end; flex-wrap: wrap; box-sizing: border-box;`,t.appendChild(d),t.isConnected||e.appendChild(t)}return!0};return o(),i(()=>{document.getElementById(I)||o()})},[e,t,n,r]),(0,j.useEffect)(()=>z,[]),(0,j.useEffect)(()=>{r(t)},[t,r])},V=`data-faceit-extender-party-row-sync`,H=`faceit-extender-player-card-animations`;function U(e){let t=e=>{e.hasAttribute(V)&&(e.removeAttribute(V),e.style.removeProperty(`min-height`))},n=e=>e.querySelector(`[id^="lobby-stats-"]`)!==null,r=e.filter(n),i=r.length?Math.max(...r.map(e=>e.getBoundingClientRect().height)):0;if(r.length===0||i<80){e.forEach(t);return}let a=`${Math.ceil(i)}px`;e.forEach(e=>{if(n(e)){t(e);return}(e.style.getPropertyValue(`min-height`)!==a||e.style.getPropertyPriority(`min-height`)!==`important`)&&e.style.setProperty(`min-height`,a,`important`),e.hasAttribute(V)||e.setAttribute(V,`1`)})}var W=(e,t=!1)=>{let n=(0,j.useRef)(!0);(0,j.useEffect)(()=>{n.current=!0;let e=()=>{let e=document.getElementById(H);e&&e.remove()},r=()=>{C.all(`[${V}="1"]`).forEach(e=>{e instanceof HTMLElement&&(e.style.removeProperty(`min-height`),e.removeAttribute(V))})},i=e=>{e.querySelectorAll(`[data-faceit-extender-bottom-fixed="1"]`).forEach(e=>{e.style.setProperty(`bottom`,e.dataset.faceitExtenderOrigBottom||``),delete e.dataset.faceitExtenderBottomFixed,delete e.dataset.faceitExtenderOrigBottom})},a=()=>{[`[data-testid="Invite players"]`,`[data-testid="Create party"]`,`[class*="StyledPlayerCard"]`,`[class*="PlayerCardWrapper"]`,`[class*="Party__StyledPlayerCard"]`].forEach(e=>{C.all(e).forEach(e=>{e instanceof HTMLElement&&(e.style.background?.includes(`linear-gradient`)&&e.style.removeProperty(`background`),e.style.backgroundImage?.includes(`linear-gradient`)&&e.style.removeProperty(`background-image`),i(e))})})};if(!t){e(),a(),r();return}let o=()=>{if(document.getElementById(H))return;let e=document.createElement(`style`);e.id=H,e.textContent=`
                /* ── Card container layout ─────────────────────────────────── */
                [class*="CardContainer"],
                [class*="styles__CardContainer"],
                div[class*="Container"]:has([class*="PlayerCardWrapper"]) {
                    display: flex !important;
                    gap: 16px !important;
                    padding: 12px 16px !important;
                    flex-wrap: nowrap !important;
                    align-items: flex-start !important;
                    justify-content: center !important;
                }

                /* When our stats panel grows the occupied card, the empty add-tiles would
                   otherwise top-align (base rule sets flex-start), leaving their "+" pinned
                   to the top. Stretch each empty slot to the row height and centre its whole
                   add-control block — WITHOUT rewriting FACEIT's internal add-card layout,
                   which is what pushed the "+" off-centre horizontally. Keyed on the injected
                   stats panel so it works on both lobby screens ("Create party" + "Invite
                   players" slots). */
                [class*="CardContainer"]:has([id^="lobby-stats-"]) {
                    align-items: stretch !important;
                }

                /* Top-align the empty add-tiles with the (taller) stats card and Find Parties
                   tile so every slot shares the same top edge — the stats card just grows
                   downward. flex-direction is pinned to column (FACEIT's own default) so the
                   axis meanings below are stable: justify-content = vertical, align-items =
                   horizontal. */
                [class*="CardContainer"]:has([id^="lobby-stats-"]) > [class*="PlayerCardWrapper"]:not(:has([id^="lobby-stats-"])) {
                    display: flex !important;
                    flex-direction: column !important;
                    align-items: center !important;
                    justify-content: flex-start !important;
                    align-self: stretch !important;
                }

                /* Centre the add-control ("+") both within its slot (margin auto, in case an
                   ancestor left-aligns it) and within its own box (the 62px "+" otherwise
                   flex-start's inside the wider tile). Covers both add-tile variants. */
                [class*="CardContainer"]:has([id^="lobby-stats-"]) > [class*="PlayerCardWrapper"]:not(:has([id^="lobby-stats-"])) [data-testid="Create party"],
                [class*="CardContainer"]:has([id^="lobby-stats-"]) > [class*="PlayerCardWrapper"]:not(:has([id^="lobby-stats-"])) [data-testid="Invite players"] {
                    align-items: center !important;
                    justify-content: center !important;
                    margin-left: auto !important;
                    margin-right: auto !important;
                }

                /* ── PlayerCardWrapper slot ────────────────────────────────── */
                [class*="PlayerCardWrapper"],
                [class*="Party__StyledPlayerCard"] {
                    margin: 0 !important;
                    flex-shrink: 0 !important;
                }

                /* ── Card header (warning icon, crown, kick): match the card's width and its
                   8px left margin. Only the header container itself - a broader
                   [class*="StyledHeader"] match also stretched the header's children to
                   280px and pushed the kick button over the next card. ── */
                [class*="PlayerCardWrapper"] [class*="Header__Container"] {
                    width: 280px !important;
                    left: 8px !important;
                    right: auto !important;
                }

                /* ── Inner player card: allow growth beyond FACEIT's fixed height ──
                   Empty "+" invite slots are ALSO [data-playercard] (data-testid="Create party"),
                   so we scope to cards that contain our injected stats — i.e. real occupied
                   player cards — which also covers the solo ("Create party") player card. */
                [data-testid="Invite players"]:has([id^="lobby-stats-"]),
                [data-playercard="true"]:has([id^="lobby-stats-"]),
                [class*="StyledPlayerCard"]:has([id^="lobby-stats-"]) {
                    height: auto !important;
                    width: auto !important;
                    min-width: 280px !important;
                    max-width: 320px !important;
                    max-height: none !important;
                    overflow: visible !important;
                    box-sizing: border-box !important;
                    margin: 0 8px 16px 8px !important;
                    flex-shrink: 0 !important;
                }

                /* Nested elements: lift max-height cap, but never touch img or avatars */
                [data-testid="Invite players"] *:not(img):not([class*="Avatar"]):not([class*="avatar"]):not([class*="AvatarHolder"]),
                [data-playercard="true"]:has([id^="lobby-stats-"]) *:not(img):not([class*="Avatar"]):not([class*="avatar"]):not([class*="AvatarHolder"]),
                [class*="StyledPlayerCard"] *:not(img):not([class*="Avatar"]):not([class*="avatar"]):not([class*="AvatarHolder"]) {
                    max-height: none !important;
                }

                /* ── Avatar: preserve circular clip (but not if holding a badge) ── */
                [data-testid="Invite players"] [class*="Avatar"]:not([class*="SlotTopEnd"]):not([class*="Slot"]):not(:has([class*="SlotTopEnd"])),
                [data-testid="Invite players"] [class*="avatar"]:not([class*="SlotTopEnd"]):not([class*="Slot"]):not(:has([class*="SlotTopEnd"])),
                [data-testid="Invite players"] img[aria-label="avatar"],
                [data-testid="Invite players"] [class*="AvatarHolder"]:not([class*="SlotTopEnd"]):not([class*="Slot"]):not(:has([class*="SlotTopEnd"])),
                [class*="StyledPlayerCard"] [class*="Avatar"]:not([class*="SlotTopEnd"]):not([class*="Slot"]):not(:has([class*="SlotTopEnd"])),
                [class*="StyledPlayerCard"] [class*="avatar"]:not([class*="SlotTopEnd"]):not([class*="Slot"]):not(:has([class*="SlotTopEnd"])),
                [class*="StyledPlayerCard"] img[aria-label="avatar"],
                [class*="StyledPlayerCard"] [class*="AvatarHolder"]:not([class*="SlotTopEnd"]):not([class*="Slot"]):not(:has([class*="SlotTopEnd"])) {
                    overflow: hidden !important;
                    border-radius: 50% !important;
                }

                /* Avatar containers that hold a badge must allow overflow */
                [data-testid="Invite players"] [class*="Avatar"]:has([class*="SlotTopEnd"]),
                [data-testid="Invite players"] [class*="AvatarHolder"]:has([class*="SlotTopEnd"]),
                [data-testid="Invite players"] div:has(> [class*="SlotTopEnd"]),
                [class*="StyledPlayerCard"] [class*="Avatar"]:has([class*="SlotTopEnd"]),
                [class*="StyledPlayerCard"] [class*="AvatarHolder"]:has([class*="SlotTopEnd"]),
                [class*="StyledPlayerCard"] div:has(> [class*="SlotTopEnd"]) {
                    overflow: visible !important;
                }

                /* ── Badge / SlotTopEnd visibility ─────────────────────────── */
                [data-testid="Invite players"] [class*="SlotTopEnd"],
                [data-testid="Invite players"] [class*="Slot"][class*="TopEnd"],
                [class*="StyledPlayerCard"] [class*="SlotTopEnd"],
                [class*="StyledPlayerCard"] [class*="Slot"][class*="TopEnd"] {
                    overflow: visible !important;
                    z-index: 10 !important;
                    visibility: visible !important;
                    display: block !important;
                    opacity: 1 !important;
                }

                [data-testid="Invite players"] [data-testid="membership-badge"],
                [data-testid="Invite players"] [data-testid="membership-badge"] svg,
                [data-testid="Invite players"] [data-testid="membership-badge"] i,
                [class*="StyledPlayerCard"] [data-testid="membership-badge"],
                [class*="StyledPlayerCard"] [data-testid="membership-badge"] svg,
                [class*="StyledPlayerCard"] [data-testid="membership-badge"] i {
                    z-index: 11 !important;
                    overflow: visible !important;
                }

                /* ── Stats container: always visible, always auto-height ─────── */
                [id^="lobby-stats-"] {
                    height: auto !important;
                    max-height: none !important;
                    overflow: visible !important;
                }

                /* ── Slider track ──────────────────────────────────────────── */
                [id^="lobby-stats-"] div[style*="width: 100%"][style*="height: 3px"][style*="position: relative"],
                [id^="lobby-stats-"] div[style*="width: 100%"][style*="position: relative"]:has(div[style*="position: absolute"][style*="top: 0"]) {
                    position: relative !important;
                    width: 100% !important;
                    height: 3px !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                    overflow: visible !important;
                    background-color: rgba(156, 163, 175, 0.2) !important;
                    border-radius: 2px !important;
                }

                /* ── Slider fill — do NOT override width (it's a percentage) ── */
                [id^="lobby-stats-"] div[style*="position: absolute"][style*="top: 0"][style*="left: 0"][style*="height: 100%"] {
                    position: absolute !important;
                    top: 0 !important;
                    left: 0 !important;
                    height: 100% !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                    z-index: 1 !important;
                    border-radius: 2px !important;
                }

                /* ── Slider marker ─────────────────────────────────────────── */
                [id^="lobby-stats-"] div[style*="position: absolute"][style*="background-color: #ffffff"],
                [id^="lobby-stats-"] div[style*="position: absolute"][style*="background-color: rgb(255, 255, 255)"] {
                    position: absolute !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                    z-index: 2 !important;
                }
            `,document.head.appendChild(e)},s=(e,t,n)=>{(e.style.getPropertyValue(t)!==n||e.style.getPropertyPriority(t)!==`important`)&&e.style.setProperty(t,n,`important`)},c=e=>{let t=e.querySelector(`[id^="lobby-stats-"]`);if(!t)return;let n=t.closest(`[data-testid="Invite players"]`);if(!(n instanceof HTMLElement))return;let r=O(n),i=r!==null,{colors:a,goldenCount:o}=D(t),c=k(o,a,i);if(!c)return;let l=n.parentElement;for(;l&&l!==document.body;)l instanceof HTMLElement&&(l.style.background?.includes(`linear-gradient`)&&l.style.removeProperty(`background`),l.style.backgroundImage?.includes(`linear-gradient`)&&l.style.removeProperty(`background-image`)),l=l.parentElement;if(n.style.getPropertyValue(`background`)&&n.style.removeProperty(`background`),r){let e=`url(${JSON.stringify(r)})`;s(n,`background-image`,`${c}, ${e}`),s(n,`background-size`,`cover, cover`),s(n,`background-position`,`center center, center center`),s(n,`background-repeat`,`no-repeat, no-repeat`)}else s(n,`background-image`,c),n.style.getPropertyValue(`background-size`)&&n.style.removeProperty(`background-size`),n.style.getPropertyValue(`background-position`)&&n.style.removeProperty(`background-position`),n.style.getPropertyValue(`background-repeat`)&&n.style.removeProperty(`background-repeat`)},l=()=>{C.all(`[data-testid="Invite players"], [data-testid="Create party"]`).forEach(e=>{e instanceof HTMLElement&&(e.querySelector(`[id^="lobby-stats-"]`)||(e.style.backgroundImage?.includes(`linear-gradient`)&&(e.style.removeProperty(`background-image`),e.style.removeProperty(`background-size`),e.style.removeProperty(`background-position`),e.style.removeProperty(`background-repeat`)),e.style.background?.includes(`linear-gradient`)&&e.style.removeProperty(`background`),i(e)))})},u=e=>{e.querySelectorAll(`[style*="position: absolute"], [style*="position:absolute"]`).forEach(e=>{if(e.closest(`[class*="Avatar"], [class*="avatar"]`))return;let t=e.style;t.position===`absolute`&&t.top!==``&&t.bottom!==``&&e.dataset.faceitExtenderBottomFixed!==`1`&&(e.dataset.faceitExtenderBottomFixed=`1`,e.dataset.faceitExtenderOrigBottom=t.bottom,t.setProperty(`bottom`,`auto`,`important`))})},d=()=>{n.current&&t&&(l(),C.all(`[id^="lobby-stats-"]`).forEach(e=>{if(!(e instanceof HTMLElement)||!e.isConnected)return;let t=e.closest(`[data-testid="Invite players"]`);t instanceof HTMLElement&&(c(t),u(t))}))},f=null,p=()=>{f===null&&(f=requestAnimationFrame(()=>{f=null,d()}))},m=new ResizeObserver(()=>{v()}),h=null,g=()=>{if(!n.current||!t)return;let e=document.querySelector(`[class*="styles__CardContainer"]:has([data-testid="Invite players"])`)||document.querySelector(`[class*="CardContainer"]:has([data-testid="Invite players"])`);if(!e?.isConnected){h=null;return}if(h!==e){if(h)try{m.unobserve(h)}catch{}h=e,m.observe(e)}},ee=()=>{if(!n.current||!t)return;g();let e=document.querySelector(`[class*="styles__CardContainer"]:has([data-testid="Invite players"])`)||document.querySelector(`[class*="CardContainer"]:has([data-testid="Invite players"])`);if(!e?.isConnected)return;let r=Array.from(e.children).filter(e=>e instanceof HTMLElement&&e.matches(`[class*="PlayerCardWrapper"]`));r.length<2||U(r)},_=null,v=()=>{n.current&&t&&_===null&&(_=setTimeout(()=>{_=null,requestAnimationFrame(()=>requestAnimationFrame(ee))},32))},y=()=>{C.all(`[class*="Avatar"], [class*="AvatarHolder"]`).forEach(e=>{e instanceof HTMLElement&&e.style.overflow===`visible`&&!e.querySelector(`[class*="SlotTopEnd"]`)&&e.style.removeProperty(`overflow`)})},b=new WeakSet,x=e=>{if(b.has(e))return;b.add(e);let t=e.querySelector(`[class*="AvatarHolder"], [class*="Avatar__"]`),n=e.querySelector(`[class*="Nickname"]`),r=e.querySelector(`[class*="Elo"], [class*="elo"], [class*="Rating"], [class*="Level"]`);t&&N(t,{opacity:0,transform:`scale(.85)`},{opacity:1,transform:`scale(1)`},{duration:400}),n&&N(n,{opacity:0,transform:`translateY(-6px)`},{opacity:1,transform:`translateY(0)`},{duration:400,delay:80}),r&&N(r,{opacity:0,transform:`translateY(-6px)`},{opacity:1,transform:`translateY(0)`},{duration:400,delay:160})},S=new MutationObserver(e=>{if(!n.current)return;let t=!1;e.forEach(e=>{if(e.type===`attributes`&&e.target instanceof HTMLElement&&e.target.closest(`[id^="lobby-stats-"]`)){t=!0;return}e.addedNodes.forEach(e=>{if(e.nodeType!==Node.ELEMENT_NODE)return;let n=e;n.matches?.(`[data-testid="Invite players"], [class*="StyledPlayerCard"]`)?x(n):n.querySelectorAll(`[data-testid="Invite players"], [class*="StyledPlayerCard"]`).forEach(x),(n.id?.startsWith(`lobby-stats-`)||n.querySelector?.(`[id^="lobby-stats-"]`)||n.matches?.(`[data-testid="Invite players"], [class*="StyledPlayerCard"]`)||n.matches?.(`div[class*="AddContainer"]`)||n.querySelector?.(`div[class*="AddContainer"]`))&&(t=!0)}),e.removedNodes.forEach(e=>{if(e.nodeType!==Node.ELEMENT_NODE)return;let n=e;(n.id?.startsWith(`lobby-stats-`)||n.querySelector?.(`[id^="lobby-stats-"]`))&&(t=!0)})}),t&&(p(),g(),v())});o(),p(),g(),v();let w=setTimeout(()=>{n.current&&t&&p()},600),T=document.querySelector(`main`)??document.body;return S.observe(T,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`style`]}),()=>{n.current=!1,clearTimeout(w),f!==null&&cancelAnimationFrame(f),_!==null&&(clearTimeout(_),_=null),S.disconnect(),m.disconnect(),e(),a(),y(),r()}},[e,t])};function G({statsPeriod:e,setStatsPeriod:t}){return F(!0,e),B(!0,e,t),W(e,!0),(0,j.useEffect)(()=>()=>{A.getState().cleanupAll(),document.querySelectorAll(`[id^="lobby-stats-"]`).forEach(e=>e.remove())},[]),null}export{G as default};