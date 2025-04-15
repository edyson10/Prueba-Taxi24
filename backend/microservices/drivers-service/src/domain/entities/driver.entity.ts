import { DriverStatus } from '../value-objects/driver-status.vo';

export class Driver {
  constructor(
    public readonly id: string,
    public name: string,
    public phone: string,
    public email: string,
    public status: DriverStatus = DriverStatus.AVAILABLE,
  ) {}

  changeStatus(newStatus: DriverStatus) {
    this.status = newStatus;
  }
}