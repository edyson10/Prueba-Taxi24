import { TripStatus } from '../value-objects/trip-status.vo';

export class Trip {
  constructor(
    public readonly id: string,
    public readonly passengerId: string,
    public driverId: string,
    public origin: { lat: number; lon: number },
    public destination: string,
    public status: TripStatus = TripStatus.REQUESTED,
    public startTime?: Date,
    public endTime?: Date,
    public price?: number,
  ) {}

  assignDriver(driverId: string) {
    if (this.status !== TripStatus.REQUESTED) {
      throw new Error('Cannot assign driver. Trip is not in requested state.');
    }
    this.driverId = driverId;
    this.status = TripStatus.ASSIGNED;
  }

  startTrip() {
    if (this.status !== TripStatus.ASSIGNED) {
      throw new Error('Cannot start trip. Trip is not assigned.');
    }
    this.status = TripStatus.STARTED;
    this.startTime = new Date();
  }

  completeTrip(price: number) {
    if (this.status !== TripStatus.STARTED) {
      throw new Error('Cannot complete trip. Trip has not started.');
    }
    this.status = TripStatus.COMPLETED;
    this.endTime = new Date();
    this.price = price;
  }

  canExposeLocation(): boolean {
    return (
      this.status === TripStatus.REQUESTED ||
      this.status === TripStatus.STARTED
    );
  }
}