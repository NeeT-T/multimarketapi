import express from 'express';
import noFoundController from '../Controllers/_noFoundController';

const router = express.Router();

router.get('/', noFoundController);

export default router;