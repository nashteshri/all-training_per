import "refelect-metadata";
import {DataSource} from "typeorm";
import dotenv from "dotenv";
import student from "./student";

export const AppDataSource = new DataSource({
    type:"mssql",
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_NAME as string,
    port:Number(process.env.DB_NAME),
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
})