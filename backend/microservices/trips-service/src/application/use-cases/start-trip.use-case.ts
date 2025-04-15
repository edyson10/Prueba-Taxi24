import { Inject, Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { TRIP_REPOSITORY, TripRepository } from '../../domain/repositories/trip.repository';
import { Trip } from '../../domain/entities/trip.entity';
import { DriverHttpService } from '../../infrastructure/http/services/driver-http.service';

@Injectable()
export class StartTripUseCase {
  constructor(
    @Inject(TRIP_REPOSITORY)
    private readonly tripRepo: TripRepository,
    private readonly driverHttp: DriverHttpService
  ) {}

  async execute(tripId: string): Promise<Trip> {
    const trip = await this.tripRepo.findById(tripId);
    if (!trip) throw new NotFoundException('Trip not found');
  
    trip.startTrip();
    await this.driverHttp.updateDriverStatus(trip.driverId!, 'on_trip');
    await this.tripRepo.save(trip);
    return trip;
  }
}