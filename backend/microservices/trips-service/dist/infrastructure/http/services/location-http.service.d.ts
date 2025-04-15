import { HttpService } from '@nestjs/axios';
export declare class LocationHttpService {
    private readonly http;
    constructor(http: HttpService);
    getDriverLocation(driverId: string): Promise<any>;
}
