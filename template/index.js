import api from '../api';
// const templateId = 'uUX7IRJwHRxYxChLi7w7iuTIvgE97rkDqzTC2JPSptk';
// const templateId = 'a3IXIJ6_YcJ5kEdMopXSxVzCa8cRwvCi5tXtpsSSkAE';
const templateId = '3Aihi7hTsOfPF7Hj1rKPqzJK4HS2qUwi0kFLvN_sSlY';
// URL置空，则在发送后,点击模板消息会进入一个空白页面（ios）, 或无法点击（android）
const url = 'http://weixin.qq.com/download';
const openid = 'orl1NwJsNxmzeerpIw3fYDxzq0UQ';
const data = {
    first: {
        value: '招标发布通知',
        color: '#173177',
    },
    keyword1: {
        value: '周中原',
        color: '#173177',
    },
    keyword2: {
        value: '北京',
        color: '#173177',
    },
    keyword3: {
        value: '你心里',
        color: '#173177',
    },
    keyword4: {
        value: '开心地',
        color: '#173177',
    },
    keyword5: {
        value: '今生今世',
        color: '#173177',
    },
    remark: {
        value: '一万年～',
        color: '#173177',
    },
};
/* eslint-disable no-console,no-alert */
api.sendTemplate(openid, templateId, url, data, (err, result) => {
    console.log(err, result);
    if (!err) {
        console.log('发送模板消息成功', result);
    } else {
        console.log(err);
    }
});

