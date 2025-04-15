"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
const trip_model_1 = require("../infrastructure/persistence/trip.model");
const dotenv = require("dotenv");
dotenv.config();
exports.databaseConfig = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.TRP_POSTGRES_DB,
    entities: [trip_model_1.TripModel],
    synchronize: true,
};
//# sourceMappingURL=database.config.js.map