import { DaoUser } from '../../../../domain/user/dao/dao-user';
import {EntityManager} from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { UserListDto } from 'src/aplication/user/comander/dto/user-list.dto';

@Injectable()
export class DaoUserService implements DaoUser {
  constructor(@InjectEntityManager() private entityManager: EntityManager) {}

  async list(): Promise<UserListDto[]> {
    const query = this.entityManager.createQueryBuilder<UserListDto>('User', 'u')
      .select(['u.id', 'u.name', 'u.jsonData']);

    return query.getMany();
  }
}
