import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class PassengerHttpService {
  constructor(private readonly http: HttpService) {}

  async getPassenger(id: string): Promise<any> {
    try {
      const response$ = this.http.get(`http://passengers-service:3002/passengers/${id}`);
      const response = await lastValueFrom(response$);
      return response.data;
    } catch (error) {
      if (error.response?.status === 404) {
        throw new NotFoundException(`Passenger ${id} not found`);
      }
      throw error;
    }
  }
}