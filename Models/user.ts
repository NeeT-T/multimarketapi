import { Entity, PrimaryGeneratedColumn, Column, Index, OneToOne, JoinColumn } from "typeorm"
import Market from "./marketModel"

@Entity()
export default class Product {

    @PrimaryGeneratedColumn('increment')
    id!: number

    @Index()
    @Column()
    login!: string

    @Index()
    @Column()
    senha!: string

    @Column()
    date!: Date

    @Column()
    isAtivo!: boolean

    @Column()
    marketId!: number

    @OneToOne(() => Market)
    @JoinColumn()
    market!: Market

}