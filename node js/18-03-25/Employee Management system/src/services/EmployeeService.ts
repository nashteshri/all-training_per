import { Employee } from "../entities/Employee";
import { EmployeeRepository } from "../repositories/EmployeeRepository";

export class EmployeeService {
    private employeeRepository: EmployeeRepository;

    constructor() {
        this.employeeRepository = new EmployeeRepository();
    }

    async createEmployee(data: Partial<Employee>): Promise<Employee> {
        return await this.employeeRepository.create(data);
    }

    async getAllEmployees(): Promise<Employee[]> {
        return await this.employeeRepository.findAll();
    }

    async getEmployeeById(id: number): Promise<Employee | null> {
        return await this.employeeRepository.findById(id);
    }

    async updateEmployee(id: number, data: Partial<Employee>): Promise<void> {
        await this.employeeRepository.update(id, data);
    }

    async deleteEmployee(id: number): Promise<void> {
        await this.employeeRepository.delete(id);
    }
}
