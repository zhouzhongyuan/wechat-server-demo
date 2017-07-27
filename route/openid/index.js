import { Router } from 'express';

import oauthClient from '../oauthClient';

const router = Router();
router.all('/', async (req, res, next) => {
    const code = req.query.code;
    oauthClient.getAccessToken(code, (err, result) => {
        if (!err) {
            const openid = result.data.openid;
            res.send({ openid });
        } else {
            console.log('router error::::', err);   // eslint-disable-line
            res.send(err);
        }
    });
});

export default router;
