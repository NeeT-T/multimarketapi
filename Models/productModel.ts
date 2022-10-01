import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, Double } from "typeorm"
import Categorie from "./categorieModel"
import Market from "./marketModel"

@Entity()
export default class Product {

    @PrimaryGeneratedColumn('increment')
    id!: number

    @Column()
    nome!: string

    @Column('decimal', { precision: 5, scale: 2 })
    preco!: number

    @Column()
    cesta!: boolean

    @Column()
    categorieId!: number

    @ManyToMany(() => Market, market => market.products)
    markets!: Market[]

    @ManyToOne(type => Categorie, categorie => categorie.products)
    categorie!: Categorie

}