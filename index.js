import express from 'express';
import wechat from 'wechat';
import path from 'path';
import config from './config';

import('./menu/index');
import('./group/index');

const app = express();
app.use(express.query());
app.use('/static', express.static(path.join(__dirname, 'fe')));
app.use('/wechat', wechat(config, (req, res, next) => {
    // 微信输入信息都在req.weixin上
    const message = req.weixin;
    console.log(message);
    const content = message.Content;
    switch (content) {
        case '文本':
            // res.reply('Hello world!');
            res.reply({ type: 'text', content: 'Hello world!' });
            break;
        case '图片':
            res.reply({
                type: 'image',
                content: {
                    mediaId: 'mediaId',
                },
            });
            break;
        case '语音':
            res.reply({
                type: 'voice',
                content: {
                    mediaId: 'mediaId',
                },
            });
            break;
        case '视频':
            res.reply({
                type: 'video',
                content: {
                    title: '来段视频吧',
                    description: '女神与高富帅',
                    mediaId: 'mediaId',
                },
            });
            break;
        case '音乐':
            res.reply({
                title: '来段音乐吧',
                description: '一无所有',
                musicUrl: 'http://other.web.rh01.sycdn.kuwo.cn/resource/n2/39/42/302397389.mp3',
                hqMusicUrl: 'http://other.web.rh01.sycdn.kuwo.cn/resource/n2/39/42/302397389.mp3',
                // thumbMediaId: "https://i.ytimg.com/vi/m7uk0-vlpP0/hqdefault.jpg"
            });
            break;
        case '图文':
            res.reply([
                {
                    title: '军师联盟',
                    description: '大军师司马懿之军师联盟',
                    picurl: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/h%3D250/sign=a3d2d380bcfd5266b82b3b119b189799/8601a18b87d6277fbc36ed5322381f30e924fcb1.jpg',
                    url: 'https://baike.baidu.com/item/%E5%A4%A7%E5%86%9B%E5%B8%88%E5%8F%B8%E9%A9%AC%E6%87%BF%E4%B9%8B%E5%86%9B%E5%B8%88%E8%81%94%E7%9B%9F/20818349?fromtitle=%E5%86%9B%E5%B8%88%E8%81%94%E7%9B%9F&fromid=18903656',
                },
            ]);
            break;
        case '社交功能':
            res.reply({
                type: 'hardware',
                HardWare: {
                    MessageView: 'myrank',
                    MessageAction: 'ranklist',
                },
            });
            break;
        default:
            res.reply({ type: 'text', content: '关键词不对' });
    }
}));
app.get('/bind', (req, res) => {
    res.sendFile(path.join(`${__dirname}/fe/bind/index.html`));
});
app.listen(4000, () => {
    console.log('wechat-server-demo listening on port 4000');
});
