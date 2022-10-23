import IMarket from "./IMarket";

export default interface ICredentials {
    id: number;
    email: string;
    senha: string;
    market: IMarket;
}
