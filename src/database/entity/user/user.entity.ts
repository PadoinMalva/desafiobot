import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
@PrimaryGeneratedColumn()
id: number;

@Column('varchar')
name: string;

@Column('varchar')
surename: string;

@Column('varchar')
cpf: string;

@Column('varchar')
email: string;

@Column('varchar')
password: string;
}
