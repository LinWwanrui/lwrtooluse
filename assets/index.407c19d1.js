import{s as e}from"./sm4.552097aa.js";import{K as u,a1 as c,aa as p,m,p as l,Y as o,S as i,ah as n,W as f}from"./vue.48bd3665.js";import{_ as d}from"./index.20f86bbc.js";import"./___vite-browser-external_commonjs-proxy.b7c1514d.js";const _=u({name:"sm4",setup(){const t=c({tableData:[],date:null});return{read:()=>{alert("SM4\u52A0\u5BC6ecb\u6A21\u5F0F, \u660E\u6587: Neusoft12#$, \u5BC6\u6587, "+e.encrypt("Neusoft12#$")),alert("SM4\u52A0\u5BC6ecb\u6A21\u5F0F, \u5BC6\u6587: "+e.encrypt("Neusoft12#$")+", \u660E\u6587, "+e.decrypt(e.encrypt("Neusoft12#$")))},...p(t)}}});function C(t,a,B,$,y,N){const s=n("SvgIcon"),r=n("el-button");return m(),l("div",null,[o(r,{onClick:t.read,size:"default",class:"mt15",type:"primary"},{default:i(()=>[o(s,{name:"iconfont icon-step"}),f(" \u8BFB\u53D6 ")]),_:1},8,["onClick"])])}const S=d(_,[["render",C]]);export{S as default};