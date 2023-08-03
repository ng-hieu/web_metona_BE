import {Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import { District } from "./district";
import { Bill } from "./bill";



@Entity()
export class Wards {
    @PrimaryColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    type:string;
    @ManyToOne(()=>District,(district)=>district.wards)
    district: District ;
    @OneToMany(()=>Bill,(bill)=>bill.wards)
    bill:Bill[];
} 