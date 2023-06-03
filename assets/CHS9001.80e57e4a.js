class i{static toChs9001(s){const t=JSON.stringify(s);return JSON.parse(t)}static chs9001ToJson(s){return JSON.stringify(s)}static init(){let s=`
        {
            "infno": "9001",
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
                "signIn": {
                    "opter_no": "1633138901983008485",
                    "mac": "D8C4976F3988",
                    "ip": "192.168.33.1"
                }
            }
        }
        `;return this.toChs9001(JSON.parse(s))}}export{i as C};
