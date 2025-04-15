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
exports.AssignDriverUseCase = void 0;
const common_1 = require("@nestjs/common");
const trip_repository_1 = require("../../domain/repositories/trip.repository");
const driver_http_service_1 = require("../../infrastructure/http/services/driver-http.service");
let AssignDriverUseCase = class AssignDriverUseCase {
    tripRepo;
    driverHttp;
    constructor(tripRepo, driverHttp) {
        this.tripRepo = tripRepo;
        this.driverHttp = driverHttp;
    }
    async execute(tripId, dto) {
        const trip = await this.tripRepo.findById(tripId);
        if (!trip)
            throw new common_1.NotFoundException('Trip not found');
        const driver = await this.driverHttp.getDriver(dto.driverId);
        if (!driver || driver.status !== 'available') {
            throw new common_1.BadRequestException('Driver not available or does not exist');
        }
        trip.assignDriver(dto.driverId);
        await this.tripRepo.save(trip);
        return trip;
    }
};
exports.AssignDriverUseCase = AssignDriverUseCase;
exports.AssignDriverUseCase = AssignDriverUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(trip_repository_1.TRIP_REPOSITORY)),
    __metadata("design:paramtypes", [Object, driver_http_service_1.DriverHttpService])
], AssignDriverUseCase);
//# sourceMappingURL=assign-driver.use-case.js.map