import {
  Body,
  Controller, Get, Param, Post
} from '@nestjs/common';
import { CreateUserHandler } from 'src/aplication/user/comander/create-user.handler';
import { ListUserHandler } from '../../../aplication/user/consult/list-user.handler';
import { UserCreateDto } from 'src/aplication/user/comander/dto/user-create.dto';

@Controller('user')
export class UserController {
  constructor(
    private _listUser: ListUserHandler,
    private _createUser: CreateUserHandler
  ) {}

  @Get('/list')
  async list() {
    return this._listUser.execute();
  }

  @Post()
  async save(@Body() createUser: UserCreateDto) {
    return this._createUser.execute(createUser);
  }
}
