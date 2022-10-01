import Market from "../Models/marketModel";
import ProductDTO from "./productDTO";


export default class MarketsDTO {

    private id: Number;
    
    private nome: String;

    private email: String;

    private cep: String;

    private cnpj: String;

    private products: ProductDTO[];

    constructor(market: Market) {
        this.id = market.id;
        this.nome = market.nome;
        this.email = market.email;
        this.cep = market.cep;
        this.cnpj = market.cnpj;
        this.products = market?.products?.map(product => new ProductDTO(product));
    }

    public get _cep(): String {
        return this.cep;
    }

    public set _cep(value: String) {
        this.cep = value;
    }

    public get _cnpj(): String {
        return this.cnpj;
    }

    public set _cnpj(value: String) {
        this.cnpj = value;
    }

    public get _email(): String {
        return this._email;
    }

    public set _email(value: String) {
        this._email = value;
    }
    

    public get _id(): Number {
        return this.id;
    }

    public set _id(value: Number) {
        this.id = value;
    }

    public get _nome(): String {
        return this.nome;
    }
    public set _nome(value: String) {
        this.nome = value;
    }
    
}