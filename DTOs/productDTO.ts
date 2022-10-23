import Product from "../Models/productModel";

export default class ProductsDTO {

    private id: number;
    
    private nome: string;

    private preco: number;

    private cesta: boolean;

    private categorieId: number;

    private marketId: number;

    constructor(product: Product) {
        this.id = product.id;
        this.nome = product.nome;
        this.preco = product.preco;
        this.cesta = product.cesta;
        this.categorieId = product.categorieId;
        this.marketId = product.marketId;
    }
    
    public get _categorieId(): number {
        return this.categorieId;
    }

    public set _categorieId(value: number) {
        this.categorieId = value;
    }

    public get _marketId(): number {
        return this.marketId;
    }

    public set _marketId(value: number) {
        this.marketId = value;
    }

    public get _cesta(): boolean {
        return this.cesta;
    }

    public set _cesta(value: boolean) {
        this.cesta = value;
    }

    public get _preco(): number {
        return this.preco;
    }

    public set _preco(value: number) {
        this.preco = value;
    }

    public get _id(): number {
        return this.id;
    }

    public set _id(value: number) {
        this.id = value;
    }

    public get _nome(): string {
        return this.nome;
    }
    public set _nome(value: string) {
        this.nome = value;
    }
    
}