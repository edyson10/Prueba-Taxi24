"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassengerMapper = void 0;
const passenger_entity_1 = require("../../domain/entities/passenger.entity");
const passenger_model_1 = require("../persistence/passenger.model");
class PassengerMapper {
    static toDomain(entity) {
        return new passenger_entity_1.Passenger(entity.id, entity.name, entity.phone, entity.email);
    }
    static toOrm(passenger) {
        const orm = new passenger_model_1.PassengerOrmEntity();
        orm.id = passenger.id;
        orm.name = passenger.name;
        orm.phone = passenger.phone;
        orm.email = passenger.email;
        return orm;
    }
}
exports.PassengerMapper = PassengerMapper;
//# sourceMappingURL=passenger.mapper.js.map