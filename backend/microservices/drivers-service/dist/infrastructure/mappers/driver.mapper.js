"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverMapper = void 0;
const driver_model_1 = require("../persistence/driver.model");
const driver_entity_1 = require("../../domain/entities/driver.entity");
class DriverMapper {
    static toModel(domain) {
        const model = new driver_model_1.DriverModel();
        model.id = domain.id;
        model.name = domain.name;
        model.phone = domain.phone;
        model.email = domain.email;
        model.status = domain.status;
        return model;
    }
    static toDomain(model) {
        return new driver_entity_1.Driver(model.id, model.name, model.phone, model.email, model.status);
    }
}
exports.DriverMapper = DriverMapper;
//# sourceMappingURL=driver.mapper.js.map