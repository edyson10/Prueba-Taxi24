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
exports.UpdateLocationUseCase = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const location_repository_1 = require("../../domain/repositories/location.repository");
const location_entity_1 = require("../../domain/entities/location.entity");
let UpdateLocationUseCase = class UpdateLocationUseCase {
    locationRepo;
    constructor(locationRepo) {
        this.locationRepo = locationRepo;
    }
    async execute(dto) {
        const location = new location_entity_1.Location((0, uuid_1.v4)(), dto.driverId, dto.latitude, dto.longitude, new Date());
        await this.locationRepo.save(location);
    }
};
exports.UpdateLocationUseCase = UpdateLocationUseCase;
exports.UpdateLocationUseCase = UpdateLocationUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(location_repository_1.LOCATION_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], UpdateLocationUseCase);
//# sourceMappingURL=update-location.use-case.js.map