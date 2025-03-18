"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./database/database");
const employee_1 = require("./entities/employee");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
// Initialize Database
database_1.AppDataSource.initialize()
    .then(() => {
    console.log("Database connected successfully!");
    const employeeRepository = database_1.AppDataSource.getRepository(employee_1.employee);
    // CREATE Employee
    app.post("/employees", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { name, email, position, salary } = req.body;
        const newEmployee = employeeRepository.create({ name, email, position, salary });
        yield employeeRepository.save(newEmployee);
        res.status(201).json(newEmployee);
    }));
    // READ All Employees
    app.get("/employees", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const employees = yield employeeRepository.find();
        res.status(200).json(employees);
    }));
    // READ Employee By ID
    app.get("/employees/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const employee = yield employeeRepository.findOneBy({ id: parseInt(id) });
        if (employee) {
            res.status(200).json(employee);
        }
        else {
            res.status(404).json({ message: "Employee not found" });
        }
    }));
    // UPDATE Employee
    app.put("/employees/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const { name, email, position, salary } = req.body;
        yield employeeRepository.update(parseInt(id), { name, email, position, salary });
        res.status(200).json({ message: "Employee updated successfully" });
    }));
    // DELETE Employee
    app.delete("/employees/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        yield employeeRepository.delete(parseInt(id));
        res.status(200).json({ message: "Employee deleted successfully" });
    }));
    // Start Server
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
    .catch((error) => console.error("Error connecting to the database:", error));
