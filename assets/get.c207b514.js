var s=Object.defineProperty;var u=(r,e,t)=>e in r?s(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var g=(r,e,t)=>(u(r,typeof e!="symbol"?e+"":e,t),t);import{h as o}from"./http.98d00b38.js";class h{constructor(){g(this,"getVoid",e=>{o.request({url:e,method:"get"})});g(this,"get",e=>o.request({url:e,method:"get"}));g(this,"get_config",(e,t)=>o.request({url:e,headers:t,method:"get"}))}}const d=new h;export{d as g};
