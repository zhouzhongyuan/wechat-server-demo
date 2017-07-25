# Wechat server demo


## ngrok代理

- [地址](https://ngrok.cc/user.html)
- id: `c24c645d47aec6b6`
- command: `./sunny clientid c24c645d47aec6b6`
- [自定义域名](https://domains.google.com)
- 映射本地端口号: `4000`

## 服务器配置
- appid: `wxd1d5c242c8a2968f`
- URL: `http://wechat.zhouzhongyuan.com/wechat`
- Token: `boke`
- EncodingAESKey: `sg8mxEiU8g0aDQ4Z2Qtq9mrnGpWt1KulwTEdx9q3hY8`
- 消息加解密方式: 明文模式

## 测试账号
- appID `wx739b9f74ab475e99`
- appsecret: `87fd54b03415de53dffef7d3a9368fca`
- Token: `boke`

## 微信链接

- [微信网页授权(获取openid)](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140842)

- [wechat-oauth](https://github.com/node-webot/wechat-oauth) 后端
- [wechat](https://github.com/node-webot/wechat) 后端
- [wechat-api](https://github.com/node-webot/wechat-api) 后端

## 开发流程

```
npm run ngrok
```
```
npm run server
```
```
npm run start
```