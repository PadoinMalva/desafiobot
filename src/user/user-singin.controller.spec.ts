import { CreateDealerRequest } from 'src/type/create-user.request';
import { AuthService } from '../auth/auth.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserEntity } from '../database/entity/user/user.entity';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';

describe('CatsController', () => {
  let userController: UserController;
  let userService: UserService;
  let usersRepository: Repository<UserEntity>
  let authService: AuthService
  let jwtService: JwtService

  beforeEach(() => {
    authService = new AuthService(userService, jwtService)
    usersRepository = new Repository<UserEntity>()
   userService = new UserService(usersRepository);
    userController = new UserController(userService, authService);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const request = {
      'user': 'daniel'
      }
      const result: any = {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTQzMDM1NjIsImV4cCI6MTYyMjk0MzU2Mn0.Dw7I4T0FM0fOHm7Tpziz0DJDTYPTE88LkEaKUN3LndE"
      }
      jest.spyOn(authService, 'login').mockImplementation(() => result);

      expect(await userController.signIn(request)).toBe(result);
    });
  });
});