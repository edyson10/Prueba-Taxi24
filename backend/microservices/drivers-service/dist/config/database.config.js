"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
const driver_model_1 = require("../infrastructure/persistence/driver.model");
const dotenv = require("dotenv");
dotenv.config();
exports.databaseConfig = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.DRV_POSTGRES_DB,
    entities: [driver_model_1.DriverModel],
    synchronize: true,
};
//# sourceMappingURL=database.config.js.map