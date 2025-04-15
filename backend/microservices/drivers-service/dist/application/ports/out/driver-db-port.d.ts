import { Driver } from '../../../domain/entities/driver.entity';
export interface DriverDbPort {
    save(driver: Driver): Promise<void>;
    findOneById(id: string): Promise<Driver | null>;
    findAll(): Promise<Driver[]>;
    findAvailable(): Promise<Driver[]>;
    updateStatus(id: string, status: string): Promise<void>;
}
