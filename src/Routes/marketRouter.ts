import express from 'express';
import Controller from '../Controllers/marketController';

const router = express.Router();

router.get('/', Controller.getMarkets);
router.get('/:id', Controller.getMarketById);
router.put('/:id', Controller.updateMarket);

export default router;