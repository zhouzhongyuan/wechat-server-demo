import fs from 'fs';
import WechatAPI from 'wechat-api';
import config from './config';

const { appid, appsecret } = config;

function getToken(callback) {
    fs.readFile('access_token.txt', 'utf8', (err, txt) => {
        if (err) { return callback(err); }
        callback(null, JSON.parse(txt));
    });
}
function saveToken(token, callback) {
    fs.writeFile('access_token.txt', JSON.stringify(token), callback);
}

const api = new WechatAPI(appid, appsecret, getToken, saveToken);

export default api;
