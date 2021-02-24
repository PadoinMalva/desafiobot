import { Body, Controller, Delete, HttpCode, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateSalesRequest } from 'src/type/create-sales.request';
import { EditSalesRequest } from 'src/type/edit-sales.request';
import { SalesService } from './sales.service';

@ApiTags('Sales')
@ApiBearerAuth()
@Controller('sales')
export class SalesController {
  constructor(private readonly customSalesService: SalesService,
    ) {}

  @UseGuards(JwtAuthGuard)
  @Post('')
  @HttpCode(201)
  async registerSales(
    @Body() request: CreateSalesRequest ,
  ): Promise<any> {
    console.log('request', request)
    return this.customSalesService.createSale(request)
    
    
  }

  @UseGuards(JwtAuthGuard)
  @Put(':saleId')
  @HttpCode(204)
  async editSales(
    @Param('saleId') saleId: number,
    @Body() request: EditSalesRequest ,
  ): Promise<any> {
    console.log('request', request)
    return this.customSalesService.editSale(saleId, request)
    
    
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':saleId')
  @HttpCode(204)
  async deleteSales(
    @Param('saleId') saleId: string,
  ): Promise<any> {
    return this.customSalesService.deleteSale(parseInt(saleId,10))
    
    
  }
}
