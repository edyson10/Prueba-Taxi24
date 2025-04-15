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
const location_model_1 = require("../../infrastructure/persistence/location.model");
let SeederService = SeederService_1 = class SeederService {
    dataSource;
    logger = new common_1.Logger(SeederService_1.name);
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async onApplicationBootstrap() {
        await this.seedLocations();
    }
    async seedLocations() {
        const locationRepo = this.dataSource.getRepository(location_model_1.LocationModel);
        const count = await locationRepo.count();
        if (count > 0) {
            this.logger.log('Ubicaciones ya existentes. Se omite el seeding.');
            return;
        }
        const now = new Date();
        const locations = [
            {
                id: '3afa7bf8-7d1a-4f9d-a391-833a511896b9',
                driverId: '39f3fc67-af77-42ce-8634-8d591109b950',
                latitude: 19.432608,
                longitude: -99.133209,
                timestamp: now,
            },
            {
                id: '956eeaf2-fa31-49c3-bcef-761614637280',
                driverId: '3afa7bf8-7d1a-4f9d-a391-833a511896b9',
                latitude: 19.427025,
                longitude: -99.167665,
                timestamp: now,
            },
            {
                id: '39f3fc67-af77-42ce-8634-8d591109b950',
                driverId: '956eeaf2-fa31-49c3-bcef-761614637280',
                latitude: 19.445364,
                longitude: -99.140252,
                timestamp: now,
            },
        ];
        await locationRepo.save(locations);
        this.logger.log('Ubicaciones iniciales cargadas.');
    }
};
exports.SeederService = SeederService;
exports.SeederService = SeederService = SeederService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], SeederService);
//# sourceMappingURL=seeder.service.js.map