import { ConnectionPool, config as SqlConfig } from 'mssql';

const config: SqlConfig = {
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

const poolPromise = new ConnectionPool(config)
    .connect()
    .then(pool => { 
        console.log("Connected to SQL Server");
        return pool;
    })
    .catch(err => {
        console.error("DB connection failed", err);
        return null; // Ensure a consistent return type
    });

export { poolPromise };
