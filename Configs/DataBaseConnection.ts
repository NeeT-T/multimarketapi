import { DataSource } from "typeorm"
import Categorie from "../Models/categorieModel";
import Market from "../Models/marketModel";
import Product from "../Models/productModel";

export default new DataSource({
    type: "mysql",
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    logging: false,
    entities: [Categorie, Product, Market],
    migrations: [],
    subscribers: [],
})
