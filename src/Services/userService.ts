import UserDTO from "../DTOs/userDTO";
import * as bcrypt from "bcrypt";
import ICredentials from "../Interfaces/ICredentials";
import UserRepository from "../Repositories/userRepositorie";
import IUser from "../Interfaces/IUser";
import User from "../Models/userModel";
import MarketRepository from "../Repositories/marketRepositorie";
import Market from "../Models/marketModel";
import ProductRepositorie from "../Repositories/productRepositorie";
const SECRET_SALT = 10;

const authenticate = async (iCredentials: ICredentials) => {
    try {
        const user = await UserRepository.findByEmail(iCredentials.email);
        if (!user) return null;
        const isValidUser = await bcrypt.compare(iCredentials.senha, user.senha);
        return (isValidUser) ? new UserDTO(user) : null;
    } catch (error) {
        throw error;
    }
}

const findById = async (id: number) => {
    try {
        const user = await UserRepository.findById(id);
        return (user) ? new UserDTO(user) : null;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const save = async (iUser: IUser) => {
    try {
        if (!!await UserRepository.findByEmail(iUser.email)) {
            return "Email selecionado já está em uso.";
        }
        if (!!await MarketRepository.findByCnpj(iUser.market.cnpj)) {
            return "Cnpj selecionado já está em uso.";
        }
        const user = new User();
        const market = new Market();
        market.setMarketValues(iUser.market);
        user.setUserValues(iUser, market);
        user.senha = await bcrypt.hash(iUser.senha, SECRET_SALT);
        await UserRepository.save(user);
        return new UserDTO(user);
    } catch (error) {
        console.log(error);
        throw error;
    }
    
}

const update = async (iCredentials: ICredentials) => {
    try {
        const user = await UserRepository.findByEmail(iCredentials.email);
        if (!user) return "ID do usuário não existe.";
        const isValidUser = await bcrypt.compare(iCredentials.senha, user.senha);
        if (!isValidUser) return "Senha do usuário está incorreta.";
        if (!!iCredentials.senhaNova) user.senha = await bcrypt.hash(iCredentials.senhaNova, SECRET_SALT);
        if (!!iCredentials.emailNovo) user.email = iCredentials.emailNovo
        await UserRepository.save(user);
        return new UserDTO(user);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const remove = async (id: number) => {
    try {
        const user = await UserRepository.findById(id);
        if (!user) return "Usuário não pode ser excluido pois não existe.";
        const market = await MarketRepository.findById(user?.market.id);
        if (!market) return "Problema ao buscar o mercado.";
        await UserRepository.remove(user, market);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
    
}

export default {
    authenticate,
    findById,
    save,
    update,
    remove,
}