import OAuth from 'wechat-oauth';
import config from '../../config';

const { appid, appsecret } = config;

const client = new OAuth(appid, appsecret);

// 微信客户端

function getAuthorizeURL(redirectUrl, state, scope) {
    const url = client.getAuthorizeURL(redirectUrl, state, scope);
    return url;
}

export default getAuthorizeURL;
/* // 如果是PC上的网页，请使用以下方式生成
var url = client.getAuthorizeURLForWebsite('redirectUrl'); */
