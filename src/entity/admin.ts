import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Admin {
    @PrimaryGeneratedColumn()
    adminId: number;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    name:string;
}
