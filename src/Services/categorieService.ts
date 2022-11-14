import CategorieDTO from "../DTOs/categorieDTO";
import Categorie from "../Models/categorieModel";
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

const save = async (nome: string) => {
    try {
        const categorie = new Categorie();
        categorie.nome = nome;
        await CategorieRepository.save(categorie);
        return new CategorieDTO(categorie);
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