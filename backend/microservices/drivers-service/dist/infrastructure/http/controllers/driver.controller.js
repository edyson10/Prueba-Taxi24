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
exports.DriverController = void 0;
const common_1 = require("@nestjs/common");
const create_driver_dto_1 = require("../../../application/dto/create-driver.dto");
const create_driver_use_case_1 = require("../../../application/use-cases/create-driver.use-case");
const find_driver_by_id_use_case_1 = require("../../../application/use-cases/find-driver-by-id.use-case");
const update_driver_status_dto_1 = require("../../../application/dto/update-driver-status.dto");
const update_driver_status_use_case_1 = require("../../../application/use-cases/update-driver-status.use-case");
const report_location_use_case_1 = require("../../../application/use-cases/report-location.use-case");
const get_all_drivers_use_case_1 = require("../../../application/use-cases/get-all-drivers.use-case");
const get_available_drivers_use_case_1 = require("../../../application/use-cases/get-available-drivers.use-case");
const get_nearby_drivers_use_case_1 = require("../../../application/use-cases/get-nearby-drivers.use-case");
const swagger_1 = require("@nestjs/swagger");
let DriverController = class DriverController {
    createDriverUseCase;
    findDriverByIdUseCase;
    updateDriverStatusUseCase;
    reportLocationUseCase;
    getAllDriversUseCase;
    getAvailableDriversUseCase;
    getNearbyDriversUseCase;
    constructor(createDriverUseCase, findDriverByIdUseCase, updateDriverStatusUseCase, reportLocationUseCase, getAllDriversUseCase, getAvailableDriversUseCase, getNearbyDriversUseCase) {
        this.createDriverUseCase = createDriverUseCase;
        this.findDriverByIdUseCase = findDriverByIdUseCase;
        this.updateDriverStatusUseCase = updateDriverStatusUseCase;
        this.reportLocationUseCase = reportLocationUseCase;
        this.getAllDriversUseCase = getAllDriversUseCase;
        this.getAvailableDriversUseCase = getAvailableDriversUseCase;
        this.getNearbyDriversUseCase = getNearbyDriversUseCase;
    }
    async create(dto) {
        return this.createDriverUseCase.execute(dto);
    }
    async findAll() {
        return this.getAllDriversUseCase.execute();
    }
    async getNearby(lat, lon) {
        return this.getNearbyDriversUseCase.execute(lat, lon);
    }
    async findAvailable() {
        return this.getAvailableDriversUseCase.execute();
    }
    async findById(id) {
        return this.findDriverByIdUseCase.execute(id);
    }
    async updateStatus(id, dto) {
        return this.updateDriverStatusUseCase.execute(id, dto);
    }
    async reportLocation(id, lat, lon) {
        await this.reportLocationUseCase.execute(id, lat, lon);
        return 'Ubicación enviada';
    }
};
exports.DriverController = DriverController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Registrar nuevo conductor' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Conductor registrado correctamente' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_driver_dto_1.CreateDriverDto]),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los conductores' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('nearby'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener conductores disponibles en un radio de 3km' }),
    __param(0, (0, common_1.Query)('lat')),
    __param(1, (0, common_1.Query)('lon')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "getNearby", null);
__decorate([
    (0, common_1.Get)('available'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener conductores disponibles' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "findAvailable", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener conductor por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Conductor encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Conductor no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "findById", null);
__decorate([
    (0, common_1.Put)(':id/status'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar estado del conductor' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Estado actualizado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Conductor no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_driver_status_dto_1.UpdateDriverStatusDto]),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Get)(':id/report-location'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('lat')),
    __param(2, (0, common_1.Query)('lon')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "reportLocation", null);
exports.DriverController = DriverController = __decorate([
    (0, swagger_1.ApiTags)('drivers'),
    (0, common_1.Controller)('drivers'),
    __metadata("design:paramtypes", [create_driver_use_case_1.CreateDriverUseCase,
        find_driver_by_id_use_case_1.FindDriverByIdUseCase,
        update_driver_status_use_case_1.UpdateDriverStatusUseCase,
        report_location_use_case_1.ReportLocationUseCase,
        get_all_drivers_use_case_1.GetAllDriversUseCase,
        get_available_drivers_use_case_1.GetAvailableDriversUseCase,
        get_nearby_drivers_use_case_1.GetNearbyDriversUseCase])
], DriverController);
//# sourceMappingURL=driver.controller.js.map