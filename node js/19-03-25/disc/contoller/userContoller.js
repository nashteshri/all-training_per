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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const userservice_1 = require("../services/userservice");
const userService = new userservice_1.userservice();
class userController {
    static getUserWithPosts(arg0, getUserWithPosts) {
        throw new Error("Method not implemented.");
    }
    static createUserWithPosts(arg0, createUserWithPosts) {
        throw new Error("Method not implemented.");
    }
    static getAllUsernamesAndBios(arg0, getAllUsernamesAndBios) {
        throw new Error("Method not implemented.");
    }
    createUserWithPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, email, posts } = req.body; // Expect posts array
                const user = yield userService.createUserWithPosts(username, email, posts);
                res.status(201).json(user);
            }
            catch (error) {
                res.status(500).json({ message: "Error creating user with posts" });
            }
        });
    }
    getUserWithPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const user = yield userService.getUserWithPosts(Number(id));
                if (!user) {
                    res.status(404).json({ message: "User not found" });
                    return;
                }
                res.status(200).json(user);
            }
            catch (error) {
                res.status(500).json({ message: "Error fetching user with posts" });
            }
        });
    }
}
exports.userController = userController;
_a = userController;
userController.createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, bio } = req.body; // Retrieve the `name` and `bio` fields from request body
        const user = yield userService.createUser(username, email, bio); // Pass the fields to the service
        res.status(201).json(user); // Return the created user in the response
    }
    catch (error) {
        res.status(500).json({ message: "Error creating user" });
    }
});
