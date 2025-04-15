import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DriverModel } from '../infrastructure/persistence/driver.model';
import * as dotenv from 'dotenv';

dotenv.config();

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.DRV_POSTGRES_DB,
  entities: [DriverModel],
  synchronize: true,
};