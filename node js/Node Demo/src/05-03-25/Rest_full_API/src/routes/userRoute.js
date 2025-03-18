"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const express_1 = require("express");
const userController_1 = require("../controller/userController");
const router = (0, express_1.Router)();
router.get("/", userController_1.userController1.getAllUsers);
exports.default = router;
