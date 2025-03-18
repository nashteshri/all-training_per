"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var dotenv = require("dotenv");
dotenv.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mssql", // Using SQL Server
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true, // Auto-create tables (for development)
    logging: true,
    //entities: ["src/entities/employee.ts"], // Path to entity files
    options: {
        encrypt: false, // Disable SSL for local development
        enableArithAbort: true
    }
});
