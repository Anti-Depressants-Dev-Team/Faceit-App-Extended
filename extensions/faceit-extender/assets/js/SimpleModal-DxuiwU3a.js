import{g as e,i as t,l as n,t as r,y as i}from"./react-dom-yulZmupg.js";import{f as a}from"./createFaceitExtenderQueryClient-CbFICmfN.js";var o=i(e(),1),s=i(r(),1),c=n(),l=t.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3100;
  display: ${e=>e.$isOpen?`flex`:`none`};
  align-items: center;
  justify-content: center;
  padding: 20px;
`,u=t.div`
  background-color: #09090C;
  color: #E2E8F0;
  border-radius: 8px;
  width: 90vw;
  max-width: ${e=>e.size===`small`?`500px`:e.size===`large`?`1200px`:`600px`};
  max-height: 85vh;
  min-height: ${e=>e.size===`large`?`400px`:`auto`};
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  z-index: 3101;
  overflow: hidden;
`,d=t.div`
  padding: 16px 24px;
  border-bottom: 1px solid #374151;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  
  h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    /* FACEIT styles page headings with !important */
    color: #F3F4F6 !important;
  }
`,f=t.button`
  background: none;
  border: none;
  color: #9CA3AF;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s;
  
  &:hover {
    background-color: #374151;
    color: white;
  }
  
  &::before {
    content: '×';
    font-size: 28px;
    line-height: 1;
  }
`,p=t.div`
  padding: 16px 24px;
  overflow-y: auto;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
`,m=t.div`
  padding: 16px 24px;
  border-top: 1px solid #374151;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`,h=({isOpen:e,onClose:t,title:n,children:r,footer:i,closeOnOverlayClick:h=!0,closeOnEsc:g=!0,size:_=`medium`})=>{let v=(0,o.useRef)(null),y=(0,o.useRef)(null),b=(0,o.useId)(),x=(0,o.useMemo)(()=>{if(typeof document>`u`||!document.body)return null;let e=document.getElementById(`faceit-extender-modal-portal`);return e||(e=document.createElement(`div`),e.id=`faceit-extender-modal-portal`,document.body.appendChild(e)),e},[]);(0,o.useEffect)(()=>{if(!e)return;let n=e=>{if(e.key===`Escape`)e.preventDefault(),e.stopImmediatePropagation(),g&&t();else if(e.key===`Tab`&&v.current){let t=[...v.current.querySelectorAll(`button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), a[href], [tabindex="0"]`)].filter(e=>e.getClientRects().length>0&&!e.closest(`[inert]`)),n=t[0],r=t[t.length-1];(!v.current.contains(document.activeElement)||(e.shiftKey?document.activeElement===n:document.activeElement===r))&&(e.preventDefault(),(e.shiftKey?r:n)?.focus()),e.stopImmediatePropagation()}};return window.addEventListener(`keydown`,n,!0),()=>{window.removeEventListener(`keydown`,n,!0)}},[e,t,g]),(0,o.useEffect)(()=>{if(!e||!x)return;let t=document.activeElement;return y.current?.focus({preventScroll:!0}),()=>{t instanceof HTMLElement&&t.isConnected&&t.focus({preventScroll:!0})}},[e,x]);let S=e=>{h&&e.target===e.currentTarget&&t()};if((0,o.useEffect)(()=>{e&&a.getState().close()},[e]),!e||!x)return null;let C=(0,c.jsx)(l,{$isOpen:e,onClick:S,children:(0,c.jsxs)(u,{ref:v,role:`dialog`,"aria-modal":`true`,"aria-labelledby":b,size:_,onClick:e=>e.stopPropagation(),children:[(0,c.jsxs)(d,{children:[(0,c.jsx)(`h2`,{id:b,ref:e=>e?.style.setProperty(`color`,`#F3F4F6`,`important`),children:n}),(0,c.jsx)(f,{ref:y,type:`button`,onClick:t,"aria-label":`Close`})]}),(0,c.jsx)(p,{children:r}),i&&(0,c.jsx)(m,{children:i})]})});return s.createPortal(C,x)};export{h as t};