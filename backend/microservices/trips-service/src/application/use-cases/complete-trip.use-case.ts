import { Inject, Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { TRIP_REPOSITORY, TripRepository } from '../../domain/repositories/trip.repository';
import { CompleteTripDto } from '../dto/complete-trip.dto';
import { Trip } from '../../domain/entities/trip.entity';
import { DriverHttpService } from '../../infrastructure/http/services/driver-http.service';

@Injectable()
export class CompleteTripUseCase {
  constructor(
    @Inject(TRIP_REPOSITORY)
    private readonly tripRepo: TripRepository,
    private readonly driverHttp: DriverHttpService
  ) {}

  async execute(tripId: string, dto: CompleteTripDto): Promise<Trip> {
    const trip = await this.tripRepo.findById(tripId);
    if (!trip) throw new NotFoundException('Trip not found');
  
    trip.completeTrip(dto.price);
    await this.driverHttp.updateDriverStatus(trip.driverId!, 'available');
    await this.tripRepo.save(trip);
    return trip;
  }
}