import { DriverModel } from '../persistence/driver.model';
import { Driver } from '../../domain/entities/driver.entity';
export declare class DriverMapper {
    static toModel(domain: Driver): DriverModel;
    static toDomain(model: DriverModel): Driver;
}
