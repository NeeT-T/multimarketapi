import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, Double, Index } from "typeorm"
import Categorie from "./categorieModel"
import Market from "./marketModel"
import ProductDTO from "../DTOs/productDTO"

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

    // @ManyToMany(() => Market, market => market.products)
    // markets!: Market[]

    @ManyToOne(type => Categorie, categorie => categorie.products)
    categorie!: Categorie

    @ManyToOne(type => Market, market => market.products)
    market!: Market

    static setProductsValue = (productDto: ProductDTO, categorie: Categorie, market: Market) => {
        const product = new Product();
        product.nome = productDto._nome;
        product.preco =  productDto._preco;
        product.cesta = productDto._cesta;
        (market) ? product.market = market : null;
        (categorie) ? product.categorie = categorie : null;
        return product;
    }

}