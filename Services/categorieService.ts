import CategorieDTO from "../DTOs/categorieDTO";
import CategorieRepository from "../Repositories/categorieRepositorie";

const findAll = async (pagination: IPage) => {
    try {
        const [result, total] = await CategorieRepository.findAll(pagination);
        return [result.map((categorie) => new CategorieDTO(categorie)), total];
    } catch (error) {
        throw error;
    }
}

export default {
    findAll
}