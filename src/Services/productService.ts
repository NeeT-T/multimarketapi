import MarketsDTO from "../DTOs/marketDTO";
import ProductDTO from "../DTOs/productDTO";
import IProduct from "../Interfaces/IProduct";
import Product from "../Models/productModel";
import CategorieRepositorie from "../Repositories/categorieRepositorie";
import MarketRepositorie from "../Repositories/marketRepositorie";
import ProductRepository from "../Repositories/productRepositorie";

const findAll = async (pagination: IPage, name: String = ""): Promise<(Number | ProductDTO[])[]> => {
    try {
        const [result, total] = await ProductRepository.findAll(pagination, name);
        return [result.map((product) => { 
            const prod = new ProductDTO(product);
            prod._market = new MarketsDTO(product.market);
            return prod;
        }), total];
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
        const market = await MarketRepositorie.findById(iProduct?.marketId, false);
        if (!market) return "ID do mercado não é valido.";
        const categorie = await CategorieRepositorie.findById(iProduct?.categorieId);
        if (!categorie) return "ID da categoria não é valido.";
        const product = new Product();
        product.setProductsValue(iProduct, categorie, market);
        await ProductRepository.save(product);
        return new ProductDTO(product);
    } catch (error) {
        console.log(error)
        throw error;
    }
}

const saveMultiple = async (products: Product[]) => {
    try {        
        await ProductRepository.saveMultiple(products);
        return products.map(product => new ProductDTO(product));
    } catch (error) {
        console.log(error)
        throw error;
    }
}

const update = async (id: number, iProduct: IProduct) => {
    try {
        const product = await ProductRepository.findById(id);
        if (!product) return "O produto não existe, então não pode ser atualizado.";
        const market = await MarketRepositorie.findById(iProduct?.marketId, false);
        if (!market) return "ID do mercado não é valido.";
        const categorie = await CategorieRepositorie.findById(iProduct?.categorieId);
        if (!categorie) return "ID da categoria não é valido.";
        product.setProductsValue(iProduct, categorie, market);
        await ProductRepository.save(product);
        return new ProductDTO(product);
    } catch (error) {
        console.log(error)
        throw error;
    }
}

const remove = async (id: number) => {
    try {
        const product = await ProductRepository.findById(id);
        if (!product) return "Produto não pode ser excluido pois não existe.";
        const result = await ProductRepository.remove(product);
        return (!!result);
    } catch (error) {
        console.log(error)
        return false;
    }
}

export default {
    findAll,
    findById,
    save,
    saveMultiple,
    update,
    remove,
}