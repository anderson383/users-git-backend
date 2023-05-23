import { UserCreateDto } from 'src/aplication/user/comander/dto/user-create.dto';

export abstract class RepositoryUser {
  abstract create(user: UserCreateDto): Promise<string>;
}
