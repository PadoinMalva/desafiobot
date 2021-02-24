import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "../user/user.entity";

@Entity()
export class SalesEntity {

@PrimaryGeneratedColumn()
id: number;

@Column('int')
cod: number;

@Column('int')
value: number;

@Column('varchar')
date: string;

@Column('varchar')
status: string;


@ManyToOne(() => UserEntity, user => user.sales)
user: UserEntity;
}