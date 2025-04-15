import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UpdateLocationDto } from '../../../application/dto/update-location.dto';
import { UpdateLocationUseCase } from '../../../application/use-cases/update-location.use-case';
import { GetCurrentLocationUseCase } from '../../../application/use-cases/get-current-location.use-case';
import { GetAllCurrentLocationsUseCase } from '../../../application/use-cases/get-all-current-locations.use-case';
import { Location } from '../../../domain/entities/location.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('location')
@Controller('location')
export class LocationController {
  constructor(
    private readonly updateLocationUseCase: UpdateLocationUseCase,
    private readonly getCurrentLocationUseCase: GetCurrentLocationUseCase,
    private readonly getAllLocationsUseCase: GetAllCurrentLocationsUseCase
  ) {}

  @Post()
  @ApiOperation({ summary: 'Actualizar ubicación del conductor' })
  @ApiResponse({ status: 201, description: 'Ubicación actualizada correctamente' })
  async update(@Body() dto: UpdateLocationDto): Promise<void> {
    return this.updateLocationUseCase.execute(dto);
  }
  
  @Get()
  @ApiOperation({ summary: 'Obtener la ubicación actual de todos los conductores' })
  @ApiResponse({ status: 200, description: 'Lista de ubicaciones actuales' })
  async findAll(): Promise<Location[]> {
    return this.getAllLocationsUseCase.execute();
  }

  @Get(':driverId')
  @ApiOperation({ summary: 'Obtener ubicación actual de un conductor' })
  @ApiResponse({ status: 200, description: 'Ubicación encontrada' })
  @ApiResponse({ status: 404, description: 'No se encontró ubicación' })
  async find(@Param('driverId') driverId: string): Promise<Location> {
    return this.getCurrentLocationUseCase.execute(driverId);
  }
}