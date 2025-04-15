import { HttpService } from '@nestjs/axios';
export declare class DriverHttpService {
    private readonly http;
    constructor(http: HttpService);
    getDriver(driverId: string): Promise<any>;
    updateDriverStatus(driverId: string, status: string): Promise<void>;
    getNearbyDrivers(lat: number, lon: number): Promise<any[]>;
    markDriverAsOnTrip(driverId: string): Promise<void>;
}
