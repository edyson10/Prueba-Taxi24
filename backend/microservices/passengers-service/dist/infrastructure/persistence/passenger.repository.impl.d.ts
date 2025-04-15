import { Repository } from 'typeorm';
import { Passenger } from '../../domain/entities/passenger.entity';
import { PassengerDbPort } from '../../application/ports/out/passenger-db-port';
import { PassengerOrmEntity } from '../persistence/passenger.model';
export declare class TypeOrmPassengerRepository implements PassengerDbPort {
    private readonly repository;
    constructor(repository: Repository<PassengerOrmEntity>);
    save(passenger: Passenger): Promise<Passenger>;
    findById(id: string): Promise<Passenger | null>;
    findAll(): Promise<Passenger[]>;
}
