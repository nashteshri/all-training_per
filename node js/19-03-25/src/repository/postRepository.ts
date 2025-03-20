import { AppDataSource } from "../config/data-source";
import { post } from "../entities/post";

export const postRepository=AppDataSource.getRepository(post)