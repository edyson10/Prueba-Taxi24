import { UpdateLocationDto } from '../../../application/dto/update-location.dto';
import { UpdateLocationUseCase } from '../../../application/use-cases/update-location.use-case';
import { GetCurrentLocationUseCase } from '../../../application/use-cases/get-current-location.use-case';
import { GetAllCurrentLocationsUseCase } from '../../../application/use-cases/get-all-current-locations.use-case';
import { Location } from '../../../domain/entities/location.entity';
export declare class LocationController {
    private readonly updateLocationUseCase;
    private readonly getCurrentLocationUseCase;
    private readonly getAllLocationsUseCase;
    constructor(updateLocationUseCase: UpdateLocationUseCase, getCurrentLocationUseCase: GetCurrentLocationUseCase, getAllLocationsUseCase: GetAllCurrentLocationsUseCase);
    update(dto: UpdateLocationDto): Promise<void>;
    findAll(): Promise<Location[]>;
    find(driverId: string): Promise<Location>;
}
