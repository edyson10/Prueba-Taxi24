import { Inject, Injectable } from '@nestjs/common';
import { DRIVER_REPOSITORY } from '../../domain/repositories/driver.repository';
import { LocationHttpService } from '../../infrastructure/http/services/location-http.service';
import { DriverRepositoryImpl } from '../../infrastructure/persistence/driver.repository.impl';
import { Driver } from '../../domain/entities/driver.entity';
import { getDistance } from 'geolib';

@Injectable()
export class GetNearbyDriversUseCase {
  constructor(
      @Inject(DRIVER_REPOSITORY)
      private readonly driverRepository: DriverRepositoryImpl,
      private readonly locationService: LocationHttpService
    ) {}

  async execute(lat: number, lon: number): Promise<Driver[]> {
    const locations = await this.locationService.getAllLocations();
    const availableDrivers = await this.driverRepository.findAvailable();
  
    const nearby: Driver[] = [];
  
    for (const driver of availableDrivers) {
      const loc = locations.find((l) => l.driverId === driver.id);
      if (!loc) continue;
  
      const distance = getDistance(
        { latitude: lat, longitude: lon },
        { latitude: loc.latitude, longitude: loc.longitude }
      );
  
      if (distance <= 3000) {
        nearby.push(driver);
      }
    }
  
    return nearby;
  }
}
