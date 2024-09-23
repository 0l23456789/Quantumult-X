/*
项目名称： imprintpro
项目作者： 🌵🌵🌵
下载地址： https://apps.apple.com/app/id1482780647
使用说明： 先开脚本再打开软件，未成功尝试恢复购买，下载地址请访问script-path链接获取。
使用声明： 仅供个人参考学习交流，勿用于其它用途

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/0l23456789/Quantumult-X/main/imprintpro.js

[mitm]
hostname = api.revenuecat.com
*/

var parr = JSON.parse($response.body);
parr= {
    "request_date_ms": 1707369077835,
    "request_date": "2024-02-08T05:11:17Z",
    "subscriber": {
      "non_subscriptions": {
      },
      "first_seen": "2024-02-08T05:07:10Z",
      "original_application_version": "551",
      "other_purchases": {
      },
      "management_url": "https:\/\/apps.apple.com\/account\/subscriptions",
      "subscriptions": {
        "com.polywise.subscriptions.yearly2": {
          "original_purchase_date": "2024-02-08T05:08:58Z",
          "expires_date": "2099-01-27T05:34:02Z",
          "is_sandbox": false,
          "refunded_at": null,
          "store_transaction_id": "320001715468188",
          "unsubscribe_detected_at": null,
          "grace_period_expires_date": null,
          "period_type": "trial",
          "purchase_date": "2024-02-08T05:08:58Z",
          "billing_issues_detected_at": null,
          "ownership_type": "PURCHASED",
          "store": "app_store",
          "auto_resume_date": null
        }
      },
      "entitlements": {
        "lucid_unlock_all_content": {
          "grace_period_expires_date": null,
          "purchase_date": "2024-02-08T05:08:58Z",
          "product_identifier": "com.polywise.subscriptions.yearly2",
          "expires_date": "2099-01-27T05:34:02Z"
        }
      },
      "original_purchase_date": "2024-02-08T00:23:24Z",
      "original_app_user_id": "$RCAnonymousID:9022c1c016d04e508c9a66239e89d45d",
      "last_seen": "2024-02-08T05:07:11Z"
    }
  };
$done({body: JSON.stringify(parr)});