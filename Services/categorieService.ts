import CategorieDTO from "../DTOs/categorieDTO";
import CategorieRepository from "../Repositories/categorieRepositorie";

const findAll = async (pagination: IPage, name: string) => {
    try {
        const [result, total] = await CategorieRepository.findAll(pagination, name);
        return [result.map((categorie) => new CategorieDTO(categorie)), total];
    } catch (error) {
        throw error;
    }
}

const findById = async (id: number) => {
    const categorie = await CategorieRepository.findById(id);
    return (categorie) ? new CategorieDTO(categorie) : null;
}

export default {
    findAll,
    findById,
}