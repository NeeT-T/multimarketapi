import { Request, Response } from "express";
import ProductService from "../Services/productService";
import Page from "../Library/Page";

const getProducts = async (req: Request, res: Response) => {
    try {
        const data = req.query;
        const pagination = new Page(
            Number(data.size || 10),
            data.direction === "DESC" ? "DESC" : "ASC",
            Number(data.page || 0),
            String(data.orderby || "nome"),
        )
        const [result, total] = await ProductService.findAll(pagination) || [];
        return res.status(200).json({ data: result, itensNoTotal: total});
    } catch (error) {
        console.log("\n\n[Erro]: ", error)
        return res.status(500).json({ message: "Problemas com a conexão" });
    }
}

const getProductsById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (isNaN(Number(id))) {
            return res.redirect("../_noFoundController");
        }
        const result = await ProductService.findById(Number(id));
        return res.status(200).json({ data: result });
    } catch (error) {
        console.log("\n\n[Erro]: ", error)
        return res.status(500).json({ message: "Problemas com a conexão" });
    }
}

const createProduct = () => {

}

const removeProduct = () => {

}

const editProduct = () => {

}

export default {
    getProducts,
    getProductsById,
    createProduct,
    removeProduct,
    editProduct,
}