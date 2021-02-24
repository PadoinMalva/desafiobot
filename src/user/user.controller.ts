import { Body, Controller, Request, HttpCode, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { CreateDealerRequest } from 'src/type/create-user.request';
import { SignInRequest } from 'src/type/singin.request';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly customUserService: UserService,
    private readonly customAuthService: AuthService) {}


  @Post('singup')
  @HttpCode(201)
  async singUp(
    @Body() request: CreateDealerRequest,
  ): Promise<void> {
    
    await this.customUserService.createUser(request);
  }


  @ApiOperation({
    description: 'SingIn',
  })
  @ApiBody({type: SignInRequest})
  @UseGuards(LocalAuthGuard)
  @HttpCode(200)
  @Post('signin')
  async signIn(@Request() req): Promise<any> {
    return this.customAuthService.login(req.user)

  }






}
