import{K as C,az as m,a1 as E,e as h,aa as g,m as B,p as v,Y as c,S as A,ah as l}from"./vue.48bd3665.js";import{n as D,p as _,s as w,q as R,_ as I}from"./index.20f86bbc.js";/*! js-cookie v3.0.1 | MIT */function d(u){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var a in t)u[a]=t[a]}return u}var U={read:function(u){return u[0]==='"'&&(u=u.slice(1,-1)),u.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(u){return encodeURIComponent(u).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function p(u,o){function t(n,i,e){if(!(typeof document>"u")){e=d({},o,e),typeof e.expires=="number"&&(e.expires=new Date(Date.now()+e.expires*864e5)),e.expires&&(e.expires=e.expires.toUTCString()),n=encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var r="";for(var s in e)!e[s]||(r+="; "+s,e[s]!==!0&&(r+="="+e[s].split(";")[0]));return document.cookie=n+"="+u.write(i,n)+r}}function a(n){if(!(typeof document>"u"||arguments.length&&!n)){for(var i=document.cookie?document.cookie.split("; "):[],e={},r=0;r<i.length;r++){var s=i[r].split("="),f=s.slice(1).join("=");try{var F=decodeURIComponent(s[0]);if(e[F]=u.read(f,F),n===F)break}catch{}}return n?e[n]:e}}return Object.create({set:t,get:a,remove:function(n,i){t(n,"",d({},i,{expires:-1}))},withAttributes:function(n){return p(this.converter,d({},this.attributes,n))},withConverter:function(n){return p(d({},this.converter,n),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(u)}})}var x=p(U,{path:"/"});const $=C({name:"limitsFrontEndPage",setup(){const u=D(),{userInfos:o}=m(u),t=E({val:"",userAuth:""}),a=()=>{t.userAuth=o.value.roles[0]},n=async()=>{_(),x.set("userName",t.userAuth),await u.setUserInfos(),await w(),R()};return h(()=>{a()}),{userInfos:o,onRadioChange:n,...g(t)}}}),j={class:"layout-pd"};function V(u,o,t,a,n,i){const e=l("el-alert"),r=l("el-radio-button"),s=l("el-radio-group"),f=l("el-card");return B(),v("div",j,[c(e,{title:"\u6E29\u99A8\u63D0\u793A\uFF1A\u6B64\u6743\u9650\u9875\u9762\u4EE3\u7801\u53CA\u6548\u679C\u53EA\u4F5C\u4E3A\u6F14\u793A\u4F7F\u7528\uFF0C\u82E5\u51FA\u73B0\u4E0D\u53EF\u9006\u8F6C\u7684bug\uFF0C\u8BF7\u5C1D\u8BD5 `F5` \u5237\u65B0\u9875\u9762\u3002\u82E5\u5B9E\u9645\u9879\u76EE\u4E2D\u975E\u8981\u5B9E\u73B0\u6B64\u7528\u6237\u6743\u9650\u5207\u6362\u529F\u80FD\uFF0C\r\n      \u8BF7\u5728\u5207\u6362\u65B9\u6CD5 `onRadioChange` \u6700\u540E\u9762\u6DFB\u52A0\u5237\u65B0\u4EE3\u7801 `window.location.reload()`\u3002 \u8BF7\u6CE8\u610F\uFF1A\u6309\u94AE\u6743\u9650\u9875\u9762\u4E2D\u7684\u6F14\u793A2\uFF08\u6307\u4EE4\u6A21\u5F0F\uFF09\u3001\u6F14\u793A3\uFF08\u51FD\u6570\u6A21\u5F0F\uFF09\r\n      \u5207\u6362\u7528\u6237\u65F6\u65E0\u6CD5\u52A8\u6001\u6F14\u793A\uFF0C\u60F3\u8981\u52A8\u6001\u6F14\u793A\uFF0C\u8BF7\u6309 `F5` \u6216\u8005\u6DFB\u52A0 `window.location.reload()`\u3002",type:"warning",closable:!1}),c(e,{title:`\u5F53\u524D\u7528\u6237\u9875\u9762\u6743\u9650\uFF1A[${u.userInfos.roles}]\uFF0C\u5F53\u524D\u7528\u6237\u6309\u94AE\u6743\u9650\uFF1A[${u.userInfos.authBtnList}]`,type:"success",closable:!1,class:"mt15"},null,8,["title"]),c(f,{shadow:"hover",header:"\u5207\u6362\u7528\u6237\u6F14\u793A\uFF0C\u524D\u7AEF\u63A7\u5236\u4E0D\u540C\u7528\u6237\u663E\u793A\u4E0D\u540C\u9875\u9762\u3001\u6309\u94AE\u6743\u9650",class:"mt15"},{default:A(()=>[c(s,{modelValue:u.userAuth,"onUpdate:modelValue":o[0]||(o[0]=F=>u.userAuth=F),size:"default",onChange:u.onRadioChange},{default:A(()=>[c(r,{label:"admin"}),c(r,{label:"common"})]),_:1},8,["modelValue","onChange"])]),_:1})])}const b=I($,[["render",V]]);export{b as default};
