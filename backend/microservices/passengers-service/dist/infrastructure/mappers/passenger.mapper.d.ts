import { Passenger } from '../../domain/entities/passenger.entity';
import { PassengerOrmEntity } from '../persistence/passenger.model';
export declare class PassengerMapper {
    static toDomain(entity: PassengerOrmEntity): Passenger;
    static toOrm(passenger: Passenger): PassengerOrmEntity;
}
