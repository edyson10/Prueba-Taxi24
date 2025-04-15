import { TripStatus } from '../value-objects/trip-status.vo';
export declare class Trip {
    readonly id: string;
    readonly passengerId: string;
    driverId: string;
    origin: {
        lat: number;
        lon: number;
    };
    destination: string;
    status: TripStatus;
    startTime?: Date | undefined;
    endTime?: Date | undefined;
    price?: number | undefined;
    constructor(id: string, passengerId: string, driverId: string, origin: {
        lat: number;
        lon: number;
    }, destination: string, status?: TripStatus, startTime?: Date | undefined, endTime?: Date | undefined, price?: number | undefined);
    assignDriver(driverId: string): void;
    startTrip(): void;
    completeTrip(price: number): void;
    canExposeLocation(): boolean;
}
