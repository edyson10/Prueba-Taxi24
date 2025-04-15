import { TripRepository } from '../../domain/repositories/trip.repository';
import { Trip } from '../../domain/entities/trip.entity';
export declare class FindActiveTripsUseCase {
    private readonly tripRepo;
    constructor(tripRepo: TripRepository);
    execute(): Promise<Trip[]>;
}
