const api = require('../api');

const menu = {
    button: [
        {
            type: 'view',
            name: '绑定',
            // url: 'http://wechat.zhouzhongyuan.com/bind',
            url: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx7548a199e9b0508e&redirect_uri=http%3A%2F%2Fwechat.zhouzhongyuan.com%2Fwechat%2Fbind&response_type=code&scope=snsapi_base#wechat_redirect',
        },
        ],
};
api.createMenu(menu, (err, result) => {
    console.log(err);
    console.log(result);
});
