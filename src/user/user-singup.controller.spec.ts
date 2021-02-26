/* eslint-disable @typescript-eslint/no-unused-vars */
import { CreateDealerRequest } from 'src/type/create-user.request';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { AuthService } from '../auth/auth.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserEntity } from '../database/entity/user/user.entity';

describe('CatsController', () => {
  let userController: UserController;
  let userService: UserService;
  let usersRepository: Repository<UserEntity>;
  let authService: AuthService;
  let jwtService: JwtService;

  beforeEach(() => {
    authService = new AuthService(userService, jwtService);
    usersRepository = new Repository<UserEntity>();
    userService = new UserService(usersRepository);
    userController = new UserController(userService, authService);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const request: CreateDealerRequest = {
        name: 'Teste1',
        surename: 'Teste2',
        cpf: '35510116803',
        email: 'dpmalva@gmail.com',
        password: 'boticario123',
      };
      const result: any = {
        name: 'Teste1',
        surename: 'Teste2',
        cpf: '35510116803',
        email: 'dpmalva@gmail.com',
      };
      jest.spyOn(userService, 'createUser').mockImplementation(() => result);

      expect(await userController.singUp(request)).toBe(result);
    });
  });
});
