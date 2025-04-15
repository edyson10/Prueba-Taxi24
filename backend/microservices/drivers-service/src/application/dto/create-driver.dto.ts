import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDriverDto {
  @ApiProperty({
    description: 'Nombre del conductor',
    example: 'Juan Pérez',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Número de teléfono del conductor',
    example: '+573124567890',
  })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({
    description: 'Correo electrónico del conductor',
    example: 'juan.perez@example.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;
}