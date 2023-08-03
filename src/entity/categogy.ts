import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    idCategory: number;
    @Column()
    nameCategory: string;
    @OneToMany(()=> Product, (product)=> product.category)
    products: Product[];
}