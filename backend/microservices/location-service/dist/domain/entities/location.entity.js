"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
class Location {
    id;
    driverId;
    latitude;
    longitude;
    timestamp;
    constructor(id, driverId, latitude, longitude, timestamp) {
        this.id = id;
        this.driverId = driverId;
        this.latitude = latitude;
        this.longitude = longitude;
        this.timestamp = timestamp;
    }
}
exports.Location = Location;
//# sourceMappingURL=location.entity.js.map