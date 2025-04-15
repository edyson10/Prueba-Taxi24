"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfrastructureModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const typeorm_1 = require("@nestjs/typeorm");
const passenger_model_1 = require("./persistence/passenger.model");
const passenger_repository_impl_1 = require("./persistence/passenger.repository.impl");
const driver_http_service_1 = require("./http/services/driver-http.service");
let InfrastructureModule = class InfrastructureModule {
};
exports.InfrastructureModule = InfrastructureModule;
exports.InfrastructureModule = InfrastructureModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            typeorm_1.TypeOrmModule.forFeature([passenger_model_1.PassengerOrmEntity])
        ],
        providers: [
            driver_http_service_1.DriverHttpService,
            {
                provide: 'PassengerDbPort',
                useClass: passenger_repository_impl_1.TypeOrmPassengerRepository,
            },
        ],
        exports: ['PassengerDbPort', driver_http_service_1.DriverHttpService],
    })
], InfrastructureModule);
//# sourceMappingURL=infrastructure.module.js.map