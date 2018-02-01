import api from '../api';

import config from '../config';

const url = {
        bind: `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${config.appid}&redirect_uri=http%3A%2F%2Fzhouzhongyuan.com%2Fwechat%2Fbind&response_type=code&scope=snsapi_base&state=#wechat_redirect`,
        welcome: `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${config.appid}&redirect_uri=http%3A%2F%2Fzhouzhongyuan.com%2Fuserinfo&response_type=code&scope=snsapi_userinfo&state=#wechat_redirect`,
};

const menu = {
    button: [
        // {
        //     type: 'view',
        //     name: '获取openid',
        //     url: url.bind,
        // },
        {
            type: 'view',
            name: '芝麻开门1',
            url: url.welcome,
        },
        // {
        //     type: 'scancode_push',
        //     name: '扫码',
        //     key: 'scanOrderId',
        // },
        // {
        //     type: 'location_select',
        //     name: '定位',
        //     key: 'sendLoaction',
        // },
    ],
};
api.createMenu(menu, (err, result) => {
    if (!err) {
        console.log('Menu update success.');
    } else {
        console.log(err);
    }
});
