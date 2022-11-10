import express from 'express';
import Controller from '../Controllers/categorieController';

const router = express.Router();

router.get('/', Controller.getCategories);
router.get('/:id', Controller.getCategorieById);

export default router;