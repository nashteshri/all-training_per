import { post } from "../entities/post";
import { user } from "../entities/user";
import { postRepository } from "../repository/postRepository";
import { profileRepository } from "../repository/profileRepository";
import { userRepository } from "../repository/userRepository";

export class userservice{
    async createUser(username: string, bio: string, email: string):Promise <user>{
        const profile = profileRepository.create({bio});
        await profileRepository.save(profile);
        const user =userRepository.create({username,profile,email});
        return userRepository.save(user);
    }
    async createUserWithPosts(username: string, email: string, posts: { title: string; content: string }[]): Promise<user> {
        const user = userRepository.create({ username, email });

        // Create and link posts
        const postEntities = posts.map((post) => {
            return postRepository.create({ ...post, user });
        });

        user.post = postEntities; // Link posts to user
        return await userRepository.save(user); // Save user and related posts
    }

    async getUserWithPosts(userId: number): Promise<user | null> {
        return await userRepository.findOne({
            where: { id: userId },
            relations: ["posts"], // Fetch related posts
        });
    }
}
