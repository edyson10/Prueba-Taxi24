import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TripModel } from '../infrastructure/persistence/trip.model';
import * as dotenv from 'dotenv';

dotenv.config();

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.TRP_POSTGRES_DB,
  entities: [TripModel],
  synchronize: true, // Solo en desarrollo
};
