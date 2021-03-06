import express from 'express';
import path from 'path';
import config from './config';
import connect from './bin/connect';
import users from './route/users';
import wechat from './route/wechat';
import openid from './route/openid';
import authorizeURL from './route/authorizeURL';
import token from './route/token';
import jsapiTicket from './route/jsapiTicket';
import jsConfig from './route/jsConfig';
import userInfo from './route/userInfo';
import prePay from './route/prePay';

const { db } = config;

// exec once
// import('./menu/index');
// import('./group/index');
// import('./template/index');

async function init() {
    await connect(db.uri, db.options);
    const app = express();
    app.use(express.query());
    app.use('/static', express.static(path.join(__dirname, 'fe')));
    app.use(express.static(path.join(__dirname, 'static')));
    app.use('/yigo/webapp', express.static(path.join(__dirname, 'fe/demo/build')));
    app.use('/users', users);
    app.use('/wechat', wechat);
    app.use('/openid', openid);
    app.use('/token', token);
    app.use('/jsapiTicket', jsapiTicket);
    app.use('/api/userInfo', userInfo);
    app.use('/api/jsConfig', jsConfig);
    app.use('/api/prePay', prePay);
    app.use('/authorizeURL', authorizeURL);
    app.get('/wechat/bind', (req, res) => {
        res.sendFile(path.resolve('fe/bind', 'index.html'));
    });
    app.get('/userInfo', (req, res) => {
        res.sendFile(path.resolve('fe/dist', 'index.html'));
    });
    app.get('/demo', (req, res) => {
        res.sendFile(path.resolve('fe/demo/build', 'index.html'));
    });
    app.get('/yigo/pay', (req, res) => {
        res.sendFile(path.resolve('fe/pay', 'index.html'));
    });
    const port = 8089;
    app.listen(port, () => {
        console.log(`wechat-server-demo listening on port ${port}`);   // eslint-disable-line
    });
}
init();
