import { Location } from '../entities/location.entity';

export const LOCATION_REPOSITORY = Symbol('LOCATION_REPOSITORY');

export interface LocationRepository {
  save(location: Location): Promise<void>;
  findLatestByDriverId(driverId: string): Promise<Location | null>;
  findAll(): Promise<Location[]>;
}