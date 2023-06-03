import{C}from"./CHS9001.80e57e4a.js";import{p as c}from"./post.cf78c211.js";import{s as f}from"./signature.d62cc43b.js";import{E as _,_ as b}from"./index.66dbeab3.js";import{K as y,a1 as v,aa as w,m as x,p as S,Y as o,S as n,ah as u,W as V}from"./vue.48bd3665.js";import"./http.ef0593e9.js";class A{static toChs2404(t){const l=JSON.stringify(t);return JSON.parse(l)}static chs2404ToJson(t){return JSON.stringify(t)}static init(){let t=`
        {
            "infno": "2305",
            "msgid": "H45019900055202203231147179456",
            "mdtrtarea_admvs": "450199",
            "insuplc_admdvs": "450199",
            "recer_sys_code": "MBS_LOCAL",
            "dev_no": "",
            "dev_safe_info": "",
            "cainfo": "",
            "signtype": "SM2",
            "infver": "V1.0",
            "opter_type": "1",
            "opter": "1633138901983008485",
            "opter_name": "\u6D4B\u8BD5\u6536\u8D39",
            "inf_time": "2022-03-23 11:47:17",
            "fixmedins_code": "H45012400011",
            "fixmedins_name": "\u6D77\u5357\u6D4B\u8BD5\u533B\u9662",
            "sign_no": "",
            "input": {
                "data": {
                    "mdtrt_id": "1",
                    "psn_no": "1"
                }
            }
        }
        `;return this.toChs2404(JSON.parse(t))}}const D=y({name:"hainanTuiYuan",setup(){const s=v({form:{fixmedins_code:"",mdtrt_id:"",psn_no:""}}),t=async()=>{let e=C.init();e.fixmedins_code=s.form.fixmedins_code,e.infno="9001",e.sign_no="",e.recer_sys_code="MBS_LOCAL",e.opter="001";let a=await c.postList(e,"http://10.103.129.219:8086/CSB",f.sign());return a.data.infcode!="0"&&_({showClose:!0,duration:5e3,message:a.data.err_msg,type:"error"}),a.data.output.signinoutb.sign_no};return{signIn:t,back:async()=>{let e=A.init();e.sign_no=await t(),e.infno="2404",e.mdtrtarea_admvs="460299",e.insuplc_admdvs="460000",e.recer_sys_code="fsi",e.opter="001",e.input.data.mdtrt_id=s.form.mdtrt_id,e.input.data.psn_no=s.form.psn_no;let a=await c.postList(e,"http://10.103.129.219:8086/CSB",f.sign());a.data.infcode!="0"?_({showClose:!0,duration:5e3,message:a.data.err_msg,type:"error"}):_({showClose:!0,duration:5e3,message:"\u9000\u9662\u6210\u529F\uFF1A"+a.data.output,type:"success"})},...w(s)}}}),k={class:"form-adapt-container layout-pd"};function E(s,t,l,e,a,L){const d=u("el-input"),i=u("el-form-item"),m=u("el-col"),g=u("el-row"),B=u("el-form"),p=u("el-card"),F=u("SvgIcon"),h=u("el-button");return x(),S("div",k,[o(p,{shadow:"hover",header:"\u8F93\u5165\u5FC5\u586B\u4FE1\u606F\u540E\u70B9\u51FB\u9000\u9662"},{default:n(()=>[o(B,{model:s.form,size:"default","label-width":"100px",class:"mt35 mb35"},{default:n(()=>[o(g,{gutter:35},{default:n(()=>[o(m,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:n(()=>[o(i,{label:"\u673A\u6784\u7F16\u53F7"},{default:n(()=>[o(d,{modelValue:s.form.fixmedins_code,"onUpdate:modelValue":t[0]||(t[0]=r=>s.form.fixmedins_code=r),placeholder:"\u8BF7\u8F93\u5165\u5B9A\u70B9\u533B\u836F\u673A\u6784\u7F16\u53F7",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),o(m,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:n(()=>[o(i,{label:"\u5C31\u8BCAID"},{default:n(()=>[o(d,{modelValue:s.form.mdtrt_id,"onUpdate:modelValue":t[1]||(t[1]=r=>s.form.mdtrt_id=r),placeholder:"\u8BF7\u8F93\u5165\u5C31\u8BCAID",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),o(m,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:n(()=>[o(i,{label:"\u4EBA\u5458\u7F16\u53F7"},{default:n(()=>[o(d,{modelValue:s.form.psn_no,"onUpdate:modelValue":t[2]||(t[2]=r=>s.form.psn_no=r),placeholder:"\u8BF7\u8F93\u5165\u4EBA\u5458\u7F16\u53F7",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),o(p,{shadow:"hover",header:"\u5F55\u5165"},{default:n(()=>[o(h,{onClick:s.back,size:"default",class:"mt15",type:"primary"},{default:n(()=>[o(F,{name:"iconfont icon-step"}),V("\u9000\u9662 ")]),_:1},8,["onClick"])]),_:1})])}const T=b(D,[["render",E]]);export{T as default};
