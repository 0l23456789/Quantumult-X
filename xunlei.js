// ==UserScript==
// @ScriptName        迅雷
// @AppVersion        V2.1.32
// @AppUrl            https://apps.apple.com/app/id1503466530
// @Function          解锁Svip + 原画倍速
// @Author            @🌵🌵🌵
// @UpdataTime        20240408
// @ScriptURL         https://raw.githubusercontent.com/DeerFishSheep/Quantumult-X/main/XunLei.js

# > 迅雷 by 🌵🌵🌵

[rewrite_local]
^https://api-pan.xunlei.com/drive/v1/files/ url script-response-body https://raw.githubusercontent.com/0l23456789/Quantumult-X/refs/heads/main/module/XunLeiHuaZhi.js
^https://xluser-ssl.xunlei.com/xluser.core.login/v3/getuserinfo url script-response-body https://raw.githubusercontent.com/0l23456789/Quantumult-X/refs/heads/main/module/XunLeiVip.js

[mitm]
hostname = api-pan.xunlei.com, xluser-ssl.xunlei.com