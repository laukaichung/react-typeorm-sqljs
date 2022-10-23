import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn,} from "typeorm";

@Entity()
export class Movie {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({type: "text"})
    name: string

    @Column({type: "text"})
    description: string

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
}
