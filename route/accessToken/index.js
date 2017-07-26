import { Router } from 'express';

const OAuth = require('wechat-oauth');

import config from '../../config';

const { appid, appsecret } = config;

const router = Router();
router.all('/', async (req, res, next) => {
    console.log('GET GETACCESSTOKEN');
    const code = req.query.code;
    console.log('Content of code: ', code);
    console.log('Length  of code: ', code.length);

    const client = new OAuth(appid, appsecret);

    client.getAccessToken(code, (err, result) => {
        if (!err) {
            const accessToken = result.data.access_token;
            const openid = result.data.openid;
            console.log('Get openid: ', openid);
            res.send({ openid });
        } else {
            console.log('router error::::', err);
            res.send(err);
        }
    });
});

export default router;
