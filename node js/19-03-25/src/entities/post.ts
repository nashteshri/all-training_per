import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { user } from "./user";

@Entity()
export class post{
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    title:string;

    @Column()
    content:string;

    @ManyToOne(() => user, (user) => user.post, { onDelete: "CASCADE" }) // Link to User
    user : user;
}