import { userservice } from "../services/userservice";
import { Request, Response } from "express";

const userService = new userservice();

export class userController {
    static getUserWithPosts(arg0: string, getUserWithPosts: any) {
        throw new Error("Method not implemented.");
    }
    static createUserWithPosts(arg0: string, createUserWithPosts: any) {
        throw new Error("Method not implemented.");
    }
    static getAllUsernamesAndBios(arg0: string, getAllUsernamesAndBios: any) {
        throw new Error("Method not implemented.");
    }
    
    static createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const { username,email,bio } = req.body; // Retrieve the `name` and `bio` fields from request body
            const user = await userService.createUser(username, email, bio); // Pass the fields to the service
            res.status(201).json(user); // Return the created user in the response
        } catch (error) {
            res.status(500).json({ message: "Error creating user"});
        }
    };
    async createUserWithPosts(req: Request, res: Response): Promise<void> {
        try {
            const { username, email, posts } = req.body; // Expect posts array
            const user = await userService.createUserWithPosts(username, email, posts);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ message: "Error creating user with posts"});
        }
    }

    async getUserWithPosts(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const user = await userService.getUserWithPosts(Number(id));
            if (!user) {
                res.status(404).json({ message: "User not found" });
                return;
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: "Error fetching user with posts" });
        }
    }
}