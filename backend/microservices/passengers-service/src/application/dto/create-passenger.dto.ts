import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePassengerDto {
  @ApiProperty({
    description: 'Nombre del pasajero',
    example: 'David Fernandez',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Número de teléfono del pasajero',
    example: '+573124567890',
  })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({
    description: 'Correo electrónico del pasajero',
    example: 'david.fernandez@example.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;
}