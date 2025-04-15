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
const typeorm_1 = require("@nestjs/typeorm");
const driver_model_1 = require("./persistence/driver.model");
const driver_repository_impl_1 = require("./persistence/driver.repository.impl");
const driver_repository_1 = require("../domain/repositories/driver.repository");
let InfrastructureModule = class InfrastructureModule {
};
exports.InfrastructureModule = InfrastructureModule;
exports.InfrastructureModule = InfrastructureModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([driver_model_1.DriverModel])],
        providers: [
            {
                provide: driver_repository_1.DRIVER_REPOSITORY,
                useClass: driver_repository_impl_1.DriverRepositoryImpl,
            },
        ],
        exports: [
            {
                provide: driver_repository_1.DRIVER_REPOSITORY,
                useClass: driver_repository_impl_1.DriverRepositoryImpl,
            },
            typeorm_1.TypeOrmModule,
        ],
    })
], InfrastructureModule);
//# sourceMappingURL=infrastructure.module.js.map