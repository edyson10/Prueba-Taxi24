import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { LocationModel } from '../../infrastructure/persistence/location.model';

@Injectable()
export class SeederService implements OnApplicationBootstrap {
  private readonly logger = new Logger(SeederService.name);

  constructor(private readonly dataSource: DataSource) {}

  async onApplicationBootstrap() {
    await this.seedLocations();
  }

  private async seedLocations() {
    const locationRepo = this.dataSource.getRepository(LocationModel);

    const count = await locationRepo.count();
    if (count > 0) {
      this.logger.log('Ubicaciones ya existentes. Se omite el seeding.');
      return;
    }

    const now = new Date();

    const locations: LocationModel[] = [
      {
        id: '3afa7bf8-7d1a-4f9d-a391-833a511896b9', // el UUID será generado automáticamente
        driverId: '39f3fc67-af77-42ce-8634-8d591109b950', // Juan Pérez
        latitude: 19.432608,
        longitude: -99.133209,
        timestamp: now,
      },
      {
        id: '956eeaf2-fa31-49c3-bcef-761614637280',
        driverId: '3afa7bf8-7d1a-4f9d-a391-833a511896b9', // Ana García
        latitude: 19.427025,
        longitude: -99.167665,
        timestamp: now,
      },
      {
        id: '39f3fc67-af77-42ce-8634-8d591109b950',
        driverId: '956eeaf2-fa31-49c3-bcef-761614637280', // Luis Martínez
        latitude: 19.445364,
        longitude: -99.140252,
        timestamp: now,
      },
    ];

    await locationRepo.save(locations);
    this.logger.log('Ubicaciones iniciales cargadas.');
  }
}