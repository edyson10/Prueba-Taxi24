"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Driver = void 0;
const driver_status_vo_1 = require("../value-objects/driver-status.vo");
class Driver {
    id;
    name;
    phone;
    email;
    status;
    constructor(id, name, phone, email, status = driver_status_vo_1.DriverStatus.AVAILABLE) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.status = status;
    }
    changeStatus(newStatus) {
        this.status = newStatus;
    }
}
exports.Driver = Driver;
//# sourceMappingURL=driver.entity.js.map