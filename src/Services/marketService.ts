import MarketDTO from "../DTOs/marketDTO";
import IMarket from "../Interfaces/IMarket";
import MarketRepositorie from "../Repositories/marketRepositorie";

const findAll = async (pagination: IPage, name: string) => {
    try {
        const [result, total] = await MarketRepositorie.findAll(pagination, name);
        return [result.map((market) => new MarketDTO(market)), total];
    } catch (error) {
        throw error;
    }
}

const findById = async (id: number) => {
    const Market = await MarketRepositorie.findById(id);
    return (Market) ? new MarketDTO(Market) : null;
}

const update = async (id: number, iMarket: IMarket) => {
    try {
        const market = await MarketRepositorie.findById(id);
        if (!market) return "ID do mercado não é valido.";
        market.setMarketValues(iMarket);
        await MarketRepositorie.save(market);
        return new MarketDTO(market);
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export default {
    findAll,
    findById,
    update,
}