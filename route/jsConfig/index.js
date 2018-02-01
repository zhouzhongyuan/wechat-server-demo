import { Router } from 'express';
import getJsConfig from './getJsConfig';

const router = Router();
router.all('/', async (req, res, next) => {
    console.log('route jsConfig')
    console.log(req.body)
    const { debug, jsApiList, url } = req.query;
    console.log(debug, jsApiList, url)
    const param = {
        debug, jsApiList, url
    };
    const r = await getJsConfig(param);
    res.send(r);
});

export default router;
