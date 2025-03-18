"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretKey = "secretkey";
const authenticateUser = (req, // Custom request type
res, next) => {
    // Corrected: Use req.headers.get("authorization") OR type assertion
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            error: "Access denied. No token provided."
        });
    }
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secretKey);
        req.user = decoded; // Attach decoded user to request
        next();
    }
    catch (error) {
        res.status(401).json({ error: "Invalid token." });
    }
};
exports.authenticateUser = authenticateUser;
