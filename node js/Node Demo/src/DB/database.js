const sql = require("mssql");
const config={
    user:"j2",
    password:"123456",
    server:"dev.c5owyuw64shd.ap-south-1.rds.amazonaws.com",
    port:1982,
    database:"JIBE_Main_Training",
    options:{
        encrypt:false,
        trustserverCertificater:true
    }
}

const poolPromise = new sql.ConnectionPool(config)
.connect()
.then(pool=>{
    console.log("connected to sq server");
    return pool;
}).catch(err=>console.error("databaseconnection failed ",err));
    module.exports={sql,poolPromise};
