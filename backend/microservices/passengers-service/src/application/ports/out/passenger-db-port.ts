import { Passenger } from '../../../domain/entities/passenger.entity';

export interface PassengerDbPort {
  save(passenger: Passenger): Promise<Passenger>;
  findById(id: string): Promise<Passenger | null>;
  findAll(): Promise<Passenger[]>;
}