import express from 'express';
// import wechat from 'wechat';
import path from 'path';
import config from './config';
import connect from './bin/connect';
const { db } = config;
import users from './route/users';
import wechat from './route/wechat';
// exec once
// import('./menu/index');
// import('./group/index');

async function init() {

    const app = express();
    app.use(express.query());
    app.use('/static', express.static(path.join(__dirname, 'fe')));
    app.use('/users', users);
    app.use('/wechat', wechat);
    app.get('/bind', (req, res) => {
        res.sendFile(path.resolve('fe/bind', 'index.html'));
    });
    app.listen(4000, () => {
        console.log('wechat-server-demo listening on port 4000');
    });

    import('./auth');
    await connect(db.uri, db.options);

}
init();
