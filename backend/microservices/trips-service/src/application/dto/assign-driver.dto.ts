import { IsNotEmpty, IsString } from 'class-validator';

export class AssignDriverDto {
  @IsNotEmpty()
  @IsString()
  driverId: string;
}