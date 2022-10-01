import MarketDTO from "../DTOs/marketDTO";
import MarketRepository from "../Repositories/marketRepositorie";

const findAll = async (pagination: IPage) => {
    try {
        const [result, total] = await MarketRepository.findAll(pagination);
        console.log(result);
        return [result.map((market) => new MarketDTO(market)), total];
    } catch (error) {
        throw error;
    }
}

const findById = async (id: number) => {
    const product = await MarketRepository.findById(id);
    return (product) ? new MarketDTO(product) : null;
}

export default {
    findAll,
    findById,
}