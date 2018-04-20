import { BigNumber } from 'bignumber.js'; 
import { Router } from 'express'

const router = Router()
 

var owned721address = ['0x7c68a2160575132fc9099b3573fdf1902c35c7fd'];

/* GET orderbook listing. */
router.get('/getowend721address', (req, res, next) => {
    console.log('HTTP: GET getowend721address');

    res.json(owned721address)
}); 

export default router



