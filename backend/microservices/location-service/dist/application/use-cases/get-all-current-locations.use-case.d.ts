import { LocationRepository } from '../../domain/repositories/location.repository';
import { Location } from '../../domain/entities/location.entity';
export declare class GetAllCurrentLocationsUseCase {
    private readonly locationRepo;
    constructor(locationRepo: LocationRepository);
    execute(): Promise<Location[]>;
}
