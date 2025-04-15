import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { CreatePassengerDto } from '../../../application/dto/create-passenger.dto';
import { CreatePassengerUseCase } from '../../../application/use-cases/create-passenger.use-case';
import { Passenger } from '../../../domain/entities/passenger.entity';
import { FindPassengerByIdUseCase } from '../../../application/use-cases/find-passenger-by-id.use-case';
import { GetAllPassengersUseCase } from '../../../application/use-cases/get-all-passengers.use-case';
import { GetNearestDriversUseCase } from '../../../application/use-cases/get-nearest-drivers.use-case';

@ApiTags('passengers')
@Controller('passengers')
export class PassengerController {
  constructor(
    private readonly createPassengerUseCase: CreatePassengerUseCase,
    private readonly findPassengerByIdUseCase: FindPassengerByIdUseCase,
    private readonly getAllPassengersUseCase: GetAllPassengersUseCase,
    private readonly getNearestDriversUseCase: GetNearestDriversUseCase
  ) {}

  @Post()
  @ApiOperation({ summary: 'Registrar pasajero' })
  @ApiResponse({ status: 201, description: 'Pasajero creado correctamente' })
  async create(@Body() dto: CreatePassengerDto): Promise<Passenger> {
    return this.createPassengerUseCase.execute(dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Consultar pasajero por ID' })
  @ApiResponse({ status: 200, description: 'Pasajero encontrado' })
  @ApiResponse({ status: 404, description: 'Pasajero no encontrado' })
  async find(@Param('id') id: string): Promise<Passenger> {
    return this.findPassengerByIdUseCase.execute(id);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los pasajeros' })
  @ApiResponse({ status: 200, description: 'Lista completa de pasajeros' })
  async findAll(): Promise<Passenger[]> {
    return this.getAllPassengersUseCase.execute();
  }

  @Get(':id/nearest-drivers')
  @ApiOperation({ summary: 'Obtener los 3 conductores más cercanos a una ubicación' })
  @ApiQuery({ name: 'lat', type: Number })
  @ApiQuery({ name: 'lon', type: Number })
  async getNearestDrivers(
    @Param('id') passengerId: string,
    @Query('lat') lat: number,
    @Query('lon') lon: number
  ): Promise<any[]> {
    return this.getNearestDriversUseCase.execute(lat, lon);
  }
}