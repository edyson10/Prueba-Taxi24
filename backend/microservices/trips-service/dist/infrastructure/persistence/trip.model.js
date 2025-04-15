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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripModel = void 0;
const typeorm_1 = require("typeorm");
let TripModel = class TripModel {
    id;
    passengerId;
    driverId;
    origin;
    destination;
    status;
    startTime;
    endTime;
    price;
};
exports.TripModel = TripModel;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], TripModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TripModel.prototype, "passengerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], TripModel.prototype, "driverId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json' }),
    __metadata("design:type", Object)
], TripModel.prototype, "origin", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TripModel.prototype, "destination", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TripModel.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], TripModel.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], TripModel.prototype, "endTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'numeric', nullable: true }),
    __metadata("design:type", Number)
], TripModel.prototype, "price", void 0);
exports.TripModel = TripModel = __decorate([
    (0, typeorm_1.Entity)('trips')
], TripModel);
//# sourceMappingURL=trip.model.js.map