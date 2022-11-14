import { Request, Response } from "express";
import CategorieService from "../Services/categorieService";
import Page from "../Library/Page";
import CategorieValidator from "../Validators/categorieValidator";

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

const saveCategorie = async (req: Request, res: Response)  => {
    try {
        const data = req.body;
        await CategorieValidator.categorie().validate(data);
        const result = await CategorieService.save(data?.nome);
        return res.status(201).json({ data: result });
    } catch (error: any) {
        console.log("\n\n[Erro]: ", error);
        const message_error = (error?.message) ? error.message : error;
        res.status(500).send({message: message_error});
    }
}

export default {
    getCategories,
    getCategorieById,
    saveCategorie,
}