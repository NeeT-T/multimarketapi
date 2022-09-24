import express from 'express';
import Categorie from '../Controllers/categorieController';

const router = express.Router();

router.get('/', Categorie.getCategories);

export default router;