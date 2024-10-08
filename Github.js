/*
项目名称：GitHub 1.142.1
使用说明：除了AI功能，其他功能都可用

[rewrite_local]
https://api.github.com/graphql url script-response-body https://raw.githubusercontent.com/0l23456789/Quantumult-X/main/Github.js

[mitm]
hostname = api.github.com

*/

let obj = JSON.parse($response.body);
if (obj.data && obj.data.viewer) {
  obj.data.viewer.isProPlan = true;
  obj.data.viewer.isEmployee = true;
  obj.data.viewer.hasAppleIapSubscription = true;

  $done({
    body: JSON.stringify(obj)
  });
} else {
  $done({});
}