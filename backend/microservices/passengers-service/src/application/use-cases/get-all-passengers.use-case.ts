import { Inject, Injectable } from '@nestjs/common';
import { PassengerDbPort } from '../ports/out/passenger-db-port';
import { Passenger } from '../../domain/entities/passenger.entity';

@Injectable()
export class GetAllPassengersUseCase {
  constructor(
    @Inject('PassengerDbPort') private readonly repo: PassengerDbPort
  ) {}

  async execute(): Promise<Passenger[]> {
    return this.repo.findAll();
  }
}