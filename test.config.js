// zhongyuan
const zhongyuanConfig = {
    name:'zhongyuan',
    token: 'boke',
    appid: 'wx739b9f74ab475e99',
    encodingAESKey: 'sg8mxEiU8g0aDQ4Z2Qtq9mrnGpWt1KulwTEdx9q3hY8',
    checkSignature: false, // 可选，默认为true。由于微信公众平台接口调试工具在明文模式下不发送签名，所以如要使用该测试工具，请将其设置为false
    appsecret: '87fd54b03415de53dffef7d3a9368fca',
};

// Gu
const mingfengConfig = {
    name:'mingfeng',
    token: 'boke',
    appid: 'wx7548a199e9b0508e',
    encodingAESKey: 'sg8mxEiU8g0aDQ4Z2Qtq9mrnGpWt1KulwTEdx9q3hY8',
    checkSignature: false, // 可选，默认为true。由于微信公众平台接口调试工具在明文模式下不发送签名，所以如要使用该测试工具，请将其设置为false
    appsecret: '17c3e0865156f490181dfa7a45237b5f',
};
const config = zhongyuanConfig;
config.db = {
        uri: 'mongodb://127.0.0.1/wechat',
        options: {
            // user: 'admin',
            // pass: 'admin',
        },
};
export default config;
