import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripModel } from './persistence/trip.model';
import { TripRepositoryImpl } from '../infrastructure/persistence/trip.repository.impl';
import { TRIP_REPOSITORY } from '../domain/repositories/trip.repository';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([TripModel]),
  ],
  providers: [
    {
      provide: TRIP_REPOSITORY,
      useClass: TripRepositoryImpl,
    }
  ],
  exports: [
    {
      provide: TRIP_REPOSITORY,
      useClass: TripRepositoryImpl
    },
  ],
})
export class InfrastructureModule {}