var WechatAPI = require('wechat-api');
var config = require('./config');
var api = new WechatAPI(config.appid, config.appsecret);
module.exports = api;