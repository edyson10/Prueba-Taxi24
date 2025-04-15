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
exports.CreateTripDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const coordinates_dto_1 = require("./coordinates.dto");
class CreateTripDto {
    passengerId;
    origin;
    destination;
}
exports.CreateTripDto = CreateTripDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'UUID del Pasajero',
        example: 'uuid1a2b3c4d5e6f7g8h9ij10k11',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTripDto.prototype, "passengerId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Coordenada de ubicacion del pasajero',
        example: { lat: 11.11, lon: 22.22 },
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => coordinates_dto_1.CoordinatesDto),
    __metadata("design:type", coordinates_dto_1.CoordinatesDto)
], CreateTripDto.prototype, "origin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Destino de solicitud de viaje',
        example: 'Aeropuerto',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTripDto.prototype, "destination", void 0);
//# sourceMappingURL=create-trip.dto.js.map