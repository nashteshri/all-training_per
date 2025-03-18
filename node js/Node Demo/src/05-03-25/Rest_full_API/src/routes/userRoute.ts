const express = require("express");
import {Router} from "express";
import { userController1 } from "../controller/userController";
const router: Router = Router();
router.get("/", userController1.getAllUsers);

export default router;