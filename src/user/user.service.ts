import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../database/entity/user/user.entity';
import { CreateDealerRequest } from 'src/type/create-user.request';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateUserResponse } from 'src/type/create-user.response';


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
    const response: UserEntity = await this.usersRepository.save(request)
    return response
  } 

  async findByEmail(email:string, options: FindOneOptions<UserEntity> = {}): Promise<UserEntity>{
    const ormOptions = options;
    ormOptions.where = [
      {
        email: email,
      },
    ];
    return this.usersRepository.findOne(ormOptions)
  }

  async findByCpf(cpf:string, options: FindOneOptions<UserEntity> = {}): Promise<UserEntity>{
    const ormOptions = options;
    ormOptions.where = [
      {
        cpf,
      },
    ];
    return this.usersRepository.findOne(ormOptions)
  }


}