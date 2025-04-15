import { Injectable, Inject } from '@nestjs/common';
import { DRIVER_REPOSITORY, DriverRepository } from '../../domain/repositories/driver.repository';

@Injectable()
export class DriversService {
  constructor(
    @Inject(DRIVER_REPOSITORY)
    private readonly driverRepository: DriverRepository,
  ) {}

  async getAllDrivers() {
    return await this.driverRepository.findAll();
  }
}