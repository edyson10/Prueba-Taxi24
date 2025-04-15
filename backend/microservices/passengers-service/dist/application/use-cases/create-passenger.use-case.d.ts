import { CreatePassengerDto } from '../dto/create-passenger.dto';
import { PassengerDbPort } from '../ports/out/passenger-db-port';
import { Passenger } from '../../domain/entities/passenger.entity';
export declare class CreatePassengerUseCase {
    private readonly passengerRepo;
    constructor(passengerRepo: PassengerDbPort);
    execute(dto: CreatePassengerDto): Promise<Passenger>;
}
