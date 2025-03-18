import sql from "mssql"
import dotenv from 'dotenv'

dotenv.config()

const config = {
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    server: process.env.DB_SERVER as string,
    database: process.env.DB_NAME as string,
    port:1982,
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};
const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then((pool: any) => {
        console.log("connected to SQL Server");
        return pool;
    })
    .catch((err: any) => console.error("Database Connection Failed", err));

export { sql,poolPromise };


