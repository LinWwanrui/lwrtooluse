import{K as A,a1 as C,e as S,aa as v,m as f,p as b,Y as e,S as o,ah as t,q as E,W as V,X as _,V as U}from"./vue.48bd3665.js";import{_ as k}from"./index.20f86bbc.js";const y=A({name:"systemAddDept",setup(){const l=C({isShowDialog:!1,ruleForm:{deptLevel:[],deptName:"",person:"",phone:"",email:"",sort:0,status:!0,describe:""},deptData:[]}),u=()=>{l.isShowDialog=!0},m=()=>{l.isShowDialog=!1},r=()=>{m()},i=()=>{m()},p=()=>{l.deptData.push({deptName:"vueNextAdmin",createTime:new Date().toLocaleString(),status:!0,sort:Math.random(),describe:"\u9876\u7EA7\u90E8\u95E8",id:Math.random(),children:[{deptName:"IT\u5916\u5305\u670D\u52A1",createTime:new Date().toLocaleString(),status:!0,sort:Math.random(),describe:"\u603B\u90E8",id:Math.random()},{deptName:"\u8D44\u672C\u63A7\u80A1",createTime:new Date().toLocaleString(),status:!0,sort:Math.random(),describe:"\u5206\u90E8",id:Math.random()}]})};return S(()=>{p()}),{openDialog:u,closeDialog:m,onCancel:r,onSubmit:i,...v(l)}}}),x={class:"system-add-dept-container"},L={key:0},M={class:"dialog-footer"};function T(l,u,m,r,i,p){const D=t("el-cascader"),s=t("el-form-item"),d=t("el-col"),n=t("el-input"),g=t("el-input-number"),h=t("el-switch"),B=t("el-row"),w=t("el-form"),c=t("el-button"),N=t("el-dialog");return f(),b("div",x,[e(N,{title:"\u65B0\u589E\u90E8\u95E8",modelValue:l.isShowDialog,"onUpdate:modelValue":u[8]||(u[8]=a=>l.isShowDialog=a),width:"769px"},{footer:o(()=>[E("span",M,[e(c,{onClick:l.onCancel,size:"default"},{default:o(()=>[V("\u53D6 \u6D88")]),_:1},8,["onClick"]),e(c,{type:"primary",onClick:l.onSubmit,size:"default"},{default:o(()=>[V("\u65B0 \u589E")]),_:1},8,["onClick"])])]),default:o(()=>[e(w,{model:l.ruleForm,size:"default","label-width":"90px"},{default:o(()=>[e(B,{gutter:35},{default:o(()=>[e(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[e(s,{label:"\u4E0A\u7EA7\u90E8\u95E8"},{default:o(()=>[e(D,{options:l.deptData,props:{checkStrictly:!0,value:"deptName",label:"deptName"},placeholder:"\u8BF7\u9009\u62E9\u90E8\u95E8",clearable:"",class:"w100",modelValue:l.ruleForm.deptLevel,"onUpdate:modelValue":u[0]||(u[0]=a=>l.ruleForm.deptLevel=a)},{default:o(({node:a,data:F})=>[E("span",null,_(F.deptName),1),a.isLeaf?U("",!0):(f(),b("span",L," ("+_(F.children.length)+") ",1))]),_:1},8,["options","modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(s,{label:"\u90E8\u95E8\u540D\u79F0"},{default:o(()=>[e(n,{modelValue:l.ruleForm.deptName,"onUpdate:modelValue":u[1]||(u[1]=a=>l.ruleForm.deptName=a),placeholder:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(s,{label:"\u8D1F\u8D23\u4EBA"},{default:o(()=>[e(n,{modelValue:l.ruleForm.person,"onUpdate:modelValue":u[2]||(u[2]=a=>l.ruleForm.person=a),placeholder:"\u8BF7\u8F93\u5165\u8D1F\u8D23\u4EBA",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(s,{label:"\u624B\u673A\u53F7"},{default:o(()=>[e(n,{modelValue:l.ruleForm.phone,"onUpdate:modelValue":u[3]||(u[3]=a=>l.ruleForm.phone=a),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(s,{label:"\u90AE\u7BB1"},{default:o(()=>[e(n,{modelValue:l.ruleForm.email,"onUpdate:modelValue":u[4]||(u[4]=a=>l.ruleForm.email=a),placeholder:"\u8BF7\u8F93\u5165",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(s,{label:"\u6392\u5E8F"},{default:o(()=>[e(g,{modelValue:l.ruleForm.sort,"onUpdate:modelValue":u[5]||(u[5]=a=>l.ruleForm.sort=a),min:0,max:999,"controls-position":"right",placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",class:"w100"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:o(()=>[e(s,{label:"\u90E8\u95E8\u72B6\u6001"},{default:o(()=>[e(h,{modelValue:l.ruleForm.status,"onUpdate:modelValue":u[6]||(u[6]=a=>l.ruleForm.status=a),"inline-prompt":"","active-text":"\u542F","inactive-text":"\u7981"},null,8,["modelValue"])]),_:1})]),_:1}),e(d,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20"},{default:o(()=>[e(s,{label:"\u90E8\u95E8\u63CF\u8FF0"},{default:o(()=>[e(n,{modelValue:l.ruleForm.describe,"onUpdate:modelValue":u[7]||(u[7]=a=>l.ruleForm.describe=a),type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u90E8\u95E8\u63CF\u8FF0",maxlength:"150"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])])}const q=k(y,[["render",T]]);export{q as default};
