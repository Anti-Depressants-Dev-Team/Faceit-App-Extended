import{c as e,g as t,i as n,l as r}from"./react-dom-yulZmupg.js";import{g as i}from"./createFaceitExtenderQueryClient-CbFICmfN.js";import{i as a,m as o}from"./Sidebar-BQ2z6LIO.js";t();var s=r(),c=n.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,l=n.iframe`
  width: 100%;
  height: 500px;
  border: 0;
  display: block;
`,u=`https://games.tapit.gg/?game=more-less&referralCode=faceitextend&width=100%25&height=450`,d=()=>{let{t}=e(),{data:n}=i(),r=n?.platforms?.steam?.id64,d=r?`${u}&steamId=${r}`:u;return(0,s.jsxs)(a,{mb:6,children:[(0,s.jsx)(o,{fontSize:`xs`,color:`gray.400`,mb:4,children:t(`breadcrumb.tradeitMinigames`)}),(0,s.jsx)(c,{children:(0,s.jsx)(l,{src:d,title:t(`sidebar.tab.tradeitMinigames`),allow:`clipboard-write`})})]})};export{d as default};