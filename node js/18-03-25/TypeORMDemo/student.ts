import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import "reflect-metadata";
@Entity()
class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 256 })
    name: string;

    @Column({ type: 'varchar', length: 256 }) // Fixed 'TYPE' to 'type'
    stdClass: string;
}
export {Student};