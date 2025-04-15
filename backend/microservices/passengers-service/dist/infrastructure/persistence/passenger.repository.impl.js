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
exports.TypeOrmPassengerRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const passenger_model_1 = require("../persistence/passenger.model");
const passenger_mapper_1 = require("../mappers/passenger.mapper");
let TypeOrmPassengerRepository = class TypeOrmPassengerRepository {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async save(passenger) {
        const entity = passenger_mapper_1.PassengerMapper.toOrm(passenger);
        const saved = await this.repository.save(entity);
        return passenger_mapper_1.PassengerMapper.toDomain(saved);
    }
    async findById(id) {
        const entity = await this.repository.findOneBy({ id });
        return entity ? passenger_mapper_1.PassengerMapper.toDomain(entity) : null;
    }
    async findAll() {
        const entities = await this.repository.find();
        return entities.map(passenger_mapper_1.PassengerMapper.toDomain);
    }
};
exports.TypeOrmPassengerRepository = TypeOrmPassengerRepository;
exports.TypeOrmPassengerRepository = TypeOrmPassengerRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(passenger_model_1.PassengerOrmEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TypeOrmPassengerRepository);
//# sourceMappingURL=passenger.repository.impl.js.map