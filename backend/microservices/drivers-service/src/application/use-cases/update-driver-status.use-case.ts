import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { DRIVER_REPOSITORY } from '../../domain/repositories/driver.repository';
import { UpdateDriverStatusDto } from '../dto/update-driver-status.dto';
import { DriverRepositoryImpl } from '../../infrastructure/persistence/driver.repository.impl';
import { Driver } from '../../domain/entities/driver.entity';

@Injectable()
export class UpdateDriverStatusUseCase {
  constructor(
    @Inject(DRIVER_REPOSITORY)
    private readonly driverRepository: DriverRepositoryImpl,
  ) {}

  async execute(id: string, dto: UpdateDriverStatusDto): Promise<Driver> {
    const driver = await this.driverRepository.findOneById(id);
    if (!driver) {
      throw new NotFoundException(`Driver with id ${id} not found`);
    }

    driver.changeStatus(dto.status);
    await this.driverRepository.save(driver);

    return driver;
  }
}