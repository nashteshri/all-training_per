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
exports.EmployeeRepository = void 0;
const database_1 = require("../database/database");
const employee_1 = require("../entities/employee");
class EmployeeRepository {
    constructor() {
        this.repository = database_1.AppDataSource.getRepository(employee_1.employee);
    }
    create(employee) {
        return __awaiter(this, void 0, void 0, function* () {
            const newEmployee = this.repository.create(employee);
            return yield this.repository.save(newEmployee);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.find();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findOneBy({ id });
        });
    }
    update(id, employee) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.update(id, employee);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.delete(id);
        });
    }
}
exports.EmployeeRepository = EmployeeRepository;
