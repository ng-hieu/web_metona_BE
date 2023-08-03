import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { City } from "./city";
import { District } from "./district";
import { Wards } from "./ward";
import { User } from "./user";

@Entity()
export class Bill {
    @PrimaryGeneratedColumn()
    idBill: number;
    @Column()
    name: string;
    @Column()
    phone: string;
    @Column()
    email: string;
    @Column()
    status: boolean;
    @Column()
    totalPrice: number;
    @Column()
    totalQuantity: number;
    @ManyToOne(() => City, (city) => city.bill)
    city: City;
    @ManyToOne(() => District, (district) => district.bill)
    district: District;
    @ManyToOne(() => Wards, (wards) => wards.bill)
    wards: Wards;
    @ManyToOne(() => User, (user) => user.bill)
    user: User;
}
