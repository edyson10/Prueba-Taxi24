import { HttpService } from '@nestjs/axios';
export declare class PassengerHttpService {
    private readonly http;
    constructor(http: HttpService);
    getPassenger(id: string): Promise<any>;
}
