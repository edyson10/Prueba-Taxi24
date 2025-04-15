import { Location } from '../../domain/entities/location.entity';
import { LocationModel } from '../persistence/location.model';

export class LocationMapper {
  static toModel(domain: Location): LocationModel {
    const model = new LocationModel();
    model.id = domain.id;
    model.driverId = domain.driverId;
    model.latitude = domain.latitude;
    model.longitude = domain.longitude;
    model.timestamp = domain.timestamp;
    return model;
  }

  static toDomain(model: LocationModel): Location {
    return new Location(
      model.id,
      model.driverId,
      model.latitude,
      model.longitude,
      model.timestamp,
    );
  }
}