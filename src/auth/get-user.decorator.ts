import { createParamDecorator } from '@nestjs/common';
import { UserEntity } from 'src/database/entity/user/user.entity';

export const GetUser = createParamDecorator(
  (data, req): UserEntity => {
    return req.user;
  },
);
