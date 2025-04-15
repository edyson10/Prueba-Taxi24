import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database.config';
import { SeederService } from './shared/seeder/seeder.service';
import { LocationModel } from './infrastructure/persistence/location.model';
import { LocationRepositoryImpl } from './infrastructure/persistence/location.repository.impl';
import { LOCATION_REPOSITORY } from './domain/repositories/location.repository';
import { LocationController } from './infrastructure/http/controllers/location.controller';
import { UpdateLocationUseCase } from './application/use-cases/update-location.use-case';
import { GetCurrentLocationUseCase } from './application/use-cases/get-current-location.use-case';
import { GetAllCurrentLocationsUseCase } from './application/use-cases/get-all-current-locations.use-case';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forRoot(databaseConfig),
    TypeOrmModule.forFeature([LocationModel]),
  ],
  controllers: [LocationController],
  providers: [
    SeederService,
    UpdateLocationUseCase,
    GetCurrentLocationUseCase,
    GetAllCurrentLocationsUseCase,
    {
      provide: LOCATION_REPOSITORY,
      useClass: LocationRepositoryImpl,
    },
  ],
})
export class AppModule {}
