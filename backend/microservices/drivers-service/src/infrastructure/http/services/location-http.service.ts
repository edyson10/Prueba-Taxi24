import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class LocationHttpService {
  constructor(private readonly http: HttpService) {}

  async sendLocation(driverId: string, lat: number, lon: number): Promise<void> {
    await lastValueFrom(
      this.http.post(`http://location-service:3004/location`, {
        driverId,
        latitude: lat,
        longitude: lon,
      })
    );
  }

  async getAllLocations(): Promise<any[]> {
    const res$ = this.http.get(`http://location-service:3004/location`);
    const response = await lastValueFrom(res$);
    return response.data;
  }
}