import Categorie from "../Models/categorieModel";
import Market from "../Models/marketModel";

export default interface IProduct {
    id: number;
    nome: string;
    preco: number;
    cesta: boolean;
    categorieId: number;
    marketId: number;
}
