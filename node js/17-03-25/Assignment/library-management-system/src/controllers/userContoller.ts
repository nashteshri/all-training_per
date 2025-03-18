import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { poolPromise } from "../config/database";
require("dotenv").config();

// User Registration
export async function registerUser(req: Request, res: Response): Promise<void> {
    try {
        const { username, password, role } = req.body;

        // Validate input data
        if (!username || !password || !role) {
            res.status(400).json({ message: "All fields are required: username, password, and role." });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10); // Encrypt the password

        const pool = await poolPromise;
        if (!pool) {
            res.status(500).json({ message: "Database connection failed." });
            return;
        }

        // Insert user into the database
        await pool.request()
            .input("username", username)
            .input("password", hashedPassword)
            .input("role", role)
            .query(`INSERT INTO User_main (username, password, role) VALUES (@username, @password, @role)`);

        res.status(201).json({ message: "User Registered Successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error registering user.", error });
    }
}

// User Login
export async function loginUser(req: Request, res: Response): Promise<void> {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            res.status(400).json({ message: "Username and password are required." });
            return;
        }

        const pool = await poolPromise;
        if (!pool) {
            res.status(500).json({ message: "Database connection failed." });
            return;
        }

        // Fetch user from the database
        const result = await pool.request()
            .input("username", username)
            .query(`SELECT * FROM User_main WHERE username = @username`);

        const user = result.recordset[0];
        if (!user || !(await bcrypt.compare(password, user.password))) {
            res.status(400).json({ message: "Invalid Username or Password." });
            return;
        }

        // Generate JWT token
        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            throw new Error("JWT_SECRET is not defined in the environment variables.");
        }

        const token = jwt.sign({ id: user.id, role: user.role }, jwtSecret, { expiresIn: "1h" });

        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error logging in user.", error });
    }
}
