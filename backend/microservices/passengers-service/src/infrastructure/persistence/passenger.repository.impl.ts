import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Passenger } from '../../domain/entities/passenger.entity';
import { PassengerDbPort } from '../../application/ports/out/passenger-db-port';
import { PassengerOrmEntity } from '../persistence/passenger.model';
import { PassengerMapper } from '../mappers/passenger.mapper';

@Injectable()
export class TypeOrmPassengerRepository implements PassengerDbPort {
  constructor(
    @InjectRepository(PassengerOrmEntity)
    private readonly repository: Repository<PassengerOrmEntity>
  ) {}

  async save(passenger: Passenger): Promise<Passenger> {
    const entity = PassengerMapper.toOrm(passenger);
    const saved = await this.repository.save(entity);
    return PassengerMapper.toDomain(saved);
  }

  async findById(id: string): Promise<Passenger | null> {
    const entity = await this.repository.findOneBy({ id });
    return entity ? PassengerMapper.toDomain(entity) : null;
  }

  async findAll(): Promise<Passenger[]> {
    const entities = await this.repository.find();
    return entities.map(PassengerMapper.toDomain);
  }
}
