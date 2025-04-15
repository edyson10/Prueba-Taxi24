import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { PassengerOrmEntity } from '../infrastructure/persistence/passenger.model';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT || '5432'),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.PSG_POSTGRES_DB,
  entities: [PassengerOrmEntity],
  synchronize: true,
};