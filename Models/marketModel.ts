import { Entity, PrimaryGeneratedColumn, Column, Unique, ManyToMany, JoinTable } from "typeorm"
import Product from "./productModel"

@Entity()
@Unique(["cnpj"])
export default class Market {

    @PrimaryGeneratedColumn('increment')
    id!: number

    @Column()
    nome!: string

    @Column()
    email!: string

    @Column()
    cep!: string

    @Column()
    cnpj!: string

    @ManyToMany(type => Product, product => product.markets)
    @JoinTable()
    products!: Product[]

}