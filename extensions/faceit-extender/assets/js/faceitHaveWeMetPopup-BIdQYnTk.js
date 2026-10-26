import{c as e,g as t,i as n,l as r,n as i,y as a}from"./react-dom-yulZmupg.js";import{a as o,b as s,o as c}from"./icons-Bp7F8Dhp.js";import{a as l,c as u,i as d,n as f,o as p,s as m,t as h}from"./dateUtils-XHJg_cUL.js";import{n as g}from"./usePlayerHistory-Cwqfey5A.js";import{n as _}from"./useMatch-DnD_7kGP.js";import{t as v}from"./faceitHaveWeMetStore-CYiKXXz3.js";import{a as y,i as b,n as x,o as S,r as C}from"./SimpleComponents-B6nNOXic.js";import{t as w}from"./SimpleModal-DxuiwU3a.js";var T=a(t(),1),E=i`
  from { opacity: 0; transform: translateX(100px); }
  to { opacity: 1; transform: translateX(0); }
`,D=n.div`
  opacity: 0;
  animation: ${E} 0.3s ease-out ${e=>e.$delay}s forwards;
`,O=n.div`
  display: flex;
  color: white;
  justify-content: center;
  padding: 1rem;
  flex: 1;
`,k=n.div`
  overflow-y: auto;
  overflow-x: hidden;
  transition: 0.2s all ease-in-out;
  flex: 1;
  min-height: 200px;
  max-height: calc(85vh - 300px);
`,A=n.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  background: #252932;
  margin: 0 auto 1px;
  font-size: 13px;
  width: 100%;
  position: relative;
  cursor: pointer;
  &:hover {
    background: #313642;
  }
  ${({result:e})=>e===`won`&&`
    background: #25322A; /* Slight green tint when won */
    &:hover {
      background: #2E4033; 
    }
  `}
  ${({result:e})=>e===`lost`&&`
    background: #322A2A; /* Slight red tint when lost */
    &:hover {
      background: #403333; 
    }
  `}
`,j=n.div`
  justify-content: center;
  align-content: center;
  align-items: center;
  align-self: center;
  width: 100%;
  display: flex;

  img {
    max-height: 40px;
    margin-left: 2%;
    width: 50px;
  }
`,M=n.div`
  background-color: #1e222a;
  padding: 10px;
  margin-bottom: 1px;
  cursor: pointer;

  strong {
    display: block;
    margin-bottom: 5px;
  }

  div {
    margin-bottom: 3px;
  }
`,N=n(c)`
  margin-right: 5px;
`,P=n(o)`
  margin-right: 5px;
`,F=r(),I=n.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 5000;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 800px;
  padding: 16px;
  margin-top: 8px;
`,L=n.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  margin-bottom: 8px;
`,R=n.button`
  padding: 8px;
  border: 1px solid ${e=>e.isSelected||e.inRange?`var(--fe-accent, #14B8A6)`:`#E5E7EB`};
  border-radius: 4px;
  background-color: ${e=>e.isSelected?`var(--fe-accent, #14B8A6)`:e.inRange?`#E6FFFA`:e.isDisabled?`#F3F4F6`:`transparent`};
  color: ${e=>e.isSelected?`white`:e.isDisabled?`#9CA3AF`:`black`};
  cursor: ${e=>e.isDisabled?`not-allowed`:`pointer`};
  transition: all 0.2s;
  
  &:hover:not(:disabled) {
    background-color: ${e=>e.isSelected?`var(--fe-accent-hover, #0D9488)`:`#E6FFFA`};
  }
  
  &:disabled {
    opacity: 0.5;
  }
