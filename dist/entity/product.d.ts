import { Category } from "./categogy";
import { Image } from "./image";
export declare class Product {
    idProduct: number;
    nameProduct: string;
    priceProduct: number;
    quantityProduct: number;
    descriptionProduct: string;
    image: Image[];
    category: Category;
}
