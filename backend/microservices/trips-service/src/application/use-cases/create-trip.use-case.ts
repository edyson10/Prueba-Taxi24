import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { TripRepository, TRIP_REPOSITORY } from '../../domain/repositories/trip.repository';
import { CreateTripDto } from '../dto/create-trip.dto';
import { Trip } from '../../domain/entities/trip.entity';
import { PassengerHttpService } from '../../infrastructure/http/services/passenger-http.service';
import { DriverHttpService } from '../../infrastructure/http/services/driver-http.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CreateTripUseCase {
  constructor(
    @Inject(TRIP_REPOSITORY)
    private readonly tripRepo: TripRepository,
    private readonly passengerHttp: PassengerHttpService,
    private readonly driverHttp: DriverHttpService
  ) {}

  async execute(dto: CreateTripDto): Promise<Trip> {
    // Validar pasajero
    await this.passengerHttp.getPassenger(dto.passengerId);

    // Buscar conductores cercanos
    const nearbyDrivers = await this.driverHttp.getNearbyDrivers(dto.origin.lat, dto.origin.lon);
    if (!nearbyDrivers.length) {
      throw new NotFoundException('No available drivers nearby');
    }

    const selectedDriver = nearbyDrivers[0];

    // Marcar conductor como on_trip
    await this.driverHttp.updateDriverStatus(selectedDriver.id, 'on_trip');

    // Crear viaje
    const trip = new Trip(
      uuidv4(),
      dto.passengerId,
      selectedDriver.id,
      dto.origin,
      dto.destination,
    );

    await this.tripRepo.save(trip);
    return trip;
  }
}