import { LocationHttpService } from '../../infrastructure/http/services/location-http.service';
import { DriverRepositoryImpl } from '../../infrastructure/persistence/driver.repository.impl';
import { Driver } from '../../domain/entities/driver.entity';
export declare class GetNearbyDriversUseCase {
    private readonly driverRepository;
    private readonly locationService;
    constructor(driverRepository: DriverRepositoryImpl, locationService: LocationHttpService);
    execute(lat: number, lon: number): Promise<Driver[]>;
}
