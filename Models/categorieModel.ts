import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export default class Categorie {

    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    nome!: string

}