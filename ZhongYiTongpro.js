/**************************
 
*  * @Author: 🌵🌵🌵

    \中\醫\通\


***************************


[rewrite_local]
https:\/\/www\.gsstargroup\.com\/riddles url script-response-body https://raw.githubusercontent.com/0l23456789/Quantumult-X/main/ZhongYiTongpro.js

[mitm]
hostname = www.gsstargroup.com

**************************/


let obj = JSON.parse($response.body);

// 填入会员数据 loginname参数即可共享会员
// obj.loginname = "";

obj.diff = "2222";
obj.freegold = "2222";
obj.memberdays = "2222";
obj.package = "6";

$done({ body: JSON.stringify(obj) });