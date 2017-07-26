import { Router } from 'express';
import getAuthorizeURL from './getAuthorizeURL';
const router = Router();
router.get('/', (req, res, next) => {
    const redirectUrl = 'http://wechat.zhouzhongyuan.com/wechat/bind';
    const state = '';
    const scope = 'snsapi_base';
    const url = getAuthorizeURL(redirectUrl, state, scope);
    res.send(url);
});

export default router;
