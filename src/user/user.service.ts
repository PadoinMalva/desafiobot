import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/database/entity/user/user.entity';
import { CreateDealerRequest } from 'src/type/create-user.request';
import { SignInRequest } from 'src/type/singin.request';
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

  async singIn(request: SignInRequest,options: FindOneOptions<UserEntity> = {}): Promise<UserEntity>{
    const ormOptions = options;
    ormOptions.where = [
      {
        email: request.email,
      },
    ];

    const user = await this.usersRepository.findOne(ormOptions)
    console.log('user',user)
    if(!user || user?.password !== request.password){
      console.log('entreiiiiiii')
      throw new UnauthorizedException(
        'Unauthorized'
      ); 
    }


    return 
  }

}