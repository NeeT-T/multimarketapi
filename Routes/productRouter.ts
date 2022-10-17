import express from 'express';
import Controller from '../Controllers/productController';

const router = express.Router();

router.get('/', Controller.getProducts);
router.get('/:id', Controller.getProductsById);
router.post('/', Controller.saveProduct);
router.put('/:id', Controller.editProduct);
router.delete('/:id', Controller.removeProduct);

export default router;