import IMarket from "./IMarket";

export default interface IUser {
    id: number;
    email: string;
    senha: string;
    market: IMarket;
}
