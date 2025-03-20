import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { user } from "./user";

@Entity()
export class Profile{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    bio:string

    @OneToOne(()=>user,(user)=>user.profile)
    user: user;
}