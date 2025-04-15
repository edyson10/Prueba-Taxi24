import { Passenger } from '../../domain/entities/passenger.entity';
import { PassengerOrmEntity } from '../persistence/passenger.model';

export class PassengerMapper {
  static toDomain(entity: PassengerOrmEntity): Passenger {
    return new Passenger(entity.id, entity.name, entity.phone, entity.email);
  }

  static toOrm(passenger: Passenger): PassengerOrmEntity {
    const orm = new PassengerOrmEntity();
    orm.id = passenger.id;
    orm.name = passenger.name;
    orm.phone = passenger.phone;
    orm.email = passenger.email;
    return orm;
  }
}