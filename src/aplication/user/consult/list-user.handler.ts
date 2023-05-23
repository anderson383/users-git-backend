import { DaoUser } from '../../../domain/user/dao/dao-user';
import { Injectable } from '@nestjs/common';
import { UserListDto } from '../comander/dto/user-list.dto';

@Injectable()
export class ListUserHandler {
  constructor(private _daoUser: DaoUser) {}

  async execute(): Promise<UserListDto[]> {
    return this._daoUser.list();
  }
}
