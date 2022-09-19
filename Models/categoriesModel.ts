import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export default class Marketero {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

}
