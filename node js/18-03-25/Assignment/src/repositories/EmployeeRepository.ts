import { AppDataSource } from "../database/database";
import { Repository } from "typeorm";
import { employee } from "../entities/employee";

export class EmployeeRepository {
    private repository: Repository<employee>;

    constructor() {
        this.repository = AppDataSource.getRepository(employee);
    }

    async create(employee: Partial<employee>): Promise<employee> {
        const newEmployee = this.repository.create(employee);
        return await this.repository.save(newEmployee);
    }

    async findAll(): Promise<employee[]> {
        return await this.repository.find();
    }

    async findById(id: number): Promise<employee | null> {
        return await this.repository.findOneBy({ id });
    }

    async update(id: number, employee: Partial<employee>): Promise<void> {
        await this.repository.update(id, employee);
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}
