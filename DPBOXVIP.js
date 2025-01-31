/*************************************

[rewrite_local]
^https?:\/\/(api\.(revenuecat|rc-backup)|isi\.csan\.goodnotes)\.com\/.+\/(receipts$|subscribers\/?(.*?)*$|product_entitlement_mapping|offers$) url script-response-body https://raw.githubusercontent.com/0l23456789/Quantumult-X/main/DPBOXVIP.js
^https?:\/\/(api\.(revenuecat|rc-backup)|isi\.csan\.goodnotes)\.com\/.+\/(receipts$|subscribers\/?(.*?)*$|product_entitlement_mapping|offers$) url script-request-header https://raw.githubusercontent.com/0l23456789/Quantumult-X/main/DPBOXVIP.js

[mitm]
hostname = api.revenuecat.com , api.rc-backup.com , isi.csan.goodnotes.com

*************************************/

const chxm1024 = {};
const headers = $request.headers;
const chxm1023 = JSON.parse(typeof $response != "undefined" && $response.body || null);
const ua = headers['User-Agent'] || headers['user-agent'];
const bundle_id = headers['X-Client-Bundle-ID'] || headers['x-client-bundle-id'];

//排除已禁止MITM的APP
const forbiddenApps = ['Rond', 'Fileball', 'APTV'];
/*
const forbiddenAppFound = forbiddenApps.find(appName => (ua && ua.includes(appName)) || ($request.body && $request.body.includes(appName)));
if (forbiddenAppFound) {
  console.log(`发现禁止MITM的APP: ${forbiddenAppFound}，已停止运行脚本！\n叮当猫の分享频道: https://t.me/chxm1023`);
  $done({});
}
*/
if (forbiddenApps.some(app => (ua && ua.includes(app)) || ($request.body && $request.body.includes(app)))) {
  console.log("⛔️ 检测到禁止 MITM 的 APP，脚本停止运行！");
  $done({});
}
//识别bundle_id
const bundle = {
  'com.ausoco.umai': { name: 'umai_pro', id: 'umai_pro_yearly', cm: 'sja' },  //UmAI
  'camp.user.penbook': { name: 'pro', id: 'penbook.lifetime01', cm: 'sjb' },  //Penbook-智能笔记本
  'design.yugen.Flow': { name: 'pro', id: 'design.yugen.Flow.Lifetime', cm: 'sja' },  //Flow-番茄工作/专注计时器   
  'com.runbuddy.prod': { name: 'premium', id: 'rb_9999_1y_1y7999', cm: 'sja' },  //Runna-马拉松训练
  'com.reku.Counter': { name: 'plus', id: 'com.reku.counter.plus.lifetime', cm: 'sjb' },  //Counter-计步器
  'TeleprompterX': { name: 'Pro Upgrade', id: 'TPXOTP', cm: 'sjb' },  //Teleprompter
  'moonbox.co.il.grow': { name: 'pro', id: 'moonbox.co.il.grow.lifetime.offer', cm: 'sjb' },  //植物识别-PlantID
  'tech.miidii.MDClock': { name: 'Entitlement.Pro', id: 'tech.miidii.MDClock.pro', cm: 'sjb' },  //谜底时钟
  'com.voicedream.Voic': { name: 'standard', id: 'vd_annual_79_3daytrial', cm: 'sja' },  //声之梦
  'com.laser-focused.focus-ios': { name: 'subscribed', id: 'iap.io.masterbuilders.focus.pro_one_year', cm: 'sja' },  //Focus-专注时间管理
  'net.tengl.powertimer': { name: 'plus', id: 'powertimer.plus', cm: 'sjb' },  //元气计时-PowerTimer
  'com.reader.book': { name: 'pro', id: 'com.reader.permanentlyPro', cm: 'sjb' },  //PureLibro
  'app.imone.OneWidget': { name: 'pro', id: 'app.imone.OneWidget.Lifetime', cm: 'sjb' },  //OneWidget-小组件
  'io.innerpeace.yiye': { name: 'Premium', id: 'io.innerpeace.yiye.lifetime.forYearly', cm: 'sja' },  //言外笔记
  'com.skysoft.removalfree': { name: 'Pro', id: 'com.skysoft.removalfree.subscription.newyearly', cm: 'sja' }  //图片消除
}

//识别UA
const list = {
  'AICalculator': { name: 'Premium', id: 'com.simpleinnovation.calculator.ai.premium.yearly.base', cm: 'sja' },  //计算器AI
  'moss-ios': { name: 'prouser', id: 'dpbox_yearly_68', cm: 'sja' },  //DPBOXpro
  'VSCO': { name: 'pro', id: 'vscopro_global_5999_annual_7D_free', cm: 'sja' }  //VSCO-照片与视频编辑
};

if (typeof $response == "undefined") {
  delete headers["x-revenuecat-etag"];
  delete headers["X-RevenueCat-ETag"];
  chxm1024.headers = headers;
} else if (chxm1023 && chxm1023.subscriber) {
  chxm1023.subscriber.subscriptions = chxm1023.subscriber.subscriptions || {};
  chxm1023.subscriber.entitlements = chxm1023.subscriber.entitlements || {};
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
    ids = 'com.chxm1023.pro';
  }
  chxm1023.subscriber.entitlements[name] = Object.assign({}, data, { product_identifier: ids });
  if (typeof nameb !== 'undefined' && nameb !== null) {
    chxm1023.subscriber.entitlements[nameb] = Object.assign({}, data, { product_identifier: idb });
  }
  const subData = Object.assign({},data,{  "Author": "chxm1023",  "Telegram": "https://t.me/chxm1023",  "warning": "仅供学习，禁止转载或售卖",  "original_purchase_date": "2023-09-09T09:09:09Z",  "store": "app_store",  "ownership_type": "PURCHASED"  });
  chxm1023.subscriber.subscriptions[ids] = subData;
  if (typeof idb !== 'undefined' && idb !== null) {
    chxm1023.subscriber.subscriptions[idb] = subData;
  }
  chxm1024.body = JSON.stringify(chxm1023);
  console.log('已操作成功🎉🎉🎉\n叮当猫の分享频道: https://t.me/chxm1023');
}

$done(chxm1024);