import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class CustomEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column('text')
  createdBy: string;

  @CreateDateColumn()
  updatedAt?: Date;

  @Column('text')
  updatedBy?: string;


  
}
