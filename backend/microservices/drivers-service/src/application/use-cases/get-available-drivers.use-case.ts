import { Inject, Injectable } from '@nestjs/common';
import { DRIVER_REPOSITORY } from '../../domain/repositories/driver.repository';
import { Driver } from '../../domain/entities/driver.entity';
import { DriverRepositoryImpl } from '../../infrastructure/persistence/driver.repository.impl';

@Injectable()
export class GetAvailableDriversUseCase {
  constructor(
    @Inject(DRIVER_REPOSITORY)
    private readonly driverRepository: DriverRepositoryImpl,
  ) {}

  async execute(): Promise<Driver[]> {
    return this.driverRepository.findAvailable();
  }
}