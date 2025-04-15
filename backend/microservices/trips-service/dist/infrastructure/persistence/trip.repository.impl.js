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
exports.TripRepositoryImpl = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const trip_model_1 = require("./trip.model");
const typeorm_2 = require("typeorm");
const trip_mapper_1 = require("../mappers/trip.mapper");
let TripRepositoryImpl = class TripRepositoryImpl {
    orm;
    constructor(orm) {
        this.orm = orm;
    }
    async save(trip) {
        await this.orm.save(trip_mapper_1.TripMapper.toModel(trip));
    }
    async update(trip) {
        await this.orm.save(trip_mapper_1.TripMapper.toModel(trip));
    }
    async findById(id) {
        const model = await this.orm.findOneBy({ id });
        return model ? trip_mapper_1.TripMapper.toDomain(model) : null;
    }
    async findActiveTrips() {
        const models = await this.orm.findBy([
            { status: 'requested' },
            { status: 'assigned' },
            { status: 'started' },
        ]);
        return models.map(trip_mapper_1.TripMapper.toDomain);
    }
};
exports.TripRepositoryImpl = TripRepositoryImpl;
exports.TripRepositoryImpl = TripRepositoryImpl = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(trip_model_1.TripModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TripRepositoryImpl);
//# sourceMappingURL=trip.repository.impl.js.map