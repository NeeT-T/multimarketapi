import { Request, Response } from "express"
import CategorieService from "../Services/categorieService";
import Page from "../Library/Page";

const getCategories = async (req: Request, res: Response) => {
    try {
        const data = req.query;
        const pagination = new Page(
            Number(data.size || 10),
            data.direction === "DESC" ? "DESC" : "ASC",
            Number(data.page || 0),
            String(data.orderby || "nome"),
        )
        const [result, total] = await CategorieService.findAll(pagination) || [];
        return res.status(200).json({ data: result, itensNoTotal: total});
    } catch (error) {
        console.log("\n\n[Erro]: ", error)
        return res.status(500).json({ message: "Problemas com a conexão" });
    }
    
    return res.status(200).send("Categorie");
}

export default {
    getCategories,
}