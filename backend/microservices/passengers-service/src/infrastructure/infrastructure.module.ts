import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PassengerOrmEntity } from './persistence/passenger.model';
import { TypeOrmPassengerRepository } from './persistence/passenger.repository.impl';
import { DriverHttpService } from './http/services/driver-http.service';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forFeature([PassengerOrmEntity])
  ],
  providers: [
    DriverHttpService,
    {
      provide: 'PassengerDbPort',
      useClass: TypeOrmPassengerRepository,
    },
  ],
  exports: ['PassengerDbPort', DriverHttpService],
})
export class InfrastructureModule {}
