import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverModel } from '../persistence/driver.model';
import { Driver } from '../../domain/entities/driver.entity';
import { DriverMapper } from '../mappers/driver.mapper';
import { DriverRepository as IDriverRepository } from '../../domain/repositories/driver.repository';

@Injectable()
export class DriverRepository implements IDriverRepository {
  constructor(
    @InjectRepository(DriverModel)
    private readonly ormRepository: Repository<DriverModel>,
  ) {}

  async save(driver: Driver): Promise<void> {
    const model = DriverMapper.toModel(driver);
    await this.ormRepository.save(model);
  }

  async findAll(): Promise<Driver[]> {
    const models = await this.ormRepository.find();
    return models.map(DriverMapper.toDomain);
  }

  async findById(id: string): Promise<Driver | null> {
    const model = await this.ormRepository.findOneBy({ id });
    return model ? DriverMapper.toDomain(model) : null;
  }

  async update(driver: Driver): Promise<void> {
    const model = DriverMapper.toModel(driver);
    await this.ormRepository.save(model); // save() actúa como upsert
  }

  async findAvailableDrivers(): Promise<Driver[]> {
    const models = await this.ormRepository.findBy({ status: 'available' });
    return models.map(DriverMapper.toDomain);
  }
}