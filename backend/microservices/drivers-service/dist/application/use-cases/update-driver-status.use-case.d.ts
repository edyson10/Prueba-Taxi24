import { UpdateDriverStatusDto } from '../dto/update-driver-status.dto';
import { DriverRepositoryImpl } from '../../infrastructure/persistence/driver.repository.impl';
import { Driver } from '../../domain/entities/driver.entity';
export declare class UpdateDriverStatusUseCase {
    private readonly driverRepository;
    constructor(driverRepository: DriverRepositoryImpl);
    execute(id: string, dto: UpdateDriverStatusDto): Promise<Driver>;
}
