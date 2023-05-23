import {
  ConfigModule, ConfigService
} from '@nestjs/config';
import { dataBaseConfigFactory } from './config/data-base.config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({imports: [
  TypeOrmModule.forRootAsync({
    useFactory: dataBaseConfigFactory,
    inject: [ConfigService]
  }),
  ConfigModule.forRoot({
    envFilePath: `env/${ process.env.NODE_ENV }.env`,
    isGlobal: true
  }),
  UserModule
] })
export class InfrastructureModule {}
