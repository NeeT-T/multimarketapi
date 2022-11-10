import express from "express";
import noFound from "./noFoundRouter";
import products from "./productRouter";
import categories from "./categorieRouter";
import markets from "./marketRouter";
import user from "./userRouter";

const router = express();

router.use('/products', products);
router.use('/categories', categories);
router.use('/markets', markets);
router.use('/user', user);
router.use('*', noFound);

export default router;
