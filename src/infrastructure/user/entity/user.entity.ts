import {
  Column, Entity, PrimaryGeneratedColumn
} from 'typeorm';
import { BaseEntity } from '../../config/entity/base.entity';

class JsonObjectTransformer {
  to(value: object): string {
    return JSON.stringify(value);
  }

  from(value: string): object {
    return JSON.parse(value);
  }
}

@Entity({ name: 'User' })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column()
    name: string;

  @Column({
    type: 'jsonb',
    transformer: new JsonObjectTransformer()
  })
    jsonData: object;
}

