import { TripRepository } from '../../domain/repositories/trip.repository';
import { Trip } from '../../domain/entities/trip.entity';
import { DriverHttpService } from '../../infrastructure/http/services/driver-http.service';
export declare class StartTripUseCase {
    private readonly tripRepo;
    private readonly driverHttp;
    constructor(tripRepo: TripRepository, driverHttp: DriverHttpService);
    execute(tripId: string): Promise<Trip>;
}
