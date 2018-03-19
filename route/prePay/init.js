var Payment = require('wechat-pay').Payment;
import fs from 'fs';

import config from '../../config';

const { appid } = config;

var initConfig = {
    partnerKey: '12345678901234567890123456789012', //这个参数partnerkey是在商户后台配置的一个32位的key,微信商户平台-账户设置-安全设置-api安全
    appId: appid,
    mchId: '1485006402',
    notifyUrl: 'http://zhouzhongyuan.club/payNotify',
    // pfx: fs.readFileSync("<location-of-your-apiclient-cert.p12>")
};

console.log(initConfig)
var payment = new Payment(initConfig);

export default payment;