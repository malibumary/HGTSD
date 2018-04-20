import { BigNumber } from 'bignumber.js'; 
import { Router } from 'express'

const router = Router()
 

var owned721address = ['0x7c68a2160575132fc9099b3573fdf1902c35c7fd', '0xc29fb173dab16d2406072593e29008d84185eb3f'];

/* GET orderbook listing. */
router.get('/getowend721address', (req, res, next) => {
    console.log('HTTP: GET getowend721address');

    res.json(owned721address)
}); 

router.post('/add721address', (req, res) => {
    console.log('HTTP: POST add721address');
    const address = owned721address.body;
    owned721address.push(address);
    res.status(201).send({});
});


export default router



