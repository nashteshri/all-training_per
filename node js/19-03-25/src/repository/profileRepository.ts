import { AppDataSource } from "../config/data-source";
import { Profile } from "../entities/profile";

export const profileRepository=AppDataSource.getRepository(Profile)