/***********************************************
录屏大师
************************************************
[rewrite_local]
^https:\/\/iossjlplds\.sanwubeixin\.cn\/ct\/user\/info url script-response-body https://raw.githubusercontent.com/0l23456789/Quantumult-X/main/sjlpdspro.js
[mitm] 
hostname = iossjlplds.sanwubeixin.cn
*******************************/

let obj =  JSON.parse($response.body);

obj.data.isVip = true;
obj.data.vip_time = 32472115200;
  
$done({body: JSON.stringify(obj)});