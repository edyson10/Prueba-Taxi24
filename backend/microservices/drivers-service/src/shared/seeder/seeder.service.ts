import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { DriverModel } from '../../infrastructure/persistence/driver.model'; 
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SeederService implements OnApplicationBootstrap {
  private readonly logger = new Logger(SeederService.name);

  constructor(private readonly dataSource: DataSource) {}

  async onApplicationBootstrap() {
    await this.seedDrivers();
  }

  private async seedDrivers() {
    const driverRepo = this.dataSource.getRepository(DriverModel);

    const count = await driverRepo.count();
    if (count > 0) {
      this.logger.log('Los datos ya existen, omitiendo carga inicial.');
      return;
    }

    const drivers: DriverModel[] = [
      {
        id: '39f3fc67-af77-42ce-8634-8d591109b950',
        name: 'Juan Pérez',
        phone: '+5715512345678',
        email: 'juan.perez@example.com',
        status: 'available',
      },
      {
        id: '3afa7bf8-7d1a-4f9d-a391-833a511896b9',
        name: 'Ana García',
        phone: '+5715587654321',
        email: 'ana.garcia@example.com',
        status: 'avaliable',
      },
      {
        id: '956eeaf2-fa31-49c3-bcef-761614637280',
        name: 'Luis Martínez',
        phone: '+5715544332211',
        email: 'luis.martinez@example.com',
        status: 'available',
      },
      {
        id: '9bb53746-6d94-416f-8825-eaf2d48c29d1',
        name: 'Sofía López',
        phone: '+5715599887766',
        email: 'sofia.lopez@example.com',
        status: 'avaliable',
      },
    ];

    await driverRepo.save(drivers);
    this.logger.log('Conductores iniciales cargados.');
  }
}
