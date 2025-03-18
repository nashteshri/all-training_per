import { Request, Response } from "express";
import { EmployeeService } from "../services/EmployeeService";

export class EmployeeController {
    private employeeService: EmployeeService;

    constructor() {
        this.employeeService = new EmployeeService();
    }

    async createEmployee(req: Request, res: Response): Promise<void> {
        const employee = await this.employeeService.createEmployee(req.body);
        res.status(201).json(employee);
    }

    async getAllEmployees(_req: Request, res: Response): Promise<void> {
        const employees = await this.employeeService.getAllEmployees();
        res.status(200).json(employees);
    }

    async getEmployeeById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const employee = await this.employeeService.getEmployeeById(parseInt(id));
        if (employee) {
            res.status(200).json(employee);
        } else {
            res.status(404).json({ message: "Employee not found" });
        }
    }

    async updateEmployee(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await this.employeeService.updateEmployee(parseInt(id), req.body);
        res.status(200).json({ message: "Employee updated successfully" });
    }

    async deleteEmployee(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await this.employeeService.deleteEmployee(parseInt(id));
        res.status(200).json({ message: "Employee deleted successfully" });
    }
}
                                                                                                                                                                    