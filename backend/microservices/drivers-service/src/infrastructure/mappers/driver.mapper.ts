import { DriverModel } from '../persistence/driver.model';
import { Driver } from '../../domain/entities/driver.entity';
import { DriverStatus } from 'src/domain/value-objects/driver-status.vo';

export class DriverMapper {
  static toModel(domain: Driver): DriverModel {
    const model = new DriverModel();
    model.id = domain.id;
    model.name = domain.name;
    model.phone = domain.phone;
    model.email = domain.email;
    model.status = domain.status as string;
    return model;
  }

  static toDomain(model: DriverModel): Driver {
    return new Driver(
      model.id,
      model.name,
      model.phone,
      model.email,
      model.status as DriverStatus
    );
  }
}