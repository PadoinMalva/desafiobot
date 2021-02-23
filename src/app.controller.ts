import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateDealerRequest } from './type/create-user.request';

@Controller('dealer')
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Post()
  @HttpCode(201)
  async createDealer(
    @Body() dealer: CreateDealerRequest,
  ): Promise<void> {
    
    await this.appService.createDealer(dealer);
  }








}
