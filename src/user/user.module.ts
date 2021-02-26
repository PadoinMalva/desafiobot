import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { UserEntity } from '../database/entity/user/user.entity';
import { UserService } from './user.service';


@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    UserService,
  ],
  exports:[UserService, TypeOrmModule]
})
export class UserModule {}