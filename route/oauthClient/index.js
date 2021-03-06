import OAuth from 'wechat-oauth';

import { Token } from '../../model';
import config from '../../config';

const { appid, appsecret } = config;

function getToken(openid, callback) {
    // 传入一个根据openid获取对应的全局token的方法
    // 在getUser时会通过该方法来获取token
    // });
    Token.getToken(openid, callback);
}
function saveToken(openid, token, callback) {
    // 请将token存储到全局，跨进程、跨机器级别的全局，比如写到数据库、redis等
    // 这样才能在cluster模式及多机情况下使用，以下为写入到文件的示例
    // 持久化时请注意，每个openid都对应一个唯一的token!
    Token.setToken(openid, token, callback);
}

const client = new OAuth(appid, appsecret, getToken, saveToken);

export default client;
