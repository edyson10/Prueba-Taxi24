import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PassengerDbPort } from '../ports/out/passenger-db-port';
import { Passenger } from '../../domain/entities/passenger.entity';

@Injectable()
export class FindPassengerByIdUseCase {
  constructor(
    @Inject('PassengerDbPort') private readonly passengerRepo: PassengerDbPort
  ) {}

  async execute(id: string): Promise<Passenger> {
    const passenger = await this.passengerRepo.findById(id);
    if (!passenger) throw new NotFoundException(`Passenger ${id} not found`);
    return passenger;
  }
}