import { BigNumber } from 'bignumber.js'; 
import { Router } from 'express'

const router = Router()
 

var orders = [];

/* GET orderbook listing. */
router.get('/orderbook', (req, res, next) => {
    console.log('HTTP: GET orderbook');

    res.json(orders)
}); 

router.post('/order', (req, res) => {
    console.log('HTTP: POST order');
    console.log(req.body);
    
    const order = req.body;
    orders.push(order);
    res.status(201).send({});
});

router.post('/fees', (req, res, next) => {
    console.log(next);
    const makerFee = new BigNumber(0).toString();
    const takerFee = new BigNumber(0).toString();
    res.status(201).send({
        feeRecipient: null,
        makerFee,
        takerFee,
    });
});
/* GET order by ID. */
router.get('/order/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

export default router



