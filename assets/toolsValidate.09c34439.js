function n(r){let e=r.replace(/(^\s*)|(\s*$)/g,"");return e=e.replace(/[^\d]/g,""),e=e.replace(/^0/g,""),e=e.replace(/^[1-9]\d\d{1,3}$/,"100"),e}function f(r){let e=s(r);return e=e.replace(/^[1-9]\d\d{1,3}$/,"100"),e=e.replace(/^100\.$/,"100"),e}function s(r){let e=r.replace(/(^\s*)|(\s*$)/g,"");return e=e.replace(/[^\d.]/g,""),e=e.replace(/^0{2}$/g,"0"),e=e.replace(/^\./g,""),e=e.replace(".","$#$").replace(/\./g,"").replace("$#$","."),e=e.replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3"),e}function d(r){let e=r.replace(/(^\s*)|(\s*$)/g,"");return e=e.replace(/[\.]*/g,""),e=e.replace(/(^0[\d]*)$/g,"0"),e=e.replace(/^0\d$/g,"0"),e=e.replace(/[^\d]/g,""),e}function l(r){let e=r.replace(/[\u4e00-\u9fa5\s]+/g,"");return e=e.replace(/(^\s*)|(\s*$)/g,""),e}function i(r){let e=r.replace(/[a-zA-Z]+/g,"");return e=e.replace(/(^\s*)|(\s*$)/g,""),e}function c(r){return r.replace(/(^\s*)|(\s*$)/g,"")}function $(r){let e=s(r);return e=e.toString().split("."),e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),e=e.join("."),e}function p(r,e="",t="red"){return e.replace(new RegExp(r,"gi"),`<span style='color: ${t}'>${r}</span>`)}function o(r,e="\u4EDF\u4F70\u62FE\u4EBF\u4EDF\u4F70\u62FE\u4E07\u4EDF\u4F70\u62FE\u5143\u89D2\u5206",t=""){r+="00";let u=r.indexOf(".");u>=0&&(r=r.substring(0,u)+r.substr(u+1,2)),e=e.substr(e.length-r.length);for(let a=0;a<r.length;a++)t+="\u96F6\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396".substr(r.substr(a,1),1)+e.substr(a,1);return t=t.replace(/零角零分$/,"\u6574").replace(/零[仟佰拾]/g,"\u96F6").replace(/零{2,}/g,"\u96F6").replace(/零([亿|万])/g,"$1").replace(/零+元/,"\u5143").replace(/亿零{0,3}万/,"\u4EBF").replace(/^元/,"\u96F6\u5143"),t}function g(r){return!!/^((12[0-9])|(13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0|1,5-9]))\d{8}$/.test(r)}function z(r){return!!/\d{3}-\d{8}|\d{4}-\d{7}/.test(r)}function A(r){return!!/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/.test(r)}function y(r){return!!/^[a-zA-Z]\w{5,15}$/.test(r)}function F(r){return!!/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&\.*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&\.*]+$)(?![\d!@#$%^&\.*]+$)[a-zA-Z\d!@#$%^&\.*]{6,16}$/.test(r)}function v(r){let e="";return/^(?:\d+|[a-zA-Z]+|[!@#$%^&\.*]+){6,16}$/.test(r)&&(e="\u5F31"),/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&\.*]+$)[a-zA-Z\d!@#$%^&\.*]{6,16}$/.test(r)&&(e="\u4E2D"),/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&\.*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&\.*]+$)(?![\d!@#$%^&\.*]+$)[a-zA-Z\d!@#$%^&\.*]{6,16}$/.test(r)&&(e="\u5F3A"),e}function Z(r){return!!/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(r)}function b(r){return!!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(r)}function E(r){return!!/^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(r)}function P(r){return!!/^[\u4e00-\u9fa5]{1,6}(·[\u4e00-\u9fa5]{1,6}){0,2}$/.test(r)}function m(r){return!!/^[1-9][0-9]{5}$/.test(r)}function N(r){return!!/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(r)}function D(r){return!!/^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/.test(r)}export{N as a,n as b,f as c,s as d,d as e,l as f,i as g,$ as h,p as i,o as j,g as k,z as l,A as m,y as n,F as o,v as p,Z as q,b as r,E as s,P as t,m as u,c as v,D as w};