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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeController = void 0;
const EmployeeService_1 = require("../services/EmployeeService");
class EmployeeController {
    constructor() {
        this.employeeService = new EmployeeService_1.EmployeeService();
    }
    createEmployee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const employee = yield this.employeeService.createEmployee(req.body);
            res.status(201).json(employee);
        });
    }
    getAllEmployees(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const employees = yield this.employeeService.getAllEmployees();
            res.status(200).json(employees);
        });
    }
    getEmployeeById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const employee = yield this.employeeService.getEmployeeById(parseInt(id));
            if (employee) {
                res.status(200).json(employee);
            }
            else {
                res.status(404).json({ message: "Employee not found" });
            }
        });
    }
    updateEmployee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield this.employeeService.updateEmployee(parseInt(id), req.body);
            res.status(200).json({ message: "Employee updated successfully" });
        });
    }
    deleteEmployee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield this.employeeService.deleteEmployee(parseInt(id));
            res.status(200).json({ message: "Employee deleted successfully" });
        });
    }
}
exports.EmployeeController = EmployeeController;
