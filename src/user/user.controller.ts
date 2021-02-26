/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Request,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserEntity } from 'src/database/entity/user/user.entity';
import { CreateDealerRequest } from '../type/create-user.request';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { SignInRequest } from '../type/singin.request';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(
    private readonly customUserService: UserService,
    private readonly customAuthService: AuthService
  ) {}

  @Post('singup')
  @HttpCode(201)
  async singUp(@Body() request: CreateDealerRequest): Promise<UserEntity> {
    const response = await this.customUserService.createUser(request);
    delete response.password;

    return response;
  }

  @ApiOperation({
    description: 'SingIn',
  })
  @ApiBody({ type: SignInRequest })
  @UseGuards(LocalAuthGuard)
  @HttpCode(200)
  @Post('signin')
  async signIn(@Request() req: any): Promise<any> {
    return this.customAuthService.login(req.user);
  }
}
