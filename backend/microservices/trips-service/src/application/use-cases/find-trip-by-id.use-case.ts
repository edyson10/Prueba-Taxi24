import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { TRIP_REPOSITORY, TripRepository } from '../../domain/repositories/trip.repository';
import { Trip } from '../../domain/entities/trip.entity';

@Injectable()
export class FindTripByIdUseCase {
  constructor(
    @Inject(TRIP_REPOSITORY) private readonly tripRepo: TripRepository,
  ) {}

  async execute(id: string): Promise<Trip> {
    const trip = await this.tripRepo.findById(id);
    if (!trip) throw new NotFoundException(`Trip ${id} not found`);
    return trip;
  }
}