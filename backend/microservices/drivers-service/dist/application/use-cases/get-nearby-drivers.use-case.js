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
exports.GetNearbyDriversUseCase = void 0;
const common_1 = require("@nestjs/common");
const driver_repository_1 = require("../../domain/repositories/driver.repository");
const location_http_service_1 = require("../../infrastructure/http/services/location-http.service");
const driver_repository_impl_1 = require("../../infrastructure/persistence/driver.repository.impl");
const geolib_1 = require("geolib");
let GetNearbyDriversUseCase = class GetNearbyDriversUseCase {
    driverRepository;
    locationService;
    constructor(driverRepository, locationService) {
        this.driverRepository = driverRepository;
        this.locationService = locationService;
    }
    async execute(lat, lon) {
        const locations = await this.locationService.getAllLocations();
        const availableDrivers = await this.driverRepository.findAvailable();
        const nearby = [];
        for (const driver of availableDrivers) {
            const loc = locations.find((l) => l.driverId === driver.id);
            if (!loc)
                continue;
            const distance = (0, geolib_1.getDistance)({ latitude: lat, longitude: lon }, { latitude: loc.latitude, longitude: loc.longitude });
            if (distance <= 3000) {
                nearby.push(driver);
            }
        }
        return nearby;
    }
};
exports.GetNearbyDriversUseCase = GetNearbyDriversUseCase;
exports.GetNearbyDriversUseCase = GetNearbyDriversUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(driver_repository_1.DRIVER_REPOSITORY)),
    __metadata("design:paramtypes", [driver_repository_impl_1.DriverRepositoryImpl,
        location_http_service_1.LocationHttpService])
], GetNearbyDriversUseCase);
//# sourceMappingURL=get-nearby-drivers.use-case.js.map