import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { LocationModel } from '../infrastructure/persistence/location.model';
import * as dotenv from 'dotenv';

dotenv.config();

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.LOC_POSTGRES_DB,
  entities: [LocationModel],
  synchronize: true, // Solo para desarrollo
};