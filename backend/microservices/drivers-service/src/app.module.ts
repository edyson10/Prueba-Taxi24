import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';

import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { DriverController } from './infrastructure/http/controllers/driver.controller';
import { SeederService } from './shared/seeder/seeder.service';
import { LocationHttpService } from './infrastructure/http/services/location-http.service';
import { CreateDriverUseCase } from './application/use-cases/create-driver.use-case';
import { FindDriverByIdUseCase } from './application/use-cases/find-driver-by-id.use-case';
import { UpdateDriverStatusUseCase } from './application/use-cases/update-driver-status.use-case';
import { ReportLocationUseCase } from './application/use-cases/report-location.use-case';
import { GetAllDriversUseCase } from './application/use-cases/get-all-drivers.use-case';
import { GetAvailableDriversUseCase } from './application/use-cases/get-available-drivers.use-case';
import { GetNearbyDriversUseCase } from './application/use-cases/get-nearby-drivers.use-case';

import { databaseConfig } from './config/database.config';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forRoot(databaseConfig),
    InfrastructureModule,
  ],
  controllers: [DriverController],
  providers: [
    SeederService,
    CreateDriverUseCase,
    FindDriverByIdUseCase,
    UpdateDriverStatusUseCase,
    ReportLocationUseCase,
    GetAllDriversUseCase,
    GetAvailableDriversUseCase,
    GetNearbyDriversUseCase,
    LocationHttpService,
  ],
})
export class AppModule {}