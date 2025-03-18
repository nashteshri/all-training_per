import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { AuthRequest } from "../types/authRequest";
const secretKey = "secretkey";
export const authenticateUser = (
    req: AuthRequest, // Custom request type
    res: Response,
    next: NextFunction
) => {
    // Corrected: Use req.headers.get("authorization") OR type assertion
    const authHeader = (req.headers as unknown as Record<string,
        string>)["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            error: "Access denied. No token provided."
        });
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded; // Attach decoded user to request
        next();
    } catch (error) {
        res.status(401).json({ error: "Invalid token." });
    }
};