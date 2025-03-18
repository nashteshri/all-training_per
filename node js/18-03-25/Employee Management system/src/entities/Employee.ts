
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"tblEmployee_shri"})
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    position: string;

    // @Column({ type: "number" })
    // salary: number;
}
