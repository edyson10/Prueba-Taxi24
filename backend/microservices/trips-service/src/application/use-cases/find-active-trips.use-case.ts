import { Inject, Injectable } from '@nestjs/common';
import { TRIP_REPOSITORY, TripRepository } from '../../domain/repositories/trip.repository';
import { Trip } from '../../domain/entities/trip.entity';

@Injectable()
export class FindActiveTripsUseCase {
  constructor(
    @Inject(TRIP_REPOSITORY) private readonly tripRepo: TripRepository,
  ) {}

  async execute(): Promise<Trip[]> {
    return this.tripRepo.findActiveTrips();
  }
}