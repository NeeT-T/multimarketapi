import MarketDTO from "./marketDTO";
import User from "../Models/userModel";

export default class UserDTO {

    private id: number;
 
    private email: string;

    // private senha: string;

    private data: Date;

    private market: MarketDTO;

    constructor(user: User) {
        this.id = user.id;
        this.email = user.email;
        // this.senha = user.senha;
        this.data = new Date(user.data);
        this.market = new MarketDTO(user.market);
    }

    public get _id(): number {
        return this.id;
    }
    
    public set _id(value: number) {
        this.id = value;
    }

    public get _email(): string {
        return this.email;
    }

    public set _email(value: string) {
        this.email = value;
    }

    // public get _senha(): string {
    //     return this.senha;
    // }

    // public set _senha(value: string) {
    //     this.senha = value;
    // }

    public get _data(): Date {
        return this.data;
    }

    public set _data(value: Date) {
        this.data = value;
    }

    public get _market(): MarketDTO {
        return this.market;
    }

    public set _market(value: MarketDTO) {
        this.market = value;
    }
}