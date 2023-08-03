import { Bill } from './bill';
import { Payment } from './payment';
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pay{
    @PrimaryGeneratedColumn()
    idPay:number;
    @OneToOne(()=> Bill)
    @JoinColumn()
    bill : Bill;
    @Column()
    money:number;
    @Column()
    timeCurrent:string;
    @OneToOne(()=> Payment)
    @JoinColumn()
    payment:Payment;
}