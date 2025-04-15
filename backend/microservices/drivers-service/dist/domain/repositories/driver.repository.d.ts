import { Driver } from '../entities/driver.entity';
export declare const DRIVER_REPOSITORY: unique symbol;
export interface DriverRepository {
    save(driver: Driver): Promise<any>;
    update(driver: Driver): Promise<any>;
    findAll(): Promise<any>;
    findById(id: string): Promise<Driver | null>;
    findAvailableDrivers(): Promise<Driver[]>;
}
