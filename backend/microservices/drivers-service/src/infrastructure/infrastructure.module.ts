import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverModel } from './persistence/driver.model';
import { DriverRepositoryImpl } from './persistence/driver.repository.impl';
import { DRIVER_REPOSITORY } from '../domain/repositories/driver.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DriverModel])],
  providers: [
    {
      provide: DRIVER_REPOSITORY,
      useClass: DriverRepositoryImpl,
    },
  ],
  exports: [
    {
      provide: DRIVER_REPOSITORY,
      useClass: DriverRepositoryImpl,
    },
    TypeOrmModule,
  ],
})
export class InfrastructureModule {}