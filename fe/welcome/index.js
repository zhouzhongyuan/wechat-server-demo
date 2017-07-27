function getCode() {
    const s = location.href;
    const codeReg = /(?:.*?)code=(.*?)&/igm;
    const r = codeReg.exec(s);
    return r[1];
}

// TODO 向后台请求accessToken
const api = 'http://wechat.zhouzhongyuan.com/api/userInfo';

function getUserInfo(code) {
    const params = {
        code,
    };
    let query;
    (function () {
        const esc = encodeURIComponent;
        query = Object.keys(params)
            .map(k => `${esc(k)}=${esc(params[k])}`)
            .join('&');
    }());
    const url = `${api}?${query}`;
    return new Promise((resolve, reject) => {
        fetch(url, {
                method: 'GET',
            },
        )
            .then(r => r.json())
            .then((r) => {
                console.log(r);
                resolve(r);
            })
            .catch((err) => {
            reject(err);
        });
    });
}

function processUserInfo(userInfo) {
    const { country, nickname, sex, province, headimgurl } = userInfo;
    countryEl.innerHTML = country === 'CN' ? '中国' : '国外';
    nicknameEl.innerHTML = nickname;
    provinceEl.innerHTML = province;
    const sexList = ['未知', '男性', '女性'];
    sexEl.innerHTML = sexList[sex];
    headImgEl.setAttribute('src', headimgurl);
}
let countryEl;
let nicknameEl;
let provinceEl;
let sexEl;
let headImgEl;

// nickname	用户昵称
// sex	用户的性别，值为1时是男性，值为2时是女性，值为0时是未知
// province	用户个人资料填写的省份
// city	普通用户个人资料填写的城市
// country	国家，如中国为CN
// headimgurl	用户头像，最后一个数值代表正方形头像大小（有0、46、64、96、132数值可选，0代表640*640正方形头像），用户没有头像时该项为空。若用户更换头像，原有头像URL将失效。
// privilege	用户特权信息，json 数组，如微信沃卡用户为（chinaunicom）
// unionid	只有在用户将公众号绑定到微信开放平台帐号后，才会出现该字段。

document.addEventListener('DOMContentLoaded', async (event) => {
   countryEl = document.getElementById('country');
   nicknameEl = document.getElementById('nickname');
   provinceEl = document.getElementById('province');
   sexEl = document.getElementById('sex');
    headImgEl = document.getElementById('headImg');

    const code = getCode();
    console.log(code);
    const userInfo = await getUserInfo(code);
    processUserInfo(userInfo);
    console.log(userInfo);
});
