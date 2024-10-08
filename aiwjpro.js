/*************************************


*  *    @Author: 🌵🌵🌵
*  *    外教學習ai


**************************************
[rewrite_local]
^https?://chatai\.qupeiyin\.com/(user/memberData|member/index|basic/userModule|member/index) url script-response-body https://raw.githubusercontent.com/0l23456789/Quantumult-X/main/aiwjpro.js
[mitm] 
hostname = chatai.qupeiyin.com
*************************************/

var parr = $response.body
parr = parr.replace(/vip_endtime":".*?"/g,'vip_endtime":"4072302236"')
parr = parr.replace(/is_vip":"0"/g,'is_vip": "1"')
parr = parr.replace(/days":"1"/g,'days":"999"')
parr = parr.replace(/status":"\\d"/g,'status":"999"')
parr = parr.replace(/nickname":".*?"/g,'nickname":"🌵🌵🌵"')
parr = parr.replace(/endtime": ".*?"/g,'endtime":"1863316835"')
parr = parr.replace(/forbid_end_time":0/g,'forbid_end_time":1')
$done({ body: parr });