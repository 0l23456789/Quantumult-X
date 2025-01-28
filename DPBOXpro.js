/*************************************

DPBOXpro

**************************************

[rewrite_local]
^https?:\/\/(api\.(revenuecat|rc-backup)|isi\.csan\.goodnotes)\.com\/.+\/(receipts$|subscribers\/?(.*?)*$|product_entitlement_mapping|offers$) url script-response-body https://raw.githubusercontent.com/0l23456789/Quantumult-X/main/DPBOXpro.js
^https?:\/\/(api\.(revenuecat|rc-backup)|isi\.csan\.goodnotes)\.com\/.+\/(receipts$|subscribers\/?(.*?)*$|product_entitlement_mapping|offers$) url script-request-header https://raw.githubusercontent.com/0l23456789/Quantumult-X/main/DPBOXpro.js

[mitm]
hostname = api.revenuecat.com , api.rc-backup.com , isi.csan.goodnotes.com

*************************************/

const AA11 = {};
const headers = $request.headers;
const AA00 = JSON.parse(typeof $response != "undefined" && $response.body || null);
const ua = headers['User-Agent'] || headers['user-agent'];
const bundle_id = headers['X-Client-Bundle-ID'] || headers['x-client-bundle-id'];

//排除已禁止MITM的APP
const forbiddenApps = ['Rond', 'Fileball', 'APTV'];
/*
const forbiddenAppFound = forbiddenApps.find(appName => (ua && ua.includes(appName)) || ($request.body && $request.body.includes(appName)));
if (forbiddenAppFound) {
  console.log(`发现禁止MITM的APP: ${forbiddenAppFound}，已停止运行脚本！`);
  $done({});
}
*/
if (forbiddenApps.some(app => (ua && ua.includes(app)) || ($request.body && $request.body.includes(app)))) {
  console.log("⛔️ 检测到禁止 MITM 的 APP，脚本停止运行！");
  $done({});
}

//识别UA
const list = {
  'moss-ios': { name: 'prouser', id: 'dpbox_yearly_68', cm: 'sja' }  //DPBOX-摄影机与电影参数参数查询
};

if (typeof $response == "undefined") {
  delete headers["x-revenuecat-etag"];
  delete headers["X-RevenueCat-ETag"];
  AA11.headers = headers;
} else if (AA00 && AA00.subscriber) {
  AA00.subscriber.subscriptions = AA00.subscriber.subscriptions || {};
  AA00.subscriber.entitlements = AA00.subscriber.entitlements || {};
  let name,nameb,ids,idb,data;
  for (const src of [list, bundle]) {
    for (const i in src) {
      const test = src === list ? ua : bundle_id;
      if (new RegExp(`^${i}`, `i`).test(test)) {
      if (src[i].cm.indexOf('sja') != -1) { data = {  "purchase_date" : "2023-09-09T09:09:09Z",  "expires_date" : "2099-09-09T09:09:09Z" };  } else if (src[i].cm.indexOf('sjb') != -1) { data = {  "purchase_date" : "2023-09-09T09:09:09Z" }; }
      ids = src[i].id;name = src[i].name;idb = src[i].idb;nameb = src[i].nameb;
      break;
      }
    }
  }
  if (!name || !ids) {
    data = {  "purchase_date" : "2023-09-09T09:09:09Z",  "expires_date" : "2099-09-09T09:09:09Z" };
    name = 'pro';
    ids = 'com.AA00.pro';
  }
  AA00.subscriber.entitlements[name] = Object.assign({}, data, { product_identifier: ids });
  if (typeof nameb !== 'undefined' && nameb !== null) {
    AA00.subscriber.entitlements[nameb] = Object.assign({}, data, { product_identifier: idb });
  }
  const subData = Object.assign({},data,{  "Author": "AA00",  "Telegram": "https://t.me/AA00",  "warning": "🐈",  "original_purchase_date": "2023-09-09T09:09:09Z",  "store": "app_store",  "ownership_type": "PURCHASED"  });
  AA00.subscriber.subscriptions[ids] = subData;
  if (typeof idb !== 'undefined' && idb !== null) {
    AA00.subscriber.subscriptions[idb] = subData;
  }
  AA11.body = JSON.stringify(AA00);
  console.log('操作成功');
}

$done(AA11);