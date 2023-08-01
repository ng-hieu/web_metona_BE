import {Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import {City} from "./city";
import { Wards } from "./ward";
import { Bill } from "./bill";



@Entity()
export class District {
    @PrimaryColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    type:string;

    @ManyToOne(()=>City,(city)=>city.district)
    city: City;
    @OneToMany(()=>Wards,(wards)=>wards.district)
    wards:Wards[];
    @OneToMany(()=>Bill,(bill)=>bill.district)
    bill:Bill[]
}