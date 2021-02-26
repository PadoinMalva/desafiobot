import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SalesEntity } from '../sales/sales.entity';

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

  @OneToMany(
    () => SalesEntity,
    sales => sales.user
  )
  sales: SalesEntity[];
}
