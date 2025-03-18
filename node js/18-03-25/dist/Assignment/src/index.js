"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const EmployeeController_1 = require("./controller/EmployeeController");
const database_1 = require("./database/database");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
const employeeController = new EmployeeController_1.EmployeeController();
app.post("/employees", employeeController.createEmployee.bind(employeeController));
app.get("/employees", employeeController.getAllEmployees.bind(employeeController));
app.get("/employees/:id", employeeController.getEmployeeById.bind(employeeController));
app.put("/employees/:id", employeeController.updateEmployee.bind(employeeController));
app.delete("/employees/:id", employeeController.deleteEmployee.bind(employeeController));
database_1.AppDataSource.initialize()
    .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
    .catch((err) => console.error("Error connecting to the database:", err));
