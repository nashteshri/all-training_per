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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = registerUser;
exports.loginUser = loginUser;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const database_1 = require("../config/database");
require("dotenv").config();
// User Registration
function registerUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { username, password, role } = req.body;
            // Validate input data
            if (!username || !password || !role) {
                res.status(400).json({ message: "All fields are required: username, password, and role." });
                return;
            }
            const hashedPassword = yield bcryptjs_1.default.hash(password, 10); // Encrypt the password
            const pool = yield database_1.poolPromise;
            if (!pool) {
                res.status(500).json({ message: "Database connection failed." });
                return;
            }
            // Insert user into the database
            yield pool.request()
                .input("username", username)
                .input("password", hashedPassword)
                .input("role", role)
                .query(`INSERT INTO User_main (username, password, role) VALUES (@username, @password, @role)`);
            res.status(201).json({ message: "User Registered Successfully." });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error registering user.", error });
        }
    });
}
// User Login
function loginUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { username, password } = req.body;
            if (!username || !password) {
                res.status(400).json({ message: "Username and password are required." });
                return;
            }
            const pool = yield database_1.poolPromise;
            if (!pool) {
                res.status(500).json({ message: "Database connection failed." });
                return;
            }
            // Fetch user from the database
            const result = yield pool.request()
                .input("username", username)
                .query(`SELECT * FROM User_main WHERE username = @username`);
            const user = result.recordset[0];
            if (!user || !(yield bcryptjs_1.default.compare(password, user.password))) {
                res.status(400).json({ message: "Invalid Username or Password." });
                return;
            }
            // Generate JWT token
            const jwtSecret = process.env.JWT_SECRET;
            if (!jwtSecret) {
                throw new Error("JWT_SECRET is not defined in the environment variables.");
            }
            const token = jsonwebtoken_1.default.sign({ id: user.id, role: user.role }, jwtSecret, { expiresIn: "1h" });
            res.status(200).json({ token });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error logging in user.", error });
        }
    });
}
