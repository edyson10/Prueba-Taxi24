import { Injectable, Inject } from '@nestjs/common';
import { CreateDriverDto } from '../dto/create-driver.dto';
import { Driver } from '../../domain/entities/driver.entity';
import { DRIVER_REPOSITORY } from '../../domain/repositories/driver.repository';
import { DriverRepositoryImpl } from '../../infrastructure/persistence/driver.repository.impl';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CreateDriverUseCase {
  constructor(
    @Inject(DRIVER_REPOSITORY)
    private readonly driverRepository: DriverRepositoryImpl,
  ) {}

  async execute(dto: CreateDriverDto): Promise<Driver> {
    const driver = new Driver(
      uuidv4(),
      dto.name,
      dto.phone,
      dto.email
    );

    await this.driverRepository.save(driver);
    return driver;
  }
}