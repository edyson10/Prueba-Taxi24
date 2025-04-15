import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverModel } from './driver.model';
import { Driver } from '../../domain/entities/driver.entity';
import { DriverDbPort } from '../../application/ports/out/driver-db-port';
import { DriverMapper } from '../mappers/driver.mapper';

@Injectable()
export class DriverRepositoryImpl implements DriverDbPort {
  constructor(
    @InjectRepository(DriverModel)
    private readonly ormRepo: Repository<DriverModel>
  ) {}

  async save(driver: Driver): Promise<void> {
    const entity = DriverMapper.toModel(driver);
    await this.ormRepo.save(entity);
  }

  async findOneById(id: string): Promise<Driver | null> {
    const entity = await this.ormRepo.findOneBy({ id });
    return entity ? DriverMapper.toDomain(entity) : null;
  }

  async findAll(): Promise<Driver[]> {
    const all = await this.ormRepo.find();
    return all.map(DriverMapper.toDomain);
  }

  async findAvailable(): Promise<Driver[]> {
    const available = await this.ormRepo.findBy({ status: 'available' });
    return available.map(DriverMapper.toDomain);
  }

  async updateStatus(id: string, status: string): Promise<void> {
    await this.ormRepo.update(id, { status });
  }
}