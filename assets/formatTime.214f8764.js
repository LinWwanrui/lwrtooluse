function p(t,e){let g=t.getDay(),u=E(t),l=Math.floor((t.getMonth()+3)/3).toString();const n={"Y+":t.getFullYear().toString(),"m+":(t.getMonth()+1).toString(),"d+":t.getDate().toString(),"H+":t.getHours().toString(),"M+":t.getMinutes().toString(),"S+":t.getSeconds().toString(),"q+":l},r={0:"\u65E5",1:"\u4E00",2:"\u4E8C",3:"\u4E09",4:"\u56DB",5:"\u4E94",6:"\u516D"},i={1:"\u4E00",2:"\u4E8C",3:"\u4E09",4:"\u56DB"};/(W+)/.test(e)&&(e=e.replace(RegExp.$1,RegExp.$1.length>1?RegExp.$1.length>2?"\u661F\u671F"+r[g]:"\u5468"+r[g]:r[g])),/(Q+)/.test(e)&&(e=e.replace(RegExp.$1,RegExp.$1.length==4?"\u7B2C"+i[l]+"\u5B63\u5EA6":i[l])),/(Z+)/.test(e)&&(e=e.replace(RegExp.$1,RegExp.$1.length==3?"\u7B2C"+u+"\u5468":u+""));for(let D in n){let s=new RegExp("("+D+")").exec(e);s&&(e=e.replace(s[1],RegExp.$1.length==1?n[D]:n[D].padStart(RegExp.$1.length,"0")))}return e}function E(t){let e=new Date(t.getTime()),g=e.getDay()||7;e.setDate(e.getDate()-g+1+5);let u=new Date(e.getFullYear(),0,1),l=u.getDay(),n=1;l!=0&&(n=7-l+1),u=new Date(e.getFullYear(),0,1+n);let r=Math.ceil((e.valueOf()-u.valueOf())/864e5);return Math.ceil(r/7)}function a(t){let e=new Date(t).getHours();return e<6?"\u51CC\u6668\u597D":e<9?"\u65E9\u4E0A\u597D":e<12?"\u4E0A\u5348\u597D":e<14?"\u4E2D\u5348\u597D":e<17?"\u4E0B\u5348\u597D":e<19?"\u508D\u665A\u597D":e<22?"\u665A\u4E0A\u597D":"\u591C\u91CC\u597D"}export{a,p as f};