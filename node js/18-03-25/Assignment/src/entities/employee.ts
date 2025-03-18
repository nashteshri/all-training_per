import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 256 })
    name!: string;

    @Column({ type: "varchar", length: 256 })
    email!: string;

    @Column({ type: "varchar", length: 256 })
    position!: string;

    @Column({ type: "float" })
    salary!: number;
}
