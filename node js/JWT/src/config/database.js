"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.poolPromise = void 0;
const mssql_1 = require("mssql");
const config = {
    user: "j2",
    password: "123456",
    server: "dev.c5owyuw64shd.ap-south-1.rds.amazonaws.com",
    port: 1982,
    database: "JIBE_Main_Training",
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};
const poolPromise = new mssql_1.ConnectionPool(config)
    .connect()
    .then(pool => {
    console.log("Connected to SQL Server");
    return pool;
})
    .catch(err => {
    console.error("DB connection failed", err);
    return null; // Ensure a consistent return type
});
exports.poolPromise = poolPromise;
