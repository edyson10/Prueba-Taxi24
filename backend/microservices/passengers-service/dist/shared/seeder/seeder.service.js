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
var SeederService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeederService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const passenger_model_1 = require("../../infrastructure/persistence/passenger.model");
let SeederService = SeederService_1 = class SeederService {
    dataSource;
    logger = new common_1.Logger(SeederService_1.name);
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async onApplicationBootstrap() {
        await this.seedPassengers();
    }
    async seedPassengers() {
        const passengerRepo = this.dataSource.getRepository(passenger_model_1.PassengerOrmEntity);
        const count = await passengerRepo.count();
        if (count > 0) {
            this.logger.log('Los pasajeros ya existen, omitiendo carga inicial.');
            return;
        }
        const passengers = [
            {
                id: '12208f87-babc-4661-a5f3-211fb78e5ef4',
                name: 'Carlos Ramírez',
                phone: '+5715511122233',
                email: 'carlos.ramirez@example.com',
            },
            {
                id: 'bf67cacf-8d76-4e97-a2f0-f8df9a42eb25',
                name: 'María Fernanda',
                phone: '+5715544455566',
                email: 'maria.fernanda@example.com',
            },
            {
                id: 'c8685cf0-0f4f-4f6b-8920-740f245e15ce',
                name: 'Roberto Díaz',
                phone: '+5715577788899',
                email: 'roberto.diaz@example.com',
            },
        ];
        await passengerRepo.save(passengers);
        this.logger.log('Pasajeros iniciales cargados.');
    }
};
exports.SeederService = SeederService;
exports.SeederService = SeederService = SeederService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], SeederService);
//# sourceMappingURL=seeder.service.js.map