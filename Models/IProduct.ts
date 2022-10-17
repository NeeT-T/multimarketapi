import Categorie from "./categorieModel";
import Market from "./marketModel";

export default interface IProduct {
    id: number;
    nome: string,
    preco: number,
    cesta: boolean,
    categorieId: number,
    marketId: number,
}
