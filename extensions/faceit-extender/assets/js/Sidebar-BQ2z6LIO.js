const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Appearance-B0JAUU4Q.js","./react-dom-yulZmupg.js","./createFaceitExtenderQueryClient-CbFICmfN.js","./colorSchemePresets-CCbMdOHo.js","./extensionAssetUrl-oIreGExj.js","./common-eZmEv_qc.js","./icons-Bp7F8Dhp.js","./Automation-87Pou0ZY.js","./mapIcons-7zl6uhGN.js","./cs2Maps-BAmWhL9o.js","./inputKeys-C_yW6TVd.js","./useMapIcons-DlCGUNNo.js","./Matchroom-ejk6Urpy.js","./PlayerProfile-B8Yji0gD.js","./PlayerLobby-tjZ9KieW.js","./PlayerTracking-kmXAUxck.js","./playerTrackingStorage-G0t8rMga.js","./dateUtils-XHJg_cUL.js","./FaceHound-CzFGgRl5.js","./TradeItMinigames-DESl8e42.js","./PreRelease-iNzoLuvk.js","./crossContextStore-BkQHDV6z.js","./Supporter-DcayzrB7.js","./useSupporterEntitlement-Ctc6eUIu.js","./supporterEntitlementCache-BTFw3mTg.js","./config-BtyybfZj.js","./extensionApi-Cg9BTNq2.js","./useAiAuthToken-CRzh2KOB.js","./Analyse-D_rBc2jL.js","./analysisTasksStore-B248DbLt.js"])))=>i.map(i=>d[i]);
import{c as e,f as t,g as n,i as r,l as i,m as a,n as o,r as s,u as c,y as l}from"./react-dom-yulZmupg.js";import{H as u,U as d,V as f,et as ee,g as p,i as m,l as te,m as ne,n as h,o as re,r as ie,s as ae,u as oe}from"./createFaceitExtenderQueryClient-CbFICmfN.js";import{t as g}from"./extensionAssetUrl-oIreGExj.js";import{r as se,t as ce}from"./ChangelogToast-Bppp0d4h.js";import{r as _}from"./common-eZmEv_qc.js";import{a as le,p as v,s as y,t as b,y as x}from"./icons-Bp7F8Dhp.js";import{t as S}from"./extensionApi-Cg9BTNq2.js";var C=l(n(),1),w=i(),T=r.div`
  background-color: ${e=>e.bg===`gray.800`?`#1F2937`:e.bg===`gray.700`?`#374151`:e.bg===`gray.600`?`#4B5563`:e.bg||`#1F2937`};
  padding: ${e=>e.p===void 0?`16px`:`${e.p*4}px`};
  border-radius: ${e=>e.borderRadius===`md`?`6px`:e.borderRadius===`full`?`9999px`:e.borderRadius||`6px`};
  margin-bottom: ${e=>e.mb===void 0?`0`:`${e.mb*4}px`};
  margin-top: ${e=>e.mt===void 0?`0`:`${e.mt*4}px`};
  border: ${e=>{if(e.border){let t=e.borderColor===`gray.600`?`#4B5563`:e.borderColor===`blue.500`?`#3B82F6`:e.borderColor===`blue.400`?`#60A5FA`:e.borderColor||`#4B5563`;return`${e.border} solid ${t}`}return`none`}};
  width: ${e=>e.width||`auto`};
  text-align: ${e=>e.as===`button`?`left`:`inherit`};
  cursor: ${e=>e.as===`button`?`pointer`:`inherit`};
  
  ${e=>e.as===`button`&&`
    &:hover {
      background-color: #374151;
      border-color: ${e.borderColor===`blue.500`?`#60A5FA`:`#6B7280`};
    }
  `}
`,E=r.div`
  font-size: ${e=>e.fontSize===`xs`?`12px`:e.fontSize===`sm`?`14px`:e.fontSize===`md`?`16px`:e.fontSize===`lg`?`18px`:e.fontSize||`14px`};
  color: ${e=>e.color===`gray.400`||e.color===`gray.500`?`#9CA3AF`:e.color===`gray.300`?`#D1D5DB`:e.color===`white`?`#FFFFFF`:e.color||`#E2E8F0`};
  font-weight: ${e=>e.fontWeight===`semibold`?`600`:e.fontWeight===`bold`?`700`:e.fontWeight||`400`};
  margin-bottom: ${e=>e.mb===void 0?`0`:`${e.mb*4}px`};
  margin-top: ${e=>e.mt===void 0?`0`:`${e.mt*4}px`};
  line-height: ${e=>e.lineHeight||`1.5`};
  font-style: ${e=>e.fontStyle||`normal`};
  cursor: ${e=>e.cursor||`inherit`};
  text-decoration: ${e=>e.textDecoration||`none`};
`,D=r.div`
  display: flex;
  gap: ${e=>e.spacing===void 0?`0`:`${e.spacing*4}px`};
  justify-content: ${e=>e.justify===`space-between`?`space-between`:e.justify===`center`?`center`:e.justify===`flex-end`?`flex-end`:`flex-start`};
  align-items: ${e=>e.align===`center`?`center`:e.align===`end`?`flex-end`:`flex-start`};
  width: ${e=>e.width||`auto`};
  margin-bottom: ${e=>e.mb===void 0?`0`:`${e.mb*4}px`};
`,O=r.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.spacing===void 0?`0`:`${e.spacing*4}px`};
  align-items: ${e=>e.align===`start`?`flex-start`:e.align===`center`?`center`:e.align===`end`?`flex-end`:`flex-start`};
  width: ${e=>e.w||`auto`};
  margin-bottom: ${e=>e.mb===void 0?`0`:`${e.mb*4}px`};
`,ue=O,k=r.a`
  color: ${e=>e.color===`blue.400`?`#60A5FA`:e.color===`blue.300`?`#93C5FD`:e.color||`#60A5FA`};
  font-size: ${e=>e.fontSize===`xs`?`12px`:e.fontSize===`sm`?`14px`:e.fontSize||`14px`};
  text-decoration: none;

  &:hover {
    color: ${e=>e.color===`blue.400`?`#93C5FD`:e.color===`blue.300`?`#DBEAFE`:`#93C5FD`};
    text-decoration: underline;
  }
`,A=r.button`
  background: none;
  border: none;
  color: #9CA3AF;
  cursor: pointer;
  padding: ${e=>e.size===`sm`?`4px`:`8px`};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: white;
    background-color: #374151;
  }
  
  &:focus {
    outline: none;
  }
`;r.hr`
  border: none;
  border-top: 1px solid ${e=>e.borderColor===`gray.700`?`#374151`:e.borderColor||`#374151`};
  margin: ${e=>e.my===void 0?`0`:`${e.my*4}px 0`};
`;var j=r.div`
  margin-bottom: ${e=>e.mb===void 0?`0`:`${e.mb*4}px`};
`,M=r.div`
  display: grid;
  grid-template-columns: repeat(${e=>e.columns||1}, 1fr);
  gap: ${e=>e.spacing===void 0?`0`:`${e.spacing*4}px`};
  margin-bottom: ${e=>e.mb===void 0?`0`:`${e.mb*4}px`};
`;r.div`
  margin-bottom: ${e=>e.mb===void 0?`0`:`${e.mb*4}px`};
