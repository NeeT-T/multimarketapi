import express from 'express';
import Controller from '../Controllers/marketController';

const router = express.Router();

router.get('/', Controller.getMarkets);
router.get('/:id', Controller.getMarketById);
router.post('/', Controller.saveMarket);
router.put('/:id', Controller.editMarket);
router.delete('/:id', Controller.removeMarket);

export default router;