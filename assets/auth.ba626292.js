import{K as n,az as a,f as u,L as f,V as p}from"./vue.48bd3665.js";import{n as c,_ as i}from"./index.20f86bbc.js";const m=n({name:"auth",props:{value:{type:String,default:()=>""}},setup(t){const e=c(),{userInfos:s}=a(e);return{getUserAuthBtnList:u(()=>s.value.authBtnList.some(r=>r===t.value))}}});function d(t,e,s,o,r,l){return t.getUserAuthBtnList?f(t.$slots,"default",{key:0}):p("",!0)}const L=i(m,[["render",d]]);export{L as default};