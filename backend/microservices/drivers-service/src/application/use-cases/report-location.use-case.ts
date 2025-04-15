import { Injectable } from '@nestjs/common';
import { LocationHttpService } from '../../infrastructure/http/services/location-http.service';

@Injectable()
export class ReportLocationUseCase {
  constructor(private readonly locationHttp: LocationHttpService) {}

  async execute(driverId: string, lat: number, lon: number): Promise<void> {
    await this.locationHttp.sendLocation(driverId, lat, lon);
  }
}