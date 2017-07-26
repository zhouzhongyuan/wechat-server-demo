function getCode() {
    const s = location.href;
    const codeReg = /(?:.*?)code=(.*?)&/igm;
    const r = codeReg.exec(s);
    return r[1];
}

// TODO 向后台请求accessToken
const api = 'http://wechat.zhouzhongyuan.com/wechat/accessToken';

async function getOpenid(code) {
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
    fetch(url, {
            method: 'GET',
        },
    ).then(r => r.json()).then((r) => {
        console.log(r);
        alert(r.openid);
    });
}

window.addEventListener('load', (event) => {
    const code = getCode();
    console.log(code);
    getOpenid(code);
});
