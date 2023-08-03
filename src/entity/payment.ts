import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Payment{
    @PrimaryColumn()
    idPayment:number;
    @Column()
    ATM:string;
    @Column()
    COD:string;
}

