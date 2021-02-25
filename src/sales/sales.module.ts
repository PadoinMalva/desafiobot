import { HttpModule, Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { SalesEntity } from 'src/database/entity/sales/sales.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/database/entity/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SalesEntity, UserEntity]), HttpModule],
  providers: [SalesService],
  controllers: [SalesController],
  exports:[SalesService, TypeOrmModule,HttpModule]
})
export class SalesModule {}
