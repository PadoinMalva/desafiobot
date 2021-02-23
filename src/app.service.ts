import { Injectable } from '@nestjs/common';
import { UserService } from './database/entity/user/user.service';
import { CreateDealerRequest } from './type/create-user.request';

@Injectable()
export class AppService {
  constructor(
    private readonly customUserService: UserService
  ) {}
  async createUser(request: CreateDealerRequest): Promise<void> {
    await this.customUserService.createUser(request)
  }
}
