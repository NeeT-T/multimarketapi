import { DataSource, Like, Raw } from "typeorm";
import Product from "../Models/productModel";
import Connection from "../Configs/DataBaseConnection";

const findAll = async (pagination: IPage, name: String): Promise<[Product[], number]> => {
    try {
        console.log("[Conexão com o banco de dados aberta]");
        const db: DataSource = await Connection.initialize();
        return await db.manager.findAndCount(Product, {
            relations: { market: true },
            where: {nome: Raw(alias => `LOWER(${alias}) Like '%${name}%'`)},
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

const findById = async (idProduct: number) => {
    try {
        console.log("[Conexão com o banco de dados aberta]");
        const db: DataSource = await Connection.initialize();
        return await db.manager.findOne(Product, {
            where: { id: idProduct },
            relations: { market: true },
        });
    } catch (error) {
        console.log(error);
        throw new Error("Erro ao realizar a operação com o banco de dados.");
    } finally {
        console.log("[Conexão com o banco de dados fechada]");
        await Connection.destroy();
    }
}

const save = async (products: Product) => {
    try {
        console.log("[Conexão com o banco de dados aberta]");
        const db: DataSource = await Connection.initialize();
        await db.transaction(async entityManager => {
            await entityManager.save(products);
        });
    } catch (error) {
        console.log(error);
        throw new Error("Erro ao realizar a operação com o banco de dados.");
    } finally {
        console.log("[Conexão com o banco de dados fechada]");
        await Connection.destroy();
    }
}

const saveMultiple = async (products: Product[]) => {
    try {
        console.log("[Conexão com o banco de dados aberta]");
        const db: DataSource = await Connection.initialize();
        // await db.transaction(async entityManager => {
            // await entityManager.save(products);
            await db
            .createQueryBuilder()
            .insert()
            .into(Product)
            .values(products)
            .execute()
        // });
    } catch (error) {
        console.log(error);
        throw new Error("Erro ao realizar a operação com o banco de dados.");
    } finally {
        console.log("[Conexão com o banco de dados fechada]");
        await Connection.destroy();
    }
}

const remove = async (product: Product) => {
    try {
        console.log("[Conexão com o banco de dados aberta]");
        console.log("Deleta produto")
        const db: DataSource = await Connection.initialize();
        return await db.manager.remove(product);
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
    save,
    remove,
    saveMultiple,
}
