import express from 'express';
import path from 'path';
import config from './config';
import connect from './bin/connect';
import users from './route/users';
import wechat from './route/wechat';
import openid from './route/openid';
import authorizeURL from './route/authorizeURL';
import token from './route/token';
import userInfo from './route/userInfo';

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
    app.use('/users', users);
    app.use('/wechat', wechat);
    app.use('/openid', openid);
    app.use('/token', token);
    app.use('/api/userInfo', userInfo);
    app.use('/authorizeURL', authorizeURL);
    app.get('/wechat/bind', (req, res) => {
        res.sendFile(path.resolve('fe/bind', 'index.html'));
    });
    app.get('/userInfo', (req, res) => {
        res.sendFile(path.resolve('fe/welcome', 'index.html'));
    });
    app.listen(4000, () => {
        console.log('wechat-server-demo listening on port 4000');   // eslint-disable-line
    });
}
init();
