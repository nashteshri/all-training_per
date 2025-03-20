import { AppDataSource } from "./config/data-source";
import express from 'express';
import router from "./routes/userRoutes";
import userRoutes from "./routes/userRoutes";

const app=express();
const PORT = process.env.port || 3000;

app.use(express.json());
app.use("/user",userRoutes);

AppDataSource.initialize()
.then(()=>console.log("connected Sucessfully"))
.catch((error)=>console.log("error occured",error))
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});