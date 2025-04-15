import { Driver } from '../../domain/entities/driver.entity';
import { DriverRepositoryImpl } from '../../infrastructure/persistence/driver.repository.impl';
export declare class GetAllDriversUseCase {
    private readonly driverRepository;
    constructor(driverRepository: DriverRepositoryImpl);
    execute(): Promise<Driver[]>;
}
