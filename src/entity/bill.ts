import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { City } from "./city";
import { District } from "./district";
import { Wards } from "./ward";

@Entity()
export class Bill{
    @PrimaryColumn()
    idBill:number;
    @Column()
    name:string;
    @Column()
    phone:string;
    @Column()
    email:string;
    @Column()
    status:boolean;
    @Column()
    totalPrice:number;
    @Column()
    totalQuantity:number;
    @ManyToOne(() => City, (city) => city.bill)
    city: City;
    @ManyToOne(() => District, (district) => district.bill)
    district: District;
    @ManyToOne(() => Wards, (wards) => wards.bill)
    wards: Wards;

}