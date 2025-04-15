import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class DriverHttpService {
  constructor(private readonly http: HttpService) {}

  async getNearbyDrivers(lat: number, lon: number): Promise<any[]> {
    const res$ = this.http.get('http://drivers-service:3001/drivers/nearby', {
      params: { lat, lon }
    });
    const response = await lastValueFrom(res$);
    return response.data;
  }
}