import { IsNumber, IsPositive } from 'class-validator';

export class CompleteTripDto {
  @IsNumber()
  @IsPositive()
  price: number;
}