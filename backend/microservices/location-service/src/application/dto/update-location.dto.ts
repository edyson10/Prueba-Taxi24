import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateLocationDto {
  @IsNotEmpty()
  @IsString()
  driverId: string;

  @IsNotEmpty()
  @IsNumber()
  latitude: number;

  @IsNotEmpty()
  @IsNumber()
  longitude: number;
}