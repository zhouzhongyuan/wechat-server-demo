import { Router } from 'express';
import getAuthorizeURL from './getAuthorizeURL';
const router = Router();
router.get('/', (req, res, next) => {
    let { redirectUrl, state, scope } = req.query;
    console.log(redirectUrl, state, scope);
    redirectUrl = redirectUrl || 'http://wechat.zhouzhongyuan.com/wechat/bind';
    state = state || '';
    scope = scope || 'snsapi_base';
    const url = getAuthorizeURL(redirectUrl, state, scope);
    res.send(url);
    res.end();
});

export default router;
