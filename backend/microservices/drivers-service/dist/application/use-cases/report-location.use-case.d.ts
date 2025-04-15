import { LocationHttpService } from '../../infrastructure/http/services/location-http.service';
export declare class ReportLocationUseCase {
    private readonly locationHttp;
    constructor(locationHttp: LocationHttpService);
    execute(driverId: string, lat: number, lon: number): Promise<void>;
}
