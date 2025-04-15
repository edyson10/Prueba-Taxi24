import { Body, Controller, Post, Param, Get, Put, Query } from '@nestjs/common';
import { CreateDriverDto } from '../../../application/dto/create-driver.dto';
import { CreateDriverUseCase } from '../../../application/use-cases/create-driver.use-case';
import { FindDriverByIdUseCase } from '../../../application/use-cases/find-driver-by-id.use-case';
import { UpdateDriverStatusDto } from '../../../application/dto/update-driver-status.dto';
import { UpdateDriverStatusUseCase } from '../../../application/use-cases/update-driver-status.use-case';
import { ReportLocationUseCase } from '../../../application/use-cases/report-location.use-case';
import { GetAllDriversUseCase } from '../../../application/use-cases/get-all-drivers.use-case';
import { GetAvailableDriversUseCase } from '../../../application/use-cases/get-available-drivers.use-case';
import { GetNearbyDriversUseCase } from '../../../application/use-cases/get-nearby-drivers.use-case';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Driver } from '../../../domain/entities/driver.entity';

@ApiTags('drivers')
@Controller('drivers')
export class DriverController {
  constructor(
    private readonly createDriverUseCase: CreateDriverUseCase,
    private readonly findDriverByIdUseCase: FindDriverByIdUseCase,
    private readonly updateDriverStatusUseCase: UpdateDriverStatusUseCase,
    private readonly reportLocationUseCase: ReportLocationUseCase,
    private readonly getAllDriversUseCase: GetAllDriversUseCase,
    private readonly getAvailableDriversUseCase: GetAvailableDriversUseCase,
    private readonly getNearbyDriversUseCase: GetNearbyDriversUseCase
  ) {}

  @Post()
  @ApiOperation({ summary: 'Registrar nuevo conductor' })
  @ApiResponse({ status: 201, description: 'Conductor registrado correctamente' })
  async create(@Body() dto: CreateDriverDto): Promise<Driver> {
    return this.createDriverUseCase.execute(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los conductores' })
  async findAll(): Promise<Driver[]> {
    return this.getAllDriversUseCase.execute();
  }

  @Get('nearby')
  @ApiOperation({ summary: 'Obtener conductores disponibles en un radio de 3km' })
  async getNearby(
    @Query('lat') lat: number,
    @Query('lon') lon: number
  ): Promise<Driver[]> {
    return this.getNearbyDriversUseCase.execute(lat, lon);
  }

  @Get('available')
  @ApiOperation({ summary: 'Obtener conductores disponibles' })
  async findAvailable(): Promise<Driver[]> {
    return this.getAvailableDriversUseCase.execute();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener conductor por ID' })
  @ApiResponse({ status: 200, description: 'Conductor encontrado' })
  @ApiResponse({ status: 404, description: 'Conductor no encontrado' })
  async findById(@Param('id') id: string): Promise<Driver> {
    return this.findDriverByIdUseCase.execute(id);
  }

  @Put(':id/status')
  @ApiOperation({ summary: 'Actualizar estado del conductor' })
  @ApiResponse({ status: 200, description: 'Estado actualizado' })
  @ApiResponse({ status: 404, description: 'Conductor no encontrado' })
  async updateStatus(
    @Param('id') id: string,
    @Body() dto: UpdateDriverStatusDto
  ): Promise<Driver> {
    return this.updateDriverStatusUseCase.execute(id, dto);
  }

  @Get(':id/report-location')
  async reportLocation(
    @Param('id') id: string,
    @Query('lat') lat: number,
    @Query('lon') lon: number
  ): Promise<string> {
    await this.reportLocationUseCase.execute(id, lat, lon);
    return 'Ubicación enviada';
  }

}