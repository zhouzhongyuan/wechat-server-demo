import { Router } from 'express';
import getTicket from './getTicket';

const router = Router();
router.all('/', async (req, res, next) => {
    const r = await getTicket();
    res.send(r);
});

export default router;
