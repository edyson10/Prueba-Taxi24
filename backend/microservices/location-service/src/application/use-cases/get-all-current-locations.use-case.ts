import { Inject, Injectable } from '@nestjs/common';
import { LOCATION_REPOSITORY, LocationRepository } from '../../domain/repositories/location.repository';
import { Location } from '../../domain/entities/location.entity';

@Injectable()
export class GetAllCurrentLocationsUseCase {
  constructor(
    @Inject(LOCATION_REPOSITORY)
    private readonly locationRepo: LocationRepository,
  ) {}

  async execute(): Promise<Location[]> {
    return this.locationRepo.findAll();
  }
}
