import express from "express"
// const express = require('express');
import { loginUser,registerUser } from "../controllers/userContoller";
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
