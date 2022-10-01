import MarketDTO from "./marketDTO";
import Product from "../Models/productModel";

export default class ProductsDTO {

    private id: Number;
    
    private nome: String;

    private preco: Number;

    private cesta: Boolean;

    private categorieId: Number;

    private markets: MarketDTO[];

    constructor(product: Product) {
        this.id = product.id;
        this.nome = product.nome;
        this.preco = product.preco;
        this.cesta = product.cesta;
        this.categorieId = product.categorieId;
        this.markets = product?.markets?.map(market => new MarketDTO(market));
    }
    
    public get _categorie(): Number {
        return this.categorieId;
    }

    public set _categorie(value: Number) {
        this.categorieId = value;
    }

    public get _cesta(): Boolean {
        return this.cesta;
    }

    public set _cesta(value: Boolean) {
        this.cesta = value;
    }

    public get _preco(): Number {
        return this.preco;
    }

    public set _preco(value: Number) {
        this.preco = value;
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