import Categorie from "../Models/categorieModel";

export default class CategoriesDTO {

    private id: Number;
    
    private nome: String;
    
    constructor(categories: Categorie) {
        this.id = categories.id;
        this.nome = categories.nome;
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