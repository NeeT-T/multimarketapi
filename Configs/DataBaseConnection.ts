import { DataSource } from "typeorm"
// import {  } from ""
// import {  } from ""
import Categorias from "../Models/categorieModel";
// import {  } from ""

export default new DataSource({
    type: "mysql",
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME,
    synchronize: true,
    logging: false,
    entities: [Categorias],
    migrations: [],
    subscribers: [],
})
