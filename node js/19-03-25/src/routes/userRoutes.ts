import { Router } from "express";
import { userController } from "../contoller/userContoller";

const router = Router();
const UserController = new userController();

router.post("/create",userController.createUser);
router.post("/create-with-posts", userController.createUserWithPosts);
router.get("/:id/posts", userController.getUserWithPosts);
export default router;