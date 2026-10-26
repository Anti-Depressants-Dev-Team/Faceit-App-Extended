import{i as e}from"./react-dom-yulZmupg.js";var t=e.button`
  padding: 6px 12px;
  font-size: 13px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: 0.2s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 36px;
  line-height: 1.4;
  white-space: nowrap;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  
  ${e=>e.variant===`primary`?`
        background-color: var(--fe-accent, #14B8A6);
        color: white;
        &:hover {
          background-color: var(--fe-accent-hover, #0D9488);
        }
        &:active {
          background-color: var(--fe-accent-hover, #0F766E);
        }
      `:e.variant===`secondary`?`
        background-color: rgb(45, 55, 72);
        color: rgb(226, 232, 240);
        &:hover {
          background-color: rgb(55, 65, 81);
        }
        &:active {
          background-color: rgb(31, 41, 55);
        }
      `:e.variant===`ghost`?`
        background-color: transparent;
        color: rgb(226, 232, 240);
        &:hover {
          background-color: rgba(55, 65, 81, 0.5);
        }
      `:`
      background-color: rgb(45, 55, 72);
      color: rgb(226, 232, 240);
      &:hover {
        background-color: rgb(55, 65, 81);
      }
    `}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,n=e.input`
  padding: 8px 12px;
  border: 1px solid #374151;
  border-radius: 4px;
  background-color: #1F2937;
  color: #E2E8F0;
  font-size: 14px;
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: var(--fe-accent, #14B8A6);
    box-shadow: 0 0 0 2px var(--fe-accent-muted, rgba(20, 184, 166, 0.2));
  }
  
  &::placeholder {
    color: #9CA3AF;
  }
`,r=e.select`
  padding: 8px 12px;
  border: 1px solid #374151;
  border-radius: 4px;
  background-color: #1F2937;
  color: #E2E8F0;
  font-size: 14px;
  width: 100%;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: var(--fe-accent, #14B8A6);
    box-shadow: 0 0 0 2px var(--fe-accent-muted, rgba(20, 184, 166, 0.2));
  }
  
  option {
    background-color: #1F2937;
    color: #E2E8F0;
  }
`,i=e.textarea`
  padding: 8px 12px;
  border: 1px solid #374151;
  border-radius: 4px;
  background-color: #1F2937;
  color: #E2E8F0;
  font-size: 14px;
  width: 100%;
  resize: vertical;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: var(--fe-accent, #14B8A6);
    box-shadow: 0 0 0 2px var(--fe-accent-muted, rgba(20, 184, 166, 0.2));
  }
  
  &::placeholder {
    color: #9CA3AF;
  }
`,a=e.div`
  display: ${e=>e.display||`block`};
  ${e=>e.flexDirection&&`flex-direction: ${e.flexDirection};`}
  ${e=>e.alignItems&&`align-items: ${e.alignItems};`}
  ${e=>e.justifyContent&&`justify-content: ${e.justifyContent};`}
  ${e=>e.gap&&`gap: ${e.gap};`}
  ${e=>e.mb&&`margin-bottom: ${e.mb};`}
  ${e=>e.mr&&`margin-right: ${e.mr};`}
  ${e=>e.flex&&`flex: ${e.flex};`}
  ${e=>e.flexShrink&&`flex-shrink: ${e.flexShrink};`}
  ${e=>e.position&&`position: ${e.position};`}
  ${e=>e.width&&`width: ${e.width};`}
`,o=e.span`
  ${e=>e.fontSize&&`font-size: ${e.fontSize};`}
  ${e=>e.color&&`color: ${e.color};`}
  ${e=>e.fontWeight&&`font-weight: ${e.fontWeight};`}
  ${e=>e.mb&&`margin-bottom: ${e.mb};`}
`,s=e.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 6px;
  border-radius: 9px;
  font-size: 11px;
  font-weight: 600;
  line-height: 1;
  
  ${e=>e.variant===`primary`?`
        background-color: var(--fe-accent, #14B8A6);
        color: white;
      `:e.variant===`danger`?`
        background-color: #F43F5E;
        color: white;
      `:`
      background-color: #F43F5E;
      color: white;
    `}
`;export{r as a,n as i,a as n,o,t as r,i as s,s as t};