import { CreateTripDto } from '../../../application/dto/create-trip.dto';
import { CreateTripUseCase } from '../../../application/use-cases/create-trip.use-case';
import { AssignDriverDto } from '../../../application/dto/assign-driver.dto';
import { AssignDriverUseCase } from '../../../application/use-cases/assign-driver.use-case';
import { CompleteTripDto } from '../../../application/dto/complete-trip.dto';
import { StartTripUseCase } from '../../../application/use-cases/start-trip.use-case';
import { CompleteTripUseCase } from '../../../application/use-cases/complete-trip.use-case';
import { LocationHttpService } from '../../../infrastructure/http/services/location-http.service';
import { FindTripByIdUseCase } from '../../../application/use-cases/find-trip-by-id.use-case';
import { FindActiveTripsUseCase } from '../../../application/use-cases/find-active-trips.use-case';
import { Trip } from '../../../domain/entities/trip.entity';
export declare class TripController {
    private readonly createTripUseCase;
    private readonly assignDriverUseCase;
    private readonly startTripUseCase;
    private readonly completeTripUseCase;
    private readonly findTripByIdUseCase;
    private readonly locationHttpService;
    private readonly findActiveTripsUseCase;
    constructor(createTripUseCase: CreateTripUseCase, assignDriverUseCase: AssignDriverUseCase, startTripUseCase: StartTripUseCase, completeTripUseCase: CompleteTripUseCase, findTripByIdUseCase: FindTripByIdUseCase, locationHttpService: LocationHttpService, findActiveTripsUseCase: FindActiveTripsUseCase);
    create(dto: CreateTripDto): Promise<Trip>;
    findActive(): Promise<Trip[]>;
    assign(id: string, dto: AssignDriverDto): Promise<Trip>;
    start(id: string): Promise<Trip>;
    complete(id: string, dto: CompleteTripDto): Promise<Trip>;
    getDriverLocation(id: string): Promise<any>;
}
