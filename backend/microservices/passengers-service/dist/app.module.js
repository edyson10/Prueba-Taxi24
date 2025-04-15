"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const typeorm_1 = require("@nestjs/typeorm");
const seeder_service_1 = require("./shared/seeder/seeder.service");
const create_passenger_use_case_1 = require("./application/use-cases/create-passenger.use-case");
const find_passenger_by_id_use_case_1 = require("./application/use-cases/find-passenger-by-id.use-case");
const passenger_controller_1 = require("./infrastructure/http/controllers/passenger.controller");
const get_all_passengers_use_case_1 = require("./application/use-cases/get-all-passengers.use-case");
const driver_http_service_1 = require("./infrastructure/http/services/driver-http.service");
const get_nearest_drivers_use_case_1 = require("./application/use-cases/get-nearest-drivers.use-case");
const infrastructure_module_1 = require("./infrastructure/infrastructure.module");
const database_config_1 = require("./config/database.config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            typeorm_1.TypeOrmModule.forRoot(database_config_1.databaseConfig),
            infrastructure_module_1.InfrastructureModule
        ],
        controllers: [passenger_controller_1.PassengerController],
        providers: [
            seeder_service_1.SeederService,
            create_passenger_use_case_1.CreatePassengerUseCase,
            find_passenger_by_id_use_case_1.FindPassengerByIdUseCase,
            get_all_passengers_use_case_1.GetAllPassengersUseCase,
            driver_http_service_1.DriverHttpService,
            get_nearest_drivers_use_case_1.GetNearestDriversUseCase
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map