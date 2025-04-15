import { PassengerDbPort } from '../ports/out/passenger-db-port';
import { Passenger } from '../../domain/entities/passenger.entity';
export declare class FindPassengerByIdUseCase {
    private readonly passengerRepo;
    constructor(passengerRepo: PassengerDbPort);
    execute(id: string): Promise<Passenger>;
}
