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
exports.CreateDriverUseCase = void 0;
const common_1 = require("@nestjs/common");
const driver_entity_1 = require("../../domain/entities/driver.entity");
const driver_repository_1 = require("../../domain/repositories/driver.repository");
const driver_repository_impl_1 = require("../../infrastructure/persistence/driver.repository.impl");
const uuid_1 = require("uuid");
let CreateDriverUseCase = class CreateDriverUseCase {
    driverRepository;
    constructor(driverRepository) {
        this.driverRepository = driverRepository;
    }
    async execute(dto) {
        const driver = new driver_entity_1.Driver((0, uuid_1.v4)(), dto.name, dto.phone, dto.email);
        await this.driverRepository.save(driver);
        return driver;
    }
};
exports.CreateDriverUseCase = CreateDriverUseCase;
exports.CreateDriverUseCase = CreateDriverUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(driver_repository_1.DRIVER_REPOSITORY)),
    __metadata("design:paramtypes", [driver_repository_impl_1.DriverRepositoryImpl])
], CreateDriverUseCase);
//# sourceMappingURL=create-driver.use-case.js.map