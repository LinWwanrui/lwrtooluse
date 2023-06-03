import{l as k,m as x,E as T,d as E,_ as g}from"./index.66dbeab3.js";import{K as O,aC as C,az as $,a as D,a1 as z,f as S,aa as V,m as I,p as L,Y as e,S as t,ah as n,q as d,W as s,X as c}from"./vue.48bd3665.js";const N=O({name:"systemMenu",components:{AddMenu:C(()=>E(()=>import("./addMenu.0ee2df1f.js"),["./addMenu.0ee2df1f.js","./index.66dbeab3.js","./vue.48bd3665.js","./index.52abd502.css"],import.meta.url)),EditMenu:C(()=>E(()=>import("./editMenu.b13669d9.js"),["./editMenu.b13669d9.js","./index.66dbeab3.js","./vue.48bd3665.js","./index.52abd502.css"],import.meta.url))},setup(){const u=k(),{routesList:_}=$(u),r=D(),i=D(),m=z({}),f=S(()=>_.value);return{addMenuRef:r,editMenuRef:i,onOpenAddMenu:()=>{r.value.openDialog()},onOpenEditMenu:l=>{i.value.openDialog(l)},menuTableData:f,onTabelRowDel:l=>{x.confirm(`\u6B64\u64CD\u4F5C\u5C06\u6C38\u4E45\u5220\u9664\u8DEF\u7531\uFF1A${l.path}, \u662F\u5426\u7EE7\u7EED?`,"\u63D0\u793A",{confirmButtonText:"\u5220\u9664",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{T.success("\u5220\u9664\u6210\u529F")}).catch(()=>{})},...V(m)}}}),P={class:"system-menu-container layout-pd"},q={class:"system-menu-search mb15"},K={class:"ml10"};function W(u,_,r,i,m,f){const h=n("el-input"),w=n("ele-Search"),p=n("el-icon"),l=n("el-button"),v=n("ele-FolderAdd"),F=n("SvgIcon"),a=n("el-table-column"),y=n("el-tag"),M=n("el-table"),b=n("el-card"),A=n("AddMenu"),B=n("EditMenu");return I(),L("div",P,[e(b,{shadow:"hover"},{default:t(()=>[d("div",q,[e(h,{size:"default",placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",style:{"max-width":"180px"}}),e(l,{size:"default",type:"primary",class:"ml10"},{default:t(()=>[e(p,null,{default:t(()=>[e(w)]),_:1}),s(" \u67E5\u8BE2 ")]),_:1}),e(l,{size:"default",type:"success",class:"ml10",onClick:u.onOpenAddMenu},{default:t(()=>[e(p,null,{default:t(()=>[e(v)]),_:1}),s(" \u65B0\u589E\u83DC\u5355 ")]),_:1},8,["onClick"])]),e(M,{data:u.menuTableData,style:{width:"100%"},"row-key":"path","tree-props":{children:"children",hasChildren:"hasChildren"}},{default:t(()=>[e(a,{label:"\u83DC\u5355\u540D\u79F0","show-overflow-tooltip":""},{default:t(o=>[e(F,{name:o.row.meta.icon},null,8,["name"]),d("span",K,c(u.$t(o.row.meta.title)),1)]),_:1}),e(a,{prop:"path",label:"\u8DEF\u7531\u8DEF\u5F84","show-overflow-tooltip":""}),e(a,{label:"\u7EC4\u4EF6\u8DEF\u5F84","show-overflow-tooltip":""},{default:t(o=>[d("span",null,c(o.row.component),1)]),_:1}),e(a,{label:"\u6743\u9650\u6807\u8BC6","show-overflow-tooltip":""},{default:t(o=>[d("span",null,c(o.row.meta.roles),1)]),_:1}),e(a,{label:"\u6392\u5E8F","show-overflow-tooltip":"",width:"80"},{default:t(o=>[s(c(o.$index),1)]),_:1}),e(a,{label:"\u7C7B\u578B","show-overflow-tooltip":"",width:"80"},{default:t(o=>[e(y,{type:"success",size:"small"},{default:t(()=>[s(c(o.row.xx)+"\u83DC\u5355",1)]),_:2},1024)]),_:1}),e(a,{label:"\u64CD\u4F5C","show-overflow-tooltip":"",width:"140"},{default:t(o=>[e(l,{size:"small",text:"",type:"primary",onClick:u.onOpenAddMenu},{default:t(()=>[s("\u65B0\u589E")]),_:1},8,["onClick"]),e(l,{size:"small",text:"",type:"primary",onClick:R=>u.onOpenEditMenu(o.row)},{default:t(()=>[s("\u4FEE\u6539")]),_:2},1032,["onClick"]),e(l,{size:"small",text:"",type:"primary",onClick:R=>u.onTabelRowDel(o.row)},{default:t(()=>[s("\u5220\u9664")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),_:1}),e(A,{ref:"addMenuRef"},null,512),e(B,{ref:"editMenuRef"},null,512)])}const j=g(N,[["render",W]]);export{j as default};