import { DataSource } from "typeorm";
import Categorie from "../Models/categorieModel";
import CategorieDTO from "../DTOs/categorieDTO";
import Connection from "../Configs/DataBaseConnection";

const findAll = async (pagination: IPage): Promise<[Categorie[], number]> => {
    try {
        console.log("[Conexão com o banco de dados aberta]");
        const db: DataSource = await Connection.initialize();
        return await db.manager.findAndCount(Categorie, {
            order: { [pagination.orderby]: pagination?.direction },
            take: pagination.size,
            skip: pagination.page * pagination.size,
        });
    } catch (error) {
        console.log(error);
        throw new Error("Erro ao realizar a operação com o banco de dados.");
    } finally {
        console.log("[Conexão com o banco de dados fechada]");
        await Connection.destroy();
    }
    
}

export default {
    findAll
}