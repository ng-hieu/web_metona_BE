import {Column, Entity, OneToMany, PrimaryColumn,} from "typeorm";
import { District } from "./district";
import { Bill } from "./bill";


@Entity()
export class City{
    @PrimaryColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    type:string;
    @Column()
    slug:string;
    @OneToMany(()=>District,(district)=>district.city)
    district:District[];
    @OneToMany(()=>Bill,(bill)=>bill.city)
    bill:Bill[]
}