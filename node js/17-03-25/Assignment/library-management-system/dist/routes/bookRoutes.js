"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express');
// const { addBook, updateBook, deleteBook, searchBooks } = require('../controllers/bookController');
// const { authenticateToken, authorizeRoles } = require('../middleware/auth');
const express_1 = __importDefault(require("express"));
const bookController_1 = require("../controllers/bookController");
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
router.post('/add', auth_1.authenticateToken, (0, auth_1.authorizeRoles)(['Admin']), bookController_1.addBook);
router.put('/update/:id', auth_1.authenticateToken, (0, auth_1.authorizeRoles)(['Admin']), bookController_1.updateBook);
router.delete('/delete/:id', auth_1.authenticateToken, (0, auth_1.authorizeRoles)(['Admin']), bookController_1.deleteBook);
router.get('/search', auth_1.authenticateToken, (0, auth_1.authorizeRoles)(['Student', 'Admin']), bookController_1.searchBooks);
module.exports = router;
