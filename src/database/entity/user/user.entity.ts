import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  Unique,
} from 'typeorm';
import { CustomEntity } from '../custom/custom.entity';
import { SalesEntity } from '../sales/sales.entity';

@Entity()
@Unique(['cpf'])
export class UserEntity extends CustomEntity {
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
