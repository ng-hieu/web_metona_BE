import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Payment{
    @PrimaryGeneratedColumn()
    idPayment:number;
    @Column()
    ATM:string;
    @Column()
    COD:string;
}

