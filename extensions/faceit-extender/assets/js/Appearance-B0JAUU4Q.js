import{c as e,g as t,i as n,l as r}from"./react-dom-yulZmupg.js";import{H as i,U as a}from"./createFaceitExtenderQueryClient-CbFICmfN.js";import{C as o,D as s,E as c,S as l,T as u,_ as d,a as f,b as p,c as m,d as h,f as g,g as _,h as v,l as y,m as b,n as x,o as S,p as C,r as w,t as T,u as E,v as D,w as O,x as k,y as A}from"./colorSchemePresets-CCbMdOHo.js";import{r as j}from"./common-eZmEv_qc.js";import{a as M,i as N,l as P,m as F,p as I,r as L,u as R}from"./Sidebar-BQ2z6LIO.js";t();var z=r(),B=[{level:11,svg:m,legacy:y,eloRange:`2,151 - 2,386`},{level:12,svg:E,legacy:h,eloRange:`2,386 - 2,621`},{level:13,svg:g,legacy:C,eloRange:`2,621 - 2,856`},{level:14,svg:b,legacy:v,eloRange:`2,856 - 3,091`},{level:15,svg:_,legacy:d,eloRange:`3,091 - 3,326`},{level:16,svg:D,legacy:A,eloRange:`3,326 - 3,561`},{level:17,svg:p,legacy:k,eloRange:`3,561 - 3,796`},{level:18,svg:l,legacy:o,eloRange:`3,796 - 4,031`},{level:19,svg:O,legacy:u,eloRange:`4,031 - 4,266`},{level:20,svg:c,legacy:s,eloRange:`4,266+`}],V=[`100 - 500`,`501 - 750`,`751 - 900`,`901 - 1,050`,`1,051 - 1,200`,`1,201 - 1,350`,`1,351 - 1,530`,`1,531 - 1,750`,`1,751 - 2,000`,`2,001 - 2,150`],H=n.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 12px;
`,U=n.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 12px 8px;
  background-color: ${e=>e.isActive?`#1F2937`:`transparent`};
  border: 2px solid ${e=>e.isActive?e.color:`#374151`};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: ${e=>e.color};
    background-color: #1F2937;
  }
`,W=n.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${e=>e.color};
`,G=n.div`
  font-size: 11px;
  color: #D1D5DB;
  font-weight: 500;
`,K=n.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 12px;
`,q=n.input`
  width: 40px;
  height: 40px;
  border: 2px solid #374151;
  border-radius: 8px;
  cursor: pointer;
  background: none;
  padding: 2px;

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  &::-webkit-color-swatch {
    border: none;
    border-radius: 4px;
  }
`,J=n.input`
  background-color: #1F2937;
  border: 1px solid #374151;
  border-radius: 6px;
  color: white;
  font-size: 13px;
  font-family: monospace;
  padding: 8px 12px;
  width: 100px;

  &:focus {
    outline: none;
    border-color: #6B7280;
  }
`,Y=n.div`
  display: flex;
  gap: 4px;
  margin-top: 16px;
  border-radius: 6px;
  overflow: hidden;
  height: 24px;
`,X=n.div`
  flex: 1;
  background-color: ${e=>e.bg};
`,Z=n.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
`,Q=n.span`
  font-size: 10px;
  color: #6B7280;
`,$=n.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 6px 4px;
  background-color: #374151;
  border-radius: 6px;
  transition: background-color 0.2s;
  width: 100%;
  aspect-ratio: 1;
  min-height: 0;
  box-sizing: border-box;
  overflow: hidden;

  &:hover {
    background-color: #4B5563;
  }
