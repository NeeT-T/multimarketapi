import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import Product from "./productModel"

@Entity()
export default class Categorie {

    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column()
    nome!: string;

    @OneToMany(type => Product, product => product.categorie)
    products!: Product[];

}