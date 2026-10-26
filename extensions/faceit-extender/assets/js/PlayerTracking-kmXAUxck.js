import{c as e,g as t,i as n,l as r,y as i}from"./react-dom-yulZmupg.js";import{m as a}from"./createFaceitExtenderQueryClient-CbFICmfN.js";import{a as o,c as s,i as c,l,n as u,u as d}from"./playerTrackingStorage-G0t8rMga.js";import{n as ee,t as te}from"./common-eZmEv_qc.js";import{_ as f,c as ne,d as re,h as p,i as ie,l as ae,u as oe,y as se}from"./icons-Bp7F8Dhp.js";import{r as m}from"./dateUtils-XHJg_cUL.js";import{c as h,g,h as ce,l as _,m as v,o as y,p as le,r as ue}from"./Sidebar-BQ2z6LIO.js";var b=i(t(),1),x=r(),S=n.button`
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
  
  ${e=>e.variant===`primary`?`
        background-color: #EF4444;
        color: white;
        &:hover {
          background-color: #DC2626;
        }
      `:e.variant===`ghost`?`
        background-color: transparent;
        color: #E2E8F0;
        &:hover {
          background-color: #374151;
        }
      `:`
      background-color: #374151;
      color: white;
      &:hover {
        background-color: #4B5563;
      }
    `}
`,C=n.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10000;
  display: ${e=>e.$isOpen?`flex`:`none`};
  align-items: center;
  justify-content: center;
  padding: 20px;
`,w=n.div`
  background-color: #1F2937;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  z-index: 10001;
  max-height: 100%;
  overflow-y: auto;
`,T=n.div`
  padding: 16px 24px;
  border-bottom: 1px solid #374151;
`,E=n.div`
  padding: 16px 24px;
`,D=n.div`
  padding: 16px 24px;
  border-top: 1px solid #374151;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`,O=n.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #F3F4F6;
