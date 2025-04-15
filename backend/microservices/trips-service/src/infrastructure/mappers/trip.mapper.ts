import { TripModel } from '../persistence/trip.model';
import { Trip } from 'src/domain/entities/trip.entity';
import { TripStatus } from 'src/domain/value-objects/trip-status.vo';

export class TripMapper {
  static toModel(domain: Trip): TripModel {
    const model = new TripModel();
    model.id = domain.id;
    model.passengerId = domain.passengerId;
    model.driverId = domain.driverId;
    model.origin = domain.origin;
    model.destination = domain.destination;
    model.status = domain.status as string;
    model.startTime = domain.startTime;
    model.endTime = domain.endTime;
    model.price = domain.price;
    return model;
  }

  static toDomain(model: TripModel): Trip {
    return new Trip(
      model.id,
      model.passengerId,
      model.driverId,
      model.origin,
      model.destination,
      model.status as TripStatus,
      model.startTime,
      model.endTime,
      model.price
    );
  }
}
