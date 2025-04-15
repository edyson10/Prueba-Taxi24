"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const database_config_1 = require("./config/database.config");
const trip_model_1 = require("./infrastructure/persistence/trip.model");
const create_trip_use_case_1 = require("./application/use-cases/create-trip.use-case");
const trip_controller_1 = require("./infrastructure/http/controllers/trip.controller");
const assign_driver_use_case_1 = require("./application/use-cases/assign-driver.use-case");
const start_trip_use_case_1 = require("./application/use-cases/start-trip.use-case");
const complete_trip_use_case_1 = require("./application/use-cases/complete-trip.use-case");
const passenger_http_service_1 = require("./infrastructure/http/services/passenger-http.service");
const driver_http_service_1 = require("./infrastructure/http/services/driver-http.service");
const location_http_service_1 = require("./infrastructure/http/services/location-http.service");
const find_trip_by_id_use_case_1 = require("./application/use-cases/find-trip-by-id.use-case");
const find_active_trips_use_case_1 = require("./application/use-cases/find-active-trips.use-case");
const infrastructure_module_1 = require("./infrastructure/infrastructure.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            typeorm_1.TypeOrmModule.forRoot(database_config_1.databaseConfig),
            typeorm_1.TypeOrmModule.forFeature([trip_model_1.TripModel]),
            infrastructure_module_1.InfrastructureModule,
        ],
        controllers: [trip_controller_1.TripController],
        providers: [
            create_trip_use_case_1.CreateTripUseCase,
            find_active_trips_use_case_1.FindActiveTripsUseCase,
            assign_driver_use_case_1.AssignDriverUseCase,
            start_trip_use_case_1.StartTripUseCase,
            complete_trip_use_case_1.CompleteTripUseCase,
            driver_http_service_1.DriverHttpService,
            passenger_http_service_1.PassengerHttpService,
            location_http_service_1.LocationHttpService,
            find_trip_by_id_use_case_1.FindTripByIdUseCase,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map