import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Unique } from "typeorm"
import Product from "./productModel"

@Entity()
@Unique(['nome'])
export default class Categorie {

    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column({ nullable: false })
    nome!: string;

    @OneToMany(type => Product, product => product.categorie)
    products!: Product[];

}