`,z=n.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`,B=n.div`
  margin-bottom: 16px;
`;function V(e,t){return(0,T.useMemo)(()=>Array.from({length:t},(t,n)=>{let r=new Date(new Date().getFullYear(),new Date().getMonth()+e+n,1),i=new Date(r.getFullYear(),r.getMonth()+1,0).getDate(),a=[],o=Array(r.getDay()).fill(null);for(let e=1;e<=i;e+=1)o.push({date:new Date(r.getFullYear(),r.getMonth(),e),selectable:!0}),o.length===7&&(a.push(o),o=[]);return o.length&&a.push([...o,...Array(7-o.length).fill(null)]),{month:r.getMonth(),year:r.getFullYear(),weeks:a}}),[e,t])}var H=({onSearchChange:t,onFilterChange:n,onDateRangeChange:r,selectedDateRange:i})=>{let{t:a}=e(),{filterValue:o,setFilterValue:s,winRate:c}=v(),[f,g]=(0,T.useState)(!1),[_,w]=(0,T.useState)(0),E=(0,T.useMemo)(()=>m(u(new Date,10)),[]),D=(0,T.useMemo)(()=>new Date,[]),[O,k]=(0,T.useState)({startDate:i?.startDate||E,endDate:i?.endDate||D}),[M,N]=(0,T.useState)(null),P=(0,T.useCallback)(e=>{let{date:t,selectable:n}=e;if(!n||l(t,E)||d(t,D))return;let i;if(!O.startDate||O.startDate&&O.endDate){i={startDate:t,endDate:null};let e=h(t,31),n=d(e,D)?D:e;N(n)}else if(O.startDate&&!O.endDate){let e=d(t,M)?M:t;i={startDate:O.startDate,endDate:e},g(!1),r(i)}k(i)},[O,E,D,M,r]),H=V(_,2),U=(0,T.useCallback)(()=>H.length===0?null:(0,F.jsxs)(I,{children:[(0,F.jsxs)(z,{children:[(0,F.jsx)(C,{onClick:()=>w(e=>e-1),children:a(`content.haveWeMet.previous`)}),(0,F.jsx)(C,{onClick:()=>w(e=>e+1),children:a(`content.haveWeMet.next`)})]}),(0,F.jsx)(x,{display:`flex`,gap:`16px`,children:H.map(e=>(0,F.jsxs)(B,{children:[(0,F.jsx)(S,{fontWeight:`bold`,style:{textAlign:`center`,display:`block`,marginBottom:`8px`},children:`${e.month+1}/${e.year}`}),(0,F.jsx)(L,{children:[a(`content.day.sun`),a(`content.day.mon`),a(`content.day.tue`),a(`content.day.wed`),a(`content.day.thu`),a(`content.day.fri`),a(`content.day.sat`)].map(e=>(0,F.jsx)(S,{fontWeight:`bold`,style:{textAlign:`center`},children:e},e))}),(0,F.jsx)(L,{children:e.weeks.map((e,t)=>e.map((e,n)=>{if(!e)return(0,F.jsx)(`div`,{style:{visibility:`hidden`}},`empty-${t}-${n}`);let{date:r,selectable:i}=e,a=l(r,E)||d(r,D);O.startDate&&!O.endDate&&M&&d(r,M)&&(a=!0);let o=O.startDate&&p(O.startDate,r)||O.endDate&&p(O.endDate,r),s=O.startDate&&O.endDate&&r>O.startDate&&r<O.endDate;return(0,F.jsx)(R,{isSelected:o,inRange:s,isDisabled:a||!i,onClick:()=>P(e),disabled:a||!i,children:r.getDate()},`${t}-${n}`)}))})]},`${e.month}${e.year}`))})]}),[H,O,E,D,M,P,a]),W=(0,T.useCallback)(e=>{let t=e.target.value;s(t),n(t)},[s,n]),G=(0,T.useCallback)(e=>{t(e.target.value)},[t]),K=(0,T.useCallback)(()=>{g(!f)},[f]),q=(0,T.useMemo)(()=>{if(O.startDate){let e=e=>e.toLocaleDateString(void 0,{day:`numeric`,month:`short`,year:`numeric`});return`${e(O.startDate)} – ${O.endDate?e(O.endDate):`…`}`}return a(`content.haveWeMet.selectRange`)},[O.startDate,O.endDate,a]);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(x,{mb:`16px`,children:(0,F.jsxs)(x,{display:`flex`,alignItems:`center`,gap:`16px`,style:{flexWrap:`wrap`},children:[(0,F.jsxs)(x,{children:[(0,F.jsx)(S,{mb:`8px`,style:{display:`block`},children:a(`content.haveWeMet.search`)}),(0,F.jsx)(b,{placeholder:a(`content.haveWeMet.searchPlaceholder`),onChange:G,style:{width:`250px`}})]}),(0,F.jsxs)(x,{position:`relative`,children:[(0,F.jsx)(S,{mb:`8px`,style:{display:`block`},children:a(`content.haveWeMet.dateRange`)}),(0,F.jsx)(C,{onClick:K,children:q}),f&&(0,F.jsx)(`div`,{style:{position:`absolute`,zIndex:1},children:U()})]}),(0,F.jsxs)(x,{children:[(0,F.jsx)(S,{mb:`8px`,style:{display:`block`},children:a(`content.haveWeMet.filterByTeam`)}),(0,F.jsxs)(y,{value:o,onChange:W,style:{width:`200px`},children:[(0,F.jsx)(`option`,{value:``,children:a(`content.haveWeMet.filterAll`)}),(0,F.jsx)(`option`,{value:`friendly`,children:a(`content.haveWeMet.filterFriendly`)}),(0,F.jsx)(`option`,{value:`enemy`,children:a(`content.haveWeMet.filterEnemy`)})]})]}),(0,F.jsxs)(x,{children:[(0,F.jsx)(S,{mb:`8px`,style:{display:`block`},children:a(`content.haveWeMet.winRateLabel`)}),(0,F.jsx)(S,{style:{display:`block`,fontSize:20,fontWeight:700,lineHeight:`36px`},children:c===``?`–`:`${c}%`})]})]})}),(0,F.jsxs)(A,{children:[(0,F.jsx)(j,{}),(0,F.jsx)(j,{children:a(`content.haveWeMet.col.date`)}),(0,F.jsx)(j,{children:a(`content.haveWeMet.col.teams`)}),(0,F.jsx)(j,{children:a(`content.haveWeMet.col.winner`)}),(0,F.jsx)(j,{children:a(`content.haveWeMet.col.lobbyElo`)}),(0,F.jsx)(j,{children:a(`content.haveWeMet.col.score`)}),(0,F.jsx)(j,{children:a(`content.haveWeMet.col.map`)}),(0,F.jsx)(j,{children:a(`content.haveWeMet.col.duration`)}),(0,F.jsx)(j,{})]})]})};function U(e,t){for(let n of[`faction1`,`faction2`])if((e.details?.teams?.[n]?.roster)?.some(e=>e.id===t||e.playerId===t))return n;return null}function W(e,t,n){let r=U(e,t),i=U(e,n);if(!r||!i)return e;let a=e.details?.summaryResults?.winner;return{...e,status:{opposites:r===i?`friendly`:`enemy`,result:a===`faction1`||a===`faction2`?a===i?`won`:`lost`:``}}}var G=({isOpen:e,onClose:t})=>{let{playerId1:n,playerId2:r,setWinRate:i,setFilterValue:a,filterValue:o}=v(),{mutateAsync:c,isPending:l}=_(),{mutateAsync:d,isPending:p}=g(),[h,y]=(0,T.useState)(!1),[b,S]=(0,T.useState)([]),[E,I]=(0,T.useState)([]),[L,R]=(0,T.useState)(``),z=p||l||h,B=(0,T.useMemo)(()=>m(u(new Date,1)),[]),[V,U]=(0,T.useState)({startDate:B,endDate:new Date,key:`selection`}),[G,K]=(0,T.useState)({}),q=e=>{K(t=>({...t,[e]:!t[e]}))},J=(0,T.useCallback)(async(e,t,n)=>{let r=[],i=n;try{y(!0);let n=!0;for(;n;){let a=await d({playerResourceId:e,fromDate:t,toDate:i,limit:100});a.length===0?n=!1:(r=[...r,...a],i=new Date(a[a.length-1].startedAt),a.length<100&&(n=!1))}return r}catch(e){return console.error(`[HaveWeMet] Error in fetchPlayerHistory`,e),[]}finally{y(!1)}},[d]),Y=(0,T.useCallback)(e=>e.filter(e=>e.playingPlayers.includes(n)&&e.playingPlayers.includes(r)),[n,r]),X=(0,T.useCallback)(async()=>{let{startDate:e,endDate:t}=V,i=new Set;S([]),I([]),y(!0);try{let[a,o]=await Promise.all([J(n,e,t),J(r,e,t)]),s=[...a,...o],l=Y(s).filter(e=>!i.has(e.matchId)&&(i.add(e.matchId),!0)),u=await Promise.all(l.map(async e=>{try{let t=await c({matchResourceId:e.matchId});return{...e,details:t}}catch(t){return console.error(`[HaveWeMet] Error fetching match details for ${e.matchId}`,t),{...e,details:null}}}));S(u.map(e=>W(e,n,r)))}catch(e){console.error(`[HaveWeMet] Error in fetchAllMatches`,e)}finally{y(!1)}},[J,n,r,Y,c,V]);(0,T.useEffect)(()=>{e&&X()},[e,X]);let Z=(0,T.useCallback)((e,t,n)=>{let r=e.filter(e=>{if(!e.details)return!1;let r=e.details?.voting?.map?.pick?.[0]||``,i=e.details?.voting?.map?.entities?.find(e=>e.guid===r)?.name||``,a=e.details.teams?.faction1?.name||`Team 1`,o=e.details.teams?.faction2?.name||`Team 2`,s=`
        ${i}
        ${a}
        ${o}
        ${e.details.summaryResults?.winner===`faction1`?a:o}
        ${e.details.entityCustom?.effectiveRanking||0}
        ${e.details.clientCustom?.server?.country||`Unknown`}
        ${e.finishedAt?`${f(new Date(e.finishedAt),new Date(e.startedAt))} mins`:`Unknown`}
        ${e.details.teams?.faction1?.roster?.map(e=>e.nickname).join(` `).toLowerCase()||``}
        ${e.details.teams?.faction2?.roster?.map(e=>e.nickname).join(` `).toLowerCase()||``}
        ${e.organizer?.id||`Unknown`}
      `.toLowerCase(),c=!t||s.includes(t.toLowerCase()),l=!n||e.status?.opposites===n;return c&&l});I(r)},[]);(0,T.useEffect)(()=>{Z(b,L,o)},[b]);let Q=(0,T.useCallback)(e=>{R(e),Z(b,e,o)},[b,o,Z]),$=(0,T.useCallback)(e=>{a(e),Z(b,L,e)},[Z,b,L,a]),ee=(0,T.useCallback)(e=>{U(e)},[]);(0,T.useEffect)(()=>{let e=E.filter(e=>e.status?.result);if(e.length>0){let t=e.filter(e=>e.status?.result===`won`).length;i((t/e.length*100).toFixed(0))}else i(``)},[E,i]);let te=(0,F.jsx)(O,{children:(0,F.jsxs)(`small`,{children:[E.length,` shared `,E.length===1?`match`:`matches`,` in this date range`]})});return(0,F.jsxs)(w,{isOpen:e,onClose:t,title:`Have we met?`,footer:te,closeOnOverlayClick:!0,closeOnEsc:!0,size:`large`,children:[(0,F.jsx)(x,{flexShrink:`0`,mb:`16px`,children:(0,F.jsx)(H,{onSearchChange:Q,onFilterChange:$,onDateRangeChange:ee,selectedDateRange:V})}),z?(0,F.jsx)(x,{width:`100%`,flex:`1`,display:`flex`,justifyContent:`center`,alignItems:`center`,children:(0,F.jsx)(`span`,{style:{color:`#9ca3af`},children:`Looking through your match history…`})}):(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)(k,{children:[E.length===0&&(0,F.jsxs)(x,{style:{padding:`40px 16px`,textAlign:`center`,color:`#9ca3af`},children:[o===`friendly`?`You haven’t played on the same team in this date range.`:o===`enemy`?`You haven’t played against each other in this date range.`:`You haven’t played together or against each other in this date range.`,(0,F.jsx)(`div`,{style:{marginTop:6,fontSize:12},children:`Try a wider date range.`})]}),E.map((e,t)=>{let{matchId:n,startedAt:r,finishedAt:i,details:a}=e;if(!a)return null;let o=`https://www.faceit.com/en/${e.game===`csgo`?`csgo`:`cs2`}/room/${n}`,c=new Date(r),l=c.toLocaleDateString(void 0,{day:`numeric`,month:`short`,year:`numeric`}),u=c.toLocaleTimeString(void 0,{hour:`2-digit`,minute:`2-digit`}),d=a.voting?.map?.pick?.[0]||``,p=a.voting?.map?.entities?.find(e=>e.guid===d),m=p?.name||``,h=p?.imageLg||``,g=a.entityCustom?.effectiveRanking||0,_=a.clientCustom?.team1Score||0,v=a.clientCustom?.team2Score||0,y=a.teams?.faction1?.name||`Team 1`,b=a.teams?.faction2?.name||`Team 2`,S=(a.summaryResults?.winner||``)===`faction1`?y:b,w=i?`${f(new Date(i),new Date(r))} mins`:`Unknown`,E=e.status?.result||void 0;return(0,F.jsx)(T.Fragment,{children:(0,F.jsxs)(D,{$delay:t*.05,children:[(0,F.jsxs)(A,{onClick:()=>q(n),result:E,children:[(0,F.jsx)(j,{children:G[n]?(0,F.jsx)(P,{}):(0,F.jsx)(N,{})}),(0,F.jsxs)(j,{style:{flexDirection:`column`},children:[(0,F.jsx)(`span`,{children:l}),(0,F.jsx)(`span`,{style:{fontSize:12,color:`#9ca3af`,marginTop:2},children:u})]}),(0,F.jsxs)(j,{children:[y,` vs `,b]}),(0,F.jsx)(j,{children:S}),(0,F.jsx)(j,{children:Math.round(g)}),(0,F.jsxs)(j,{children:[_,` - `,v]}),(0,F.jsx)(j,{children:(0,F.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:8},children:[h&&(0,F.jsx)(`img`,{src:h,alt:``,style:{width:`44px`,borderRadius:4}}),m]})}),(0,F.jsx)(j,{children:w}),(0,F.jsx)(j,{children:(0,F.jsx)(C,{variant:`secondary`,size:`sm`,"aria-label":`Open match room`,title:`Open match room`,onClick:e=>{e.stopPropagation(),window.open(o,`_blank`,`noopener`)},children:(0,F.jsx)(s,{})})})]}),G[n]&&(0,F.jsx)(M,{onClick:()=>window.open(o,`_blank`),children:(0,F.jsxs)(x,{display:`flex`,gap:`16px`,children:[(0,F.jsxs)(x,{flex:`1`,children:[(0,F.jsxs)(`strong`,{children:[`Players in `,y,`:`]}),a.teams?.faction1?.roster?.map(e=>(0,F.jsxs)(`div`,{children:[e.nickname,` - Elo: `,e.elo]},e.id))||(0,F.jsx)(`div`,{children:`No players data available`})]}),(0,F.jsxs)(x,{flex:`1`,children:[(0,F.jsxs)(`strong`,{children:[`Players in `,b,`:`]}),a.teams?.faction2?.roster?.map(e=>(0,F.jsxs)(`div`,{children:[e.nickname,` - Elo: `,e.elo]},e.id))||(0,F.jsx)(`div`,{children:`No players data available`})]})]})})]})},n)})]})})]})};export{G as default};