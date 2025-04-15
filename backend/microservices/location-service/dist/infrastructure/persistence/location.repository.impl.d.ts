import { Repository } from 'typeorm';
import { LocationModel } from './location.model';
import { Location } from 'src/domain/entities/location.entity';
import { LocationRepository } from '../../domain/repositories/location.repository';
export declare class LocationRepositoryImpl implements LocationRepository {
    private readonly orm;
    constructor(orm: Repository<LocationModel>);
    save(location: Location): Promise<void>;
    findLatestByDriverId(driverId: string): Promise<Location | null>;
    findAll(): Promise<Location[]>;
}
