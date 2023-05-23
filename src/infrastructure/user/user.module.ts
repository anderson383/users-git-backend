import { DaoUser } from 'src/domain/user/dao/dao-user';
import { ListUserHandler } from './../../aplication/user/consult/list-user.handler';

import { CreateUserHandler } from 'src/aplication/user/comander/create-user.handler';
import { DaoUserService } from './adapter/dao/dao-user-service';
import { Module } from '@nestjs/common';
import { RepositoryUser } from 'src/domain/user/repository/repository-user';
import { RepositoryUserService } from './adapter/repository/repository-user.service';
import { UserController } from './controllers/user.controller';

@Module({
  providers: [
    ListUserHandler,
    CreateUserHandler,
    {
      provide: DaoUser,
      useClass: DaoUserService
    },
    {
      provide: RepositoryUser,
      useClass: RepositoryUserService
    }
  ],
  controllers: [UserController]
})
export class UserModule {}

