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
const infrastructure_module_1 = require("./infrastructure/infrastructure.module");
const driver_controller_1 = require("./infrastructure/http/controllers/driver.controller");
const seeder_service_1 = require("./shared/seeder/seeder.service");
const location_http_service_1 = require("./infrastructure/http/services/location-http.service");
const create_driver_use_case_1 = require("./application/use-cases/create-driver.use-case");
const find_driver_by_id_use_case_1 = require("./application/use-cases/find-driver-by-id.use-case");
const update_driver_status_use_case_1 = require("./application/use-cases/update-driver-status.use-case");
const report_location_use_case_1 = require("./application/use-cases/report-location.use-case");
const get_all_drivers_use_case_1 = require("./application/use-cases/get-all-drivers.use-case");
const get_available_drivers_use_case_1 = require("./application/use-cases/get-available-drivers.use-case");
const get_nearby_drivers_use_case_1 = require("./application/use-cases/get-nearby-drivers.use-case");
const database_config_1 = require("./config/database.config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            typeorm_1.TypeOrmModule.forRoot(database_config_1.databaseConfig),
            infrastructure_module_1.InfrastructureModule,
        ],
        controllers: [driver_controller_1.DriverController],
        providers: [
            seeder_service_1.SeederService,
            create_driver_use_case_1.CreateDriverUseCase,
            find_driver_by_id_use_case_1.FindDriverByIdUseCase,
            update_driver_status_use_case_1.UpdateDriverStatusUseCase,
            report_location_use_case_1.ReportLocationUseCase,
            get_all_drivers_use_case_1.GetAllDriversUseCase,
            get_available_drivers_use_case_1.GetAvailableDriversUseCase,
            get_nearby_drivers_use_case_1.GetNearbyDriversUseCase,
            location_http_service_1.LocationHttpService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map