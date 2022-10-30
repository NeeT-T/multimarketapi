import { Request, Response } from "express";
import IUser from "../Interfaces/IUser";
import UserService from "../Services/userService";
import UserValidator from "../Validators/userValidator";
import MarketValidator from "../Validators/marketValidator";
import ICredentials from "../Interfaces/ICredentials";

const authenticate = async (req: Request, res: Response) => {
    try {
        const data: ICredentials = req.body;
        await UserValidator.credentials().validate(data);
        const result = await UserService.authenticate(data);
        (result) ? 
            res.status(200).json(result) :
            res.status(401).json({ message: "Credenciais invalidas" });
    } catch (error: any) {
        console.log("\n\n[Erro]: ", error)
        const message_error = (error?.message) ? error.message : error;
        return res.status(500).send({message: message_error});
    }
}

const getUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (isNaN(Number(id))) {
            return res.redirect("../_noFoundController");
        }
        const result = await UserService.findById(Number(id));
        return res.status(200).json({ data: result });
    } catch (error) {
        console.log("\n\n[Erro]: ", error)
        return res.status(500).json({ message: "Problemas com a conexão" });
    }
}

const saveUser = async (req: Request, res: Response) => {
    try {
        const data: IUser = req.body;
        await UserValidator.credentials().validate(data);
        await MarketValidator.market().validate(data.market);
        const result = await UserService.save(data);
        return res.status(200).json({ data: result });
    } catch (error: any) {
        console.log("\n\n[Erro]: ", error)
        const message_error = (error?.message) ? error.message : error;
        return res.status(500).send({message: message_error});
    }
}

const updateCredentials = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data: ICredentials = req.body;
        if (isNaN(Number(id))) {
            return res.redirect("../_noFoundController");
        }
        await UserValidator.updateCredentials().validate(data);
        const result = await UserService.update(data);
        return res.status(200).json({ data: result });
    } catch (error: any) {
        console.log("\n\n[Erro]: ", error)
        const message_error = (error?.message) ? error.message : error;
        return res.status(500).send({message: message_error});
    }
}

const removeUser = async (req: Request, res: Response) => {
    try {
        // const { id } = req.params;
        // if (isNaN(Number(id))) {
        //     return res.redirect("../_noFoundController");
        // }
        // const result = await CategorieService.findById(Number(id));
        // return res.status(200).json({ data: result });
    } catch (error) {
        console.log("\n\n[Erro]: ", error)
        return res.status(500).json({ message: "Problemas com a conexão" });
    }
}

export default {
    authenticate,
    getUserById,
    saveUser,
    updateCredentials,
    removeUser,
}