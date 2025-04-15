import { Location } from '../entities/location.entity';
export declare const LOCATION_REPOSITORY: unique symbol;
export interface LocationRepository {
    save(location: Location): Promise<void>;
    findLatestByDriverId(driverId: string): Promise<Location | null>;
    findAll(): Promise<Location[]>;
}
