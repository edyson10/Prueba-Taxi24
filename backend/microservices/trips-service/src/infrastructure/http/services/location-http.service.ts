import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class LocationHttpService {
  constructor(private readonly http: HttpService) {}

  async getDriverLocation(driverId: string): Promise<any> {
    const res$ = this.http.get(`http://location-service:3004/location/${driverId}`);
    const response = await lastValueFrom(res$);
    return response.data;
  }
}