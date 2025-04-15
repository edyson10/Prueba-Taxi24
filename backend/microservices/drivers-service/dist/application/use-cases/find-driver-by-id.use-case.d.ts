import { DriverRepositoryImpl } from '../../infrastructure/persistence/driver.repository.impl';
import { Driver } from '../../domain/entities/driver.entity';
export declare class FindDriverByIdUseCase {
    private readonly driverRepository;
    constructor(driverRepository: DriverRepositoryImpl);
    execute(id: string): Promise<Driver>;
}
