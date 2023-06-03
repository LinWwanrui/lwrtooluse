import{E as g,_ as k}from"./index.66dbeab3.js";import{K as m,a as v,a1 as S,J as A,aa as w,m as i,p as D,Y as a,S as h,ah as s,ak as y,T,q as l,X as C,V as x,W as V,aE as I,aF as N}from"./vue.48bd3665.js";const L=m({name:"pagesTree",setup(){const e=v(),u=S({treeCheckAll:!1,treeLoading:!1,treeTableData:[],treeDefaultProps:{children:"children",label:"label"},treeSelArr:[],treeLength:0}),E=t=>{let n=0;t.map(r=>{r.children&&(n+=r.children.length)}),u.treeLength=n+t.length},b=()=>{u.treeCheckAll?e.value.setCheckedNodes(u.treeTableData):e.value.setCheckedKeys([])},p=()=>{u.treeSelArr=[],u.treeSelArr=e.value.getCheckedNodes(),u.treeSelArr.length==u.treeLength?u.treeCheckAll=!0:u.treeCheckAll=!1},_=()=>{if(e.value.getCheckedNodes().length<=0){g.warning("\u8BF7\u9009\u62E9\u5143\u7D20");return}},o=()=>{u.treeTableData=[{id:1,label:"12987121",label1:"\u597D\u6ECB\u597D\u5473\u9E21\u86CB\u4ED4",label2:"\u8377\u5170\u4F18\u8D28\u6DE1\u5976\uFF0C\u5976\u9999\u6D53\u800C\u4E0D\u817B",isShow:!0,children:[{id:11,label:"\u4E00\u7EA7 1-1",label1:"\u597D\u6ECB\u597D\u5473\u9E21\u86CB\u4ED4",label2:"\u8377\u5170\u4F18\u8D28\u6DE1\u5976\uFF0C\u5976\u9999\u6D53\u800C\u4E0D\u817B",isShow:!1},{id:12,label:"\u4E00\u7EA7 1-2",label1:"\u597D\u6ECB\u597D\u5473\u9E21\u86CB\u4ED4",label2:"\u8377\u5170\u4F18\u8D28\u6DE1\u5976\uFF0C\u5976\u9999\u6D53\u800C\u4E0D\u817B",isShow:!1}]},{id:2,label:"12987122",label1:"\u597D\u6ECB\u597D\u5473\u9E21\u86CB\u4ED4",label2:"\u8377\u5170\u4F18\u8D28\u6DE1\u5976\uFF0C\u5976\u9999\u6D53\u800C\u4E0D\u817B",isShow:!0,children:[{id:21,label:"\u4E8C\u7EA7 2-1",label1:"\u597D\u6ECB\u597D\u5473\u9E21\u86CB\u4ED4",label2:"\u8377\u5170\u4F18\u8D28\u6DE1\u5976\uFF0C\u5976\u9999\u6D53\u800C\u4E0D\u817B",isShow:!1},{id:22,label:"\u4E8C\u7EA7 2-2",label1:"\u597D\u6ECB\u597D\u5473\u9E21\u86CB\u4ED4",label2:"\u8377\u5170\u4F18\u8D28\u6DE1\u5976\uFF0C\u5976\u9999\u6D53\u800C\u4E0D\u817B",isShow:!1}]},{id:3,label:"12987123",label1:"\u597D\u6ECB\u597D\u5473\u9E21\u86CB\u4ED4",label2:"\u8377\u5170\u4F18\u8D28\u6DE1\u5976\uFF0C\u5976\u9999\u6D53\u800C\u4E0D\u817B",isShow:!0,children:[{id:31,label:"\u4E8C\u7EA7 3-1",label1:"\u597D\u6ECB\u597D\u5473\u9E21\u86CB\u4ED4",label2:"\u8377\u5170\u4F18\u8D28\u6DE1\u5976\uFF0C\u5976\u9999\u6D53\u800C\u4E0D\u817B",isShow:!1},{id:32,label:"\u4E8C\u7EA7 3-2",label1:"\u597D\u6ECB\u597D\u5473\u9E21\u86CB\u4ED4",label2:"\u8377\u5170\u4F18\u8D28\u6DE1\u5976\uFF0C\u5976\u9999\u6D53\u800C\u4E0D\u817B",isShow:!1},{id:33,label:"\u4E8C\u7EA7 3-3",label1:"\u597D\u6ECB\u597D\u5473\u9E21\u86CB\u4ED4",label2:"\u8377\u5170\u4F18\u8D28\u6DE1\u5976\uFF0C\u5976\u9999\u6D53\u800C\u4E0D\u817B",isShow:!1}]}],E(u.treeTableData)};return A(()=>{o()}),{treeTableRef:e,getTreeData:o,onCheckAllChange:b,onCheckTree:p,onSelect:_,...w(u)}}});const f=e=>(I("data-v-be5304d5"),e=e(),N(),e),$={class:"tree-container layout-pd"},z={class:"tree-head"},R={class:"tree-head-check"},K=f(()=>l("div",{class:"tree-head-one"},"\u5546\u54C1 ID",-1)),M=f(()=>l("div",{style:{flex:"1",display:"flex"}},[l("div",{class:"tree-head-two"},"\u5546\u54C1\u540D\u79F0"),l("div",{class:"tree-head-three"},"\u63CF\u8FF0")],-1)),P={class:"tree-custom-node"},q={style:{flex:"1"}},J={key:0,style:{flex:"1",display:"flex"}},U={type:"text",size:"default",style:{flex:"1"}},W={type:"text",size:"default",style:{flex:"1"}};function X(e,u,E,b,p,_){const o=s("el-checkbox"),t=s("el-tree"),n=s("SvgIcon"),r=s("el-button"),F=s("el-card"),B=y("loading");return i(),D("div",$,[a(F,{shadow:"hover",header:"element plus Tree \u6811\u5F62\u63A7\u4EF6\u6539\u6210\u8868\u683C"},{default:h(()=>[T((i(),D("div",null,[l("div",z,[l("div",R,[a(o,{modelValue:e.treeCheckAll,"onUpdate:modelValue":u[0]||(u[0]=c=>e.treeCheckAll=c),onChange:e.onCheckAllChange},null,8,["modelValue","onChange"])]),K,M]),a(t,{data:e.treeTableData,"show-checkbox":"","node-key":"id",ref:"treeTableRef",props:e.treeDefaultProps,onCheck:e.onCheckTree},{default:h(({node:c,data:d})=>[l("span",P,[l("span",q,C(c.label),1),d.isShow?(i(),D("span",J,[l("span",U,C(d.label1),1),l("span",W,C(d.label2),1)])):x("",!0)])]),_:1},8,["data","props","onCheck"])])),[[B,e.treeLoading]]),a(r,{onClick:e.onSelect,class:"mt15",size:"default",type:"primary"},{default:h(()=>[a(n,{name:"iconfont icon-shuxingtu"}),V(" \u9009\u62E9\u5143\u7D20 ")]),_:1},8,["onClick"])]),_:1})])}const G=k(L,[["render",X],["__scopeId","data-v-be5304d5"]]);export{G as default};