
import { Injectable } from '@nestjs/common';
import { RepositoryUser } from 'src/domain/user/repository/repository-user';
import { UserCreateDto } from './dto/user-create.dto';

@Injectable()
export class CreateUserHandler {
  constructor(private _repositoryUser: RepositoryUser) {}

  async execute(user: UserCreateDto) {
    return this._repositoryUser.create(user);
  }
}
