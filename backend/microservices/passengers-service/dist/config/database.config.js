"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
const passenger_model_1 = require("../infrastructure/persistence/passenger.model");
exports.databaseConfig = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT || '5432'),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.PSG_POSTGRES_DB,
    entities: [passenger_model_1.PassengerOrmEntity],
    synchronize: true,
};
//# sourceMappingURL=database.config.js.map