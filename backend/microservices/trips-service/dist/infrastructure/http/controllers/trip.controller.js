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
exports.TripController = void 0;
const common_1 = require("@nestjs/common");
const create_trip_dto_1 = require("../../../application/dto/create-trip.dto");
const create_trip_use_case_1 = require("../../../application/use-cases/create-trip.use-case");
const assign_driver_dto_1 = require("../../../application/dto/assign-driver.dto");
const assign_driver_use_case_1 = require("../../../application/use-cases/assign-driver.use-case");
const complete_trip_dto_1 = require("../../../application/dto/complete-trip.dto");
const start_trip_use_case_1 = require("../../../application/use-cases/start-trip.use-case");
const complete_trip_use_case_1 = require("../../../application/use-cases/complete-trip.use-case");
const location_http_service_1 = require("../../../infrastructure/http/services/location-http.service");
const find_trip_by_id_use_case_1 = require("../../../application/use-cases/find-trip-by-id.use-case");
const find_active_trips_use_case_1 = require("../../../application/use-cases/find-active-trips.use-case");
const swagger_1 = require("@nestjs/swagger");
let TripController = class TripController {
    createTripUseCase;
    assignDriverUseCase;
    startTripUseCase;
    completeTripUseCase;
    findTripByIdUseCase;
    locationHttpService;
    findActiveTripsUseCase;
    constructor(createTripUseCase, assignDriverUseCase, startTripUseCase, completeTripUseCase, findTripByIdUseCase, locationHttpService, findActiveTripsUseCase) {
        this.createTripUseCase = createTripUseCase;
        this.assignDriverUseCase = assignDriverUseCase;
        this.startTripUseCase = startTripUseCase;
        this.completeTripUseCase = completeTripUseCase;
        this.findTripByIdUseCase = findTripByIdUseCase;
        this.locationHttpService = locationHttpService;
        this.findActiveTripsUseCase = findActiveTripsUseCase;
    }
    async create(dto) {
        return this.createTripUseCase.execute(dto);
    }
    async findActive() {
        return this.findActiveTripsUseCase.execute();
    }
    async assign(id, dto) {
        return this.assignDriverUseCase.execute(id, dto);
    }
    async start(id) {
        return this.startTripUseCase.execute(id);
    }
    async complete(id, dto) {
        return this.completeTripUseCase.execute(id, dto);
    }
    async getDriverLocation(id) {
        const trip = await this.findTripByIdUseCase.execute(id);
        if (!trip.driverId) {
            throw new common_1.NotFoundException('Trip has no assigned driver');
        }
        if (!trip.canExposeLocation()) {
            throw new common_1.BadRequestException(`Location is only available during 'requested' or 'started' trips. Current status: '${trip.status}'`);
        }
        return this.locationHttpService.getDriverLocation(trip.driverId);
    }
};
exports.TripController = TripController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear nuevo viaje' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Viaje creado correctamente' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_trip_dto_1.CreateTripDto]),
    __metadata("design:returntype", Promise)
], TripController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('active'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los viajes activos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de viajes activos' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TripController.prototype, "findActive", null);
__decorate([
    (0, common_1.Put)(':id/assign'),
    (0, swagger_1.ApiOperation)({ summary: 'Asignar conductor al viaje' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Conductor asignado correctamente' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, assign_driver_dto_1.AssignDriverDto]),
    __metadata("design:returntype", Promise)
], TripController.prototype, "assign", null);
__decorate([
    (0, common_1.Put)(':id/start'),
    (0, swagger_1.ApiOperation)({ summary: 'Iniciar viaje' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Viaje iniciado correctamente' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TripController.prototype, "start", null);
__decorate([
    (0, common_1.Put)(':id/complete'),
    (0, swagger_1.ApiOperation)({ summary: 'Finalizar viaje' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Viaje finalizado correctamente' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, complete_trip_dto_1.CompleteTripDto]),
    __metadata("design:returntype", Promise)
], TripController.prototype, "complete", null);
__decorate([
    (0, common_1.Get)(':id/location'),
    (0, swagger_1.ApiOperation)({ summary: 'Ubicación actual del conductor del viaje' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Ubicación actual del conductor' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Viaje o ubicación no encontrada' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Estado del viaje no permite consultar ubicación' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TripController.prototype, "getDriverLocation", null);
exports.TripController = TripController = __decorate([
    (0, swagger_1.ApiTags)('trips'),
    (0, common_1.Controller)('trips'),
    __metadata("design:paramtypes", [create_trip_use_case_1.CreateTripUseCase,
        assign_driver_use_case_1.AssignDriverUseCase,
        start_trip_use_case_1.StartTripUseCase,
        complete_trip_use_case_1.CompleteTripUseCase,
        find_trip_by_id_use_case_1.FindTripByIdUseCase,
        location_http_service_1.LocationHttpService,
        find_active_trips_use_case_1.FindActiveTripsUseCase])
], TripController);
//# sourceMappingURL=trip.controller.js.map