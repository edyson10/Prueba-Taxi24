import { Inject, Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { TRIP_REPOSITORY, TripRepository } from '../../domain/repositories/trip.repository';
import { AssignDriverDto } from '../dto/assign-driver.dto';
import { Trip } from '../../domain/entities/trip.entity';
import { DriverHttpService } from '../../infrastructure/http/services/driver-http.service';

@Injectable()
export class AssignDriverUseCase {
  constructor(
    @Inject(TRIP_REPOSITORY)
    private readonly tripRepo: TripRepository,
    private readonly driverHttp: DriverHttpService
  ) {}

  async execute(tripId: string, dto: AssignDriverDto): Promise<Trip> {
    const trip = await this.tripRepo.findById(tripId);
    if (!trip) throw new NotFoundException('Trip not found');

    // Validar conductor vía drivers-service
    const driver = await this.driverHttp.getDriver(dto.driverId);
    if (!driver || driver.status !== 'available') {
      throw new BadRequestException('Driver not available or does not exist');
    }

    // Asignar conductor
    trip.assignDriver(dto.driverId);
    await this.tripRepo.save(trip);
    return trip;
  }
}