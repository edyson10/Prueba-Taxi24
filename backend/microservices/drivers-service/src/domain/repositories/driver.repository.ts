import { Driver } from '../entities/driver.entity';

export const DRIVER_REPOSITORY = Symbol('DRIVER_REPOSITORY');

export interface DriverRepository {
  save(driver: Driver): Promise<any>;
  update(driver: Driver): Promise<any>;
  findAll(): Promise<any>;
  findById(id: string): Promise<Driver | null>;
  findAvailableDrivers(): Promise<Driver[]>;
}