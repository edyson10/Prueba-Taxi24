import { LocationRepository } from '../../domain/repositories/location.repository';
import { Location } from '../../domain/entities/location.entity';
export declare class GetCurrentLocationUseCase {
    private readonly locationRepo;
    constructor(locationRepo: LocationRepository);
    execute(driverId: string): Promise<Location>;
}