`;var N=r.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #E2E8F0;
  margin-bottom: ${e=>e.mb===void 0?`8px`:`${e.mb*4}px`};
`,P=r.input`
  width: 100%;
  padding: ${e=>e.size===`sm`?`6px 12px`:`8px 16px`};
  font-size: ${e=>e.size===`sm`?`14px`:`16px`};
  border: 1px solid ${e=>e.borderColor===`gray.600`?`#4B5563`:e.borderColor||`#4B5563`};
  border-radius: 4px;
  background-color: ${e=>e.bg===`gray.700`?`#374151`:e.bg===`gray.800`?`#1F2937`:e.bg||`#374151`};
  color: ${e=>e.color||`white`};
  transition: all 0.2s;
  
  &:focus {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 1px #3B82F6;
  }
  
  &::placeholder {
    color: #9CA3AF;
  }
`,F=r.div`
  position: relative;
  width: 100%;
  padding: ${e=>e.$hasMarks?`28px 0 16px`:`16px 0`};
`,I=r.div`
  position: relative;
  width: 100%;
  height: 6px;
  background-color: #374151;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
`,L=r.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${e=>e.percentage}%;
  background-color: #3B82F6;
  border-radius: 3px;
  transition: width 0.2s;
`,R=r.div`
  position: absolute;
  left: ${e=>e.left}%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  background-color: #3B82F6;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
  z-index: 2;
  pointer-events: auto;
  user-select: none;
  
  &:hover {
    background-color: #2563EB;
    transform: translate(-50%, -50%) scale(1.1);
  }
  
  &:active {
    transform: translate(-50%, -50%) scale(0.95);
  }
`,z=r.div`
  position: absolute;
  left: ${e=>e.left}%;
  top: 6px;
  transform: ${e=>e.$align===`start`?`translateX(0)`:e.$align===`end`?`translateX(-100%)`:`translateX(-50%)`};
  font-size: 12px;
  color: #9CA3AF;
  white-space: nowrap;
`,B=({value:e,min:t=0,max:n=100,step:r=1,onChange:i,marks:a=[]})=>{let o=(e-t)/(n-t)*100,s=o;return(0,w.jsxs)(F,{$hasMarks:a.length>0,children:[(0,w.jsxs)(I,{"data-slider-track":!0,onClick:e=>{if(e.target.closest(`[data-slider-thumb]`))return;let a=e.currentTarget.getBoundingClientRect(),o=e.clientX-a.left,s=Math.max(0,Math.min(100,o/a.width*100)),c=Math.round(s/100*(n-t)+t),l=Math.round(c/r)*r;i(Math.max(t,Math.min(n,l)))},children:[(0,w.jsx)(L,{percentage:o}),(0,w.jsx)(R,{"data-slider-thumb":!0,left:s,onMouseDown:e=>{e.preventDefault(),e.stopPropagation();let a=e.currentTarget.closest(`[data-slider-track]`)||e.currentTarget.parentElement?.querySelector(`[data-slider-track]`);if(!a)return;let o=e=>{e.preventDefault();let o=a.getBoundingClientRect(),s=e.clientX-o.left,c=Math.max(0,Math.min(100,s/o.width*100)),l=Math.round(c/100*(n-t)+t),u=Math.round(l/r)*r;i(Math.max(t,Math.min(n,u)))},s=()=>{document.removeEventListener(`mousemove`,o),document.removeEventListener(`mouseup`,s)};document.addEventListener(`mousemove`,o),document.addEventListener(`mouseup`,s),o(e.nativeEvent)}})]}),a.length>0&&(0,w.jsx)(w.Fragment,{children:a.map((e,r)=>{let i=n===t?0:(e.value-t)/(n-t),a=i*100,o=`center`;return i<=0?o=`start`:i>=1&&(o=`end`),(0,w.jsx)(z,{left:a,$align:o,children:e.label},r)})})]})},V=r.div`
  display: inline-block;
  width: ${e=>e.size===`sm`?`16px`:`24px`};
  height: ${e=>e.size===`sm`?`16px`:`24px`};
  border: 2px solid ${e=>e.color===`gray.400`?`#9CA3AF`:e.color||`#9CA3AF`};
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,H=r.span`
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: ${e=>e.fontSize===`xs`?`12px`:`14px`};
  font-weight: 500;
  background-color: ${e=>e.colorScheme===`green`?`#10B981`:e.colorScheme===`blue`?`#3B82F6`:e.colorScheme===`red`?`#EF4444`:e.colorScheme===`gray`?`#4A5568`:`#3B82F6`};
  color: white;
`,U=r.textarea`
  width: 100%;
  padding: ${e=>e.size===`sm`?`6px 12px`:`8px 16px`};
  font-size: ${e=>e.size===`sm`?`14px`:`16px`};
  border: 1px solid ${e=>e.borderColor===`gray.600`?`#4B5563`:e.borderColor||`#4B5563`};
  border-radius: 4px;
  background-color: ${e=>e.bg===`gray.700`?`#374151`:e.bg===`gray.800`?`#1F2937`:e.bg||`#374151`};
  color: ${e=>e.color||`white`};
  font-family: inherit;
  resize: vertical;
  transition: all 0.2s;
  
  &:focus {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 1px #3B82F6;
  }
  
  &::placeholder {
    color: #9CA3AF;
  }
`,W=r.select`
  width: 100%;
  padding: ${e=>e.size===`sm`?`6px 12px`:`8px 16px`};
  font-size: ${e=>e.size===`sm`?`14px`:`16px`};
  border: 1px solid ${e=>e.borderColor===`gray.600`?`#4B5563`:e.borderColor||`#4B5563`};
  border-radius: 4px;
  background-color: ${e=>e.bg===`gray.700`?`#374151`:e.bg===`gray.800`?`#1F2937`:e.bg||`#374151`};
  color: ${e=>e.color||`white`};
  cursor: pointer;
  transition: all 0.2s;
  
  &:focus {
    outline: none;
    border-color: #3B82F6;
    box-shadow: 0 0 0 1px #3B82F6;
  }
  
  option {
    background-color: #374151;
    color: white;
  }
`,G=({isOpen:e})=>e?(0,w.jsx)(y,{}):(0,w.jsx)(le,{}),de=`https://faceit-extender.com/support`,fe=r.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px 16px;
  margin-top: 12px;
  background: #ffc439;
  color: #003087;
  font-weight: 700;
  font-size: 14px;
  border-radius: 6px;
  text-decoration: none;
  transition: filter 0.15s ease, transform 0.15s ease;
  border: none;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    filter: brightness(1.05);
  }

  &:active {
    transform: scale(0.99);
  }
`,pe=r.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background-color: #1F2937;
  border: 1px solid #374151;
  border-radius: 8px;
  transition: border-color 0.15s;

  &:hover {
    border-color: #4B5563;
  }
`,me=r.div`
  flex: 1;
  min-width: 0;
`,he=r.div`
  font-size: 13px;
  font-weight: 600;
  color: white;
  margin-bottom: 2px;
`,ge=r.div`
  font-size: 11px;
  color: #9CA3AF;
  line-height: 1.4;
  margin-bottom: 6px;
`,_e=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`,ve=r.span`
  font-size: 10px;
  font-weight: 500;
  padding: 2px 6px;
  border-radius: 4px;
  background-color: ${e=>e.variant===`on`?`rgba(34,197,94,0.15)`:e.variant===`off`?`rgba(107,114,128,0.2)`:`rgba(59,130,246,0.15)`};
  color: ${e=>e.variant===`on`?`#86efac`:e.variant===`off`?`#6B7280`:`#93c5fd`};
`,K=r.button`
  flex-shrink: 0;
  padding: 6px 14px;
  background-color: #3B82F6;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.15s, transform 0.1s;
  align-self: center;

  &:hover {
    background-color: #2563EB;
  }

  &:active {
    transform: scale(0.97);
  }
