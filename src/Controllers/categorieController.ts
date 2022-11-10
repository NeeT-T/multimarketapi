import { Request, Response } from "express";
import CategorieService from "../Services/categorieService";
import Page from "../Library/Page";

const getCategories = async (req: Request, res: Response) => {
    try {
        const data = req.query;
        const name = String(data.hasOwnProperty("nomeLike") ? data.nomeLike : "");
        const pagination = new Page(
            Number(data.size || 10),
            data.direction === "DESC" ? "DESC" : "ASC",
            Number(data.page || 0),
            String(data.orderby || "nome"),
        )
        const [result, total] = await CategorieService.findAll(pagination, name) || [];
        return res.status(200).json({ data: result, itensNoTotal: total});
    } catch (error) {
        console.log("\n\n[Erro]: ", error)
        return res.status(500).json({ message: "Problemas com a conexão" });
    }
}

const getCategorieById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (isNaN(Number(id))) {
            return res.redirect("../_noFoundController");
        }
        const result = await CategorieService.findById(Number(id));
        return res.status(200).json({ data: result });
    } catch (error) {
        console.log("\n\n[Erro]: ", error)
        return res.status(500).json({ message: "Problemas com a conexão" });
    }
}

export default {
    getCategories,
    getCategorieById,
}