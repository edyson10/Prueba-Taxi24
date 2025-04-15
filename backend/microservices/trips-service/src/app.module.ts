import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database.config';
import { TripModel } from './infrastructure/persistence/trip.model';
import { CreateTripUseCase } from './application/use-cases/create-trip.use-case';
import { TripController } from './infrastructure/http/controllers/trip.controller';
import { AssignDriverUseCase } from './application/use-cases/assign-driver.use-case';
import { StartTripUseCase } from './application/use-cases/start-trip.use-case';
import { CompleteTripUseCase } from './application/use-cases/complete-trip.use-case';
import { PassengerHttpService } from './infrastructure/http/services/passenger-http.service';
import { DriverHttpService } from './infrastructure/http/services/driver-http.service';
import { LocationHttpService } from './infrastructure/http/services/location-http.service';
import { FindTripByIdUseCase } from './application/use-cases/find-trip-by-id.use-case';
import { FindActiveTripsUseCase } from './application/use-cases/find-active-trips.use-case';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forRoot(databaseConfig),
    TypeOrmModule.forFeature([TripModel]),
    InfrastructureModule,
  ],
  controllers: [TripController],
  providers: [
    CreateTripUseCase,
    FindActiveTripsUseCase,
    AssignDriverUseCase,
    StartTripUseCase,
    CompleteTripUseCase,
    DriverHttpService,
    PassengerHttpService,
    LocationHttpService,
    FindTripByIdUseCase,
  ],
})
export class AppModule {}
