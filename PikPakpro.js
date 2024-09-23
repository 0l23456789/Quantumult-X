
/*
项目名称： PikPakpro
项目作者：  🌵🌵🌵
下载地址： https://apps.apple.com/us/app/pikpak-private-cloud-saver/id1616861537?l=en-GB
使用说明： 先开脚本再打开软件，未成功尝试恢复购买

[rewrite_local]
^https:\/\/api-drive\.mypikpak\.com\/(vip\/v\d\/(vip\/info|allSubscriptionStatus)|drive\/v\d\/about\?space) url script-response-body https://raw.githubusercontent.com/0l23456789/Quantumult-X/main/PikPakpro.js

[mitm]
hostname = *.mypikpak.com
*/

var url = $request.url;
var objc = JSON.parse($response.body);
const URL1 = '/vip/info';
const URL2 = '/about';
const URL3 = '/allSubscriptionStatus';
if (url.indexOf(URL1) != -1) {
  objc.data.expire = "2099-09-09T00:00:00+09:00";
  objc.data.status = "ok";
  objc.data.type = "platinum";
  objc.data.vipItem = [
      {
        "status" : "ok",
        "expire" : "2099-09-09T00:00:00+09:00",
        "type" : "regional",
        "description" : "Regional members",
        "surplus_day" : 747364014
      }
    ];
};
if (url.indexOf(URL2) != -1) {
  objc.quota.limit = "10999166278790";
	objc.quota.is_unlimited = true;
};
if (url.indexOf(URL3) != -1) {
  objc.apple = {"subscribed":true,"purchased":true,"status":"trial","interval":"year","product":"sub.year","past_due_deadline":"","pay_type":"","region":"regional"};
};
$done({body:JSON.stringify(objc)});