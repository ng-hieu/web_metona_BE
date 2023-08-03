import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
@Entity()
export class Policy {
    @PrimaryColumn()
    idPolicy: number;
    @Column()
    content: string;
}
