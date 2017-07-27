import { Router } from 'express';
import getToken from './getToken';

const router = Router();
router.all('/', async (req, res, next) => {
    const r = await getToken();
    res.send(r);
});

export default router;
