import { Location } from '../../domain/entities/location.entity';
import { LocationModel } from '../persistence/location.model';
export declare class LocationMapper {
    static toModel(domain: Location): LocationModel;
    static toDomain(model: LocationModel): Location;
}
