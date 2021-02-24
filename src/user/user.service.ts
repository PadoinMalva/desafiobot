import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/database/entity/user/user.entity';
import { CreateDealerRequest } from 'src/type/create-user.request';
import { FindOneOptions, Repository } from 'typeorm';


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