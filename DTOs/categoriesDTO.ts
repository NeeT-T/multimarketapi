export default class CategoriesDTO {

    private _id!: Number;
    
    private _nome!: String;
   
    constructor(id: Number, nome: String) {
        this._id = id;
        this._nome = nome;
    }

    public get id(): Number {
        return this._id;
    }
    public set id(value: Number) {
        this._id = value;
    }

    public get nome(): String {
        return this._nome;
    }
    public set nome(value: String) {
        this._nome = value;
    }
    
}