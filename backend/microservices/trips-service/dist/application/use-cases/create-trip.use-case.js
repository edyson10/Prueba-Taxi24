"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTripUseCase = void 0;
const common_1 = require("@nestjs/common");
const trip_repository_1 = require("../../domain/repositories/trip.repository");
const trip_entity_1 = require("../../domain/entities/trip.entity");
const passenger_http_service_1 = require("../../infrastructure/http/services/passenger-http.service");
const driver_http_service_1 = require("../../infrastructure/http/services/driver-http.service");
const uuid_1 = require("uuid");
let CreateTripUseCase = class CreateTripUseCase {
    tripRepo;
    passengerHttp;
    driverHttp;
    constructor(tripRepo, passengerHttp, driverHttp) {
        this.tripRepo = tripRepo;
        this.passengerHttp = passengerHttp;
        this.driverHttp = driverHttp;
    }
    async execute(dto) {
        await this.passengerHttp.getPassenger(dto.passengerId);
        const nearbyDrivers = await this.driverHttp.getNearbyDrivers(dto.origin.lat, dto.origin.lon);
        if (!nearbyDrivers.length) {
            throw new common_1.NotFoundException('No available drivers nearby');
        }
        const selectedDriver = nearbyDrivers[0];
        await this.driverHttp.updateDriverStatus(selectedDriver.id, 'on_trip');
        const trip = new trip_entity_1.Trip((0, uuid_1.v4)(), dto.passengerId, selectedDriver.id, dto.origin, dto.destination);
        await this.tripRepo.save(trip);
        return trip;
    }
};
exports.CreateTripUseCase = CreateTripUseCase;
exports.CreateTripUseCase = CreateTripUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(trip_repository_1.TRIP_REPOSITORY)),
    __metadata("design:paramtypes", [Object, passenger_http_service_1.PassengerHttpService,
        driver_http_service_1.DriverHttpService])
], CreateTripUseCase);
//# sourceMappingURL=create-trip.use-case.js.map