import { DriverHttpService } from '../../infrastructure/http/services/driver-http.service';
export declare class GetNearestDriversUseCase {
    private readonly driverService;
    constructor(driverService: DriverHttpService);
    execute(lat: number, lon: number): Promise<any[]>;
}
