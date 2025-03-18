import { AppDataSource } from "../database/data-source";
import { Repository } from "typeorm";
import { Employee } from "../entities/Employee";

export class EmployeeRepository {
    private repository: Repository<Employee>;

    constructor() {
        this.repository = AppDataSource.getRepository(Employee);
    }

    async create(employee: Partial<Employee>): Promise<Employee> {
        const newEmployee = this.repository.create(employee);
        return await this.repository.save(newEmployee);
    }

    async findAll(): Promise<Employee[]> {
        return await this.repository.find();
    }

    async findById(id: number): Promise<Employee | null> {
        return await this.repository.findOneBy({ id });
    }

    async update(id: number, employee: Partial<Employee>): Promise<void> {
        await this.repository.update(id, employee);
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}
