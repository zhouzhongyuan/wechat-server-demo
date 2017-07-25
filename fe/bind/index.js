function getCode() {
    const s = location.href;
    const codeReg = /(?:.*?)code=(.*?)&/igm;
    const r = codeReg.exec(s);
    return r[1];
}
const code = getCode();
const phoneValue = document.getElementById('phone');

// TODO 向后台请求accessToken