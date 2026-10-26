import{g as e,i as t,l as n,y as r}from"./react-dom-yulZmupg.js";import{m as i,p as a}from"./icons-Bp7F8Dhp.js";var o=r(e(),1),s=n(),c=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 16px;
`,l=t.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
`,u=t.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  color: #E2E8F0;
`,d=t.div`
  font-size: 12px;
  line-height: 1.45;
  color: #9CA3AF;
`,f=t.button`
  padding: 6px 16px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  cursor: ${e=>e.disabled?`not-allowed`:`pointer`};
  min-width: 60px;
  flex-shrink: 0;
  transition: all 0.2s;
  background-color: ${e=>e.$isChecked?`#38A169`:`#4A5568`};
  color: white;
  opacity: ${e=>e.disabled?.5:1};
  
  &:hover {
    background-color: ${e=>e.disabled?e.$isChecked?`#38A169`:`#4A5568`:e.$isChecked?`#2F855A`:`#6B7280`};
  }
`,p=({label:e,ariaLabelledBy:t,isChecked:n,onChange:r,isDisabled:i,remark:a})=>{let p=(0,o.useId)();return(0,s.jsxs)(c,{children:[(e||a)&&(0,s.jsxs)(l,{children:[(0,s.jsx)(u,{children:e}),a&&(0,s.jsx)(d,{id:p,children:a})]}),(0,s.jsx)(f,{$isChecked:n,type:`button`,role:`switch`,"aria-label":t?void 0:e,"aria-labelledby":t,"aria-checked":n,"aria-describedby":a?p:void 0,onClick:r,disabled:i,children:n?`ON`:`OFF`})]})},m=t.div`
  position: relative;
  display: flex;
  align-items: center;
`,h=t.div`
  position: absolute;
  left: 12px;
  pointer-events: none;
  display: flex;
  align-items: center;
  z-index: 1;
  color: #9CA3AF;
`,g=t.input`
  width: 100%;
  padding: ${e=>e.size===`sm`?`6px 12px 6px 36px`:`8px 16px 8px 40px`};
  font-size: ${e=>e.size===`sm`?`14px`:`16px`};
  border: 1px solid #4A5568;
  border-radius: 4px;
  background-color: #374151;
  color: white;
  transition: all 0.2s;
  
  &::placeholder {
    color: #9CA3AF;
  }
  
  &:hover {
    border-color: #6B7280;
  }
  
  &:focus {
    outline: none;
    border-color: #3182CE;
    box-shadow: 0 0 0 1px #3182CE;
  }
`,_=({placeholder:e=`Search...`,value:t,onChange:n,size:r=`sm`})=>(0,s.jsxs)(m,{children:[(0,s.jsx)(h,{children:(0,s.jsx)(a,{})}),(0,s.jsx)(g,{placeholder:e,value:t,onChange:e=>n(e.target.value),size:r})]}),v=t.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 6px;
  border: none;
  font-family: inherit;
  font-size: ${e=>e.fontSize===`xs`?`12px`:e.fontSize===`sm`?`14px`:`12px`};
  background-color: ${e=>e.colorScheme===`blue`?`#3182CE`:e.colorScheme===`green`?`#38A169`:e.colorScheme===`red`?`#E53E3E`:e.colorScheme===`gray`?`#4A5568`:`#3182CE`};
  color: white;
  cursor: ${e=>e.$clickable?`pointer`:`default`};
  transition: opacity 0.2s;
  
  &:hover {
    opacity: ${e=>e.$clickable?.7:1};
  }
`,y=({tag:e,displayText:t,onRemove:n,onClick:r,colorScheme:i=`blue`,fontSize:a=`xs`,showRemoveIcon:o=!0})=>{let c=()=>{r?r(e):n&&n(e)},l=t||e,u=!!(r||n);return(0,s.jsxs)(v,{as:u?`button`:`span`,type:u?`button`:void 0,"aria-label":!r&&n?`Remove tag ${e}`:void 0,colorScheme:i,fontSize:a,$clickable:u,onClick:u?c:void 0,children:[l,` `,o&&n&&`×`]})},b=[`toxic`,`friendly`,`smurf`,`cheater`,`good teammate`,`AWPer`,`IGL`,`support`],x=t.div``,S=t.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 8px;
`,C=t.div`
  display: flex;
  gap: 8px;
  margin-bottom: ${e=>e.showCommonTags?`8px`:`0`};
`,w=t.input`
  flex: 1;
  padding: ${e=>e.size===`sm`?`6px 12px`:`8px 16px`};
  font-size: ${e=>e.size===`sm`?`14px`:`16px`};
  border: 1px solid #4A5568;
  border-radius: 4px;
  background-color: #374151;
  color: white;
  transition: all 0.2s;
  
  &::placeholder {
    color: #9CA3AF;
  }
  
  &:focus {
    outline: none;
    border-color: #3182CE;
    box-shadow: 0 0 0 1px #3182CE;
  }
`,T=t.button`
  padding: ${e=>e.size===`sm`?`6px`:`8px`};
  border: 1px solid #4A5568;
  border-radius: 4px;
  background-color: #4A5568;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  
  &:hover {
    background-color: #6B7280;
    border-color: #6B7280;
  }
  
  &:active {
    background-color: #374151;
  }
`,E=t.div`
  margin-top: 8px;
`,D=t.div`
  font-size: 12px;
  color: #9CA3AF;
  margin-bottom: 4px;
`,O=t.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`,k=({tags:e,newTag:t,onNewTagChange:n,onAddTag:r,onRemoveTag:a,showCommonTags:c=!0,placeholder:l=`Add tag...`,size:u=`sm`})=>{let d=(0,o.useRef)(null),f=e=>{r(e),d.current?.focus({preventScroll:!0})},p=e=>{a(e),d.current?.focus({preventScroll:!0})};return(0,s.jsxs)(x,{children:[e.length>0&&(0,s.jsx)(S,{children:e.map((e,t)=>(0,s.jsx)(y,{tag:e,onRemove:p},t))}),(0,s.jsxs)(C,{showCommonTags:c,children:[(0,s.jsx)(w,{ref:d,"aria-label":l,value:t,onChange:e=>n(e.target.value),placeholder:l,size:u,onKeyPress:e=>{e.key===`Enter`&&r()}}),(0,s.jsx)(T,{"aria-label":`Add tag`,size:u,onClick:()=>f(),children:(0,s.jsx)(i,{})})]}),c&&b.length>0&&(0,s.jsxs)(E,{children:[(0,s.jsx)(D,{children:`Common tags:`}),(0,s.jsx)(O,{children:b.map(t=>e.includes(t)?null:(0,s.jsx)(y,{tag:t,displayText:`+ ${t}`,onClick:()=>f(t),colorScheme:`gray`,showRemoveIcon:!1},t))})]})]})};export{_ as n,p as r,k as t};