import{K as _,a1 as D,aH as E,aa as w,m as C,p as V,q as e,Y as a,S as s,ah as n,W as l,X as f}from"./vue.48bd3665.js";import{E as d,_ as h}from"./index.20f86bbc.js";const B=_({name:"paramsDynamic",setup(){const u=D({value:"",tagsViewName:"",tagsViewNameIsI18n:!1}),t=E();return{onGoDetailsClick:()=>{if(!u.tagsViewName)return d.warning("\u52A8\u6001\u8DEF\u7531tagsViewName\u4E3A\u5FC5\u586B\uFF0C\u56E0\u4E3A\u8DEF\u7531\u914D\u7F6E\u4E86");if(!u.value)return d.warning("\u8DEF\u7531\u53C2\u6570id\u503C\u4E3A\u5FC5\u586B");t.push({name:"paramsDynamicDetails",params:{t:"vue-next-admin",id:u.value,tagsViewName:u.tagsViewName}}),u.value=""},onChangeI18n:()=>{u.tagsViewNameIsI18n=!u.tagsViewNameIsI18n,u.tagsViewNameIsI18n?u.tagsViewName=JSON.stringify({"zh-cn":"\u6211\u662F\u52A8\u6001\u8DEF\u7531",en:"Im dynamic routing","zh-tw":"\u6211\u662F\u52D5\u614B\u8DEF\u7531"}):u.tagsViewName="\u6211\u662F\u52A8\u6001\u8DEF\u7531\u6D4B\u8BD5tagsViewName(\u975E\u56FD\u9645\u5316)"},...w(u)}}}),N={class:"layout-padding"},A={class:"layout-padding-auto layout-padding-view"},v={class:"flex-margin",style:{width:"400px"}},y=e("div",null,"1\u3001\u8BBE\u7F6E\u975E\u56FD\u9645\u5316\uFF1A\u683C\u5F0F\uFF1AtagsViewName=xxx",-1),I=e("br",null,null,-1),b=e("div",null,'2\u3001\u8BBE\u7F6E\u56FD\u9645\u5316\uFF1A\u683C\u5F0F\uFF1AtagsViewName=JSON.stringify({"zh-cn":"\u6D4B\u8BD5\u7528","en":"test+page","zh-tw":"\u6E2C\u8A66\u7528"})',-1),k=e("br",null,null,-1),x=e("div",null,"3\u3001\u8BBE\u7F6E\u56FD\u9645\u5316\u540E\uFF0C\u53BB\u9876\u680F\u5207\u6362\u8BED\u8A00\u67E5\u770B\u6F14\u793A\u6548\u679C",-1),z=e("br",null,null,-1),S=e("div",null,[l(" 4\u3001 "),e("a",{href:"https://gitee.com/q7but",target:"_black"},"\u611F\u8C22@q7but"),l("\u3001 "),e("a",{href:"https://gitee.com/lyt-top/vue-next-admin/pulls/22/files",target:"_black"},"!22 add \u6DFB\u52A0\u81EA\u5B9A\u4E49 tagVIewName \u62D3\u5C55,\u652F\u6301\u56FD\u9645\u5316")],-1);function $(u,t,r,F,q,G){const p=n("el-alert"),i=n("el-input"),c=n("SvgIcon"),m=n("el-button"),g=n("el-result");return C(),V("div",N,[e("div",A,[e("div",v,[a(g,{icon:"warning",title:"\u52A8\u6001\u8DEF\u7531",subTitle:"\u53EF `\u5F00\u542F TagsView \u5171\u7528` \u8FDB\u884C\u5355\u6807\u7B7E\u6D4B\u8BD5"},{extra:s(()=>[a(p,{type:"success",closable:!1,class:"mb30"},{default:s(()=>[y,I,b,k,x,z,S]),_:1}),a(i,{modelValue:u.tagsViewName,"onUpdate:modelValue":t[0]||(t[0]=o=>u.tagsViewName=o),placeholder:"\u8BF7\u8F93\u5165tagsView \u540D\u79F0",clearable:"",class:"mb15",style:{width:"400px"}},null,8,["modelValue"]),a(i,{modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=o=>u.value=o),placeholder:"\u8BF7\u8F93\u5165\u8DEF\u7531\u53C2\u6570id\u503C",clearable:"",style:{width:"400px"}},null,8,["modelValue"]),a(m,{type:"primary",size:"default",class:"mt15",onClick:u.onGoDetailsClick},{default:s(()=>[a(c,{name:"iconfont icon-dongtai"}),l(" \u52A8\u6001\u8DEF\u7531\u4F20\u53C2 ")]),_:1},8,["onClick"]),a(m,{type:"primary",size:"default",class:"mt15",onClick:u.onChangeI18n},{default:s(()=>[a(c,{name:"iconfont icon-fuhao-zhongwen"}),l(" "+f(u.tagsViewNameIsI18n?"\u666E\u901A\u7684\u6F14\u793A":"\u56FD\u9645\u5316\u6F14\u793A"),1)]),_:1},8,["onClick"])]),_:1})])])])}const O=h(B,[["render",$]]);export{O as default};
