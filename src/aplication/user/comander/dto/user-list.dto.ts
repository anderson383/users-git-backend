import { IsEmpty } from 'class-validator';

export class UserListDto {
  @IsEmpty()
    id: string;

  @IsEmpty()
    name: string;
}
