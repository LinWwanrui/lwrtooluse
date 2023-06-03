import{g as y}from"./get.50971a31.js";import{C as A}from"./CHS9001.80e57e4a.js";import{p as _}from"./post.cf78c211.js";import{p as R}from"./print.fee48790.js";import{E as w,_ as I}from"./index.66dbeab3.js";import{K as b,a1 as D,a as k,aa as x,m as L,p as P,Y as o,S as a,ah as p,W as f,q as h}from"./vue.48bd3665.js";import"./http.ef0593e9.js";class N{static toCHSP0001(t){const c=JSON.stringify(t);return JSON.parse(c)}static cHSP0001ToJson(t){return JSON.stringify(t)}static init(){let t=`
        {
            "TOKEN": "",
            "cainfo": "",
            "fixmedins_code": "P45010301036",
            "fixmedins_name": "\u94A6\u5DDE\u5E02\u7B2C\u4E00\u4EBA\u6C11\u533B\u9662",
            "inf_time": "2021-08-30 00:35:39",
            "infno": "P0001",
            "infver": "V1.0",
            "input": {
                "data": {
                    "setlId": "450100G0000145331973",
                    "mdtrtId": "450100G0000189618963",
                    "psn_no": "45000000000000000821660053",
                    "medinsSetlId": "P45010301036202209280809555607"
                }
            },
            "oinfno": "",
            "sign_no": "459900G0000024344716",
            "msgid": "100000202108172135160000726601",
            "opter": "4501030103612",
            "opter_name": "\u7CFB\u7EDF\u7BA1\u7406\u5458",
            "pay_loc": "1",
            "recer_admvs": "450199",
            "sender_admdvs": "450199",
            "insuplc_admdvs": "450199",
            "mdtrtarea_admvs": "450199",
            "recer_sys_code": "1",
            "opter_type": "1"
        }
        `;return this.toCHSP0001(JSON.parse(t))}}const $=b({name:"randomStatement",setup(){const n=D({ruleForm:{tcq:!0,orgname:"",orgcode:"",area:!0},iframeDom:null,printRef:null,iframeLoading:!0,iframeUrl:"",rules:D({orgcode:[{required:!0,message:"\u5B9A\u70B9\u7F16\u53F7\u5FC5\u586B\uFF0C\u4E0D\u80FD\u7559\u7A7A",trigger:"blur"}]})}),t=k(),c=r=>{R({printable:n.printRef,type:"html",scanStyles:!1,maxWidth:1e3,style:"@media print{.u_r06{margin-bottom:15px;}}"})},v=r=>{!r||r.validate(()=>{F()})},F=()=>{y.get("http://36.134.199.75:7777/neuyyfftool/api/neuyyfftool/siBalance/randomTodayRetailId").then(r=>{y.get("http://36.134.199.75:7777/report/Report-ResultAction.do?reportId=	REPORT-C9FC258221600001B6DE1D71660116AA&bdflag=1&retailid=	"+r.data.retailid.c[0]+r.data.retailid.c[1]+"&orgcode="+r.data.orgcode+"&showcode="+n.ruleForm.orgcode+"&loginname=drugstore&token=Neusoft123").then(e=>{B(e)})})},B=r=>{let e=r.data;for(;e.indexOf(`<link type="text/css"
	href="/report/`)!=-1;)e=e.replace(`<link type="text/css"
	href="/report/`,`<link type="text/css"
	href="../../neusoft/unieap/report/"`);e=e.replace(`<img
			src="/report/unieap/pages/report/images/progressbar.gif" />`,""),e=e.replace(`<img src="unieap/pages/report/jsp/show/lodop/img/loading.gif"
					style="width: 40px; height: 40px;" />`,""),document.getElementById("report").innerHTML=e,document.getElementById("processdiv").remove()};return{readLiqData:v,print:c,server:()=>{window.open("yyfftool://jsd_print_open/?")},write:r=>{!r||r.validate(()=>{y.get("http://36.134.199.75:7777/neuyyfftool/api/neuyyfftool/siBalance/randomTodayRetailId").then(e=>{let i=A.init();i.fixmedins_code=e.data.orgcode,i.infno="9001",i.sign_no="",i.recer_sys_code="MBS_LOCAL",i.opter=e.data.orgcode,_.postList(i,"http://10.98.34.114/mbs-hiIntf-nanning/web/api/fsi/callService").then(s=>{let u=N.init();u.fixmedins_code=e.data.orgcode,u.sign_no=s.data.output.signinoutb.sign_no,u.opter=e.data.orgcode,u.input.data.mdtrtId=e.data.mdtrtid,u.input.data.medinsSetlId=e.data.medinssetlid,u.input.data.psn_no=e.data.psnno,u.input.data.setlId=e.data.setlid,_.postList(u,"http://10.98.34.114/mbs-hiIntf-nanning/web/api/fsi/callService").then(g=>{if(g.data.infcode!=0)w({showClose:!0,duration:5e3,message:"\u533B\u4FDD\u4EA4\u6613P0001\u5931\u8D25:"+g.data.err_msg,type:"error"});else{let m=g.data;_.postList({shopid:n.ruleForm.orgcode.slice(1)},"http://36.134.199.75:7777/neuyyfftool/api/neuyyfftool/comShop/query").then(E=>{m.output=m.output.replace(/<fixmedins_name>.*<\/fixmedins_name>/g,"<fixmedins_name>"+E.data[0].shopname+"</fixmedins_name>"),m.output=m.output.replace(/<crter_name>.*<\/crter_name>/g,"<crter_name>"+n.ruleForm.orgcode+"</crter_name>"),_.postList(m,"http://localhost:9696/write").then(S=>{w({showClose:!0,duration:5e3,message:""+S.data.result,type:"success"})})})}})})})})},serverDown:()=>{window.open("yyfftool://jsd_print_close/?")},ruleFormRef:t,...x(n)}}}),z={class:"steps-container"},O={ref:"printRef"},q=h("div",{id:"report"},null,-1),T=[q],V=h("div",{id:"print"},null,-1);function H(n,t,c,v,F,B){const C=p("el-input"),d=p("el-form-item"),l=p("SvgIcon"),r=p("el-button"),e=p("el-form"),i=p("el-card");return L(),P("div",z,[o(i,{shadow:"hover",header:"\u64CD\u4F5C"},{default:a(()=>[o(e,{inline:!0,ref:"ruleFormRef",model:n.ruleForm,rules:n.rules},{default:a(()=>[o(d,{prop:"orgcode"},{default:a(()=>[o(C,{modelValue:n.ruleForm.orgcode,"onUpdate:modelValue":t[0]||(t[0]=s=>n.ruleForm.orgcode=s),placeholder:"\u8BF7\u8F93\u5165\u5B9A\u70B9\u7F16\u53F7"},null,8,["modelValue"])]),_:1}),o(d,null,{default:a(()=>[o(r,{onClick:t[1]||(t[1]=s=>n.readLiqData(n.ruleFormRef)),size:"default",type:"primary"},{default:a(()=>[o(l,{name:"iconfont icon-step"}),f(" \u67E5\u8BE2 ")]),_:1})]),_:1}),o(d,null,{default:a(()=>[o(r,{onClick:t[2]||(t[2]=s=>n.print(n.ruleFormRef)),size:"default"},{default:a(()=>[o(l,{name:"ele-Printer"}),f(" \u6253\u5370 ")]),_:1})]),_:1}),o(d,null,{default:a(()=>[o(r,{onClick:t[3]||(t[3]=s=>n.server()),size:"default",type:"warning"},{default:a(()=>[o(l,{name:"fa fa-server",size:30}),f(" \u542F\u52A8\u865A\u62DF\u670D\u52A1 ")]),_:1})]),_:1}),o(d,null,{default:a(()=>[o(r,{onClick:t[4]||(t[4]=s=>n.write(n.ruleFormRef)),size:"default"},{default:a(()=>[o(l,{name:"fa fa-file",size:30}),f(" \u7ED3\u7B97\u5355\u6570\u636E\u751F\u6210 ")]),_:1})]),_:1}),o(d,null,{default:a(()=>[o(r,{onClick:t[5]||(t[5]=s=>n.serverDown()),size:"default",type:"warning"},{default:a(()=>[o(l,{name:"fa fa-server",size:30}),f(" \u5173\u95ED\u865A\u62DF\u670D\u52A1 ")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1}),o(i,{shadow:"hover",header:"\u62A5\u8868\u5185\u5BB9"},{default:a(()=>[h("div",O,T,512),V]),_:1})])}const Y=I($,[["render",H]]);export{Y as default};
