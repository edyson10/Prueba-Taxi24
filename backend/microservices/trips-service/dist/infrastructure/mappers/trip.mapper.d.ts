import { TripModel } from '../persistence/trip.model';
import { Trip } from 'src/domain/entities/trip.entity';
export declare class TripMapper {
    static toModel(domain: Trip): TripModel;
    static toDomain(model: TripModel): Trip;
}
