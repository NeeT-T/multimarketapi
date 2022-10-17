import { Request, Response } from "express";
import ProductService from "../Services/productService";
import productsValidator from "../Validators/productsValidator";
import Page from "../Library/Page";
import productService from "../Services/productService";
import IProduct from "../Models/IProduct";
import ProductDTO from "../DTOs/productDTO";

const getProducts = async (req: Request, res: Response) => {
    try {
        const data = req.query;
        const name = String(data.hasOwnProperty("nome") ? data.name : "");
        const pagination = new Page(
            Number(data.size || 10),
            data.direction === "DESC" ? "DESC" : "ASC",
            Number(data.page || 0),
            String(data.orderby || "nome"),
        )
        const [result, total] = await ProductService.findAll(pagination, name) || [];
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

const saveProduct = async (req: Request, res: Response)  => {
    try {
        const data: IProduct = req.body;
        const productDTO = new ProductDTO(data)
        console.log(productDTO)
        await productsValidator.products().validate(data);
        const result = await productService.save(productDTO);
        return res.status(201).json({ data: result });
    } catch (error: any) {
        const message_error = (error?.message) ? error.message : error;
        res.status(500).send({message: message_error});
    }

}

const editProduct = () => {

}

const removeProduct = () => {

}


export default {
    getProducts,
    getProductsById,
    saveProduct,
    removeProduct,
    editProduct,
}