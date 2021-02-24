import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { SalesModule } from './sales/sales.module';
import { SalesController } from './sales/sales.controller';
import { SalesService } from './sales/sales.service';
import { UserService } from './user/user.service';

@Module({
  imports: [TypeOrmModule.forRoot(),UserModule, AuthModule, SalesModule],
  controllers: [UserController, SalesController],
  providers: [AuthService,SalesService,UserService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
