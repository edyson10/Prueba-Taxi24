import { HttpService } from '@nestjs/axios';
export declare class LocationHttpService {
    private readonly http;
    constructor(http: HttpService);
    sendLocation(driverId: string, lat: number, lon: number): Promise<void>;
    getAllLocations(): Promise<any[]>;
}
