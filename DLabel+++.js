/*************************************

*  *    @Author: 🌵🌵🌵
项目名称：DLabelpro
解锁功能不显示有会员

**************************************

[rewrite_local]
^https:\/\/dlabel\.ctaiot\.com\/api\/config\/list\.json\?mcontext url script-response-body https://raw.githubusercontent.com/0l23456789/Quantumult-X/main/DLabel+++.js

[mitm]
hostname = dlabel.ctaiot.com
*************************************/


var parr = JSON.parse($response.body);
parr.data.vipInfo.baseInfo = {
    "levelName" : "高级会员",
    "equityCount" : 24,
    "forever" : 1,
    "levelDesc" : "高级会员",
    "levelNo" : 3
};
parr.data.vipInfo.funcInfo.forEach((item) => {
    item.enable = 1;
    item.limits = 999;
});
$done({body: JSON.stringify(parr)});