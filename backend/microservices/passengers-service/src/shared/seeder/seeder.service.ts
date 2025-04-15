import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { PassengerOrmEntity } from '../../infrastructure/persistence/passenger.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SeederService implements OnApplicationBootstrap {
  private readonly logger = new Logger(SeederService.name);

  constructor(private readonly dataSource: DataSource) {}

  async onApplicationBootstrap() {
    await this.seedPassengers();
  }

  private async seedPassengers() {
    const passengerRepo = this.dataSource.getRepository(PassengerOrmEntity);

    const count = await passengerRepo.count();
    if (count > 0) {
      this.logger.log('Los pasajeros ya existen, omitiendo carga inicial.');
      return;
    }

    const passengers: PassengerOrmEntity[] = [
      {
        id: '12208f87-babc-4661-a5f3-211fb78e5ef4',
        name: 'Carlos Ramírez',
        phone: '+5715511122233',
        email: 'carlos.ramirez@example.com',
      },
      {
        id: 'bf67cacf-8d76-4e97-a2f0-f8df9a42eb25',
        name: 'María Fernanda',
        phone: '+5715544455566',
        email: 'maria.fernanda@example.com',
      },
      {
        id: 'c8685cf0-0f4f-4f6b-8920-740f245e15ce',
        name: 'Roberto Díaz',
        phone: '+5715577788899',
        email: 'roberto.diaz@example.com',
      },
    ];

    await passengerRepo.save(passengers);
    this.logger.log('Pasajeros iniciales cargados.');
  }
}
