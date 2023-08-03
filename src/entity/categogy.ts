import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Product } from "./product";

@Entity()
export class Category {
    @PrimaryColumn()
    idCategory: number;
    @Column()
    nameCategory: string;
    @OneToMany(()=> Product, (product)=> product.category)
    products: Product[];
}