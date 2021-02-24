// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class AuthService {}
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignInRequest } from 'src/type/singin.request';
import { UserService } from 'src/user/user.service';
// import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService,
    private jwtService: JwtService) {}

  async validateUser(email: string, password:string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
