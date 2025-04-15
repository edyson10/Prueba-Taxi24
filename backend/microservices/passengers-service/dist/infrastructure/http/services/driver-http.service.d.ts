import { HttpService } from '@nestjs/axios';
export declare class DriverHttpService {
    private readonly http;
    constructor(http: HttpService);
    getNearbyDrivers(lat: number, lon: number): Promise<any[]>;
}
