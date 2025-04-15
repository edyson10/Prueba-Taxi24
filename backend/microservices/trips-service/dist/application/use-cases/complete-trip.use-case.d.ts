import { TripRepository } from '../../domain/repositories/trip.repository';
import { CompleteTripDto } from '../dto/complete-trip.dto';
import { Trip } from '../../domain/entities/trip.entity';
import { DriverHttpService } from '../../infrastructure/http/services/driver-http.service';
export declare class CompleteTripUseCase {
    private readonly tripRepo;
    private readonly driverHttp;
    constructor(tripRepo: TripRepository, driverHttp: DriverHttpService);
    execute(tripId: string, dto: CompleteTripDto): Promise<Trip>;
}
