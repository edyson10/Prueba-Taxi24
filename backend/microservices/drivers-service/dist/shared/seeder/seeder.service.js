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
const driver_model_1 = require("../../infrastructure/persistence/driver.model");
let SeederService = SeederService_1 = class SeederService {
    dataSource;
    logger = new common_1.Logger(SeederService_1.name);
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async onApplicationBootstrap() {
        await this.seedDrivers();
    }
    async seedDrivers() {
        const driverRepo = this.dataSource.getRepository(driver_model_1.DriverModel);
        const count = await driverRepo.count();
        if (count > 0) {
            this.logger.log('Los datos ya existen, omitiendo carga inicial.');
            return;
        }
        const drivers = [
            {
                id: '39f3fc67-af77-42ce-8634-8d591109b950',
                name: 'Juan Pérez',
                phone: '+5715512345678',
                email: 'juan.perez@example.com',
                status: 'available',
            },
            {
                id: '3afa7bf8-7d1a-4f9d-a391-833a511896b9',
                name: 'Ana García',
                phone: '+5715587654321',
                email: 'ana.garcia@example.com',
                status: 'avaliable',
            },
            {
                id: '956eeaf2-fa31-49c3-bcef-761614637280',
                name: 'Luis Martínez',
                phone: '+5715544332211',
                email: 'luis.martinez@example.com',
                status: 'available',
            },
            {
                id: '9bb53746-6d94-416f-8825-eaf2d48c29d1',
                name: 'Sofía López',
                phone: '+5715599887766',
                email: 'sofia.lopez@example.com',
                status: 'avaliable',
            },
        ];
        await driverRepo.save(drivers);
        this.logger.log('Conductores iniciales cargados.');
    }
};
exports.SeederService = SeederService;
exports.SeederService = SeederService = SeederService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], SeederService);
//# sourceMappingURL=seeder.service.js.map