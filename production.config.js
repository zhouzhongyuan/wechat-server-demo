var config = {
    token: 'boke',
    appid: 'wxd1d5c242c8a2968f',
    encodingAESKey: 'sg8mxEiU8g0aDQ4Z2Qtq9mrnGpWt1KulwTEdx9q3hY8',
    checkSignature: false, // 可选，默认为true。由于微信公众平台接口调试工具在明文模式下不发送签名，所以如要使用该测试工具，请将其设置为false
    appsecret: 'abc48dd6024314d910992bab00b85b9e',
};
config.db = {
    uri: 'mongodb://127.0.0.1/wechat',
    options: {
        // user: 'admin',
        // pass: 'admin',
    },
};
export default config;