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

    @Column('decimal', { precision: 5, scale: 2, nullable: false })
    preco!: number

    @Column({ nullable: false })
    cesta!: boolean

    @Column({ nullable: false })
    categorieId!: number

    @Column({ nullable: false })
    marketId!: number

    @ManyToOne(type => Categorie, categorie => categorie.products)
    categorie!: Categorie

    @ManyToOne(type => Market, market => market.products)
    market!: Market

    setProductsValue = (iProduct: IProduct, categorie: Categorie, market: Market) => {
        this.nome = iProduct.nome;
        this.preco =  iProduct.preco;
        this.cesta = iProduct.cesta;
        (market) ? this.market = market : null;
        (categorie) ? this.categorie = categorie : null;
    }

}