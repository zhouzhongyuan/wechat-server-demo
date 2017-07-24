var api = require('../api');
const menu = {
    "button": [
        {
            "name": "司机",
            "sub_button": [
                {
                    "type": "view",
                    "name": "竞价",
                    "url": "http://www.soso.com/"
                },
                {
                    "type": "view",
                    "name": "单子",
                    "url": "http://www.soso.com/"
                }]
        },
        {
            "name": "货主",
            "sub_button": [
                {
                    "type": "view",
                    "name": "发布",
                    "url": "http://www.soso.com/"
                },
                {
                    "type": "view",
                    "name": "选择司机",
                    "url": "http://www.soso.com/"
                }]
        },
        {
            "name": "我的",
            "sub_button": [
                {
                    "type": "view",
                    "name": "绑定",
                    "url": "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd1d5c242c8a2968f&redirect_uri=http%3A%2F%2Fwechat.zhouzhongyuan.com%2Fbind&response_type=code&scope=snsapi_base&state=state#wechat_redirect"
                },
                {
                    "type": "view",
                    "name": "解绑",
                    "url": "http://wechat.zhouzhongyuan.com/unbind"
                }]
        }
        ]
};
api.createMenu(menu, function (err, result) {
    console.log(err);
    console.log(result);
});