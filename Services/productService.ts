import ProductDTO from "../DTOs/productDTO";
import ProductRepository from "../Repositories/productRepositorie";

const findAll = async (pagination: IPage): Promise<(Number | ProductDTO[])[]> => {
    try {
        const [result, total] = await ProductRepository.findAll(pagination);
        const foo = result[0].markets
        console.log(result)
        return [result.map((product) => new ProductDTO(product)), total];
    } catch (error) {
        throw error;
    }
}

const findById = async (id: number) => {
    const product = await ProductRepository.findById(id);
    return (product) ? new ProductDTO(product) : null;
}

export default {
    findAll,
    findById,
}