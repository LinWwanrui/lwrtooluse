import{K as f,az as m,a1 as p,f as _,aa as C,m as t,p as n,q as r,X as T,F as k,a7 as h,ah as g,Y as v}from"./vue.48bd3665.js";import{u as w,_ as D}from"./index.20f86bbc.js";const N=f({name:"pagesWorkflowTool",setup(o,{emit:l}){const s=w(),{themeConfig:a}=m(s),i=p({toolList:[{icon:"ele-Help",title:"\u5E2E\u52A9",fnName:"help"},{icon:"ele-Download",title:"\u4E0B\u8F7D",fnName:"download"},{icon:"ele-Check",title:"\u63D0\u4EA4",fnName:"submit"},{icon:"ele-DocumentCopy",title:"\u590D\u5236",fnName:"copy"},{icon:"ele-Delete",title:"\u5220\u9664",fnName:"del"},{icon:"ele-FullScreen",title:"\u5168\u5C4F",fnName:"fullscreen"}]});return{setToolTitle:_(()=>{let{globalTitle:e}=a.value;return`${e}\u5DE5\u4F5C\u6D41`}),onToolClick:e=>{l("tool",e)},...C(i)}}});const y={class:"workflow-tool"},E={class:"pl15"},F={class:"workflow-tool-right"},$=["title","onClick"];function b(o,l,s,a,i,u){const c=g("SvgIcon");return t(),n("div",y,[r("div",E,T(o.setToolTitle),1),r("div",F,[(t(!0),n(k,null,h(o.toolList,(e,d)=>(t(),n("div",{class:"workflow-tool-icon",key:d,title:e.title,onClick:B=>o.onToolClick(e.fnName)},[v(c,{name:e.icon},null,8,["name"])],8,$))),128))])])}const I=D(N,[["render",b],["__scopeId","data-v-28fefbdd"]]);export{I as default};
