import express from 'express';
import { getMarkets, createMarket, editMarket, removeMarket} from '../Controllers/marketController';

const router = express.Router();

router.get('/', getMarkets);
router.post('/', createMarket);
router.put('/:id', editMarket);
router.delete('/:id', removeMarket);

export default router;