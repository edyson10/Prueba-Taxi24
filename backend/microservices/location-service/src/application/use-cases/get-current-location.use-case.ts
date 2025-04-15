import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { LOCATION_REPOSITORY, LocationRepository } from '../../domain/repositories/location.repository';
import { Location } from '../../domain/entities/location.entity';

@Injectable()
export class GetCurrentLocationUseCase {
  constructor(
    @Inject(LOCATION_REPOSITORY)
    private readonly locationRepo: LocationRepository,
  ) {}

  async execute(driverId: string): Promise<Location> {
    const location = await this.locationRepo.findLatestByDriverId(driverId);
    if (!location) {
      throw new NotFoundException(`Location for driver ${driverId} not found`);
    }
    return location;
  }
}
