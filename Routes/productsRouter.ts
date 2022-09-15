import express from 'express';
import { getProducts, createProduct, editProduct, removeProduct} from '../Controllers/productsController';

const router = express.Router();

router.get('/', getProducts);
router.post('/', createProduct);
router.put('/:id', editProduct);
router.delete('/:id', removeProduct);

export default router;