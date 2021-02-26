import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CustomEntity } from '../custom/custom.entity';
import { UserEntity } from '../user/user.entity';

@Entity()
export class SalesEntity extends CustomEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  cod: number;

  @Column('int')
  value: number;

  @Column()
  date: string;

  @Column('varchar')
  status: string;

  @ManyToOne(
    () => UserEntity,
    user => user.sales
  )
  user: UserEntity;
}
