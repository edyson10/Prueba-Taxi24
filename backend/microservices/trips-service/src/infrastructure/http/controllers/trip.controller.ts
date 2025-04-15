import { Body, Controller, Post, Param, Put, Get, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateTripDto } from '../../../application/dto/create-trip.dto';
import { CreateTripUseCase } from '../../../application/use-cases/create-trip.use-case';
import { AssignDriverDto } from '../../../application/dto/assign-driver.dto';
import { AssignDriverUseCase } from '../../../application/use-cases/assign-driver.use-case';
import { CompleteTripDto } from '../../../application/dto/complete-trip.dto';
import { StartTripUseCase } from '../../../application/use-cases/start-trip.use-case';
import { CompleteTripUseCase } from '../../../application/use-cases/complete-trip.use-case';
import { LocationHttpService } from '../../../infrastructure/http/services/location-http.service';
import { FindTripByIdUseCase } from '../../../application/use-cases/find-trip-by-id.use-case';
import { FindActiveTripsUseCase } from '../../../application/use-cases/find-active-trips.use-case'
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Trip } from '../../../domain/entities/trip.entity';

@ApiTags('trips')
@Controller('trips')
export class TripController {
  constructor(
    private readonly createTripUseCase: CreateTripUseCase,
    private readonly assignDriverUseCase: AssignDriverUseCase,
    private readonly startTripUseCase: StartTripUseCase,
    private readonly completeTripUseCase: CompleteTripUseCase,
    private readonly findTripByIdUseCase: FindTripByIdUseCase,
    private readonly locationHttpService: LocationHttpService,
    private readonly findActiveTripsUseCase: FindActiveTripsUseCase
  ) {}

  @Post()
  @ApiOperation({ summary: 'Crear nuevo viaje' })
  @ApiResponse({ status: 201, description: 'Viaje creado correctamente' })
  async create(@Body() dto: CreateTripDto): Promise<Trip> {
    return this.createTripUseCase.execute(dto);
  }

  @Get('active')
  @ApiOperation({ summary: 'Obtener todos los viajes activos' })
  @ApiResponse({ status: 200, description: 'Lista de viajes activos' })
  async findActive(): Promise<Trip[]> {
    return this.findActiveTripsUseCase.execute();
  }
  
  @Put(':id/assign')
  @ApiOperation({ summary: 'Asignar conductor al viaje' })
  @ApiResponse({ status: 200, description: 'Conductor asignado correctamente' })
  async assign(
    @Param('id') id: string,
    @Body() dto: AssignDriverDto
  ): Promise<Trip> {
    return this.assignDriverUseCase.execute(id, dto);
  }

  @Put(':id/start')
  @ApiOperation({ summary: 'Iniciar viaje' })
  @ApiResponse({ status: 200, description: 'Viaje iniciado correctamente' })
  async start(@Param('id') id: string): Promise<Trip> {
    return this.startTripUseCase.execute(id);
  }

  // Complete Trip
  @Put(':id/complete')
  @ApiOperation({ summary: 'Finalizar viaje' })
  @ApiResponse({ status: 200, description: 'Viaje finalizado correctamente' })
  async complete(
    @Param('id') id: string,
    @Body() dto: CompleteTripDto
  ): Promise<Trip> {
    return this.completeTripUseCase.execute(id, dto);
  }
  
  @Get(':id/location')
  @ApiOperation({ summary: 'Ubicación actual del conductor del viaje' })
  @ApiResponse({ status: 200, description: 'Ubicación actual del conductor' })
  @ApiResponse({ status: 404, description: 'Viaje o ubicación no encontrada' })
  @ApiResponse({ status: 400, description: 'Estado del viaje no permite consultar ubicación' })
  async getDriverLocation(@Param('id') id: string): Promise<any> {
    const trip = await this.findTripByIdUseCase.execute(id);

    if (!trip.driverId) {
      throw new NotFoundException('Trip has no assigned driver');
    }

    if (!trip.canExposeLocation()) {
      throw new BadRequestException(
        `Location is only available during 'requested' or 'started' trips. Current status: '${trip.status}'`
      );
    }

    return this.locationHttpService.getDriverLocation(trip.driverId);
  }
}