`,q=()=>{let{t:n,locale:r,setting:i,setSetting:o}=e(),s=ie(e=>e.flags),l=(0,C.useMemo)(()=>ae(s),[s]),[f,ee]=d({key:u.IS_APP_ENABLED,defaultValue:!0}),[p,h]=d({key:u.ENABLE_COMMERCIAL,defaultValue:!0}),[g,le]=d({key:u.FLOATING_USER_TLDR,defaultValue:!1}),[v,y]=(0,C.useState)(!1),[b,x]=(0,C.useState)(!1),[S,ue]=(0,C.useState)(!1),[M,P]=(0,C.useState)(null);(0,C.useEffect)(()=>{if(!S||M)return;let e=!1;return Promise.all([c(()=>import(`./5.9-DucTe3qJ.js`),[],import.meta.url),c(()=>import(`./5.8-B_I8dQvS.js`),[],import.meta.url),c(()=>import(`./5.5-ldsncDOR.js`),[],import.meta.url),c(()=>import(`./5.3-B-AEdkES.js`),[],import.meta.url),c(()=>import(`./5.0-CIks9Qgj.js`),[],import.meta.url),c(()=>import(`./4.91-58Plma5X.js`),[],import.meta.url),c(()=>import(`./4.9-FqDoQPjU.js`),[],import.meta.url),c(()=>import(`./4.8-l7o371Uk.js`),[],import.meta.url),c(()=>import(`./4.7-DW_SDW1D.js`),[],import.meta.url),c(()=>import(`./4.6-DTdSqPdS.js`),[],import.meta.url)]).then(t=>{e||P(t.map(({default:e})=>e))}).catch(()=>{e||P([])}),()=>{e=!0}},[S,M]);let[F,I]=(0,C.useState)([]),L=e=>I(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]),[R,z]=(0,C.useState)(!1),B=ne();(0,C.useEffect)(()=>{let e=async()=>{let e=await a.local.get(l);z(l.every(t=>e[t]===!0))};e();let t=(t,n)=>{n===`local`&&l.some(e=>e in t)&&e()};return a.onChanged.addListener(t),()=>a.onChanged.removeListener(t)},[l]);let V=(e,t)=>{e(!t)},H=()=>{let e=!R,t=l.reduce((t,n)=>(t[n]=e,t),{});z(e),a.local.set(t).catch(e=>{console.warn(`Failed to toggle all features:`,e)})},U=e=>{let t=n(`preset.${e}.name`);a.local.set(te(e,s)).catch(e=>{console.warn(`Failed to apply preset:`,e),B?.({title:n(`general.presets.failed`,{name:t}),status:`error`})}),B?.({title:n(`general.presets.applied`,{name:t}),status:`success`})};return(0,w.jsxs)(j,{mb:6,children:[(0,w.jsx)(E,{fontSize:`xs`,color:`gray.400`,mb:4,children:n(`breadcrumb.general`)}),(0,w.jsxs)(T,{p:4,mb:4,children:[(0,w.jsx)(E,{fontSize:`sm`,fontWeight:`semibold`,mb:3,children:n(`general.status.title`)}),(0,w.jsx)(_,{label:n(`general.status.enable`),isChecked:f,onChange:()=>V(ee,f),remark:n(`general.status.enableRemark`)}),(0,w.jsx)(E,{fontSize:`xs`,color:`gray.500`,mt:2,lineHeight:`1.5`,fontStyle:`italic`,children:n(`general.status.note`)}),(0,w.jsx)(`div`,{style:{marginTop:`14px`,paddingTop:`14px`,borderTop:`1px solid #374151`},children:(0,w.jsx)(_,{label:n(`general.status.toggleAll`),isChecked:R,onChange:H,remark:n(`general.status.toggleAllRemark`)})})]}),(0,w.jsxs)(T,{p:4,mb:4,children:[(0,w.jsx)(E,{fontSize:`sm`,fontWeight:`semibold`,mb:3,children:n(`general.features.title`)}),(0,w.jsx)(_,{label:n(`general.status.floatingUserTldr`),isChecked:g,onChange:()=>V(le,g),remark:n(`general.status.floatingUserTldrRemark`)})]}),(0,w.jsxs)(T,{p:4,mb:4,children:[(0,w.jsx)(E,{fontSize:`sm`,fontWeight:`semibold`,mb:3,children:n(`general.language.title`)}),(0,w.jsx)(N,{mb:2,children:n(`general.language.label`)}),(0,w.jsxs)(W,{value:i,onChange:e=>o(e.target.value),size:`sm`,bg:`gray.700`,color:`white`,children:[(0,w.jsx)(`option`,{value:`auto`,children:n(`locale.auto`)}),t.map(e=>(0,w.jsx)(`option`,{value:e,children:n(`locale.${e}`)},e))]}),(0,w.jsx)(E,{fontSize:`xs`,color:`gray.400`,mt:2,lineHeight:`1.5`,children:n(`general.language.remark`)})]}),(0,w.jsxs)(T,{p:4,mb:4,children:[(0,w.jsx)(E,{fontSize:`sm`,fontWeight:`semibold`,mb:1,children:n(`general.version.title`)}),(0,w.jsx)(E,{fontSize:`sm`,mb:3,children:oe.version}),(0,w.jsxs)(`div`,{style:{borderTop:`1px solid #374151`,paddingTop:`10px`},children:[(0,w.jsxs)(D,{justify:`space-between`,align:`center`,children:[(0,w.jsx)(E,{fontSize:`xs`,fontWeight:`semibold`,color:`gray.300`,children:`Changelog`}),(0,w.jsx)(A,{"aria-label":S?`Hide changelog`:`Show changelog`,size:`sm`,onClick:()=>ue(!S),children:(0,w.jsx)(G,{isOpen:S})})]}),S&&(0,w.jsxs)(`div`,{style:{marginTop:`8px`,display:`flex`,flexDirection:`column`,gap:`10px`},children:[M===null&&(0,w.jsx)(E,{fontSize:`xs`,color:`gray.400`,children:`Loading changelog…`}),M?.length===0&&(0,w.jsx)(E,{fontSize:`xs`,color:`gray.400`,children:`Changelog unavailable.`}),M?.map(e=>{let t=F.includes(e.version),n=se(e,r);return(0,w.jsxs)(`div`,{children:[(0,w.jsxs)(D,{justify:`space-between`,align:`center`,children:[(0,w.jsx)(E,{fontSize:`xs`,color:`gray.400`,children:n.version}),(0,w.jsx)(A,{"aria-label":t?`Hide version details`:`Show version details`,size:`sm`,onClick:()=>L(e.version),children:(0,w.jsx)(G,{isOpen:t})})]}),t&&(0,w.jsxs)(`div`,{style:{marginTop:`10px`,display:`flex`,flexDirection:`column`,gap:`10px`},children:[n.features.map((e,t)=>(0,w.jsxs)(`div`,{style:{display:`flex`,gap:`10px`,alignItems:`flex-start`},children:[(0,w.jsx)(`span`,{style:{fontSize:`14px`,lineHeight:`1.4`,flexShrink:0},children:(0,w.jsx)(ce,{name:e.icon})}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(E,{fontSize:`xs`,fontWeight:`semibold`,color:`white`,mb:1,children:e.title}),(0,w.jsx)(E,{fontSize:`xs`,color:`gray.400`,lineHeight:`1.45`,children:e.description})]})]},t)),(0,w.jsx)(E,{fontSize:`xs`,color:`gray.500`,mt:1,fontStyle:`italic`,children:n.footer})]})]},e.version)})]})]})]}),(0,w.jsxs)(T,{p:4,mb:4,children:[(0,w.jsx)(E,{fontSize:`sm`,fontWeight:`semibold`,mb:1,children:n(`general.presets.title`)}),(0,w.jsx)(E,{fontSize:`xs`,color:`gray.400`,mb:3,children:n(`general.presets.subtitle`)}),(0,w.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:m.map(e=>(0,w.jsxs)(pe,{children:[(0,w.jsxs)(me,{children:[(0,w.jsx)(he,{children:n(`preset.${e}.name`)}),(0,w.jsx)(ge,{children:n(`preset.${e}.description`)}),(0,w.jsx)(_e,{children:re[e].map(({key:e,variant:t})=>(0,w.jsx)(ve,{variant:t,children:n(`preset.tag.${e}`)},e))})]}),(0,w.jsx)(K,{onClick:()=>U(e),children:n(`common.apply`)})]},e))})]}),(0,w.jsxs)(T,{p:4,mb:4,children:[(0,w.jsx)(E,{fontSize:`sm`,fontWeight:`semibold`,mb:2,children:n(`onboarding.intro`)}),(0,w.jsx)(E,{fontSize:`xs`,color:`gray.400`,mb:3,children:n(`onboarding.replayDescription`)}),(0,w.jsx)(K,{onClick:()=>{x(!1),a.local.set({"extender.onboarding.replayRequest.v1":!0}).catch(()=>x(!0))},children:n(`onboarding.replay`)}),b&&(0,w.jsx)(E,{role:`alert`,fontSize:`xs`,color:`red.300`,mt:2,children:n(`onboarding.replayFailed`)})]}),(0,w.jsxs)(T,{p:4,mb:4,children:[(0,w.jsx)(E,{fontSize:`sm`,fontWeight:`semibold`,mb:2,children:n(`general.support.title`)}),(0,w.jsx)(E,{fontSize:`sm`,color:`gray.400`,mb:3,lineHeight:`1.5`,children:n(`general.support.description`)}),(0,w.jsx)(_,{label:n(`general.status.enableCommercial`),isChecked:p,onChange:()=>V(h,p),remark:n(`general.status.enableCommercialRemark`)}),(0,w.jsx)(fe,{href:de,target:`_blank`,rel:`noopener noreferrer`,children:n(`general.support.website`)})]}),(0,w.jsxs)(T,{p:4,children:[(0,w.jsxs)(D,{justify:`space-between`,align:`center`,children:[(0,w.jsx)(E,{fontSize:`sm`,fontWeight:`semibold`,children:n(`general.developer.title`)}),(0,w.jsx)(A,{"aria-label":n(v?`general.developer.hideAria`:`general.developer.showAria`),size:`sm`,onClick:()=>y(!v),children:(0,w.jsx)(G,{isOpen:v})})]}),v&&(0,w.jsx)(`div`,{style:{marginTop:`12px`},children:(0,w.jsx)(O,{align:`start`,spacing:3,children:(0,w.jsxs)(O,{align:`start`,spacing:2,w:`100%`,children:[(0,w.jsxs)(`div`,{children:[(0,w.jsx)(E,{fontSize:`xs`,color:`gray.500`,mb:1,children:n(`general.developer.contact`)}),(0,w.jsx)(k,{href:`mailto:info@methods.me`,color:`blue.400`,fontSize:`xs`,children:`info@methods.me`}),(0,w.jsx)(E,{fontSize:`xs`,color:`gray.500`,mt:1,children:n(`general.developer.contactNote`)})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(E,{fontSize:`xs`,color:`gray.500`,mb:1,children:n(`general.developer.website`)}),(0,w.jsx)(k,{href:`https://www.methods.me/`,target:`_blank`,rel:`noopener noreferrer`,color:`blue.400`,fontSize:`xs`,children:`methods.me`})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(E,{fontSize:`xs`,color:`gray.500`,mb:1,children:n(`general.developer.gaming`)}),(0,w.jsx)(k,{href:`https://www.faceit.com/en/players/methoDs`,target:`_blank`,rel:`noopener noreferrer`,color:`blue.400`,fontSize:`xs`,children:n(`general.developer.gamingLink`)})]}),(0,w.jsxs)(`div`,{children:[(0,w.jsx)(E,{fontSize:`xs`,color:`gray.500`,mb:1,children:n(`general.developer.professional`)}),(0,w.jsx)(k,{href:`https://www.linkedin.com/in/angeloalfanocal?originalSubdomain=be`,target:`_blank`,rel:`noopener noreferrer`,color:`blue.400`,fontSize:`xs`,children:n(`general.developer.professionalLink`)})]})]})})})]})]})};function ye(){let e=h();return be.filter(t=>t.featureFlag===void 0||e[t.featureFlag])}var be=[{key:`smurfingChance`,labelKey:`matchroom.detection.smurf`,remarkKey:`matchroom.detection.smurfRemark`,tabKey:`toggleRegistry.tab.matchroom`,sectionKey:`toggleRegistry.section.smurfDetection`,tabRoute:`matchroom`},{key:`autoReport`,labelKey:`matchroom.detection.autoReport`,remarkKey:`matchroom.detection.autoReportRemark`,tabKey:`toggleRegistry.tab.automation`,sectionKey:`toggleRegistry.section.smurfDetection`,tabRoute:`automation`,hasDependencies:!0,dependencyNoteKey:`toggleRegistry.dependency.automation`},{key:`autoReportTrackPlayer`,labelKey:`matchroom.detection.autoReportTrackPlayer`,remarkKey:`matchroom.detection.autoReportTrackPlayerRemark`,tabKey:`toggleRegistry.tab.automation`,sectionKey:`toggleRegistry.section.smurfDetection`,tabRoute:`automation`},{key:`trackReportedPlayers`,labelKey:`features.automation.trackReported`,remarkKey:`features.automation.trackReportedRemark`,tabKey:`toggleRegistry.tab.automation`,sectionKey:`toggleRegistry.section.automation`,tabRoute:`automation`},{key:`ultrablockerEnabled`,labelKey:`features.automation.ultrablocker`,remarkKey:`features.automation.ultrablockerRemark`,tabKey:`toggleRegistry.tab.automation`,sectionKey:`toggleRegistry.section.automation`,tabRoute:`automation`},{key:`faceitHaveWeMetMatchroom`,labelKey:`matchroom.settings.haveWeMet`,remarkKey:`matchroom.settings.haveWeMetRemark`,tabKey:`toggleRegistry.tab.matchroom`,sectionKey:`toggleRegistry.section.haveWeMet`,tabRoute:`matchroom`},{key:`extendedStatsMatchroom`,labelKey:`matchroom.settings.extendedStats`,remarkKey:`matchroom.settings.extendedStatsRemark`,tabKey:`toggleRegistry.tab.matchroom`,sectionKey:`toggleRegistry.section.matchroom`,tabRoute:`matchroom`},{key:`playerTrackingMatchroom`,labelKey:`matchroom.settings.playerTracking`,remarkKey:`matchroom.settings.playerTrackingRemark`,tabKey:`toggleRegistry.tab.matchroom`,sectionKey:`toggleRegistry.section.matchroom`,tabRoute:`matchroom`},{key:`matchroomCountryFlags`,labelKey:`matchroom.settings.countryFlags`,remarkKey:`matchroom.settings.countryFlagsRemark`,tabKey:`toggleRegistry.tab.matchroom`,sectionKey:`toggleRegistry.section.matchroom`,tabRoute:`matchroom`},{key:`showMatchCountMatchroom`,labelKey:`matchroom.settings.matchCount`,remarkKey:`matchroom.settings.matchCountRemark`,tabKey:`toggleRegistry.tab.matchroom`,sectionKey:`toggleRegistry.section.matchroom`,tabRoute:`matchroom`},{key:`showCsgoEloMatchroom`,labelKey:`matchroom.settings.csgoElo`,remarkKey:`matchroom.settings.csgoEloRemark`,tabKey:`toggleRegistry.tab.matchroom`,sectionKey:`toggleRegistry.section.matchroom`,tabRoute:`matchroom`},{key:`showPeakEloMatchroom`,labelKey:`matchroom.settings.peakElo`,remarkKey:`matchroom.settings.peakEloRemark`,tabKey:`toggleRegistry.tab.matchroom`,sectionKey:`toggleRegistry.section.matchroom`,tabRoute:`matchroom`},{key:`experimentalAiAnalysisOptInV1`,labelKey:`matchroom.settings.matchRecommendationExperimental`,remarkKey:`matchroom.settings.matchRecommendationExperimentalRemark`,tabKey:`toggleRegistry.tab.matchroom`,sectionKey:`toggleRegistry.section.matchroom`,tabRoute:`matchroom`},{key:`experimentalAiAnalysisAutoV1`,labelKey:`matchroom.settings.matchRecommendationAuto`,remarkKey:`matchroom.settings.matchRecommendationExperimentalAutoRemark`,tabKey:`toggleRegistry.tab.matchroom`,sectionKey:`toggleRegistry.section.matchroom`,tabRoute:`matchroom`},{key:`showRecentFormMatchroom`,labelKey:`matchroom.insights.recentForm`,remarkKey:`matchroom.insights.recentFormRemark`,tabKey:`toggleRegistry.tab.matchroom`,sectionKey:`toggleRegistry.section.insights`,tabRoute:`matchroom`},{key:`showWeeklyActivityMatchroom`,labelKey:`matchroom.insights.weekly`,remarkKey:`matchroom.insights.weeklyRemark`,tabKey:`toggleRegistry.tab.matchroom`,sectionKey:`toggleRegistry.section.insights`,tabRoute:`matchroom`},{key:`showMultiKillDetailMatchroom`,labelKey:`matchroom.extras.multiKill`,remarkKey:`matchroom.extras.multiKillRemark`,tabKey:`toggleRegistry.tab.matchroom`,sectionKey:`toggleRegistry.section.extras`,tabRoute:`matchroom`},{key:`showClutchRateMatchroom`,labelKey:`matchroom.extras.clutch`,remarkKey:`matchroom.extras.clutchRemark`,tabKey:`toggleRegistry.tab.matchroom`,sectionKey:`toggleRegistry.section.extras`,tabRoute:`matchroom`},{key:`externalLinksLeetifyMatchroom`,labelKey:`matchroom.external.leetify`,remarkKey:`matchroom.external.leetifyRemark`,tabKey:`toggleRegistry.tab.matchroom`,sectionKey:`toggleRegistry.section.external`,tabRoute:`matchroom`},{key:`externalLinksFaceitperfMatchroom`,labelKey:`matchroom.external.faceitperf`,remarkKey:`matchroom.external.faceitperfRemark`,tabKey:`toggleRegistry.tab.matchroom`,sectionKey:`toggleRegistry.section.external`,tabRoute:`matchroom`},{key:`externalLinksCswatchMatchroom`,labelKey:`matchroom.external.cswatch`,remarkKey:`matchroom.external.cswatchRemark`,tabKey:`toggleRegistry.tab.matchroom`,sectionKey:`toggleRegistry.section.external`,tabRoute:`matchroom`},{key:`externalLinksFacehoundMatchroom`,labelKey:`matchroom.external.facehound`,remarkKey:`matchroom.external.facehoundRemark`,tabKey:`toggleRegistry.tab.matchroom`,sectionKey:`toggleRegistry.section.external`,tabRoute:`matchroom`},{key:`matchQueueAutoReady`,labelKey:`features.automation.autoReady`,remarkKey:`features.automation.autoReadyRemark`,tabKey:`toggleRegistry.tab.automation`,sectionKey:`toggleRegistry.section.automation`,tabRoute:`automation`},{key:`partyAutoAcceptInvite`,labelKey:`features.automation.autoParty`,remarkKey:`features.automation.autoPartyRemark`,tabKey:`toggleRegistry.tab.automation`,sectionKey:`toggleRegistry.section.automation`,tabRoute:`automation`},{key:`autoMapMessage`,labelKey:`features.automation.autoMap`,remarkKey:`features.automation.autoMapRemark`,tabKey:`toggleRegistry.tab.automation`,sectionKey:`toggleRegistry.section.automation`,tabRoute:`automation`,hasDependencies:!0,dependencyNoteKey:`toggleRegistry.dependency.automation`},{key:`autoMapPretalk`,labelKey:`features.automation.pretalk`,remarkKey:`features.automation.pretalkRemark`,tabKey:`toggleRegistry.tab.automation`,sectionKey:`toggleRegistry.section.automation`,tabRoute:`automation`},{key:`levelsOverTen`,labelKey:`features.ui.extendedLevels`,remarkKey:`features.ui.extendedLevelsRemark`,tabKey:`toggleRegistry.tab.appearance`,sectionKey:`toggleRegistry.section.ui`,tabRoute:`appearance`},{key:`faceitHaveWeMetProfile`,labelKey:`playerProfile.settings.haveWeMet`,remarkKey:`playerProfile.settings.haveWeMetRemark`,tabKey:`toggleRegistry.tab.playerProfile`,sectionKey:`toggleRegistry.section.playerProfile`,tabRoute:`player-profile`},{key:`playerTrackingProfile`,labelKey:`playerProfile.settings.playerTracking`,remarkKey:`playerProfile.settings.playerTrackingRemark`,tabKey:`toggleRegistry.tab.playerProfile`,sectionKey:`toggleRegistry.section.playerProfile`,tabRoute:`player-profile`},{key:`extendedStatsProfile`,labelKey:`playerProfile.settings.extendedStats`,remarkKey:`playerProfile.settings.extendedStatsRemark`,tabKey:`toggleRegistry.tab.playerProfile`,sectionKey:`toggleRegistry.section.playerProfile`,tabRoute:`player-profile`},{key:`matchHistoryExtendedTable`,labelKey:`playerProfile.settings.matchHistoryExtendedTable`,remarkKey:`playerProfile.settings.matchHistoryExtendedTableRemark`,tabKey:`toggleRegistry.tab.playerProfile`,sectionKey:`toggleRegistry.section.playerProfile`,tabRoute:`player-profile`},{key:`matchHistoryExport`,labelKey:`playerProfile.settings.matchHistoryExport`,remarkKey:`playerProfile.settings.matchHistoryExportRemark`,tabKey:`toggleRegistry.tab.playerProfile`,sectionKey:`toggleRegistry.section.playerProfile`,tabRoute:`player-profile`},{key:`externalLinksLeetifyProfile`,labelKey:`matchroom.external.leetify`,remarkKey:`matchroom.external.leetifyRemark`,tabKey:`toggleRegistry.tab.playerProfile`,sectionKey:`toggleRegistry.section.external`,tabRoute:`player-profile`},{key:`externalLinksFaceitperfProfile`,labelKey:`matchroom.external.faceitperf`,remarkKey:`matchroom.external.faceitperfRemark`,tabKey:`toggleRegistry.tab.playerProfile`,sectionKey:`toggleRegistry.section.external`,tabRoute:`player-profile`},{key:`externalLinksCswatchProfile`,labelKey:`matchroom.external.cswatch`,remarkKey:`matchroom.external.cswatchRemark`,tabKey:`toggleRegistry.tab.playerProfile`,sectionKey:`toggleRegistry.section.external`,tabRoute:`player-profile`},{key:`externalLinksFacehoundProfile`,labelKey:`matchroom.external.facehound`,remarkKey:`matchroom.external.facehoundRemark`,tabKey:`toggleRegistry.tab.playerProfile`,sectionKey:`toggleRegistry.section.external`,tabRoute:`player-profile`},{key:`focusModeMatchroom`,labelKey:`matchroom.settings.focusMode`,remarkKey:`matchroom.settings.focusModeRemark`,tabKey:`toggleRegistry.tab.matchroom`,sectionKey:`toggleRegistry.section.matchroom`,tabRoute:`matchroom`},{key:`matchRoomAutoConnectToServer`,labelKey:`features.automation.autoConnect`,remarkKey:`features.automation.autoConnectRemark`,tabKey:`toggleRegistry.tab.automation`,sectionKey:`toggleRegistry.section.automation`,tabRoute:`automation`},{key:`matchRoomAutoCopyServerData`,labelKey:`features.automation.autoCopy`,remarkKey:`features.automation.autoCopyRemark`,tabKey:`toggleRegistry.tab.automation`,sectionKey:`toggleRegistry.section.automation`,tabRoute:`automation`},{key:`customColorScheme`,labelKey:`appearance.toggle.label`,remarkKey:`appearance.toggle.remark`,tabKey:`toggleRegistry.tab.appearance`,sectionKey:`toggleRegistry.section.colorScheme`,tabRoute:`appearance`},{key:`playerLobbyRemoveLadders`,labelKey:`playerLobby.settings.removeLadders`,remarkKey:`playerLobby.settings.removeLaddersRemark`,tabKey:`toggleRegistry.tab.playerLobby`,sectionKey:`toggleRegistry.section.playerLobby`,tabRoute:`player-lobby`},{key:`playerLobbyRemoveHeader`,labelKey:`playerLobby.settings.removeHeader`,remarkKey:`playerLobby.settings.removeHeaderRemark`,tabKey:`toggleRegistry.tab.playerLobby`,sectionKey:`toggleRegistry.section.playerLobby`,tabRoute:`player-lobby`},{key:`extendedStatsPlayerLobby`,labelKey:`playerLobby.settings.extendedStats`,remarkKey:`playerLobby.settings.extendedStatsRemark`,tabKey:`toggleRegistry.tab.playerLobby`,sectionKey:`toggleRegistry.section.playerLobby`,tabRoute:`player-lobby`},{key:`playerLobbyCountryFlags`,labelKey:`playerLobby.settings.countryFlags`,remarkKey:`playerLobby.settings.countryFlagsRemark`,tabKey:`toggleRegistry.tab.playerLobby`,sectionKey:`toggleRegistry.section.playerLobby`,tabRoute:`player-lobby`},{key:`mapWinRatesPlayerLobby`,labelKey:`playerLobby.settings.mapWinRates`,remarkKey:`playerLobby.settings.mapWinRatesRemark`,tabKey:`toggleRegistry.tab.playerLobby`,sectionKey:`toggleRegistry.section.playerLobby`,tabRoute:`player-lobby`},{key:`serverPingPlayerLobby`,labelKey:`playerLobby.settings.serverPing`,remarkKey:`playerLobby.settings.serverPingRemark`,tabKey:`toggleRegistry.tab.playerLobby`,sectionKey:`toggleRegistry.section.playerLobby`,tabRoute:`player-lobby`},{key:`floatingUserTldr`,labelKey:`general.status.floatingUserTldr`,remarkKey:`general.status.floatingUserTldrRemark`,tabKey:`toggleRegistry.tab.general`,sectionKey:`toggleRegistry.section.generalFeatures`,tabRoute:`general`}],xe=r.div`
  padding: 12px 16px;
  border-bottom: 1px solid #374151;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  &:last-child {
    border-bottom: none;
  }
