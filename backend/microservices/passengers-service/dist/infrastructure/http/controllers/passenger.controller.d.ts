import { CreatePassengerDto } from '../../../application/dto/create-passenger.dto';
import { CreatePassengerUseCase } from '../../../application/use-cases/create-passenger.use-case';
import { Passenger } from '../../../domain/entities/passenger.entity';
import { FindPassengerByIdUseCase } from '../../../application/use-cases/find-passenger-by-id.use-case';
import { GetAllPassengersUseCase } from '../../../application/use-cases/get-all-passengers.use-case';
import { GetNearestDriversUseCase } from '../../../application/use-cases/get-nearest-drivers.use-case';
export declare class PassengerController {
    private readonly createPassengerUseCase;
    private readonly findPassengerByIdUseCase;
    private readonly getAllPassengersUseCase;
    private readonly getNearestDriversUseCase;
    constructor(createPassengerUseCase: CreatePassengerUseCase, findPassengerByIdUseCase: FindPassengerByIdUseCase, getAllPassengersUseCase: GetAllPassengersUseCase, getNearestDriversUseCase: GetNearestDriversUseCase);
    create(dto: CreatePassengerDto): Promise<Passenger>;
    find(id: string): Promise<Passenger>;
    findAll(): Promise<Passenger[]>;
    getNearestDrivers(passengerId: string, lat: number, lon: number): Promise<any[]>;
}
