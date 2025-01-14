/**************************
 
*  * @Author: ooo

    \📷FIMOVIP

***************************

> ScriptURL         
https://raw.githubusercontent.com/0l23456789/Quantumult-X/main/FIMOPRO.js

[rewrite_local]

^https?:\/\/fimo\.appfimo\.com\/fimo-user\/user url script-response-body https://raw.githubusercontent.com/0l23456789/Quantumult-X/main/FIMOPRO.js

[mitm] 
hostname = fimo.appfimo.com


**************************/


var obj=JSON.parse($response.body);obj.subscribe={valid:!0,forever:1,endTime:4092599349},$done({body:JSON.stringify(obj)});