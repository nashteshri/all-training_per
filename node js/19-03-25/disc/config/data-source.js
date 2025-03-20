"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const dotenv = __importStar(require("dotenv"));
const user_1 = require("../entities/user");
const profile_1 = require("../entities/profile");
dotenv.config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mssql", // Using SQL Server
    host: "dev.c5owyuw64shd.ap-south-1.rds.amazonaws.com",
    port: 1982,
    username: "j2",
    password: "123456",
    database: "JIBE_Main_Training",
    synchronize: true, // Auto-create tables (for development)
    logging: true,
    entities: [user_1.user, profile_1.Profile], // Path to entity files
    options: {
        encrypt: false, // Disable SSL for local development
        trustServerCertificate: true
    }
});
// export const AppDataSource = new DataSource({
//     type: "mssql", // Using SQL Server
//     host: ,
//     port: 1982,
//     username: "j2",
//     password: "123456",
//     database:"JIBE_Main_Training",
//     synchronize: true, // Auto-create tables (for development)
//     logging: true,
//     entities: [], // Path to entity files
//     options: {
//         encrypt: false, // Disable SSL for local development
//         trustServerCertificate: true
//     }
// });
