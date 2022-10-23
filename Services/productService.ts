import ProductDTO from "../DTOs/productDTO";
import IProduct from "../Interfaces/IProduct";
import Product from "../Models/productModel";
import categorieRepositorie from "../Repositories/categorieRepositorie";
import marketRepositorie from "../Repositories/marketRepositorie";
import ProductRepository from "../Repositories/productRepositorie";

const findAll = async (pagination: IPage, name: String = ""): Promise<(Number | ProductDTO[])[]> => {
    try {
        const [result, total] = await ProductRepository.findAll(pagination, name);
        return [result.map((product) => new ProductDTO(product)), total];
    } catch (error) {
        console.log(error)
        throw error;
    }
}

const findById = async (id: number) => {
    try {
        const product = await ProductRepository.findById(id);
        return (product) ? new ProductDTO(product) : null;
    } catch (error) {
        console.log(error)
        throw error;
    }
}

const save = async (iProduct: IProduct) => {
    try {
        const market = await marketRepositorie.findById(iProduct?.marketId, false);
        if (!market) return "ID do mercado não é valido.";
        const categorie = await categorieRepositorie.findById(iProduct?.categorieId);
        if (!categorie) return "ID da categoria não é valido.";
        const product = Product.setProductsValue(iProduct, categorie, market);
        await ProductRepository.save(product);
        return new ProductDTO(product);
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export default {
    findAll,
    findById,
    save,
}