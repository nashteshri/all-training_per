import { ConnectionPool } from "mssql";
const {poolPromise}=require("../cofig/db");
class userRespositories{
    async getAllUser(){
        const pool = await poolPromise;
        const result = await pool.request().query("select * from users");
        return result.recordset;
    }
}
export const userRespositories1=new userRespositories();

