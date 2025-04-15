import { CoordinatesDto } from './coordinates.dto';
export declare class CreateTripDto {
    passengerId: string;
    origin: CoordinatesDto;
    destination: string;
}
