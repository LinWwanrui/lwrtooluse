import{K as c,aD as l,a1 as r,b as d,aa as _,m as p,p as f,q as o,X as m,Y as h,S as k,ah as v,aE as w,aF as y}from"./vue.48bd3665.js";import{a as g}from"./toolsValidate.09c34439.js";import{_ as b}from"./index.20f86bbc.js";const R=c({name:"layoutLinkView",setup(){const t=l(),e=r({currentRouteMeta:{isLink:"",title:""}}),a=()=>{const{origin:s,pathname:i}=window.location;g(e.currentRouteMeta.isLink)?window.open(e.currentRouteMeta.isLink):window.open(`${s}${i}#${e.currentRouteMeta.isLink}`)};return d(()=>t.path,()=>{e.currentRouteMeta=t.meta},{immediate:!0}),{onGotoFullPage:a,..._(e)}}});const n=t=>(w("data-v-eb3f01bf"),t=t(),y(),t),$={class:"layout-padding layout-link-container"},C={class:"layout-padding-auto layout-padding-view"},F={class:"layout-link-warp"},M=n(()=>o("i",{class:"layout-link-icon iconfont icon-xingqiu"},null,-1)),B={class:"layout-link-msg"},D=n(()=>o("i",{class:"iconfont icon-lianjie"},null,-1)),L=n(()=>o("span",null,"\u7ACB\u5373\u524D\u5F80\u4F53\u9A8C",-1));function S(t,e,a,s,i,E){const u=v("el-button");return p(),f("div",$,[o("div",C,[o("div",F,[M,o("div",B,'\u9875\u9762 "'+m(t.$t(t.currentRouteMeta.title))+'" \u5DF2\u5728\u65B0\u7A97\u53E3\u4E2D\u6253\u5F00',1),h(u,{class:"mt30",round:"",size:"default",onClick:t.onGotoFullPage},{default:k(()=>[D,L]),_:1},8,["onClick"])])])])}const V=b(R,[["render",S],["__scopeId","data-v-eb3f01bf"]]);export{V as default};
