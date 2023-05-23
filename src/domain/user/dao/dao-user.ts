import { UserListDto } from '../../../aplication/user/comander/dto/user-list.dto';

export abstract class DaoUser {
  abstract list(): Promise<UserListDto[]>;
}
