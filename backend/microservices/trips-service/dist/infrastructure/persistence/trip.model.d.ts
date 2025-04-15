export declare class TripModel {
    id: string;
    passengerId: string;
    driverId: string;
    origin: {
        lat: number;
        lon: number;
    };
    destination: string;
    status: string;
    startTime?: Date;
    endTime?: Date;
    price?: number;
}
