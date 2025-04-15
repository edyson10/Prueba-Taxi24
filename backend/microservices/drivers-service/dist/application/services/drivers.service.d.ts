import { DriverRepository } from '../../domain/repositories/driver.repository';
export declare class DriversService {
    private readonly driverRepository;
    constructor(driverRepository: DriverRepository);
    getAllDrivers(): Promise<any>;
}
