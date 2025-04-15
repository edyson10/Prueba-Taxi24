import { CreateDriverDto } from '../../../application/dto/create-driver.dto';
import { CreateDriverUseCase } from '../../../application/use-cases/create-driver.use-case';
import { FindDriverByIdUseCase } from '../../../application/use-cases/find-driver-by-id.use-case';
import { UpdateDriverStatusDto } from '../../../application/dto/update-driver-status.dto';
import { UpdateDriverStatusUseCase } from '../../../application/use-cases/update-driver-status.use-case';
import { ReportLocationUseCase } from '../../../application/use-cases/report-location.use-case';
import { GetAllDriversUseCase } from '../../../application/use-cases/get-all-drivers.use-case';
import { GetAvailableDriversUseCase } from '../../../application/use-cases/get-available-drivers.use-case';
import { GetNearbyDriversUseCase } from '../../../application/use-cases/get-nearby-drivers.use-case';
import { Driver } from '../../../domain/entities/driver.entity';
export declare class DriverController {
    private readonly createDriverUseCase;
    private readonly findDriverByIdUseCase;
    private readonly updateDriverStatusUseCase;
    private readonly reportLocationUseCase;
    private readonly getAllDriversUseCase;
    private readonly getAvailableDriversUseCase;
    private readonly getNearbyDriversUseCase;
    constructor(createDriverUseCase: CreateDriverUseCase, findDriverByIdUseCase: FindDriverByIdUseCase, updateDriverStatusUseCase: UpdateDriverStatusUseCase, reportLocationUseCase: ReportLocationUseCase, getAllDriversUseCase: GetAllDriversUseCase, getAvailableDriversUseCase: GetAvailableDriversUseCase, getNearbyDriversUseCase: GetNearbyDriversUseCase);
    create(dto: CreateDriverDto): Promise<Driver>;
    findAll(): Promise<Driver[]>;
    getNearby(lat: number, lon: number): Promise<Driver[]>;
    findAvailable(): Promise<Driver[]>;
    findById(id: string): Promise<Driver>;
    updateStatus(id: string, dto: UpdateDriverStatusDto): Promise<Driver>;
    reportLocation(id: string, lat: number, lon: number): Promise<string>;
}
