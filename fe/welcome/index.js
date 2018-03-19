import wx from '../jweixin-1.2.0';
// import wx from 'wx';
alert(wx);
/*
function getCode() {
    const s = location.href;
    const codeReg = /(?:.*?)code=(.*?)&/igm;
    const r = codeReg.exec(s);
    return r[1];
}

// TODO 向后台请求accessToken
const api = 'http://zhouzhongyuan.com/api/userInfo';

function getUserInfo(code) {
    const params = {
        code: code,
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
    const {country, nickname, sex, province, headimgurl} = userInfo;
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
/!*document.addEventListener('DOMContentLoaded', async (event) => {
    countryEl = document.getElementById('country');
    nicknameEl = document.getElementById('nickname');
    provinceEl = document.getElementById('province');
    sexEl = document.getElementById('sex');
    headImgEl = document.getElementById('headImg');
    const code = getCode();
    const userInfo = await getUserInfo(code);
    processUserInfo(userInfo);
});*!/

*/




// TODO 二维码扫描
// JSSDK
function getJsConfig() {
    const param = {
        debug: true,
        jsApiList: ['chooseWXPay','chooseImage', 'scanQRCode'],
        url: location.href,
    };
    const api = 'http://zhouzhongyuan.com/api/jsConfig';

    var query;
    (function () {
        const esc = encodeURIComponent;
        query = Object.keys(param)
            .map(k => `${esc(k)}=${esc(param[k])}`)
            .join('&');
    }());
    const url = `${api}?${query}`;
    return new Promise((resolve, reject) => {
        fetch(url, {
                method: 'GET',
            }
        )
            .then(r => r.json())
            .then((r) => {
                // console.log(r);
                resolve(r);
            })
            .catch((err) => {
                reject(err);
            });
    });
}

const init = async () => {
    const jsConfig = await getJsConfig();
    jsConfig.jsApiList = jsConfig.jsApiList.split(',');
    console.log(jsConfig);
    wx.config(jsConfig);
    wx.ready(function () {
        wx.checkJsApi({
            jsApiList: ['chooseImage', 'chooseWXPay'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
            success: function(res) {
                console.log(res)
                // 以键值对的形式返回，可用的api值true，不可用为false
                // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
            }
        });


        wx.chooseImage({
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
            }
        });
        // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
    });
    wx.error(function (res) {
        console.log('ERROR: ',res);
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    });
};
init();
