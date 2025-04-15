import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeederService } from './shared/seeder/seeder.service';
import { CreatePassengerUseCase } from './application/use-cases/create-passenger.use-case';
import { FindPassengerByIdUseCase } from './application/use-cases/find-passenger-by-id.use-case';
import { PassengerController } from './infrastructure/http/controllers/passenger.controller';
import { GetAllPassengersUseCase } from './application/use-cases/get-all-passengers.use-case';
import { DriverHttpService } from './infrastructure/http/services/driver-http.service';
import { GetNearestDriversUseCase } from './application/use-cases/get-nearest-drivers.use-case';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { databaseConfig } from './config/database.config';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forRoot(databaseConfig), 
    InfrastructureModule
  ],
  controllers: [PassengerController],
  providers: [
    SeederService,
    CreatePassengerUseCase,
    FindPassengerByIdUseCase,
    GetAllPassengersUseCase,
    DriverHttpService,
    GetNearestDriversUseCase
  ],
})
export class AppModule {}