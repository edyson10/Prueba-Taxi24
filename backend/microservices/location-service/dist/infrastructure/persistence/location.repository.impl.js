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
exports.LocationRepositoryImpl = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const location_model_1 = require("./location.model");
const location_mapper_1 = require("../mappers/location.mapper");
let LocationRepositoryImpl = class LocationRepositoryImpl {
    orm;
    constructor(orm) {
        this.orm = orm;
    }
    async save(location) {
        await this.orm.save(location_mapper_1.LocationMapper.toModel(location));
    }
    async findLatestByDriverId(driverId) {
        const record = await this.orm.findOne({
            where: { driverId },
            order: { timestamp: 'DESC' },
        });
        return record ? location_mapper_1.LocationMapper.toDomain(record) : null;
    }
    async findAll() {
        const all = await this.orm.find();
        return all.map(location_mapper_1.LocationMapper.toDomain);
    }
};
exports.LocationRepositoryImpl = LocationRepositoryImpl;
exports.LocationRepositoryImpl = LocationRepositoryImpl = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(location_model_1.LocationModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LocationRepositoryImpl);
//# sourceMappingURL=location.repository.impl.js.map