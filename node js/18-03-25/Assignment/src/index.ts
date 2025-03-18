import express from "express";
import { EmployeeController } from "./controller/EmployeeController";
import { AppDataSource } from "./database/database";

const app = express();
app.use(express.json());

const PORT = 3000;

const employeeController = new EmployeeController();

app.post("/employees", employeeController.createEmployee.bind(employeeController));
app.get("/employees", employeeController.getAllEmployees.bind(employeeController));
app.get("/employees/:id", employeeController.getEmployeeById.bind(employeeController));
app.put("/employees/:id", employeeController.updateEmployee.bind(employeeController));
app.delete("/employees/:id", employeeController.deleteEmployee.bind(employeeController));

AppDataSource.initialize()
    .then(() => {
        console.log("Database connected successfully");
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => console.error("Error connecting to the database:", err));
