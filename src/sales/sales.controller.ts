import { Body, Controller, HttpCode, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateSalesRequest } from 'src/type/create-sales.request';

@ApiTags('Sales')
@ApiBearerAuth()
@Controller('sales')
export class SalesController {


  @UseGuards(JwtAuthGuard)
  @Post('')
  @HttpCode(201)
  async registerSales(
    @Body() request: CreateSalesRequest ,
  ): Promise<void> {
    console.log('request', request)
    
    // await this.customUserService.createUser(request);
  }
}
