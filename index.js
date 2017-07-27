import express from 'express';
// import wechat from 'wechat';
import path from 'path';
import config from './config';
import connect from './bin/connect';
const { db } = config;
import users from './route/users';
import wechat from './route/wechat';
import accessToken from './route/accessToken';
import authorizeURL from './route/authorizeURL';
import token from './route/token';
// exec once
// import('./menu/index');
// import('./group/index');
import('./template/index');

async function init() {
    const app = express();
    app.use(express.query());
    app.use('/static', express.static(path.join(__dirname, 'fe')));
    app.use('/users', users);
    app.use('/wechat', wechat);
    app.use('/wechat/accessToken', accessToken);
    app.use('/authorizeURL', authorizeURL);
    app.use('/token', token);
    app.get('/wechat/bind', (req, res) => {
        res.sendFile(path.resolve('fe/bind', 'index.html'));
    });
    app.listen(4000, () => {
        console.log('wechat-server-demo listening on port 4000');
    });

    import('./auth');
    await connect(db.uri, db.options);

}
init();
