import { IsEnum } from 'class-validator';
import { DriverStatus } from '../../domain/value-objects/driver-status.vo';

export class UpdateDriverStatusDto {
  @IsEnum(DriverStatus)
  status: DriverStatus;
}