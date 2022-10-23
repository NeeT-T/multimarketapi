import { Entity, PrimaryGeneratedColumn, Column, Index, OneToOne, JoinColumn } from "typeorm"
import IUser from "../Interfaces/IUser";
import Market from "./marketModel";

@Entity()
export default class User {

    @PrimaryGeneratedColumn('increment')
    id!: number

    @Index()
    @Column()
    email!: string

    @Index()
    @Column()
    senha!: string

    @Column()
    data!: Date

    @OneToOne(() => Market, { nullable: false })
    @JoinColumn()
    market!: Market

    static setUserValues(iUser: IUser) {
        const user = new User();
        user.id = iUser.id;
        user.email = iUser.email;
        user.data = new Date();
        user.market = Market.setMarketValues(iUser.market);
        return user;
    }
}