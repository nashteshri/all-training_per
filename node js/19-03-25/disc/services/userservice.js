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
exports.userservice = void 0;
const postRepository_1 = require("../repository/postRepository");
const profileRepository_1 = require("../repository/profileRepository");
const userRepository_1 = require("../repository/userRepository");
class userservice {
    createUser(username, bio, email) {
        return __awaiter(this, void 0, void 0, function* () {
            const profile = profileRepository_1.profileRepository.create({ bio });
            yield profileRepository_1.profileRepository.save(profile);
            const user = userRepository_1.userRepository.create({ username, profile, email });
            return userRepository_1.userRepository.save(user);
        });
    }
    createUserWithPosts(username, email, posts) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = userRepository_1.userRepository.create({ username, email });
            // Create and link posts
            const postEntities = posts.map((post) => {
                return postRepository_1.postRepository.create(Object.assign(Object.assign({}, post), { user }));
            });
            user.post = postEntities; // Link posts to user
            return yield userRepository_1.userRepository.save(user); // Save user and related posts
        });
    }
    getUserWithPosts(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield userRepository_1.userRepository.findOne({
                where: { id: userId },
                relations: ["posts"], // Fetch related posts
            });
        });
    }
}
exports.userservice = userservice;
