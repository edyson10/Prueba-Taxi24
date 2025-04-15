import { TripRepository } from '../../domain/repositories/trip.repository';
import { CreateTripDto } from '../dto/create-trip.dto';
import { Trip } from '../../domain/entities/trip.entity';
import { PassengerHttpService } from '../../infrastructure/http/services/passenger-http.service';
import { DriverHttpService } from '../../infrastructure/http/services/driver-http.service';
export declare class CreateTripUseCase {
    private readonly tripRepo;
    private readonly passengerHttp;
    private readonly driverHttp;
    constructor(tripRepo: TripRepository, passengerHttp: PassengerHttpService, driverHttp: DriverHttpService);
    execute(dto: CreateTripDto): Promise<Trip>;
}
