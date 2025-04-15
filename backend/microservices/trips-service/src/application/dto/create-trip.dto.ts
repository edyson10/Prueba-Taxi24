import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { CoordinatesDto } from './coordinates.dto';

export class CreateTripDto {
  @ApiProperty({
    description: 'UUID del Pasajero',
    example: 'uuid1a2b3c4d5e6f7g8h9ij10k11',
  })
  @IsNotEmpty()
  @IsString()
  passengerId: string;

  @ApiProperty({
    description: 'Coordenada de ubicacion del pasajero',
    example: { lat: 11.11, lon: 22.22 },
  })
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CoordinatesDto)
  origin: CoordinatesDto;

  @ApiProperty({
    description: 'Destino de solicitud de viaje',
    example: 'Aeropuerto',
  })
  @IsNotEmpty()
  @IsString()
  destination: string;
}
