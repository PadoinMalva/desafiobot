// import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
// import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
// import { AppService } from './app.service';
// import { CreateDealerRequest } from './type/create-user.request';
// import { SignInRequest } from './type/singin.request';

// @Controller('user')
// export class AppController {
//   constructor(private readonly appService: AppService) {}


//   @Post()
//   @HttpCode(201)
//   async createUser(
//     @Body() request: CreateDealerRequest,
//   ): Promise<void> {
    
//     await this.appService.createUser(request);
//   }


//   @ApiOperation({
//     description: 'SingIn',
//   })
//   @ApiBody({type: SignInRequest})
//   @ApiResponse({})
//   @HttpCode(200)
//   @Post('signin')
//   async signIn(@Body() request: SignInRequest): Promise<any> {
//     console.log('request', request)
//     const user = await this.appService.validatePassword(request)
//     // const user = await this.authService.validateUserPassword(
//     //   request.emailOrTelephone,
//     //   request.password
//     // );
//     // return this.authService.signIn(user);
//   }






// }
