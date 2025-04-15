import { Location } from '../../../domain/entities/location.entity';

export interface LocationDbPort {
  save(location: Location): Promise<void>;
  findLatestByDriverId(driverId: string): Promise<Location | null>;
  findAllLatest(): Promise<Location[]>;
}