"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationMapper = void 0;
const location_entity_1 = require("../../domain/entities/location.entity");
const location_model_1 = require("../persistence/location.model");
class LocationMapper {
    static toModel(domain) {
        const model = new location_model_1.LocationModel();
        model.id = domain.id;
        model.driverId = domain.driverId;
        model.latitude = domain.latitude;
        model.longitude = domain.longitude;
        model.timestamp = domain.timestamp;
        return model;
    }
    static toDomain(model) {
        return new location_entity_1.Location(model.id, model.driverId, model.latitude, model.longitude, model.timestamp);
    }
}
exports.LocationMapper = LocationMapper;
//# sourceMappingURL=location.mapper.js.map