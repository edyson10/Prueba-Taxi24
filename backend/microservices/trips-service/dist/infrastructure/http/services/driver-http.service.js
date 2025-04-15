"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverHttpService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let DriverHttpService = class DriverHttpService {
    http;
    constructor(http) {
        this.http = http;
    }
    async getDriver(driverId) {
        const response$ = this.http.get(`http://drivers-service:3001/drivers/${driverId}`);
        const response = await (0, rxjs_1.lastValueFrom)(response$);
        return response.data;
    }
    async updateDriverStatus(driverId, status) {
        await (0, rxjs_1.lastValueFrom)(this.http.put(`http://drivers-service:3001/drivers/${driverId}/status`, {
            status,
        }));
    }
    async getNearbyDrivers(lat, lon) {
        const res$ = this.http.get(`http://drivers-service:3001/drivers/nearby`, {
            params: { lat, lon }
        });
        const response = await (0, rxjs_1.lastValueFrom)(res$);
        return response.data;
    }
    async markDriverAsOnTrip(driverId) {
        await (0, rxjs_1.lastValueFrom)(this.http.put(`http://drivers-service:3001/drivers/${driverId}/status`, {
            status: 'on_trip'
        }));
    }
};
exports.DriverHttpService = DriverHttpService;
exports.DriverHttpService = DriverHttpService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], DriverHttpService);
//# sourceMappingURL=driver-http.service.js.map