`,Se=r.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`,Ce=r.div`
  font-size: 11px;
  color: #6B7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,we=r.div`
  font-size: 13px;
  font-weight: 500;
  color: white;
`,Te=r.div`
  font-size: 12px;
  color: #9CA3AF;
  line-height: 1.4;
`,Ee=r.div`
  flex-shrink: 0;
`,De=r.button`
  padding: 4px 8px;
  margin-top: 4px;
  background-color: #3B82F6;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  display: inline-block;

  &:hover {
    background-color: #2563EB;
  }

  &:active {
    transform: scale(0.98);
  }
`,Oe=({meta:t,onNavigateTab:n})=>{let{t:r}=e(),i=(0,C.useId)(),a=Object.values(f).find(e=>e.key===t.key)?.defaultValue??!1,[o,s]=d({key:t.key,defaultValue:a});return(0,w.jsxs)(xe,{children:[(0,w.jsxs)(Se,{children:[(0,w.jsxs)(Ce,{children:[r(t.tabKey),` › `,r(t.sectionKey)]}),(0,w.jsx)(we,{id:i,children:r(t.labelKey)}),(0,w.jsx)(Te,{children:r(t.remarkKey)}),t.hasDependencies&&t.dependencyNoteKey&&(0,w.jsxs)(De,{type:`button`,onClick:()=>{n&&n(t.tabRoute)},children:[`⚙ `,r(t.dependencyNoteKey)]})]}),(0,w.jsx)(Ee,{children:(0,w.jsx)(_,{label:``,ariaLabelledBy:i,isChecked:o,onChange:()=>{s(!o)},remark:``})})]})},ke=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 24px;
  gap: 12px;
`,Ae=({query:t,onNavigateTab:n})=>{let{t:r}=e(),i=(0,C.useMemo)(()=>{let e=t.toLowerCase().trim(),n=ye().filter(e=>e.tabRoute!==`pre-release`);return e===`show all`?n:n.filter(t=>{let n=r(t.labelKey).toLowerCase(),i=r(t.remarkKey).toLowerCase(),a=r(t.sectionKey).toLowerCase(),o=r(t.tabKey).toLowerCase();return n.includes(e)||i.includes(e)||a.includes(e)||o.includes(e)})},[t,r]);if(i.length===0)return(0,w.jsx)(j,{mb:6,children:(0,w.jsxs)(ke,{children:[(0,w.jsx)(E,{fontSize:`md`,color:`gray.500`,fontWeight:`semibold`,children:r(`search.empty.title`)}),(0,w.jsx)(E,{fontSize:`sm`,color:`gray.600`,children:r(`search.empty.hint`)}),(0,w.jsx)(E,{fontSize:`xs`,color:`gray.500`,style:{marginTop:`8px`},children:r(`search.empty.showAll`)})]})});let a=t.toLowerCase().trim()===`show all`,o=i.length,s=a?r(`search.results.all`,{count:o}):r(`search.results.heading`,{count:o,plural:o===1?``:`es`});return(0,w.jsxs)(j,{mb:6,children:[(0,w.jsx)(E,{fontSize:`xs`,color:`gray.400`,mb:3,children:s}),(0,w.jsx)(`div`,{style:{width:`100%`},children:i.map(e=>(0,w.jsx)(Oe,{meta:e,onNavigateTab:n},e.key))})]})},je=`https://api.methods.me/api/analytics/online`,Me=3e4,Ne=6e4,J=null,Y=null;function Pe(){return J&&Date.now()-J.at<Me?Promise.resolve(J.online):(Y??=(async()=>{try{let e=await S(je),t=e.data?.online;return!e.ok||typeof t!=`number`||!Number.isFinite(t)||t<0?null:(J={at:Date.now(),online:Math.floor(t)},J.online)}catch{return null}finally{Y=null}})(),Y)}function Fe(){let[e,t]=(0,C.useState)(null);return(0,C.useEffect)(()=>{let e=!0,n=()=>{Pe().then(n=>{e&&t(n)})};n();let r=window.setInterval(n,Ne);return()=>{e=!1,window.clearInterval(r)}},[]),e}var Ie=150,Le=o`
  0%, 100% { box-shadow: 0 0 4px 1px rgba(34, 197, 94, 0.65), 0 0 10px 2px rgba(34, 197, 94, 0.35); }
  50% { box-shadow: 0 0 7px 3px rgba(34, 197, 94, 0.85), 0 0 18px 6px rgba(34, 197, 94, 0.45); }
`,Re=r.div`
  position: relative;
  margin: -8px 0 20px;
`,ze=r.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 10px;
  border: 1px solid #2b3a2f;
  border-radius: 999px;
  background: rgba(34, 197, 94, 0.08);
  color: #bbf7d0;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.15s, border-color 0.15s;

  &:hover, &[aria-expanded="true"] {
    background: rgba(34, 197, 94, 0.16);
    border-color: #22c55e;
  }
  &:focus-visible {
    outline: 2px solid #86efac;
    outline-offset: 2px;
  }
