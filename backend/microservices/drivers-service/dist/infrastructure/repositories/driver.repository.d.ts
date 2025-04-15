import { Repository } from 'typeorm';
import { DriverModel } from '../persistence/driver.model';
import { Driver } from '../../domain/entities/driver.entity';
import { DriverRepository as IDriverRepository } from '../../domain/repositories/driver.repository';
export declare class DriverRepository implements IDriverRepository {
    private readonly ormRepository;
    constructor(ormRepository: Repository<DriverModel>);
    save(driver: Driver): Promise<void>;
    findAll(): Promise<Driver[]>;
    findById(id: string): Promise<Driver | null>;
    update(driver: Driver): Promise<void>;
    findAvailableDrivers(): Promise<Driver[]>;
}
