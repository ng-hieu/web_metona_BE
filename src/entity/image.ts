import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Product } from "./product";


@Entity()
export class Image{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    imageURL: string;
    @ManyToOne(()=> Product, (product)=> product.image)
    product: Product;
}
