import { DataSource } from "typeorm";
import Market from "../Models/marketModel";
import Connection from "../Configs/DataBaseConnection";

const findAll = async (pagination: IPage): Promise<[Market[], number]> => {
    try {
        console.log("[Conexão com o banco de dados aberta]");
        const db: DataSource = await Connection.initialize();
        // console.log(await db.manager.getRepository(Market).createQueryBuilder("market").innerJoin())
        // const foo = await db.manager.find(Market, {relations: {products: true}});
        // console.log(foo[0].products[0]);
        return await db.manager.findAndCount(Market, {
            // relations: { products: true },
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

const findById = async (idMarket: number) => {
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

export default {
    findAll,
    findById,
}