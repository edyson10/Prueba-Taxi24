import { Trip } from '../entities/trip.entity';
export declare const TRIP_REPOSITORY: unique symbol;
export interface TripRepository {
    save(trip: Trip): Promise<void>;
    findById(id: string): Promise<Trip | null>;
    findActiveTrips(): Promise<Trip[]>;
    update(trip: Trip): Promise<void>;
}
