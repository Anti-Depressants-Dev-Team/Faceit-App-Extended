import{c as e,g as t,i as n,l as r,y as i}from"./react-dom-yulZmupg.js";import{B as a,Y as o,g as s}from"./createFaceitExtenderQueryClient-CbFICmfN.js";import{a as c,c as l,f as u,i as d,m as f,n as p,o as m,r as h}from"./Sidebar-BQ2z6LIO.js";import{t as g}from"./useSupporterEntitlement-Ctc6eUIu.js";import{a as _,i as v,l as y,o as b,r as x,t as S}from"./useAiAuthToken-CRzh2KOB.js";var C=i(t(),1),w=r(),T=`https://faceit-extender.com/support`,E=`https://faceit-extender.com/account`,D=[`Supporter badge next to your ELO in every match room & lobby`,`A bigger weekly token pool (free players get 5/week; each level adds 5)`,`Priority AI model for sharper coaching`,`Directly funds development`],O=`Paid on the website? Copy your claim code from your account page and paste it here to unlock your supporter tokens.`,k=n.button`
  min-height: 40px;
  padding: 8px 14px;
  border: 0;
  border-radius: 8px;
  font-weight: 700;
  color: #fff;
  background: #c94300;
  cursor: pointer;
  transition: background-color 0.15s ease;
  &:hover:not(:disabled) { background: #b83d00; }
  &:disabled { opacity: 0.6; cursor: wait; }
`,A=n.a`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  min-height: 40px;
  padding: 8px 14px;
  border-radius: 8px;
  font-weight: 700;
  color: #fff;
  background: #c94300;
  text-decoration: none;
  transition: background-color 0.15s ease;
  &:hover { background: #b83d00; }
  &:focus-visible { outline: 2px solid #fdba74; outline-offset: 2px; }
`,j=n.input`
  flex: 1;
  min-width: 0;
  padding: 8px 10px;
  border-radius: 8px;
  border: 1px solid rgba(148, 163, 184, 0.3);
  background: #111827;
  color: #e5e7eb;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`,M=n.li`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  font-size: 12px;
  color: #d1d5db;
  line-height: 1.4;
  &::before {
    content: '✓';
    color: #4ade80;
    font-weight: 700;
  }
`,N=()=>{let{t}=e(),{data:n}=s(),r=a(),i=n?.nickname?.trim()||``,N=i.length>=2,[P,F]=(0,C.useState)();(0,C.useEffect)(()=>{if(!N||!n?.id)return;let e=!1;return S({faceitId:n.id,nickname:i}).then(t=>{e||F(t.token)}).catch(()=>void 0),()=>{e=!0}},[N,n?.id,i]);let[I,L]=(0,C.useState)(``),[R,z]=(0,C.useState)(`idle`),[B,V]=(0,C.useState)(``);(0,C.useEffect)(()=>{let e=!1;return _().then(t=>{!e&&t&&L(v(t))}).catch(()=>void 0),()=>{e=!0}},[]);let H=async()=>{z(`saving`),V(``);try{let e=await b(I);if(!e.ok){z(`error`),V(`That doesn't look like a valid code.`);return}n?.id&&N&&await x({faceitId:n.id,nickname:i}),r.invalidateQueries({queryKey:[o.AI_ALLOWANCE]}),L(e.code?v(e.code):``),z(`ok`),V(e.code?`Code saved — supporter tokens active.`:`Code cleared.`)}catch{z(`error`),V(`Could not save the code. Try again.`)}},U=N?i:void 0,{data:W}=g(U),{data:G}=y(U,n?.id,P),K=W?.badgeLevel??0,q=G?G.unlimited?`No weekly AI cap (power user)`:`${G.remaining??0} of ${G.weeklyCap??G.dailyCap??0} tokens left this week · ${G.used} used`:null;return(0,w.jsxs)(d,{children:[(0,w.jsx)(f,{fontSize:`xs`,color:`gray.400`,mb:4,children:t(`breadcrumb.supporter`)}),(0,w.jsx)(f,{fontSize:`sm`,color:`#9CA3AF`,mb:3,children:`One-time payment, no subscription. Each level stacks your badge. You buy on the website, signed in with FACEIT.`}),K>0&&(0,w.jsx)(h,{mb:3,p:3,bg:`#0b1220`,borderRadius:`8px`,border:`1px solid rgba(74,222,128,0.3)`,children:(0,w.jsxs)(m,{justify:`space-between`,align:`center`,width:`100%`,children:[(0,w.jsxs)(f,{fontSize:`sm`,color:`#d1d5db`,children:[i,` is already a supporter`]}),(0,w.jsx)(p,{colorScheme:`green`,children:K>=20?`Max level`:`Level ${K}`})]})}),q&&(0,w.jsxs)(h,{mb:3,p:3,bg:`#0b1220`,borderRadius:`8px`,border:`1px solid rgba(148,163,184,0.2)`,children:[(0,w.jsx)(f,{fontSize:`xs`,color:`#9CA3AF`,mb:1,children:`YOUR AI PRE-REPORT ALLOWANCE`}),(0,w.jsxs)(m,{justify:`space-between`,align:`center`,width:`100%`,children:[(0,w.jsx)(f,{fontSize:`sm`,color:`#e5e7eb`,children:q}),G&&!G.unlimited&&(0,w.jsx)(p,{colorScheme:(G.remaining??0)<=0?`red`:`blue`,children:(G.remaining??0)<=0?`Empty`:`${G.remaining} left`})]}),G&&!G.unlimited&&(0,w.jsx)(f,{fontSize:`xs`,color:`gray.500`,mt:1,children:`Tokens reset every week and don't stack. Each supporter level adds 5 tokens/week.`})]}),(0,w.jsxs)(h,{p:3,bg:`#111827`,borderRadius:`10px`,border:`1px`,borderColor:`rgba(148,163,184,0.2)`,children:[(0,w.jsxs)(m,{justify:`space-between`,align:`center`,mb:2,children:[(0,w.jsx)(f,{fontSize:`md`,fontWeight:`bold`,children:`Supporter Tier`}),(0,w.jsx)(p,{colorScheme:`purple`,children:`One-time`})]}),(0,w.jsx)(`ul`,{style:{margin:`0 0 12px`,padding:0,listStyle:`none`,display:`flex`,flexDirection:`column`,gap:5},children:D.map(e=>(0,w.jsx)(M,{children:(0,w.jsx)(`span`,{children:e})},e))}),(0,w.jsxs)(`div`,{style:{marginBottom:12},children:[(0,w.jsx)(c,{children:`Badge recipient`}),(0,w.jsx)(f,{fontSize:`sm`,color:N?`#e5e7eb`:`#fca5a5`,children:N?i:`Not logged in to FACEIT`})]}),(0,w.jsx)(A,{href:T,target:`_blank`,rel:`noopener noreferrer`,children:K>0?`Add more levels on the website`:`Become a supporter on the website`}),(0,w.jsx)(f,{fontSize:`xs`,color:`gray.500`,mt:2,children:`Choose your levels and pay securely there. Sign in with FACEIT so the badge goes to the right account.`})]}),(0,w.jsxs)(h,{mt:3,p:3,bg:`#0b1220`,borderRadius:`8px`,border:`1px`,borderColor:`rgba(148,163,184,0.2)`,children:[(0,w.jsx)(f,{fontSize:`xs`,color:`#9CA3AF`,mb:1,children:`ALREADY PAID? ENTER YOUR CLAIM CODE`}),(0,w.jsx)(f,{fontSize:`xs`,color:`gray.500`,mb:2,children:O}),(0,w.jsxs)(m,{align:`center`,spacing:2,children:[(0,w.jsx)(j,{value:I,placeholder:`XXXX-XXXX-XXXX-XXXX`,"aria-label":`Supporter claim code`,spellCheck:!1,autoComplete:`off`,onChange:e=>L(e.target.value)}),(0,w.jsx)(k,{type:`button`,onClick:H,disabled:R===`saving`,children:R===`saving`?(0,w.jsx)(u,{size:`14px`}):`Save`})]}),B&&(0,w.jsx)(f,{fontSize:`xs`,color:R===`error`?`#fca5a5`:`#86efac`,mt:2,children:B})]}),(0,w.jsxs)(f,{fontSize:`xs`,color:`gray.500`,mt:3,children:[`Already paid?`,` `,(0,w.jsx)(l,{href:E,target:`_blank`,rel:`noopener noreferrer`,children:`Open your account page`}),` `,`to see your purchases and claim code.`]})]})};export{N as default};