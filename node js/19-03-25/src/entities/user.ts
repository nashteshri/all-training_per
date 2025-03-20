import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Profile } from "./profile"


@Entity({name:"tbluser_shrinivas"})
export class user{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    username:string
    @Column()
    email:string

    @OneToOne(()=>Profile,(profile)=>profile.user)
    @JoinColumn({name:"profileId"})
    profile: Profile
    post: any
}