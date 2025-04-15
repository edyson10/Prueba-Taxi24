import { UpdateLocationDto } from '../dto/update-location.dto';
import { LocationRepository } from '../../domain/repositories/location.repository';
export declare class UpdateLocationUseCase {
    private readonly locationRepo;
    constructor(locationRepo: LocationRepository);
    execute(dto: UpdateLocationDto): Promise<void>;
}
