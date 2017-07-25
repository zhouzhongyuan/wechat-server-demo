alert('hi');
var OAuth = require('wechat-oauth');
import config from '../../config';
var client = new OAuth(config.appid, config.appsecret);
const redirectUrl = 'http://wechat.zhouzhongyuan.com/bind';
var url = client.getAuthorizeURL(redirectUrl, 'state', 'snsapi_base');
alert(url);
var phoneValue = document.getElementById('phoneValue');
phoneValue.value = url;
client.getAccessToken('code', function (err, result) {
    var accessToken = result.data.access_token;
    var openid = result.data.openid;
    console.log(`openid: ${openid}`);
});