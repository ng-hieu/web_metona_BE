import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
@Entity()
export class Admin {
    @PrimaryColumn()
    adminId: number;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    name:string;
}
