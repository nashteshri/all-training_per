import "reflect-metadata";
import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
dotenv.config();
export const AppDataSource = new DataSource({
    type: "mssql", // Using SQL Server
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD ,
    database: process.env.DB_NAME ,
    synchronize: true, // Auto-create tables (for development)
    logging: true,
    //entities: ["src/entities/employee.ts"], // Path to entity files
    options: {
        encrypt: false, // Disable SSL for local development
        enableArithAbort: true
    }
});
