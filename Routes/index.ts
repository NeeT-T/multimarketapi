import express from "express";
import noFound from "./noFoundRouter";
import products from "./productsRouter";
import categories from "./categoriesRouter";
import markets from "./marketsRouter";

const router = express();

router.use('/products', products);
router.use('/categories', categories);
router.use('/markets', markets);
router.use('*', noFound);

export default router;
