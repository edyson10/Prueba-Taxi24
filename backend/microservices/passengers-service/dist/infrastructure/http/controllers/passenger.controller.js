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
exports.PassengerController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_passenger_dto_1 = require("../../../application/dto/create-passenger.dto");
const create_passenger_use_case_1 = require("../../../application/use-cases/create-passenger.use-case");
const find_passenger_by_id_use_case_1 = require("../../../application/use-cases/find-passenger-by-id.use-case");
const get_all_passengers_use_case_1 = require("../../../application/use-cases/get-all-passengers.use-case");
const get_nearest_drivers_use_case_1 = require("../../../application/use-cases/get-nearest-drivers.use-case");
let PassengerController = class PassengerController {
    createPassengerUseCase;
    findPassengerByIdUseCase;
    getAllPassengersUseCase;
    getNearestDriversUseCase;
    constructor(createPassengerUseCase, findPassengerByIdUseCase, getAllPassengersUseCase, getNearestDriversUseCase) {
        this.createPassengerUseCase = createPassengerUseCase;
        this.findPassengerByIdUseCase = findPassengerByIdUseCase;
        this.getAllPassengersUseCase = getAllPassengersUseCase;
        this.getNearestDriversUseCase = getNearestDriversUseCase;
    }
    async create(dto) {
        return this.createPassengerUseCase.execute(dto);
    }
    async find(id) {
        return this.findPassengerByIdUseCase.execute(id);
    }
    async findAll() {
        return this.getAllPassengersUseCase.execute();
    }
    async getNearestDrivers(passengerId, lat, lon) {
        return this.getNearestDriversUseCase.execute(lat, lon);
    }
};
exports.PassengerController = PassengerController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Registrar pasajero' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Pasajero creado correctamente' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_passenger_dto_1.CreatePassengerDto]),
    __metadata("design:returntype", Promise)
], PassengerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Consultar pasajero por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pasajero encontrado' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Pasajero no encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PassengerController.prototype, "find", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los pasajeros' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista completa de pasajeros' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PassengerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id/nearest-drivers'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener los 3 conductores más cercanos a una ubicación' }),
    (0, swagger_1.ApiQuery)({ name: 'lat', type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'lon', type: Number }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('lat')),
    __param(2, (0, common_1.Query)('lon')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], PassengerController.prototype, "getNearestDrivers", null);
exports.PassengerController = PassengerController = __decorate([
    (0, swagger_1.ApiTags)('passengers'),
    (0, common_1.Controller)('passengers'),
    __metadata("design:paramtypes", [create_passenger_use_case_1.CreatePassengerUseCase,
        find_passenger_by_id_use_case_1.FindPassengerByIdUseCase,
        get_all_passengers_use_case_1.GetAllPassengersUseCase,
        get_nearest_drivers_use_case_1.GetNearestDriversUseCase])
], PassengerController);
//# sourceMappingURL=passenger.controller.js.map