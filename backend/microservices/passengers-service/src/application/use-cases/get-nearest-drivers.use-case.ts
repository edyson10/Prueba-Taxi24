import { Injectable } from '@nestjs/common';
import { DriverHttpService } from '../../infrastructure/http/services/driver-http.service';

@Injectable()
export class GetNearestDriversUseCase {
  constructor(private readonly driverService: DriverHttpService) {}

  async execute(lat: number, lon: number): Promise<any[]> {
    const drivers = await this.driverService.getNearbyDrivers(lat, lon);
    return drivers.slice(0, 3); // Solo los 3 más cercanos
  }
}