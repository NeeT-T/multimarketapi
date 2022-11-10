import { Entity, PrimaryGeneratedColumn, Column, Index, OneToOne, JoinColumn } from "typeorm"
import IUser from "../Interfaces/IUser";
import Market from "./marketModel";

@Entity()
export default class User {

    @PrimaryGeneratedColumn('increment')
    id!: number

    @Index()
    @Column({ nullable: false })
    email!: string

    @Index()
    @Column({ nullable: false })
    senha!: string

    @Column({ nullable: false })
    data!: Date

    @OneToOne(() => Market, { nullable: false })
    @JoinColumn()
    market!: Market

    setUserValues(iUser: IUser, market: Market): void{
        this.email = iUser.email;
        this.data = new Date();
        this.market = market;
    }
}