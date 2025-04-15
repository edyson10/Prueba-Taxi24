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
exports.LocationController = void 0;
const common_1 = require("@nestjs/common");
const update_location_dto_1 = require("../../../application/dto/update-location.dto");
const update_location_use_case_1 = require("../../../application/use-cases/update-location.use-case");
const get_current_location_use_case_1 = require("../../../application/use-cases/get-current-location.use-case");
const get_all_current_locations_use_case_1 = require("../../../application/use-cases/get-all-current-locations.use-case");
const swagger_1 = require("@nestjs/swagger");
let LocationController = class LocationController {
    updateLocationUseCase;
    getCurrentLocationUseCase;
    getAllLocationsUseCase;
    constructor(updateLocationUseCase, getCurrentLocationUseCase, getAllLocationsUseCase) {
        this.updateLocationUseCase = updateLocationUseCase;
        this.getCurrentLocationUseCase = getCurrentLocationUseCase;
        this.getAllLocationsUseCase = getAllLocationsUseCase;
    }
    async update(dto) {
        return this.updateLocationUseCase.execute(dto);
    }
    async findAll() {
        return this.getAllLocationsUseCase.execute();
    }
    async find(driverId) {
        return this.getCurrentLocationUseCase.execute(driverId);
    }
};
exports.LocationController = LocationController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar ubicación del conductor' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Ubicación actualizada correctamente' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_location_dto_1.UpdateLocationDto]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener la ubicación actual de todos los conductores' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de ubicaciones actuales' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':driverId'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener ubicación actual de un conductor' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Ubicación encontrada' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'No se encontró ubicación' }),
    __param(0, (0, common_1.Param)('driverId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "find", null);
exports.LocationController = LocationController = __decorate([
    (0, swagger_1.ApiTags)('location'),
    (0, common_1.Controller)('location'),
    __metadata("design:paramtypes", [update_location_use_case_1.UpdateLocationUseCase,
        get_current_location_use_case_1.GetCurrentLocationUseCase,
        get_all_current_locations_use_case_1.GetAllCurrentLocationsUseCase])
], LocationController);
//# sourceMappingURL=location.controller.js.map