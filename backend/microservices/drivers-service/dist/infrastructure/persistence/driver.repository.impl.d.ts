import { Repository } from 'typeorm';
import { DriverModel } from './driver.model';
import { Driver } from '../../domain/entities/driver.entity';
import { DriverDbPort } from '../../application/ports/out/driver-db-port';
export declare class DriverRepositoryImpl implements DriverDbPort {
    private readonly ormRepo;
    constructor(ormRepo: Repository<DriverModel>);
    save(driver: Driver): Promise<void>;
    findOneById(id: string): Promise<Driver | null>;
    findAll(): Promise<Driver[]>;
    findAvailable(): Promise<Driver[]>;
    updateStatus(id: string, status: string): Promise<void>;
}
