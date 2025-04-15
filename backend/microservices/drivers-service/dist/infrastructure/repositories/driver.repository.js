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
exports.DriverRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const driver_model_1 = require("../persistence/driver.model");
const driver_mapper_1 = require("../mappers/driver.mapper");
let DriverRepository = class DriverRepository {
    ormRepository;
    constructor(ormRepository) {
        this.ormRepository = ormRepository;
    }
    async save(driver) {
        const model = driver_mapper_1.DriverMapper.toModel(driver);
        await this.ormRepository.save(model);
    }
    async findAll() {
        const models = await this.ormRepository.find();
        return models.map(driver_mapper_1.DriverMapper.toDomain);
    }
    async findById(id) {
        const model = await this.ormRepository.findOneBy({ id });
        return model ? driver_mapper_1.DriverMapper.toDomain(model) : null;
    }
    async update(driver) {
        const model = driver_mapper_1.DriverMapper.toModel(driver);
        await this.ormRepository.save(model);
    }
    async findAvailableDrivers() {
        const models = await this.ormRepository.findBy({ status: 'available' });
        return models.map(driver_mapper_1.DriverMapper.toDomain);
    }
};
exports.DriverRepository = DriverRepository;
exports.DriverRepository = DriverRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(driver_model_1.DriverModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DriverRepository);
//# sourceMappingURL=driver.repository.js.map