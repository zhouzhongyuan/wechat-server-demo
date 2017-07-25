var WechatAPI = require('wechat-api');
import config from './config';
var api = new WechatAPI(config.appid, config.appsecret);
module.exports = api;