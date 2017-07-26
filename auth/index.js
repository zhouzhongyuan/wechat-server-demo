// import config from '../config';
// import { Token } from '../model/';
//
// const OAuth = require('wechat-oauth');
//
// const { appid, appsecret } = config;
//
//
// const client = new OAuth(appid, appsecret, ((openid, callback) => {
//     // 传入一个根据openid获取对应的全局token的方法
//     // 在getUser时会通过该方法来获取token
//     Token.getToken(openid, callback);
// }), ((openid, token, callback) => {
//     // 持久化时请注意，每个openid都对应一个唯一的token!
//     Token.setToken(openid, token, callback);
// }));
//
// // 生成诱导打开的页面
// const redirectUrl = 'http://wechat.zhouzhongyuan.com/bind';
// const url = client.getAuthorizeURL(redirectUrl, 'state', 'snsapi_base');
//
// console.log(url);
//
//
// // client.getAccessToken(code, (err, result) => {
// //     if (!err) {
// //         const accessToken = result.data.access_token;
// //         const openid = result.data.openid;
// //         phoneValue.value = 'openid';
// //
// //         console.log(`openid: ${openid}`);
// //     }
// //     phoneValue.value = 'err';
// // });
// //
// //
// //
