import { Request, Response } from "express"
import CategorieService from "../Services/categorieService";
import Page from "../Resources/Page";
import CategoriesDTO from "../DTOs/categoriesDTO";

const getCategories = async (req: Request, res: Response) => {
    try {
        const data = req.query;
        const pagination = new Page(
            Number(data.size),
            data.direction === "DESC" ? "DESC" : "ASC",
            Number(data.page),
            String(data.orderby),
        )
        CategorieService.findAllCategories(pagination);
        return res.status(200).json([new CategoriesDTO(1, "AB")]);

        // const l: DataSource = await Connection.initialize();
        // const c: CategoriesModel = new CategoriesModel();
        // c.name = "Fruta";
        // await l.manager.save(c);
        // console.log("Saved a new user with id: " + c.id)

        // console.log("Loading users from the database...")
        // const categories = await l.manager.find(CategoriesModel)
        // console.log("\n\nCategoria criada: ", categories)
    } catch (err) {
        console.log("\n\n[Erro]: ", err)
    }
    
    return res.status(200).send("Categorie");
}

export default {
    getCategories,
}