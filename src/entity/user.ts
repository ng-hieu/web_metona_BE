import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Bill } from "./bill";
@Entity()
export class User {
    @PrimaryColumn()
    accountId: number;
    @Column()
    nameAccount: string;
    @Column()
    password: string;
    @Column()
    phoneNumber: string;
    @Column()
    email: string;
    @OneToMany(() => Bill, (bill) => bill.account)
    bill: Bill[];
}
