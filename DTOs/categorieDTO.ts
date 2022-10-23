import Categorie from "../Models/categorieModel";
import ProductDTO from "./productDTO";

export default class CategoriesDTO {

    private id: Number;
    
    private nome: String;

    private products: ProductDTO[];
    
    constructor(categorie: Categorie) {
        this.id = categorie.id;
        this.nome = categorie.nome;
        this.products = categorie?.products?.map((product) => new ProductDTO(product))
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