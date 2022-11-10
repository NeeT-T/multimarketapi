import { Request, Response } from "express";
import MarketService from "../Services/marketService";
import Page from "../Library/Page";
import IMarket from "../Interfaces/IMarket";
import MarketsValidator from "../Validators/marketValidator";

const getMarkets = async (req: Request, res: Response) => {
    try {
        const data = req.query;
        const name = String(data.hasOwnProperty("nomeLike") ? data.nomeLike : "");
        const pagination = new Page(
            Number(data.size || 10),
            data.direction === "DESC" ? "DESC" : "ASC",
            Number(data.page || 0),
            String(data.orderby || "nome"),
        )
        const [result, total] = await MarketService.findAll(pagination, name) || [];
        return res.status(200).json({ data: result, itensNoTotal: total});
    } catch (error) {
        console.log("\n\n[Erro]: ", error)
        return res.status(500).json({ message: "Problemas com a conexão" });
    }
}

const getMarketById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (isNaN(Number(id))) {
            return res.redirect("../_noFoundController");
        }
        const result = await MarketService.findById(Number(id));
        return res.status(200).json({ data: result });
    } catch (error) {
        console.log("\n\n[Erro]: ", error)
        return res.status(500).json({ message: "Problemas com a conexão" });
    }
}

const updateMarket = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data: IMarket = req.body;
        if (isNaN(Number(id))) {
            return res.redirect("../_noFoundController");
        }
        await MarketsValidator.market().validate(data);
        const result = await MarketService.update(Number(id), data);
        return res.status(200).json({ data: result });
    } catch (error: any) {
        console.log("\n\n[Erro]: ", error);
        const message_error = (error?.message) ? error.message : error;
        res.status(500).send({message: message_error});
    }
}

export default {
    getMarkets,
    getMarketById,
    updateMarket,
}