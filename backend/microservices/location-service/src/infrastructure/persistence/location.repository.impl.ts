import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LocationModel } from './location.model';
import { Location } from 'src/domain/entities/location.entity';
import { LocationMapper } from '../mappers/location.mapper';
import { LocationRepository, LOCATION_REPOSITORY } from '../../domain/repositories/location.repository';

@Injectable()
export class LocationRepositoryImpl implements LocationRepository {
  constructor(
    @InjectRepository(LocationModel)
    private readonly orm: Repository<LocationModel>,
  ) {}

  async save(location: Location): Promise<void> {
    await this.orm.save(LocationMapper.toModel(location));
  }

  async findLatestByDriverId(driverId: string): Promise<Location | null> {
    const record = await this.orm.findOne({
      where: { driverId },
      order: { timestamp: 'DESC' },
    });
    return record ? LocationMapper.toDomain(record) : null;
  }

  async findAll(): Promise<Location[]> {
    const all = await this.orm.find();
    return all.map(LocationMapper.toDomain);
  }
}
