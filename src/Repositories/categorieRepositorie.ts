import { DataSource, Like, Raw } from "typeorm";
import Categorie from "../Models/categorieModel";
import Connection from "../Configs/DataBaseConnection";

const findAll = async (pagination: IPage, name: string): Promise<[Categorie[], number]> => {
    try {
        console.log("[Conexão com o banco de dados aberta]");
        const db: DataSource = await Connection.initialize();
        console.log(name)
        return await db.manager.findAndCount(Categorie, {
            where: { nome: Raw(alias => `LOWER(${alias}) Like '%${name}%'`) },
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

const findById = async (idCategorie: number) => {
    try {
        console.log("[Conexão com o banco de dados aberta]");
        const db: DataSource = await Connection.initialize();
        return await db.manager.findOne(Categorie, {
            where: { id: idCategorie },
            relations: { products: true },
        });
    } catch (error) {
        console.log(error);
        throw new Error("Erro ao realizar a operação com o banco de dados.");
    } finally {
        console.log("[Conexão com o banco de dados fechada]");
        await Connection.destroy();
    }
}

const save = async (categorie: Categorie) => {
    try {
        console.log("[Conexão com o banco de dados aberta]");
        const db: DataSource = await Connection.initialize();
        await db.transaction(async entityManager => {
            await entityManager.save(categorie);
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
    findAll,
    findById,
    save
}