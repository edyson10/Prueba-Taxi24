import { CreateDriverDto } from '../dto/create-driver.dto';
import { Driver } from '../../domain/entities/driver.entity';
import { DriverRepositoryImpl } from '../../infrastructure/persistence/driver.repository.impl';
export declare class CreateDriverUseCase {
    private readonly driverRepository;
    constructor(driverRepository: DriverRepositoryImpl);
    execute(dto: CreateDriverDto): Promise<Driver>;
}
