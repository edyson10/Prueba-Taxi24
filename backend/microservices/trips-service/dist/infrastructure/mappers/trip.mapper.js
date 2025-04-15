"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripMapper = void 0;
const trip_model_1 = require("../persistence/trip.model");
const trip_entity_1 = require("../../domain/entities/trip.entity");
class TripMapper {
    static toModel(domain) {
        const model = new trip_model_1.TripModel();
        model.id = domain.id;
        model.passengerId = domain.passengerId;
        model.driverId = domain.driverId;
        model.origin = domain.origin;
        model.destination = domain.destination;
        model.status = domain.status;
        model.startTime = domain.startTime;
        model.endTime = domain.endTime;
        model.price = domain.price;
        return model;
    }
    static toDomain(model) {
        return new trip_entity_1.Trip(model.id, model.passengerId, model.driverId, model.origin, model.destination, model.status, model.startTime, model.endTime, model.price);
    }
}
exports.TripMapper = TripMapper;
//# sourceMappingURL=trip.mapper.js.map