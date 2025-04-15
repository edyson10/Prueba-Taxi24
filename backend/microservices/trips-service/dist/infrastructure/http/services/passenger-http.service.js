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
exports.PassengerHttpService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let PassengerHttpService = class PassengerHttpService {
    http;
    constructor(http) {
        this.http = http;
    }
    async getPassenger(id) {
        try {
            const response$ = this.http.get(`http://passengers-service:3002/passengers/${id}`);
            const response = await (0, rxjs_1.lastValueFrom)(response$);
            return response.data;
        }
        catch (error) {
            if (error.response?.status === 404) {
                throw new common_1.NotFoundException(`Passenger ${id} not found`);
            }
            throw error;
        }
    }
};
exports.PassengerHttpService = PassengerHttpService;
exports.PassengerHttpService = PassengerHttpService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], PassengerHttpService);
//# sourceMappingURL=passenger-http.service.js.map