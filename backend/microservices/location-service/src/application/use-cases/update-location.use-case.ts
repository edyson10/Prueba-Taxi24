import { Injectable, Inject } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UpdateLocationDto } from '../dto/update-location.dto';
import { LOCATION_REPOSITORY, LocationRepository } from '../../domain/repositories/location.repository';
import { Location } from '../../domain/entities/location.entity';

@Injectable()
export class UpdateLocationUseCase {
  constructor(
    @Inject(LOCATION_REPOSITORY)
    private readonly locationRepo: LocationRepository,
  ) {}

  async execute(dto: UpdateLocationDto): Promise<void> {
    const location = new Location(
      uuidv4(),
      dto.driverId,
      dto.latitude,
      dto.longitude,
      new Date()
    );

    await this.locationRepo.save(location);
  }
}