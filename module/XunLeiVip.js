/*
✅迅雷解锁Svip超级会员功能
By: 🌵🌵🌵
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

obj.nickName = "🌵🌵🌵";
obj.isAutoDeduct = true;
obj.vipList = [
    {
      "daily" : "9999",
      "payId" : "0",
      "lastPay" : "1686211943",
      "isVip" : "1",
      "icon" : {
        "general" : "https://xluser-ssl.xunlei.com/v1/file/icon/level/svip/normal_a/svip_level8_normal.png",
        "small" : "https://xluser-ssl.xunlei.com/v1/file/icon/level/svip/normal_b/svip_lever8_normal.png"
      },
      "isNew" : "0",
      "vipDayGrow" : "20",
      "vipGrow" : "99999",
      "isYear" : "1",
      "isRemind" : "0",
      "vasid" : "2",
      "suplusDay" : "99999",
      "isAutoDeduct" : "0",
      "vasType" : "5",
      "payName" : "---",
      "register" : "20220520",
      "detail" : [
        {
          "isvip" : 1,
          "vas_type" : "5",
          "end" : "9999-09-09T16:12:23+08:00",
          "surplus_day" : 21,
          "start" : "2023-06-08T16:12:23+08:00"
        },
        {
          "isvip" : 1,
          "vas_type" : "3",
          "end" : "9999-09-09T16:11:43+08:00",
          "surplus_day" : 1,
          "start" : "2023-07-11T16:12:23+08:00"
        }
      ],
      "expireDate" : "99990909",
      "expireTime" : "9999-09-09T16:11:43+08:00",
      "vipLevel" : "8"
    }
  ];

body = JSON.stringify(obj);
$done({body});