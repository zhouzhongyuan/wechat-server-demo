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
- [公众号登录](https://mp.weixin.qq.com/)

- [接口调试工具-微信公众平台](https://mp.weixin.qq.com/debug/)

- [微信网页授权(获取openid)](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140842)

- [获取access_token](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421140183)
- [微信测试服务号](https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login)
- [wechat-oauth](https://github.com/node-webot/wechat-oauth) 后端
- [wechat](https://github.com/node-webot/wechat) 后端
- [wechat-api](https://github.com/node-webot/wechat-api) [文档](http://doxmate.cool/node-webot/wechat-api/api.html) 后端

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

## 文章

- [图解微信公众号后台服务开发（nodejs版）](http://imweb.io/topic/56363fbc09e01a534b461ec1)

## 获取`openid`
### 关键点
- 向微信服务器获取。要通过中转服务器(此服务器)向微信服务器获取。
- `access_token`和`appsecret`同样重要，只能保存在服务器中。
- code只能使用一次
# 一定要填写 网页授权域名
# 一定要填写 网页授权域名
# 一定要填写 网页授权域名
# 一定要填写 网页授权域名
# 一定要填写 网页授权域名

# 如果出现`invalid code`，要么是生成的URL错误，要么没有填写网页授权域名。
# 绝对不是code被使用了两次。
# 多清空缓存可能也有帮助。

# 自定义菜单



- [自定义菜单事件推送 -微信文档](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141016)

## 菜单触发扫码

## 发送普通位置
```
{ ToUserName: 'gh_4528709def73',
  FromUserName: 'orl1NwJsNxmzeerpIw3fYDxzq0UQ',
  CreateTime: '1501554200',
  MsgType: 'location',
  Location_X: '31.221823',
  Location_Y: '121.393379',
  Scale: '16',
  Label: '普陀区天洁大厦(上海跨国采购会展中心东60米)',
  MsgId: '6449126183665851325' }
```