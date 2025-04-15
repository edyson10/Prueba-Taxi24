"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trip = void 0;
const trip_status_vo_1 = require("../value-objects/trip-status.vo");
class Trip {
    id;
    passengerId;
    driverId;
    origin;
    destination;
    status;
    startTime;
    endTime;
    price;
    constructor(id, passengerId, driverId, origin, destination, status = trip_status_vo_1.TripStatus.REQUESTED, startTime, endTime, price) {
        this.id = id;
        this.passengerId = passengerId;
        this.driverId = driverId;
        this.origin = origin;
        this.destination = destination;
        this.status = status;
        this.startTime = startTime;
        this.endTime = endTime;
        this.price = price;
    }
    assignDriver(driverId) {
        if (this.status !== trip_status_vo_1.TripStatus.REQUESTED) {
            throw new Error('Cannot assign driver. Trip is not in requested state.');
        }
        this.driverId = driverId;
        this.status = trip_status_vo_1.TripStatus.ASSIGNED;
    }
    startTrip() {
        if (this.status !== trip_status_vo_1.TripStatus.ASSIGNED) {
            throw new Error('Cannot start trip. Trip is not assigned.');
        }
        this.status = trip_status_vo_1.TripStatus.STARTED;
        this.startTime = new Date();
    }
    completeTrip(price) {
        if (this.status !== trip_status_vo_1.TripStatus.STARTED) {
            throw new Error('Cannot complete trip. Trip has not started.');
        }
        this.status = trip_status_vo_1.TripStatus.COMPLETED;
        this.endTime = new Date();
        this.price = price;
    }
    canExposeLocation() {
        return (this.status === trip_status_vo_1.TripStatus.REQUESTED ||
            this.status === trip_status_vo_1.TripStatus.STARTED);
    }
}
exports.Trip = Trip;
//# sourceMappingURL=trip.entity.js.map