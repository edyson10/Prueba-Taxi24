import { Inject, Injectable } from '@nestjs/common';
import { CreatePassengerDto } from '../dto/create-passenger.dto';
import { PassengerDbPort } from '../ports/out/passenger-db-port';
import { Passenger } from '../../domain/entities/passenger.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CreatePassengerUseCase {
  constructor(
    @Inject('PassengerDbPort') private readonly passengerRepo: PassengerDbPort
  ) {}

  async execute(dto: CreatePassengerDto): Promise<Passenger> {
    const passenger = new Passenger(
      uuidv4(),
      dto.name,
      dto.phone,
      dto.email
    );
    return this.passengerRepo.save(passenger);
  }
}