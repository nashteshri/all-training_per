"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userContoller_1 = require("../contoller/userContoller");
const router = (0, express_1.Router)();
const UserController = new userContoller_1.userController();
router.post("/create", userContoller_1.userController.createUser);
router.post("/create-with-posts", userContoller_1.userController.createUserWithPosts);
router.get("/:id/posts", userContoller_1.userController.getUserWithPosts);
exports.default = router;
