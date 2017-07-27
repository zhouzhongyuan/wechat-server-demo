import { Router } from 'express';
import getOpenid from '../openid/getOpenid';
import getUser from './getUser';

const router = Router();
router.get('/', async (req, res) => {
    const code = req.query.code;
    const openid = await getOpenid(code);
    const userInfo = await getUser(openid);
    res.send(userInfo);
});

export default router;
