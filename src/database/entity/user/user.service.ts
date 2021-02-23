import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDealerRequest } from 'src/type/create-user.request';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}



  async findAll(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }

  async createUser(request: CreateDealerRequest): Promise<UserEntity>{
    return this.usersRepository.save(request)
  }


}