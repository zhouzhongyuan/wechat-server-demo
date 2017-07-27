import { Router } from 'express';
import getOpenid from './getOpenid';

const router = Router();
router.all('/', async (req, res, next) => {
    const code = req.query.code;
    const openid = await getOpenid(code);
    res.send({ openid });
});
export default router;
