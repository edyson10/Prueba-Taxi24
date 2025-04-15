import { DriverStatus } from '../value-objects/driver-status.vo';
export declare class Driver {
    readonly id: string;
    name: string;
    phone: string;
    email: string;
    status: DriverStatus;
    constructor(id: string, name: string, phone: string, email: string, status?: DriverStatus);
    changeStatus(newStatus: DriverStatus): void;
}
