/*
✅迅雷解锁视频默认Svip原画
By:
*/

var body = $response.body;
var obj = JSON.parse(body);

// 判断请求是否包含特定的参数值
if($request.url.includes('PLAY')){
    obj.medias[0].link = obj.links["application/octet-stream"];
    obj.medias[0].need_more_quota = false;
    obj.medias[0].video.frame_rate = 60;
    obj.medias[0].is_default = true;
}

// 序列化回 JSON 字符串
body = JSON.stringify(obj);
$done({ body });