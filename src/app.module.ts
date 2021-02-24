import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(),UserModule],
  controllers: [UserController],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