`,Be=r.span`
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  border-radius: 50%;
  background: #22c55e;
  animation: ${Le} 2.4s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    ${s`box-shadow: 0 0 6px 2px rgba(34, 197, 94, 0.6);`}
  }
`,Ve=r.div`
  position: absolute;
  z-index: 10;
  top: 100%;
  left: 0;
  right: 0;
  padding-top: 8px;
`,He=r.div`
  box-sizing: border-box;
  padding: 12px;
  border: 1px solid #374151;
  border-radius: 8px;
  background: #1f2937;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
`,Ue=r.p`
  margin: 0 0 10px;
  color: #f9fafb;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.35;
`,We=r.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 6px;
  background: #5865F2;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.15s;

  svg { width: 16px; height: 16px; flex-shrink: 0; }
  &:hover { background: #4752c4; }
  &:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }
`;function Ge(){let{t}=e(),n=Fe(),[r,i]=(0,C.useState)(!1),a=(0,C.useRef)(null),o=(0,C.useRef)(void 0),s=(0,C.useId)();(0,C.useEffect)(()=>()=>window.clearTimeout(o.current),[]);let c=()=>{window.clearTimeout(o.current),i(!0)},l=()=>{window.clearTimeout(o.current),o.current=window.setTimeout(()=>i(!1),Ie)};if((0,C.useEffect)(()=>{if(!r)return;let e=e=>{e.key===`Escape`&&i(!1)};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[r]),n===null||n<1)return null;let u=n.toLocaleString();return(0,w.jsxs)(Re,{ref:a,onMouseEnter:c,onMouseLeave:l,onFocus:c,onBlur:e=>{a.current?.contains(e.relatedTarget)||l()},children:[(0,w.jsxs)(ze,{type:`button`,"aria-expanded":r,"aria-controls":r?s:void 0,"aria-label":t(`sidebar.onlineNow`,{count:u}),onClick:()=>{window.clearTimeout(o.current),i(e=>!e)},children:[(0,w.jsx)(Be,{"aria-hidden":`true`}),t(`sidebar.online`,{count:u})]}),r&&(0,w.jsx)(Ve,{id:s,role:`group`,"aria-label":t(`sidebar.joinCommunity`),children:(0,w.jsxs)(He,{children:[(0,w.jsx)(Ue,{children:t(`sidebar.joinCommunity`)}),(0,w.jsxs)(We,{href:`https://discord.gg/shRjkGVJHq`,target:`_blank`,rel:`noopener noreferrer`,children:[(0,w.jsx)(b,{"aria-hidden":`true`}),t(`community.joinDiscord`)]})]})})]})}var Ke=(0,C.lazy)(()=>c(()=>import(`./Appearance-B0JAUU4Q.js`),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url)),qe=(0,C.lazy)(()=>c(()=>import(`./Automation-87Pou0ZY.js`),__vite__mapDeps([7,1,2,8,9,5,6,10,11]),import.meta.url)),Je=(0,C.lazy)(()=>c(()=>import(`./Matchroom-ejk6Urpy.js`),__vite__mapDeps([12,1,2,5,6]),import.meta.url)),Ye=(0,C.lazy)(()=>c(()=>import(`./PlayerProfile-B8Yji0gD.js`),__vite__mapDeps([13,1,2,5,6]),import.meta.url)),Xe=(0,C.lazy)(()=>c(()=>import(`./PlayerLobby-tjZ9KieW.js`),__vite__mapDeps([14,1,2,5,6]),import.meta.url)),Ze=(0,C.lazy)(()=>c(()=>import(`./PlayerTracking-kmXAUxck.js`),__vite__mapDeps([15,1,2,16,5,6,17]),import.meta.url)),Qe=(0,C.lazy)(()=>c(()=>import(`./FaceHound-CzFGgRl5.js`),__vite__mapDeps([18,1]),import.meta.url)),$e=(0,C.lazy)(()=>c(()=>import(`./TradeItMinigames-DESl8e42.js`),__vite__mapDeps([19,1,2]),import.meta.url)),et=(0,C.lazy)(()=>c(()=>import(`./PreRelease-iNzoLuvk.js`),__vite__mapDeps([20,1,2,21,5,6]),import.meta.url)),tt=(0,C.lazy)(()=>c(()=>import(`./Supporter-DcayzrB7.js`),__vite__mapDeps([22,1,2,23,24,25,26,27,21]),import.meta.url)),nt=(0,C.lazy)(()=>c(()=>import(`./Analyse-D_rBc2jL.js`),__vite__mapDeps([28,1,29,2]),import.meta.url)),rt=g(`/icon-128.png`),it=r.div`
  color-scheme: dark;
  display: flex;
  gap: 0;
  height: 100%;
  align-items: stretch;
  overflow: hidden;
  width: 100%;
  max-width: 100%;
`,at=r.div`
  width: 232px;
  box-sizing: border-box;
  flex-shrink: 0;
  background-color: #171923;
  padding: 32px 16px;
  border-right: 1px solid #374151;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
`,ot=r.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  align-items: center;
`,st=r.img`
  width: 32px;
  height: 32px;
`,ct=r.h2`
  font-size: 18px;
  color: white;
  margin: 0;
  font-weight: 600;
`,X=r.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;
`,Z=r.div`
  font-size: 12px;
  color: #9CA3AF;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 8px;
  padding: 0 8px;
`,Q=r.button.attrs(({$isActive:e})=>({type:`button`,"aria-current":e?`page`:void 0}))`
  width: 100%;
  text-align: left;
  justify-content: flex-start;
  background-color: ${e=>e.$isActive?`#374151`:`transparent`};
  color: white;
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #374151;
  }
