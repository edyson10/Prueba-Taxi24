import { TripRepository } from '../../domain/repositories/trip.repository';
import { Trip } from '../../domain/entities/trip.entity';
export declare class FindTripByIdUseCase {
    private readonly tripRepo;
    constructor(tripRepo: TripRepository);
    execute(id: string): Promise<Trip>;
}
