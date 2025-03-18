import { employee } from "../entities/employee";
import { EmployeeRepository } from "../repositories/EmployeeRepository";

export class EmployeeService {
    private employeeRepository: EmployeeRepository;

    constructor() {
        this.employeeRepository = new EmployeeRepository();
    }

    async createEmployee(data: Partial<employee>): Promise<employee> {
        return await this.employeeRepository.create(data);
    }

    async getAllEmployees(): Promise<employee[]> {
        return await this.employeeRepository.findAll();
    }

    async getEmployeeById(id: number): Promise<employee | null> {
        return await this.employeeRepository.findById(id);
    }

    async updateEmployee(id: number, data: Partial<employee>): Promise<void> {
        await this.employeeRepository.update(id, data);
    }

    async deleteEmployee(id: number): Promise<void> {
        await this.employeeRepository.delete(id);
    }
}
