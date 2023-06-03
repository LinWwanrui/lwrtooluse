import{C as V}from"./CHS9001.80e57e4a.js";import{p as c}from"./post.ef99a887.js";import{s as B}from"./signature.13de0eef.js";import{E as p,_ as y}from"./index.20f86bbc.js";import{K as A,a1 as E,aa as w,m as _,p as F,Y as o,S as u,ah as a,F as S,a7 as x,R as k,W as I}from"./vue.48bd3665.js";import"./http.98d00b38.js";import"./___vite-browser-external_commonjs-proxy.b7c1514d.js";class L{static toChs23052208(t){const i=JSON.stringify(t);return JSON.parse(i)}static chs23052208ToJson(t){return JSON.stringify(t)}static init(){let t=`
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
                    "setl_id": "1",
                    "psn_no": "1"
                }
            }
        }
        `;return this.toChs23052208(JSON.parse(t))}}const N=A({name:"hainanTuiFei",setup(){const e=E({form:{fixmedins_code:"",oo1:"",setl_id:"",mdtrt_id:"",psn_no:""},options:[{value:"2305",label:"\u4F4F\u9662\u7ED3\u7B97\u64A4\u9500"},{value:"2208",label:"\u95E8\u8BCA\u7ED3\u7B97\u64A4\u9500"}]}),t=async()=>{let l=V.init();l.fixmedins_code=e.form.fixmedins_code,l.infno="9001",l.sign_no="",l.recer_sys_code="MBS_LOCAL",l.opter="001";let n=await c.postList(l,"http://10.103.129.219:8086/CSB",B.sign());return n.data.infcode!="0"&&p({showClose:!0,duration:5e3,message:n.data.err_msg,type:"error"}),n.data.output.signinoutb.sign_no};return{signIn:t,back:async()=>{let l=L.init();l.sign_no=await t(),l.infno=e.form.oo1,l.mdtrtarea_admvs="460299",l.insuplc_admdvs="460000",l.recer_sys_code="fsi",l.opter="001",l.input.data.mdtrt_id=e.form.mdtrt_id,l.input.data.setl_id=e.form.setl_id,l.input.data.psn_no=e.form.psn_no;let n=await c.postList(l,"http://10.103.129.219:8086/CSB",B.sign());n.data.infcode!="0"?p({showClose:!0,duration:5e3,message:n.data.err_msg,type:"error"}):p({showClose:!0,duration:5e3,message:"\u9000\u8D39\u6210\u529F\uFF1A"+n.data.output,type:"success"})},...w(e)}}}),O={class:"form-adapt-container layout-pd"};function J(e,t,i,l,n,U){const m=a("el-input"),r=a("el-form-item"),d=a("el-col"),g=a("el-option"),b=a("el-select"),C=a("el-row"),h=a("el-form"),f=a("el-card"),v=a("SvgIcon"),D=a("el-button");return _(),F("div",O,[o(f,{shadow:"hover",header:"\u8F93\u5165\u5FC5\u586B\u4FE1\u606F\u540E\u70B9\u51FB\u9000\u8D39"},{default:u(()=>[o(h,{model:e.form,size:"default","label-width":"100px",class:"mt35 mb35"},{default:u(()=>[o(C,{gutter:35},{default:u(()=>[o(d,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:u(()=>[o(r,{label:"\u673A\u6784\u7F16\u53F7"},{default:u(()=>[o(m,{modelValue:e.form.fixmedins_code,"onUpdate:modelValue":t[0]||(t[0]=s=>e.form.fixmedins_code=s),placeholder:"\u8BF7\u8F93\u5165\u5B9A\u70B9\u533B\u836F\u673A\u6784\u7F16\u53F7",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),o(d,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:u(()=>[o(r,{label:"\u7ED3\u7B97ID"},{default:u(()=>[o(m,{modelValue:e.form.setl_id,"onUpdate:modelValue":t[1]||(t[1]=s=>e.form.setl_id=s),placeholder:"\u8BF7\u8F93\u5165\u7ED3\u7B97ID",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),o(d,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:u(()=>[o(r,{label:"\u5C31\u8BCAID"},{default:u(()=>[o(m,{modelValue:e.form.mdtrt_id,"onUpdate:modelValue":t[2]||(t[2]=s=>e.form.mdtrt_id=s),placeholder:"\u8BF7\u8F93\u5165\u5C31\u8BCAID",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),o(d,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:u(()=>[o(r,{label:"\u4EBA\u5458\u7F16\u53F7"},{default:u(()=>[o(m,{modelValue:e.form.psn_no,"onUpdate:modelValue":t[3]||(t[3]=s=>e.form.psn_no=s),placeholder:"\u8BF7\u8F93\u5165\u4EBA\u5458\u7F16\u53F7",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),o(d,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:u(()=>[o(r,{label:"\u9000\u8D39\u7C7B\u578B"},{default:u(()=>[o(b,{modelValue:e.form.oo1,"onUpdate:modelValue":t[4]||(t[4]=s=>e.form.oo1=s),class:"m-2",placeholder:"\u9009\u62E9\u9000\u8D39\u7C7B\u578B"},{default:u(()=>[(_(!0),F(S,null,x(e.options,s=>(_(),k(g,{key:s.value,label:s.label,value:s.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),o(f,{shadow:"hover",header:"\u5F55\u5165"},{default:u(()=>[o(D,{onClick:e.back,size:"default",class:"mt15",type:"primary"},{default:u(()=>[o(v,{name:"iconfont icon-step"}),I("\u9000\u8D39 ")]),_:1},8,["onClick"])]),_:1})])}const W=y(N,[["render",J]]);export{W as default};
