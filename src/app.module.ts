import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [TypeOrmModule.forRoot(),UserModule, AuthModule],
  controllers: [UserController],
  providers: [AuthService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
