import { Trip } from '../entities/trip.entity';

export const TRIP_REPOSITORY = Symbol('TRIP_REPOSITORY');

export interface TripRepository {
  save(trip: Trip): Promise<void>;
  findById(id: string): Promise<Trip | null>;
  findActiveTrips(): Promise<Trip[]>;
  update(trip: Trip): Promise<void>;
}