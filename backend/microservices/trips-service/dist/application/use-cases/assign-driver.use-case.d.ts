import { TripRepository } from '../../domain/repositories/trip.repository';
import { AssignDriverDto } from '../dto/assign-driver.dto';
import { Trip } from '../../domain/entities/trip.entity';
import { DriverHttpService } from '../../infrastructure/http/services/driver-http.service';
export declare class AssignDriverUseCase {
    private readonly tripRepo;
    private readonly driverHttp;
    constructor(tripRepo: TripRepository, driverHttp: DriverHttpService);
    execute(tripId: string, dto: AssignDriverDto): Promise<Trip>;
}
