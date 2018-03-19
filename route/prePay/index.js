import { Router } from 'express';
import  payment from './init';

const router = Router();
router.all('/', async (req, res, next) => {

    const {openid, ip, } = req.query;
    var order = {
        body: '吮指原味鸡 * 1',
        attach: '{"部位":"三角"}',
        out_trade_no: 'kfc' + (+new Date),
        total_fee: 10 * 100,
        spbill_create_ip: ip,
        openid: openid,
        trade_type: 'JSAPI'
    };
    let payargs;

    console.log('order:', order);
    try {
        payargs = await payment.getBrandWCPayRequestParams(order)
    }catch (e){
        console.log(e);
    }
    res.json(payargs);
});

export default router;
