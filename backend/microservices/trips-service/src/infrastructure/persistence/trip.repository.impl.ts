import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TripModel } from './trip.model';
import { Repository } from 'typeorm';
import { Trip } from 'src/domain/entities/trip.entity';
import { TripRepository } from 'src/domain/repositories/trip.repository';
import { TripMapper } from '../mappers/trip.mapper';

@Injectable()
export class TripRepositoryImpl implements TripRepository {
  constructor(
    @InjectRepository(TripModel)
    private readonly orm: Repository<TripModel>,
  ) {}

  async save(trip: Trip): Promise<void> {
    await this.orm.save(TripMapper.toModel(trip));
  }

  async update(trip: Trip): Promise<void> {
    await this.orm.save(TripMapper.toModel(trip));
  }

  async findById(id: string): Promise<Trip | null> {
    const model = await this.orm.findOneBy({ id });
    return model ? TripMapper.toDomain(model) : null;
  }

  async findActiveTrips(): Promise<Trip[]> {
    const models = await this.orm.findBy([
      { status: 'requested' },
      { status: 'assigned' },
      { status: 'started' },
    ]);
    return models.map(TripMapper.toDomain);
  }
}
