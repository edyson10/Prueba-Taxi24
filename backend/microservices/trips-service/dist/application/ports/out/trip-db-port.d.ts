import { Trip } from '../../../domain/entities/trip.entity';
export interface TripDbPort {
    save(trip: Trip): Promise<Trip>;
    findById(id: string): Promise<Trip | null>;
    findActiveTrips(): Promise<Trip[]>;
}