`,ee=n.div`
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  box-sizing: border-box;
`,te=n.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`,ne=()=>{let{t,locale:n}=e(),[r,o]=a({key:i.CUSTOM_COLOR_SCHEME,defaultValue:!1}),[s,c]=a({key:`customColorSchemeConfig`,defaultValue:x}),l=f(s),u=w(l),d=e=>{let t=T.find(t=>t.id===e);t&&c({preset:e,customColor:t.accent})},p=e=>{c({preset:null,customColor:e})},[m,h]=a({key:i.LEVELS_OVER_TEN,defaultValue:!1}),[g,_]=a({key:`levelCollectionType`,defaultValue:`legacy`});return(0,z.jsxs)(N,{mb:6,children:[(0,z.jsx)(F,{fontSize:`xs`,color:`gray.400`,mb:4,children:t(`appearance.breadcrumb`)}),(0,z.jsxs)(L,{p:4,mb:4,children:[(0,z.jsx)(F,{fontSize:`sm`,fontWeight:`semibold`,mb:3,children:t(`appearance.toggle.title`)}),(0,z.jsx)(j,{label:t(`appearance.toggle.label`),isChecked:r,onChange:()=>o(!r),remark:t(`appearance.toggle.remark`)})]}),(0,z.jsxs)(L,{p:4,mb:4,style:{opacity:r?1:.5,pointerEvents:r?`auto`:`none`},children:[(0,z.jsx)(F,{fontSize:`sm`,fontWeight:`semibold`,mb:1,children:t(`appearance.presets.title`)}),(0,z.jsx)(F,{fontSize:`xs`,color:`gray.400`,children:t(`appearance.presets.description`)}),(0,z.jsx)(H,{children:T.map(e=>(0,z.jsxs)(U,{color:e.accent,isActive:s.preset===e.id,onClick:()=>d(e.id),children:[(0,z.jsx)(W,{color:e.accent}),(0,z.jsx)(G,{children:t(`appearance.preset.${e.id}`)})]},e.id))})]}),(0,z.jsxs)(L,{p:4,mb:4,style:{opacity:r?1:.5,pointerEvents:r?`auto`:`none`},children:[(0,z.jsx)(F,{fontSize:`sm`,fontWeight:`semibold`,mb:1,children:t(`appearance.custom.title`)}),(0,z.jsx)(F,{fontSize:`xs`,color:`gray.400`,children:t(`appearance.custom.description`)}),(0,z.jsxs)(K,{children:[(0,z.jsx)(q,{type:`color`,value:s.preset?f(s):s.customColor,onChange:e=>p(e.target.value)}),(0,z.jsx)(J,{type:`text`,value:s.preset?f(s):s.customColor,onChange:e=>{let t=e.target.value;/^#[0-9a-fA-F]{6}$/.test(t)&&p(t)},placeholder:`#000000`}),(0,z.jsx)(F,{fontSize:`xs`,color:`gray.400`,style:{flex:1},children:s.preset===null?t(`appearance.custom.active`):t(`appearance.custom.inactive`)})]})]}),(0,z.jsxs)(L,{p:4,mb:4,style:{opacity:r?1:.5},children:[(0,z.jsx)(F,{fontSize:`sm`,fontWeight:`semibold`,mb:1,children:t(`appearance.preview.title`)}),(0,z.jsxs)(Y,{children:[(0,z.jsx)(X,{bg:u.accent}),(0,z.jsx)(X,{bg:u.accentHover}),(0,z.jsx)(X,{bg:u.accentMuted}),(0,z.jsx)(X,{bg:u.accentBorder})]}),(0,z.jsxs)(Z,{children:[(0,z.jsx)(Q,{children:t(`appearance.preview.accent`)}),(0,z.jsx)(Q,{children:t(`appearance.preview.hover`)}),(0,z.jsx)(Q,{children:t(`appearance.preview.muted`)}),(0,z.jsx)(Q,{children:t(`appearance.preview.border`)})]})]}),(0,z.jsxs)(L,{p:4,mb:4,children:[(0,z.jsx)(F,{fontSize:`sm`,fontWeight:`semibold`,mb:3,children:t(`features.ui.title`)}),(0,z.jsxs)(I,{spacing:3,children:[n===`memeify`&&(0,z.jsx)(F,{fontSize:`xs`,color:`#5DAF3A`,children:t(`features.ui.memeifyForcesPepe`)}),(0,z.jsx)(j,{label:t(`features.ui.extendedLevels`),isChecked:m,onChange:()=>h(!m),remark:t(`features.ui.extendedLevelsRemark`)}),m&&(0,z.jsxs)(ee,{style:{marginTop:`8px`},children:[(0,z.jsx)(M,{mb:2,children:t(`features.ui.collectionStyle`)}),(0,z.jsxs)(P,{value:g,onChange:e=>_(e.target.value),size:`sm`,bg:`gray.700`,color:`white`,style:{marginBottom:`12px`},children:[(0,z.jsx)(`option`,{value:`new`,children:t(`features.ui.collectionNew`)}),(0,z.jsx)(`option`,{value:`legacy`,children:t(`features.ui.collectionLegacy`)}),(0,z.jsx)(`option`,{value:`pepe`,children:t(`features.ui.collectionPepe`)})]}),(0,z.jsx)(F,{fontSize:`xs`,color:`gray.400`,mb:2,children:t(g===`pepe`?`features.ui.levelsAvailablePepe`:`features.ui.levelsAvailable`)}),(0,z.jsx)(R,{columns:5,spacing:3,style:{width:`100%`,maxWidth:`100%`,boxSizing:`border-box`},children:[...g===`pepe`?V.map((e,t)=>({level:t+1,svg:S(t+1),eloRange:e})):[],...B.map(({level:e,svg:t,legacy:n,eloRange:r})=>({level:e,svg:g===`pepe`?S(e):g===`legacy`?n:t,eloRange:r}))].map(({level:e,svg:t,eloRange:n})=>(0,z.jsxs)($,{children:[(0,z.jsx)(te,{dangerouslySetInnerHTML:{__html:t}}),(0,z.jsx)(F,{fontSize:`xs`,color:`gray.400`,mt:0,style:{textAlign:`center`,fontSize:`10px`,lineHeight:`1.3`,padding:`0 0px`},children:n})]},e))})]})]})]})]})};export{ne as default};