import { Injectable } from '@nestjs/common';
import { CreateDealerRequest } from './type/create-user.request';

@Injectable()
export class AppService {
  async createDealer(dealer: CreateDealerRequest): Promise<void> {
    
  }
}
