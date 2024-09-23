
/*
项目名称： BeautyPluspro
项目作者： 🌵🌵🌵
下载地址： https://apps.apple.com/app/id622434129
使用说明： 先开脚本再打开软件，未成功尝试恢复购买

[rewrite_local]
https:\/\/(api\.mr\.pixocial\.com\/v1\/manual_unlock|newbeee-api\.beautyplus\.com\/api\/v1\/asset\/balance) url script-response-body https://raw.githubusercontent.com/0l23456789/Quantumult-X/main/BeautyPluspro.js

[mitm]
hostname = api.mr.pixocial.com, newbeee-api.beautyplus.com
*/
var objc = JSON.parse($response.body);

    objc = {
  
 "vip_expires_date": 3000330150,
"message": "success",
  "data": {
    "points": 999999999,
    "next_claim": 1,
    "gid": "2641810920",
    "balance": 999999999,
    "created_at": 1707331696
},
}

$done({body : JSON.stringify(objc)});