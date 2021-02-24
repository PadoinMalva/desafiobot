import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateDealerRequest } from 'src/type/create-user.request';
import { SignInRequest } from 'src/type/singin.request';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
  constructor(private readonly customUserService: UserService) {}


  @Post()
  @HttpCode(201)
  async createUser(
    @Body() request: CreateDealerRequest,
  ): Promise<void> {
    
    await this.customUserService.createUser(request);
  }


  @ApiOperation({
    description: 'SingIn',
  })
  @ApiBody({type: SignInRequest})
  @ApiResponse({})
  @HttpCode(200)
  @Post('signin')
  async signIn(@Body() request: SignInRequest): Promise<any> {
    console.log('request', request)
    const user = await this.customUserService.singIn(request)
    
    // const user = await this.authService.validateUserPassword(
    //   request.emailOrTelephone,
    //   request.password
    // );
    // return this.authService.signIn(user);
  }






}
