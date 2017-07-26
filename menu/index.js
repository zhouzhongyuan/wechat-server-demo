const api = require('../api');

import config from '../config';
console.log(config.name);
const redirectUrl = {
    boke:      'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxd1d5c242c8a2968f&redirect_uri=http%3A%2F%2Fwechat.zhouzhongyuan.com%2Fwechat%2Fbind&response_type=code&scope=snsapi_base&state=#wechat_redirect',
    zhongyuan: 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx739b9f74ab475e99&redirect_uri=http%3A%2F%2Fwechat.zhouzhongyuan.com%2Fwechat%2Fbind&response_type=code&scope=snsapi_base&state=#wechat_redirect',
    mingfeng: '',
};
console.log(redirectUrl[config.name])
const menu = {
    button: [
        {
            type: 'view',
            name: '芝麻开门',
            url: redirectUrl[config.name],
        },
    ],
};
api.createMenu(menu, (err, result) => {
    if (!err) {
        console.log('Menu update success.');
    } else {
        console.log(err);
    }
});
