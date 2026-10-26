import{g as e,i as t,l as n,y as r}from"./react-dom-yulZmupg.js";import{t as i}from"./StyledRoot-CpD4TNt7.js";import{y as a}from"./icons-Bp7F8Dhp.js";import{t as o}from"./Sidebar-BQ2z6LIO.js";var s=r(e(),1),c=t.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: min(700px, 100vw);
  box-sizing: border-box;
  background-color: #09090C;
  border-left: 1px solid #374151;
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.5);
  z-index: 99999;
  transform: translateX(${e=>e.$isOpen?`0`:`100%`});
  transition: transform 0.3s ease-in-out;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,l=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  padding: 8px 16px;
  border-bottom: 1px solid #374151;
  color: #e5e7eb;
  font-size: 14px;
  font-weight: 600;
`,u=t.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: #d1d5db;
  cursor: pointer;

  &:hover { background: #374151; color: white; }
  &:focus-visible { outline: 2px solid #ff5500; outline-offset: 2px; }
`,d=t.div`
  flex: 1;
  min-height: 0;
  overflow: hidden;
  height: 100%;

  /* Override Sidebar's 100vh/100vw to fill the panel instead */
  & > div {
    width: 100% !important;
    max-width: 100% !important;
    height: 100% !important;
  }

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #374151;
    border-radius: 4px;

    &:hover {
      background: #4B5563;
    }
  }
`,f=n(),p=({isOpen:e,onClose:t})=>{let n=(0,s.useRef)(null),r=(0,s.useRef)(null),p=(0,s.useRef)(null),[m,h]=(0,s.useState)(null);return(0,s.useEffect)(()=>{let e=document.getElementById(`faceit-extender`)?.shadowRoot;if(e){let t=e.getElementById(`faceit-extender-sidebar-styles`);t||(t=document.createElement(`div`),t.id=`faceit-extender-sidebar-styles`,e.prepend(t)),h(t)}},[]),(0,s.useEffect)(()=>{e&&m?(p.current=document.activeElement instanceof HTMLElement?document.activeElement:null,r.current?.focus({preventScroll:!0})):!e&&p.current&&(p.current.focus({preventScroll:!0}),p.current=null)},[e,m]),(0,s.useEffect)(()=>{if(!e)return;let r=e=>{e.key===`Escape`&&(n.current?.querySelector(`[role="alertdialog"][aria-modal="true"]`)||(e.preventDefault(),e.stopImmediatePropagation(),t()))},i=e=>{let r=e.composedPath();if(n.current&&r.includes(n.current))return;let i=document.getElementById(`faceit-extender-sidebar-btn`);i&&r.includes(i)||t()};return window.addEventListener(`keydown`,r,!0),document.addEventListener(`pointerdown`,i,!0),()=>{window.removeEventListener(`keydown`,r,!0),document.removeEventListener(`pointerdown`,i,!0)}},[e,t]),m?(0,f.jsx)(i,{target:m,children:(0,f.jsxs)(c,{ref:n,$isOpen:e,role:`dialog`,"aria-label":`FACEIT Extender settings`,"aria-hidden":!e,inert:!e,children:[(0,f.jsxs)(l,{children:[(0,f.jsx)(`span`,{children:`FACEIT Extender settings`}),(0,f.jsx)(u,{ref:r,type:`button`,onClick:t,"aria-label":`Close settings`,title:`Close settings (Esc)`,children:(0,f.jsx)(a,{size:20})})]}),(0,f.jsx)(d,{children:(0,f.jsx)(o,{})})]})}):null};export{p as default};