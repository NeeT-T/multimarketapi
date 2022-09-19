import { Request, Response } from "express"
import { DataSource } from "typeorm";
import Connection from "../Configs/DataBaseConnection";
import CategoriesModel from "../Models/categoriesModel";

const getCategories = async (req: Request, res: Response) => {

    try {
        const l: DataSource = await Connection.initialize();
        const c: CategoriesModel = new CategoriesModel();
        c.name = "Fruta";
        await l.manager.save(c);
        console.log("Saved a new user with id: " + c.id)

        console.log("Loading users from the database...")
        const categories = await l.manager.find(CategoriesModel)
        console.log("\n\nCategoria criada: ", categories)
    } catch (err) {
        console.log("\n\n[Erro]: ", err)
    }
    
    return res.status(200).send("Categorie");
}

export {
    getCategories,
}