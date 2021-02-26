/* eslint-disable @typescript-eslint/no-unused-vars */
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDealerRequest } from 'src/type/create-user.request';
import { FindOneOptions, Repository } from 'typeorm';
import { UserEntity } from '../database/entity/user/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }

  async createUser(request: CreateDealerRequest): Promise<UserEntity> {
    try {
      const response: UserEntity = await this.usersRepository.save(request);
      return response;
    } catch (error) {
      throw new BadRequestException('Bad Request', 'Cant Duplicate cpf');
    }
  }

  async findByEmail(
    email: string,
    options: FindOneOptions<UserEntity> = {}
  ): Promise<UserEntity> {
    const ormOptions = options;
    ormOptions.where = [
      {
        email,
      },
    ];
    return this.usersRepository.findOne(ormOptions);
  }

  async findByCpf(
    cpf: string,
    options: FindOneOptions<UserEntity> = {}
  ): Promise<UserEntity> {
    const ormOptions = options;
    ormOptions.where = [
      {
        cpf,
      },
    ];
    return this.usersRepository.findOne(ormOptions);
  }
}
