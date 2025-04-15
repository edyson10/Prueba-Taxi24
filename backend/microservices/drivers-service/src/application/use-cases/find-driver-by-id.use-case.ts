import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { DRIVER_REPOSITORY } from '../../domain/repositories/driver.repository';
import { DriverRepositoryImpl } from '../../infrastructure/persistence/driver.repository.impl';
import { Driver } from '../../domain/entities/driver.entity';

@Injectable()
export class FindDriverByIdUseCase {
  constructor(
    @Inject(DRIVER_REPOSITORY)
    private readonly driverRepository: DriverRepositoryImpl,
  ) {}

  async execute(id: string): Promise<Driver> {
    const driver = await this.driverRepository.findOneById(id);
    if (!driver) {
      throw new NotFoundException(`Driver with id ${id} not found`);
    }
    return driver;
  }
}