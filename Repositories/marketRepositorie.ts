import { DataSource, Like } from "typeorm";
import Market from "../Models/marketModel";
import Connection from "../Configs/DataBaseConnection";

const findAll = async (pagination: IPage, name: string): Promise<[Market[], number]> => {
    try {
        console.log("[Conexão com o banco de dados aberta]");
        const db: DataSource = await Connection.initialize();
        return await db.manager.findAndCount(Market, {
            where: {nome: Like(`%${name}%`)},
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

const findById = async (idMarket: number, relations: boolean = true) => {
    try {
        console.log("[Conexão com o banco de dados aberta]");
        const db: DataSource = await Connection.initialize();
        return await db.manager.findOne(Market, {
            where: { id: idMarket },
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

const findByCnpj = async (cnpj: string) => {
    try {
        console.log("[Conexão com o banco de dados aberta]");
        const db: DataSource = await Connection.initialize();
        return await db.manager.findOne(Market, {
            where: { cnpj: cnpj },
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

const save = async (market: Market) => {
    try {
        console.log("[Conexão com o banco de dados aberta]");
        const db: DataSource = await Connection.initialize();
        await db.transaction(async entityManager => {
            await entityManager.save(market);
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
    findByCnpj,
    save,
}