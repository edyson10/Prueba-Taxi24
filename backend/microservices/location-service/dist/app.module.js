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
const database_config_1 = require("./config/database.config");
const seeder_service_1 = require("./shared/seeder/seeder.service");
const location_model_1 = require("./infrastructure/persistence/location.model");
const location_repository_impl_1 = require("./infrastructure/persistence/location.repository.impl");
const location_repository_1 = require("./domain/repositories/location.repository");
const location_controller_1 = require("./infrastructure/http/controllers/location.controller");
const update_location_use_case_1 = require("./application/use-cases/update-location.use-case");
const get_current_location_use_case_1 = require("./application/use-cases/get-current-location.use-case");
const get_all_current_locations_use_case_1 = require("./application/use-cases/get-all-current-locations.use-case");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            typeorm_1.TypeOrmModule.forRoot(database_config_1.databaseConfig),
            typeorm_1.TypeOrmModule.forFeature([location_model_1.LocationModel]),
        ],
        controllers: [location_controller_1.LocationController],
        providers: [
            seeder_service_1.SeederService,
            update_location_use_case_1.UpdateLocationUseCase,
            get_current_location_use_case_1.GetCurrentLocationUseCase,
            get_all_current_locations_use_case_1.GetAllCurrentLocationsUseCase,
            {
                provide: location_repository_1.LOCATION_REPOSITORY,
                useClass: location_repository_impl_1.LocationRepositoryImpl,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map