import UserDTO from "../DTOs/userDTO";
import * as bcrypt from "bcrypt";
import ICredentials from "../Interfaces/ICredentials";
import UserRepository from "../Repositories/userRepositorie";
import IUser from "../Interfaces/IUser";
import User from "../Models/userModel";
import MarketRepository from "../Repositories/marketRepositorie";
const SECRET_SALT = 10;

const authenticate = async (iCredentials: ICredentials) => {
    try {
        const user = await UserRepository.findByEmail(iCredentials.email);
        if (!user) {
            return null;
        }
        const isValidUser = await bcrypt.compare(iCredentials.senha, user.senha);
        return (isValidUser) ? new UserDTO(user) : null;
    } catch (error) {
        throw error;
    }
}

const findById = async (id: number) => {
    const user = await UserRepository.findById(id);
    return (user) ? new UserDTO(user) : null;
}

const save = async (iUser: IUser) => {
    if (!!await UserRepository.findByEmail(iUser.email)) {
        return "Email selecionado já está em uso.";
    }
    if (!!await MarketRepository.findByCnpj(iUser.market.cnpj)) {
        return "Cnpj selecionado já está em uso.";
    }
    const user = User.setUserValues(iUser);
    user.senha = await bcrypt.hash(iUser.senha, SECRET_SALT);
    await UserRepository.save(user);
    return new UserDTO(user);
}

export default {
    authenticate,
    findById,
    save,
}