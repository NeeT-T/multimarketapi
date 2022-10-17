import { Entity, PrimaryGeneratedColumn, Column, Unique, ManyToMany, JoinTable, Index, OneToMany } from "typeorm"
import Product from "./productModel"

@Entity()
@Unique(["cnpj"])
export default class Market {

    @PrimaryGeneratedColumn('increment')
    id!: number

    @Index()
    @Column()
    nome!: string

    @Column()
    email!: string

    @Column()
    cep!: string

    @Column()
    cnpj!: string

    // @ManyToMany(type => Product, product => product.markets)
    // @JoinTable()
    // products!: Product[]

    @OneToMany(type => Product, product => product.market)
    products!: Product[];

}