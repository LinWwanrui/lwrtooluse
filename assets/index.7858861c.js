import{K as m,az as u,f,m as t,p as g,q as n,X as p}from"./vue.48bd3665.js";import{u as C,_ as c}from"./index.20f86bbc.js";import{l as d}from"./logo-mini.7749359e.js";const h=m({name:"layoutLogo",setup(){const e=C(),{themeConfig:o}=u(e),l=f(()=>{let{isCollapse:a,layout:i}=o.value;return!a||i==="classic"||document.body.clientWidth<1e3});return{logoMini:d,setShowLogo:l,themeConfig:o,onThemeConfigChange:()=>{if(o.value.layout==="transverse")return!1;o.value.isCollapse=!o.value.isCollapse}}}});const y=["src"],_=["src"];function v(e,o,l,r,a,i){return e.setShowLogo?(t(),g("div",{key:0,class:"layout-logo",onClick:o[0]||(o[0]=(...s)=>e.onThemeConfigChange&&e.onThemeConfigChange(...s))},[n("img",{src:e.logoMini,class:"layout-logo-medium-img"},null,8,y),n("span",null,p(e.themeConfig.globalTitle),1)])):(t(),g("div",{key:1,class:"layout-logo-size",onClick:o[1]||(o[1]=(...s)=>e.onThemeConfigChange&&e.onThemeConfigChange(...s))},[n("img",{src:e.logoMini,class:"layout-logo-size-img"},null,8,_)]))}const z=c(h,[["render",v],["__scopeId","data-v-58f6731e"]]);export{z as default};
