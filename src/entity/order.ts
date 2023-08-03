import { Product } from "./product";
import { Bill } from "src/entity/bill";

import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class Order {
    @PrimaryColumn()
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
