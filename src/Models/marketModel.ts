import { Entity, PrimaryGeneratedColumn, Column, Unique, ManyToMany, JoinTable, Index, OneToMany } from "typeorm"
import Product from "./productModel";
import IMarket from "../Interfaces/IMarket";

@Entity()
@Unique(["cnpj"])
export default class Market {

    @PrimaryGeneratedColumn('increment')
    id!: number

    @Index()
    @Column({ nullable: false })
    nome!: string
    
    @Column({ nullable: false })
    cep!: string

    @Column({ nullable: false })
    cnpj!: string

    @OneToMany(type => Product, product => product.market)
    products!: Product[];

    setMarketValues(iMarket: IMarket) {
        this.nome = iMarket.nome;
        this.cep = iMarket.cep;
        this.cnpj = iMarket.cnpj;
    }
}