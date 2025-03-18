import { EmployeeController } from "./controllers/EmployeeControllers";
import { AppDataSource } from "./database/data-source";
const express=require("express")
import "reflect-metadata";

const app = express();
app.use(express.json());

const PORT = 3300;

app.listen(PORT, ()=> {
    console.log("Server running on http://localhost:3300");
    
})

const employeeController = new EmployeeController();

app.post("/employees", employeeController.createEmployee.bind(employeeController));
app.get("/employees", employeeController.getAllEmployees.bind(employeeController));
app.get("/employees/:id", employeeController.getEmployeeById.bind(employeeController));
app.put("/employees/:id", employeeController.updateEmployee.bind(employeeController));
app.delete("/employees/:id", employeeController.deleteEmployee.bind(employeeController));

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected successfully");
        return AppDataSource;
    })
    .catch((err) => console.error("Error connecting to the database:", err));

console.log("app")
