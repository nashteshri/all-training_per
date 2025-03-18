"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var EmployeeController_1 = require("./controller/EmployeeController");
var database_1 = require("./database/database");
var app = (0, express_1.default)();
app.use(express_1.default.json());
var PORT = 3000;
var employeeController = new EmployeeController_1.EmployeeController();
app.post("/employees", employeeController.createEmployee.bind(employeeController));
app.get("/employees", employeeController.getAllEmployees.bind(employeeController));
app.get("/employees/:id", employeeController.getEmployeeById.bind(employeeController));
app.put("/employees/:id", employeeController.updateEmployee.bind(employeeController));
app.delete("/employees/:id", employeeController.deleteEmployee.bind(employeeController));
database_1.AppDataSource.initialize()
    .then(function () {
    console.log("Database connected successfully");
    app.listen(PORT, function () { return console.log("Server running on port ".concat(PORT)); });
})
    .catch(function (err) { return console.error("Error connecting to the database:", err); });