`,k=({isOpen:e,leastDestructiveRef:t,onClose:n,title:r,children:i,cancelLabel:a=`Cancel`,confirmLabel:o=`Confirm`,onConfirm:s,confirmColorScheme:c=`red`})=>{let l=(0,b.useRef)(null),u=(0,b.useRef)(null),d=(0,b.useId)();return(0,b.useEffect)(()=>{if(!e)return;let n=document.activeElement;for(;n?.shadowRoot?.activeElement;)n=n.shadowRoot.activeElement;return(t?.current||l.current)?.focus({preventScroll:!0}),()=>{n instanceof HTMLElement&&n.isConnected&&n.focus({preventScroll:!0})}},[e,t]),(0,b.useEffect)(()=>{if(!e)return;let t=e=>{if(e.key===`Escape`){e.preventDefault(),e.stopImmediatePropagation(),n();return}if(e.key!==`Tab`)return;e.stopImmediatePropagation();let t=[...u.current?.querySelectorAll(`button:not(:disabled),input:not(:disabled),select:not(:disabled),textarea:not(:disabled),a[href]`)??[]].filter(e=>e.tabIndex>=0&&e.getClientRects().length>0);if(!t.length)return;let r=document.activeElement;for(;r?.shadowRoot?.activeElement;)r=r.shadowRoot.activeElement;let i=t[0],a=t[t.length-1];!r||!u.current?.contains(r)||e.shiftKey&&r===i?(e.preventDefault(),(e.shiftKey?a:i).focus()):!e.shiftKey&&r===a&&(e.preventDefault(),i.focus())};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,n]),e?(0,x.jsx)(C,{$isOpen:e,onClick:e=>{e.target===e.currentTarget&&n()},children:(0,x.jsxs)(w,{ref:u,role:`alertdialog`,"aria-modal":`true`,"aria-labelledby":d,onClick:e=>e.stopPropagation(),children:[(0,x.jsx)(T,{children:(0,x.jsx)(O,{id:d,children:r})}),(0,x.jsx)(E,{children:i}),(0,x.jsxs)(D,{children:[(0,x.jsx)(S,{type:`button`,variant:`ghost`,onClick:n,ref:t||l,children:a}),s&&(0,x.jsx)(S,{type:`button`,variant:c===`red`?`primary`:`secondary`,onClick:()=>{s&&s(),n()},children:o})]})]})}):null},A=n.button`
  padding: ${e=>e.size===`sm`?`6px 12px`:`8px 16px`};
  font-size: ${e=>e.size===`sm`?`14px`:`16px`};
  border-radius: 4px;
  border: ${e=>e.variant===`outline`?`1px solid #4B5563`:`none`};
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: ${e=>e.variant===`outline`?`transparent`:e.colorScheme===`blue`?`#3B82F6`:e.colorScheme===`red`?`#EF4444`:e.colorScheme===`green`?`#10B981`:`#374151`};
  color: white;
  
  &:hover {
    opacity: 0.9;
    ${e=>e.variant===`outline`&&`background-color: #374151; border-color: #6B7280;`}
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`,j=n.button`
  padding: ${e=>e.size===`sm`?`6px`:`8px`};
  border-radius: 4px;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  background-color: ${e=>e.variant===`ghost`?`transparent`:e.colorScheme===`blue`?`#3B82F6`:e.colorScheme===`red`?`#EF4444`:e.colorScheme===`green`?`#10B981`:`#374151`};
  color: ${e=>e.variant===`ghost`?`#9CA3AF`:`white`};
  
  &:hover {
    ${e=>e.variant===`ghost`?`background-color: #374151; color: #E2E8F0;`:`opacity: 0.9;`}
  }
  
  svg {
    width: ${e=>e.size===`sm`?`16px`:`20px`};
    height: ${e=>e.size===`sm`?`16px`:`20px`};
  }
`,de=n.div`
  background-color: #374151;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #4B5563;
  transition: all 0.2s;
  width: 100%;
  box-sizing: border-box;
  
  &:hover {
    border-color: #6B7280;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`,M=n.div`
  font-size: 11px;
  color: #9CA3AF;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
`,fe=n.div`
  font-size: 13px;
  color: #D1D5DB;
  line-height: 1.5;
  white-space: pre-wrap;
  padding: 8px;
  background-color: #1F2937;
  border-radius: 4px;
  border: 1px solid #374151;
  width: 100%;
  box-sizing: border-box;
  word-wrap: break-word;
  overflow-wrap: break-word;
`,pe=n.button`
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 12px;
  border: none;
  font-family: inherit;
  font-size: 12px;
  font-weight: 500;
  background-color: #3B82F6;
  color: white;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: #2563EB;
    transform: translateY(-1px);
  }
`,N=()=>{let{t}=e(),[n,r]=(0,b.useState)({}),[i,S]=(0,b.useState)(null),[C,w]=(0,b.useState)(``),[T,E]=(0,b.useState)(``),[D,O]=(0,b.useState)(``),[N,P]=(0,b.useState)(``),[F,me]=(0,b.useState)(`date-newest`),[I,L]=(0,b.useState)(``),[R,z]=(0,b.useState)(null),[B,V]=(0,b.useState)(`merge`),[he,H]=(0,b.useState)(!1),[ge,U]=(0,b.useState)(!1),W=a(),G=b.useRef(null),K=b.useRef(null),_e=()=>H(!0),q=()=>H(!1),ve=()=>U(!0),J=()=>U(!1),Y=(0,b.useCallback)(async()=>{try{let e=await c();r(e)}catch(e){console.error(`[PlayerTracking] Error loading tracked players`,e),W({title:t(`playerTracking.toast.loadError`),status:`error`,duration:3e3})}},[W,t]);(0,b.useEffect)(()=>{Y();let e=e=>{e.faceitExtenderTrackedPlayers&&Y()};return chrome.storage.onChanged.addListener(e),()=>{chrome.storage.onChanged.removeListener(e)}},[Y]);let ye=e=>{S(e.id),w(e.notes),E(e.tags.join(`, `)),O(``)},X=async e=>{try{let n=T.split(`,`).map(e=>e.trim()).filter(e=>e.length>0);await l(e,C),await d(e,n),S(null),w(``),E(``),O(``),W({title:t(`playerTracking.toast.updated`),status:`success`,duration:2e3}),Y()}catch(e){console.error(`[PlayerTracking] Error saving player`,e),W({title:t(`playerTracking.toast.updateError`),status:`error`,duration:3e3})}},be=()=>{S(null),w(``),E(``),O(``)},xe=e=>{z(e),_e()},Se=async()=>{if(R)try{await s(R),W({title:t(`playerTracking.toast.removed`),status:`success`,duration:2e3}),Y(),q(),z(null)}catch(e){console.error(`[PlayerTracking] Error deleting player`,e),W({title:t(`playerTracking.toast.removeError`),status:`error`,duration:3e3})}},Ce=e=>{let t=e||D.trim();if(t){let e=T?T.split(`,`).map(e=>e.trim()).filter(e=>e):[];e.includes(t)||E([...e,t].join(`, `)),O(``)}},we=e=>{let t=T.split(`,`).map(e=>e.trim()).filter(t=>t&&t!==e);E(t.join(`, `))},Te=async()=>{try{let e=await u(),n=new Blob([e],{type:`application/json`}),r=URL.createObjectURL(n),i=document.createElement(`a`);i.href=r,i.download=`faceit-tracked-players-${new Date().toISOString().split(`T`)[0]}.json`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r),W({title:t(`playerTracking.toast.exportSuccess`),description:t(`playerTracking.toast.exportSuccessBody`),status:`success`,duration:3e3})}catch(e){W({title:t(`playerTracking.toast.exportFail`),description:e instanceof Error?e.message:t(`playerTracking.toast.exportFailFallback`),status:`error`,duration:3e3})}},Ee=()=>{K.current?.click()},De=async e=>{let n=e.target.files?.[0];if(n)try{let e=await n.text(),r=await o(e,B===`merge`);r.errors.length>0?W({title:t(`playerTracking.toast.importWithWarnings`),description:t(`playerTracking.toast.importWithWarningsBody`,{imported:r.imported,errors:r.errors.length}),status:`warning`,duration:5e3}):W({title:t(`playerTracking.toast.importSuccess`),description:t(`playerTracking.toast.importSuccessBody`,{imported:r.imported}),status:`success`,duration:3e3}),Y(),J(),K.current&&(K.current.value=``)}catch(e){console.error(`[PlayerTracking] Error importing file`,e),W({title:t(`playerTracking.toast.importFail`),description:e instanceof Error?e.message:t(`playerTracking.toast.importFailFallback`),status:`error`,duration:5e3}),K.current&&(K.current.value=``)}},Z=(0,b.useMemo)(()=>{let e=new Set;return Object.values(n).forEach(t=>{t.tags.forEach(t=>e.add(t))}),Array.from(e).sort()},[n]),Q=(0,b.useMemo)(()=>{let e=Object.values(n);if(N.trim()){let t=N.toLowerCase();e=e.filter(e=>e.nickname.toLowerCase().includes(t)||e.notes.toLowerCase().includes(t)||e.tags.some(e=>e.toLowerCase().includes(t)))}return I&&(e=e.filter(e=>e.tags.includes(I))),e.sort((e,t)=>{switch(F){case`name`:return e.nickname.localeCompare(t.nickname);case`date-newest`:return new Date(t.updatedAt).getTime()-new Date(e.updatedAt).getTime();case`date-oldest`:return new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime();case`tags`:return t.tags.length-e.tags.length;default:return 0}}),e},[n,N,I,F]),Oe=(e,t)=>`https://www.faceit.com/en/players/${encodeURIComponent(t)}`,$=Object.values(n);return(0,x.jsxs)(`div`,{style:{width:`100%`,maxWidth:`100%`,boxSizing:`border-box`},children:[(0,x.jsx)(v,{fontSize:`xs`,color:`gray.400`,mb:4,children:t(`breadcrumb.playerTracking`)}),(0,x.jsxs)(ue,{bg:`gray.800`,p:4,mb:4,style:{width:`100%`,maxWidth:`100%`,boxSizing:`border-box`},children:[(0,x.jsxs)(y,{justify:`space-between`,align:`center`,style:{marginBottom:`20px`,width:`100%`},children:[(0,x.jsxs)(g,{align:`start`,spacing:0,style:{flex:1,minWidth:0},children:[(0,x.jsx)(v,{fontSize:`md`,fontWeight:`semibold`,style:{marginBottom:`4px`},children:t(`playerTracking.heading`)}),(0,x.jsx)(v,{fontSize:`xs`,color:`gray.400`,children:t(`playerTracking.counter`,{visible:Q.length,total:$.length,noun:$.length===1?t(`playerTracking.noun.one`):t(`playerTracking.noun.many`)})})]}),(0,x.jsxs)(y,{spacing:2,style:{flexShrink:0},children:[(0,x.jsxs)(A,{size:`sm`,colorScheme:`blue`,variant:`outline`,onClick:Te,children:[(0,x.jsx)(ae,{}),` `,t(`playerTracking.export`)]}),(0,x.jsxs)(A,{size:`sm`,colorScheme:`blue`,variant:`outline`,onClick:()=>{V(`merge`),ve()},children:[(0,x.jsx)(f,{}),` `,t(`playerTracking.import`)]})]})]}),(0,x.jsx)(`input`,{ref:K,type:`file`,accept:`.json`,style:{display:`none`},onChange:De}),$.length>0&&(0,x.jsxs)(g,{spacing:3,style:{marginBottom:`16px`,width:`100%`},children:[(0,x.jsx)(`div`,{style:{width:`100%`},children:(0,x.jsx)(ee,{placeholder:t(`playerTracking.searchPlaceholder`),value:N,onChange:P})}),(0,x.jsxs)(y,{spacing:2,width:`100%`,style:{flexWrap:`wrap`,width:`100%`},children:[(0,x.jsxs)(_,{value:F,onChange:e=>me(e.target.value),size:`sm`,bg:`gray.700`,color:`white`,style:{flex:1,minWidth:`150px`,maxWidth:`100%`},children:[(0,x.jsx)(`option`,{value:`date-newest`,children:t(`playerTracking.sort.newest`)}),(0,x.jsx)(`option`,{value:`date-oldest`,children:t(`playerTracking.sort.oldest`)}),(0,x.jsx)(`option`,{value:`name`,children:t(`playerTracking.sort.name`)}),(0,x.jsx)(`option`,{value:`tags`,children:t(`playerTracking.sort.tags`)})]}),Z.length>0&&(0,x.jsxs)(_,{value:I,onChange:e=>L(e.target.value),size:`sm`,bg:`gray.700`,color:`white`,style:{flex:1,minWidth:`150px`,maxWidth:`100%`},children:[(0,x.jsx)(`option`,{value:``,children:t(`playerTracking.filter.allTags`)}),Z.map(e=>(0,x.jsx)(`option`,{value:e,children:e},e))]})]})]}),$.length===0?(0,x.jsx)(`div`,{style:{textAlign:`center`,padding:`32px 0`},children:(0,x.jsx)(v,{fontSize:`sm`,color:`gray.400`,children:t(`playerTracking.emptyTracked`)})}):Q.length===0?(0,x.jsxs)(`div`,{style:{textAlign:`center`,padding:`32px 0`},children:[(0,x.jsx)(v,{fontSize:`sm`,color:`gray.400`,children:t(`playerTracking.emptyFiltered`)}),(0,x.jsx)(A,{size:`sm`,onClick:()=>{P(``),L(``)},style:{marginTop:`12px`},children:t(`playerTracking.clearFilters`)})]}):(0,x.jsx)(le,{spacing:3,style:{width:`100%`},children:Q.map(e=>(0,x.jsx)(de,{children:i===e.id?(0,x.jsxs)(g,{align:`stretch`,spacing:3,style:{width:`100%`},children:[(0,x.jsxs)(y,{justify:`space-between`,align:`center`,style:{width:`100%`},children:[(0,x.jsx)(v,{fontSize:`sm`,fontWeight:`bold`,color:`white`,style:{overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`,flex:1,minWidth:0},children:e.nickname}),(0,x.jsxs)(y,{spacing:1,style:{flexShrink:0},children:[(0,x.jsx)(j,{"aria-label":t(`playerTracking.aria.save`),size:`sm`,colorScheme:`green`,onClick:()=>X(e.id),children:(0,x.jsx)(ie,{})}),(0,x.jsx)(j,{"aria-label":t(`playerTracking.aria.cancel`),size:`sm`,colorScheme:`gray`,onClick:be,children:(0,x.jsx)(se,{})})]})]}),(0,x.jsxs)(`div`,{style:{width:`100%`},children:[(0,x.jsx)(M,{children:t(`playerTracking.notes`)}),(0,x.jsx)(ce,{value:C,onChange:e=>w(e.target.value),placeholder:t(`playerTracking.notesPlaceholder`),size:`sm`,bg:`gray.800`,color:`white`,rows:3,style:{width:`100%`,boxSizing:`border-box`}})]}),(0,x.jsxs)(`div`,{style:{width:`100%`},children:[(0,x.jsx)(M,{children:t(`playerTracking.tags`)}),(0,x.jsx)(te,{tags:T?T.split(`,`).map(e=>e.trim()).filter(e=>e):[],newTag:D,onNewTagChange:O,onAddTag:Ce,onRemoveTag:we,showCommonTags:!0,size:`sm`})]})]}):(0,x.jsxs)(g,{align:`stretch`,spacing:3,style:{width:`100%`},children:[(0,x.jsxs)(y,{justify:`space-between`,align:`flex-start`,style:{width:`100%`},children:[(0,x.jsxs)(g,{align:`start`,spacing:1,style:{flex:1,minWidth:0,maxWidth:`100%`},children:[(0,x.jsx)(y,{spacing:1,style:{alignItems:`center`,width:`100%`},children:(0,x.jsx)(h,{href:Oe(e.id,e.nickname),target:`_blank`,rel:`noopener noreferrer`,color:`blue.400`,fontSize:`sm`,style:{textDecoration:`none`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`,maxWidth:`100%`},children:(0,x.jsxs)(y,{spacing:1,style:{alignItems:`center`},children:[(0,x.jsx)(v,{fontSize:`sm`,fontWeight:`bold`,color:`white`,style:{lineHeight:`1.2`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:e.nickname}),(0,x.jsx)(re,{style:{width:`12px`,height:`12px`,flexShrink:0}})]})})}),(0,x.jsxs)(y,{spacing:2,style:{marginTop:`2px`,flexWrap:`wrap`,width:`100%`},children:[(0,x.jsxs)(y,{spacing:1,style:{alignItems:`center`,flexShrink:0},children:[(0,x.jsx)(ne,{style:{width:`12px`,height:`12px`,color:`#9CA3AF`,flexShrink:0}}),(0,x.jsx)(v,{fontSize:`xs`,color:`gray.400`,style:{lineHeight:`1.4`,whiteSpace:`nowrap`},children:t(`playerTracking.trackedAt`,{date:m(e.createdAt)})})]}),e.updatedAt!==e.createdAt&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(v,{fontSize:`xs`,color:`gray.500`,style:{flexShrink:0},children:`•`}),(0,x.jsx)(v,{fontSize:`xs`,color:`gray.400`,style:{lineHeight:`1.4`,whiteSpace:`nowrap`},children:t(`playerTracking.updatedAt`,{date:m(e.updatedAt)})})]})]})]}),(0,x.jsxs)(y,{spacing:1,style:{flexShrink:0},children:[(0,x.jsx)(j,{"aria-label":t(`playerTracking.aria.edit`),size:`sm`,colorScheme:`blue`,variant:`ghost`,onClick:()=>ye(e),children:(0,x.jsx)(oe,{})}),(0,x.jsx)(j,{"aria-label":t(`playerTracking.aria.delete`),size:`sm`,colorScheme:`red`,variant:`ghost`,onClick:()=>xe(e.id),children:(0,x.jsx)(p,{})})]})]}),e.notes&&(0,x.jsxs)(`div`,{style:{width:`100%`},children:[(0,x.jsx)(M,{children:t(`playerTracking.notes`)}),(0,x.jsx)(fe,{children:e.notes})]}),e.tags.length>0&&(0,x.jsxs)(`div`,{style:{width:`100%`},children:[(0,x.jsx)(M,{children:t(`playerTracking.tags`)}),(0,x.jsx)(y,{spacing:2,style:{flexWrap:`wrap`,gap:`6px`,width:`100%`},children:e.tags.map((e,t)=>(0,x.jsx)(pe,{type:`button`,"aria-pressed":I===e,onClick:()=>{L(t=>t===e?``:e),P(``)},children:e},t))})]})]})},e.id))})]}),(0,x.jsx)(k,{isOpen:he,leastDestructiveRef:G,onClose:q,title:t(`playerTracking.removeDialog.title`),confirmLabel:t(`playerTracking.removeDialog.confirm`),confirmColorScheme:`red`,onConfirm:Se,children:(0,x.jsx)(v,{fontSize:`sm`,color:`gray.300`,children:t(`playerTracking.removeDialog.body`)})}),(0,x.jsx)(k,{isOpen:ge,leastDestructiveRef:G,onClose:J,title:t(`playerTracking.importDialog.title`),confirmLabel:t(`playerTracking.importDialog.confirm`),confirmColorScheme:`blue`,onConfirm:()=>{J(),Ee()},children:(0,x.jsxs)(g,{align:`stretch`,spacing:4,children:[(0,x.jsx)(v,{fontSize:`sm`,color:`gray.300`,children:t(`playerTracking.importDialog.body`)}),(0,x.jsxs)(`div`,{children:[(0,x.jsx)(v,{fontSize:`xs`,color:`gray.400`,mb:2,children:t(`playerTracking.importDialog.modeLabel`)}),(0,x.jsxs)(_,{value:B,onChange:e=>V(e.target.value),size:`sm`,bg:`gray.700`,color:`white`,children:[(0,x.jsx)(`option`,{value:`merge`,children:t(`playerTracking.importDialog.modeMerge`)}),(0,x.jsx)(`option`,{value:`replace`,children:t(`playerTracking.importDialog.modeReplace`)})]}),(0,x.jsx)(v,{fontSize:`xs`,color:`gray.500`,mt:2,children:t(B===`merge`?`playerTracking.importDialog.modeMergeHint`:`playerTracking.importDialog.modeReplaceHint`)})]})]})})]})};export{N as default};