`,lt=r.a`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
  text-decoration: none;
  color: white;
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 6px;
  transition: background-color 0.2s, color 0.2s;

  svg {
    width: 18px;
    height: 18px;
    color: #5865F2;
    flex-shrink: 0;
  }

  &:hover {
    background-color: #5865F2;
    color: white;
  }

  &:hover svg {
    color: white;
  }
`,ut=r.div`
  flex-shrink: 0;
  height: 24px;
`,$=r.hr`
  border: none;
  border-top: 1px solid #374151;
  margin: 16px 0;
`,dt=r.div`
  flex: 1;
  min-width: 0;
  padding: 0;
  overflow: hidden;
  background-color: #09090C;
  color: white;
  display: flex;
  flex-direction: column;
`,ft=r.div`
  padding: 16px 24px;
  border-bottom: 1px solid #374151;
  background-color: #09090C;
  flex-shrink: 0;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
`,pt=r.div`
  position: relative;
  width: 100%;

  svg {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    color: #6B7280;
    pointer-events: none;
  }

  input {
    box-sizing: border-box;
    padding-left: 36px;
  }
`,mt=r.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #6B7280;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  transition: color 0.2s;

  &:hover {
    color: #D1D5DB;
  }

  svg {
    width: 16px;
    height: 16px;
    position: relative;
    left: 0;
    top: 0;
    transform: none;
  }
`,ht=r.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 24px;
  width: 100%;
  box-sizing: border-box;
  min-height: 0;
