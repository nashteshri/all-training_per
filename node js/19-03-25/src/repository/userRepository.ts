import { AppDataSource } from "../config/data-source";
import { user } from "../entities/user";

export const userRepository=AppDataSource.getRepository(user)