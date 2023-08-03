import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./categogy";
import { Image } from "./image";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    idProduct: number;
    @Column({ type: "varchar" })
    nameProduct: string;
    @Column()
    priceProduct: number;
    @Column()
    quantityProduct: number;
    @Column()
    descriptionProduct: string;
    @OneToMany(() => Image, (image) => image.product)
    image: Image[];
    @ManyToOne(() => Category, (Category) => Category.products)
    category: Category;
}