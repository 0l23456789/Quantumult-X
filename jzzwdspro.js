/*************************************

*  * @Author: 🌵🌵🌵
     \吉真紫微鬥數\

**************************************

[rewrite_local]
^https?:\/\/zwpp\.wzbz123\.com\/api\/.+\/user\/getzwvipinfo url script-response-body https://raw.githubusercontent.com/0l23456789/Quantumult-X/main/jzzwdspro.js

[mitm]
hostname = zwpp.wzbz123.com

*************************************/


var parr = JSON.parse($response.body);

parr = {
  ...parr,
  "code" : 0,
  "data" : {
    ...parr.data,
    "expires" : "2099-09-09 09:09:09",
    "vipLevel" : 1
  },
  "isSuccess" : true
};

$done({body : JSON.stringify(parr)});