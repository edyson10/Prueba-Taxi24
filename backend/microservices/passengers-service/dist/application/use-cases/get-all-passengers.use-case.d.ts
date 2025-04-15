import { PassengerDbPort } from '../ports/out/passenger-db-port';
import { Passenger } from '../../domain/entities/passenger.entity';
export declare class GetAllPassengersUseCase {
    private readonly repo;
    constructor(repo: PassengerDbPort);
    execute(): Promise<Passenger[]>;
}
