import{h as p,E as m,_ as D}from"./index.20f86bbc.js";import{K as _,a1 as w,aa as B,m as F,R as v,S as u,ah as c,Y as a,W as i}from"./vue.48bd3665.js";const g=window.client;class y{async telnet(e,t){p.objectUnavailable(t)&&(t=80);let s="";try{return s=await g.ping(e,t),s?"connect sucess":"connect fail"+s.toString()}catch(o){return o.message}}}const C=new y;class E{async telnet(e,t){return p.objectAvailable(window.client)?await C.telnet(e,t):"\u524D\u7AEF\u73AF\u5883\u6682\u4E0D\u652F\u6301\u6D4B\u8BD5"}}const T=new E,b=_({name:"ipAndPort",setup(){const n=w({});return{netTest:async(t,s)=>{let o=await T.telnet("10.98.34.192");m({showClose:!0,duration:5e3,message:o,type:"info"})},...B(n)}}});function $(n,e,t,s,o,h){const l=c("SvgIcon"),r=c("el-button"),d=c("el-card");return F(),v(d,{shadow:"hover",header:"\u7F51\u7EDC\u6D4B\u8BD5"},{default:u(()=>[a(r,{onClick:e[0]||(e[0]=f=>n.netTest("10.98.34.192",80)),size:"default",class:"ml-3",type:"primary"},{default:u(()=>[a(l,{name:"iconfont icon-step"}),i(" \u5E7F\u897F\u5185\u7F51\u4E1C\u8F6F\u6D4B\u8BD5 ")]),_:1}),a(r,{onClick:e[1]||(e[1]=f=>n.netTest("10.103.129.219",8086)),size:"default",class:"ml-3",type:"warning"},{default:u(()=>[a(l,{name:"iconfont icon-step"}),i(" \u6D77\u5357\u533B\u4FDD\u5185\u7F51\u6D4B\u8BD5 ")]),_:1})]),_:1})}const x=D(b,[["render",$]]);export{x as default};
