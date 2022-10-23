import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, Double, Index } from "typeorm"
import Categorie from "./categorieModel"
import Market from "./marketModel"
import IProduct from "../Interfaces/IProduct"

@Entity()
export default class Product {

    @PrimaryGeneratedColumn('increment')
    id!: number

    @Index()
    @Column()
    nome!: string

    @Column('decimal', { precision: 5, scale: 2 })
    preco!: number

    @Column()
    cesta!: boolean

    @Column()
    categorieId!: number

    @Column()
    marketId!: number

    @ManyToOne(type => Categorie, categorie => categorie.products)
    categorie!: Categorie

    @ManyToOne(type => Market, market => market.products)
    market!: Market

    static setProductsValue = (iProduct: IProduct, categorie: Categorie, market: Market) => {
        const product = new Product();
        product.nome = iProduct.nome;
        product.preco =  iProduct.preco;
        product.cesta = iProduct.cesta;
        (market) ? product.market = market : null;
        (categorie) ? product.categorie = categorie : null;
        return product;
    }

}