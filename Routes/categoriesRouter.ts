import express from 'express';
import { getCategories} from '../Controllers/categoriesController';

const router = express.Router();

router.get('/', getCategories);

export default router;