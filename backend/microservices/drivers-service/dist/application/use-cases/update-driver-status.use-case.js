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
exports.UpdateDriverStatusUseCase = void 0;
const common_1 = require("@nestjs/common");
const driver_repository_1 = require("../../domain/repositories/driver.repository");
const driver_repository_impl_1 = require("../../infrastructure/persistence/driver.repository.impl");
let UpdateDriverStatusUseCase = class UpdateDriverStatusUseCase {
    driverRepository;
    constructor(driverRepository) {
        this.driverRepository = driverRepository;
    }
    async execute(id, dto) {
        const driver = await this.driverRepository.findOneById(id);
        if (!driver) {
            throw new common_1.NotFoundException(`Driver with id ${id} not found`);
        }
        driver.changeStatus(dto.status);
        await this.driverRepository.save(driver);
        return driver;
    }
};
exports.UpdateDriverStatusUseCase = UpdateDriverStatusUseCase;
exports.UpdateDriverStatusUseCase = UpdateDriverStatusUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(driver_repository_1.DRIVER_REPOSITORY)),
    __metadata("design:paramtypes", [driver_repository_impl_1.DriverRepositoryImpl])
], UpdateDriverStatusUseCase);
//# sourceMappingURL=update-driver-status.use-case.js.map