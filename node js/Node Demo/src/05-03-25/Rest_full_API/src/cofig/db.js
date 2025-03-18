"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sql = exports.poolPromise = void 0;
const sql = require('mssql');
exports.sql = sql;
const config = {
    user: "j2",
    password: "123456",
    server: "dev.c5owyuw64shd.ap-south-1.rds.amazonaws.com",
    port: 1982,
    database: "JIBE_Main_Training",
    options: {
        encrypt: false,
        trustserverCertificater: true
    }
};
exports.poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
    console.log("connected to SQL Server");
    return pool;
})
    .catch(err => console.error("Database Connection Failed", err));
