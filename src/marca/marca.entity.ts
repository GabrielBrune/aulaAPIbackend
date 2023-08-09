import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class MARCA{
    @PrimaryColumn()
    ID: string;

    @Column()
    NOME: string;
    
}