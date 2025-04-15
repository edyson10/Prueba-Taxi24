import { TripModel } from './trip.model';
import { Repository } from 'typeorm';
import { Trip } from 'src/domain/entities/trip.entity';
import { TripRepository } from 'src/domain/repositories/trip.repository';
export declare class TripRepositoryImpl implements TripRepository {
    private readonly orm;
    constructor(orm: Repository<TripModel>);
    save(trip: Trip): Promise<void>;
    update(trip: Trip): Promise<void>;
    findById(id: string): Promise<Trip | null>;
    findActiveTrips(): Promise<Trip[]>;
}
