import{d as c,u as f,_ as d}from"./index.20f86bbc.js";import{K as y,aC as u,a as h,az as R,aD as T,b as i,e as v,n as C,ah as a,m as L,R as M,S as x,Y as l}from"./vue.48bd3665.js";const b=y({name:"layoutTransverse",components:{LayoutHeader:u(()=>c(()=>import("./header.e060ee65.js"),["./header.e060ee65.js","./index.20f86bbc.js","./vue.48bd3665.js","./index.52abd502.css"],import.meta.url)),LayoutMain:u(()=>c(()=>import("./main.5755632d.js"),["./main.5755632d.js","./index.20f86bbc.js","./vue.48bd3665.js","./index.52abd502.css"],import.meta.url))},setup(){const e=h(""),n=f(),{themeConfig:r}=R(n),s=T(),o=()=>{e.value.layoutMainScrollbarRef.update()},t=()=>{C(()=>{setTimeout(()=>{o(),e.value.layoutMainScrollbarRef.wrap$.scrollTop=0},500)})};return i(()=>s.path,()=>{t()}),i(r,()=>{o()},{deep:!0}),v(()=>{t()}),{layoutMainRef:e}}});function S(e,n,r,s,o,t){const _=a("LayoutHeader"),p=a("LayoutMain"),m=a("el-container");return L(),M(m,{class:"layout-container flex-center layout-backtop"},{default:x(()=>[l(_),l(p,{ref:"layoutMainRef"},null,512)]),_:1})}const k=d(b,[["render",S]]);export{k as default};