`,gt=()=>{let{t}=e(),{data:n,isSuccess:r}=p(),i=ie(e=>e.flags.TRADEIT_ENABLED),a=r&&[`methoDs`,`daerius-`,`Zangetsu67`,`FLashK`,`azak`].includes(n?.nickname??``),[o,s]=(0,C.useState)(`general`),[c,l]=(0,C.useState)(``),u=(0,C.useCallback)(e=>{l(``),s(e)},[]),d=(0,C.useRef)(null),f=(0,C.useRef)(null),m=(0,C.useRef)(!1);return(0,C.useEffect)(()=>{m.current&&!c&&(m.current=!1,f.current?.querySelector(`button[aria-current="page"]`)?.focus())},[o,c]),(0,C.useEffect)(()=>{o===`pre-release`&&!a&&u(`general`)},[o,a,u]),(0,w.jsxs)(it,{children:[(0,w.jsxs)(at,{ref:f,as:`nav`,"aria-label":`Settings sections`,children:[(0,w.jsxs)(ot,{children:[(0,w.jsx)(st,{src:rt,alt:`Logo`}),(0,w.jsx)(ct,{children:t(`sidebar.title`)})]}),(0,w.jsx)(Ge,{}),(0,w.jsxs)(X,{children:[(0,w.jsx)(Z,{children:t(`sidebar.section.extension`)}),(0,w.jsx)(Q,{$isActive:o===`general`,onClick:()=>u(`general`),children:t(`sidebar.tab.general`)}),(0,w.jsx)(Q,{$isActive:o===`appearance`,onClick:()=>u(`appearance`),children:t(`sidebar.tab.appearance`)}),(0,w.jsx)(Q,{$isActive:o===`player-tracking`,onClick:()=>u(`player-tracking`),children:t(`sidebar.tab.playerTracking`)}),(0,w.jsx)(Q,{$isActive:o===`analyse`,onClick:()=>u(`analyse`),children:t(`sidebar.tab.analyse`)})]}),(0,w.jsx)($,{}),(0,w.jsxs)(X,{children:[(0,w.jsx)(Z,{children:t(`sidebar.section.faceit`)}),(0,w.jsx)(Q,{$isActive:o===`matchroom`,onClick:()=>u(`matchroom`),children:t(`sidebar.tab.matchroom`)}),(0,w.jsx)(Q,{$isActive:o===`player-profile`,onClick:()=>u(`player-profile`),children:t(`sidebar.tab.playerProfile`)}),(0,w.jsx)(Q,{$isActive:o===`player-lobby`,onClick:()=>u(`player-lobby`),children:t(`sidebar.tab.playerLobby`)}),(0,w.jsx)(Q,{$isActive:o===`automation`,onClick:()=>u(`automation`),children:t(`sidebar.tab.automation`)})]}),(0,w.jsx)($,{}),(0,w.jsxs)(X,{children:[(0,w.jsx)(Z,{children:t(`sidebar.section.thirdParty`)}),(0,w.jsx)(Q,{$isActive:o===`facehound`,onClick:()=>u(`facehound`),children:t(`sidebar.tab.faceHound`)}),i&&(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(Q,{$isActive:o===`tradeit-minigames`,onClick:()=>u(`tradeit-minigames`),children:t(`sidebar.tab.tradeitMinigames`)})})]}),a&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)($,{}),(0,w.jsxs)(X,{children:[(0,w.jsx)(Z,{children:`Pre-Release`}),(0,w.jsx)(Q,{$isActive:o===`pre-release`,onClick:()=>u(`pre-release`),children:`Feature Flags`})]})]}),(0,w.jsx)($,{}),(0,w.jsxs)(X,{children:[(0,w.jsx)(Z,{children:t(`sidebar.section.community`)}),(0,w.jsx)(Q,{$isActive:o===`supporter`,onClick:()=>u(`supporter`),children:t(`sidebar.tab.supporter`)}),(0,w.jsxs)(lt,{href:ee,target:`_blank`,rel:`noopener noreferrer`,children:[(0,w.jsx)(b,{}),t(`sidebar.community.discord`)]})]}),(0,w.jsx)(ut,{})]}),(0,w.jsxs)(dt,{children:[(0,w.jsx)(ft,{children:(0,w.jsxs)(pt,{children:[(0,w.jsx)(v,{}),(0,w.jsx)(P,{ref:d,"aria-label":t(`search.placeholder`),type:`text`,placeholder:t(`search.placeholder`),value:c,onChange:e=>l(e.target.value),bg:`gray.700`,style:{paddingRight:c?`36px`:`12px`}}),c&&(0,w.jsx)(mt,{type:`button`,onClick:()=>{l(``),d.current?.focus({preventScroll:!0})},"aria-label":t(`search.clear`),children:(0,w.jsx)(x,{})})]})}),(0,w.jsx)(ht,{children:(0,w.jsx)(C.Suspense,{fallback:(0,w.jsx)(`div`,{role:`status`,style:{color:`#9CA3AF`,padding:16},children:`Loading…`}),children:c?(0,w.jsx)(Ae,{query:c,onNavigateTab:e=>{m.current=!0,u(e)}}):(()=>{switch(o){case`general`:return(0,w.jsx)(q,{});case`appearance`:return(0,w.jsx)(Ke,{});case`automation`:return(0,w.jsx)(qe,{});case`matchroom`:return(0,w.jsx)(Je,{onNavigate:u});case`player-profile`:return(0,w.jsx)(Ye,{});case`player-lobby`:return(0,w.jsx)(Xe,{});case`player-tracking`:return(0,w.jsx)(Ze,{});case`facehound`:return(0,w.jsx)(Qe,{});case`tradeit-minigames`:return i?(0,w.jsx)($e,{}):(0,w.jsx)(q,{});case`pre-release`:return a?(0,w.jsx)(et,{}):(0,w.jsx)(q,{});case`supporter`:return(0,w.jsx)(tt,{});case`analyse`:return(0,w.jsx)(nt,{});default:return(0,w.jsx)(q,{})}})()})})]})]})};export{N as a,k as c,B as d,V as f,O as g,U as h,j as i,W as l,E as m,H as n,D as o,ue as p,T as r,P as s,gt as t,M as u};