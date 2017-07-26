const request = require('request');

import config from '../../config';
const { appid, appsecret } = config;
function getAccessToken(code, appid, appsecret) {
    console.log(appid, appsecret);
    const url = 'https://api.weixin.qq.com/sns/oauth2/access_token';
    const data = {
        appid:appid,
        secret: appsecret,
        code,
        grant_type: 'authorization_code',
    };
    return new Promise((resolve, reject) => {
        request.get(
            { url, form: data },
            (err, httpResponse, body) => {
                if (!err) {
                    resolve(body);
                }
                reject(err);
            },
        );
    });
}

export default getAccessToken;

// 获取code后，请求以下链接获取access_token：
// https://api.weixin.qq.com/sns/oauth2/access_token?appid=APPID&secret=SECRET&code=CODE&grant_type=authorization_code
