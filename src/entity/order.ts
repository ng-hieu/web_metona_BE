import { Product } from "./product";
import { Bill } from "../entity/bill";

import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    idOrder: number;
    @Column()
    priceCurren: number;
    @Column()
    quantity: number;
    @ManyToOne(() => Bill, (bill) => bill.order)
    bill: Order;
    @ManyToOne(() => Product, (product) => product.order)
    Product: Order;
}