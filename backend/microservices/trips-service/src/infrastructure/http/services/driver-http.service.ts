import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class DriverHttpService {
  constructor(private readonly http: HttpService) {}

  async getDriver(driverId: string): Promise<any> {
    const response$ = this.http.get(`http://drivers-service:3001/drivers/${driverId}`);
    const response = await lastValueFrom(response$);
    return response.data;
  }

  async updateDriverStatus(driverId: string, status: string): Promise<void> {
    await lastValueFrom(
      this.http.put(`http://drivers-service:3001/drivers/${driverId}/status`, {
        status,
      })
    );
  }

  async getNearbyDrivers(lat: number, lon: number): Promise<any[]> {
    const res$ = this.http.get(`http://drivers-service:3001/drivers/nearby`, {
      params: { lat, lon }
    });
    const response = await lastValueFrom(res$);
    return response.data;
  }

  async markDriverAsOnTrip(driverId: string): Promise<void> {
    await lastValueFrom(
      this.http.put(`http://drivers-service:3001/drivers/${driverId}/status`, {
        status: 'on_trip'
      })
    );
  }
}