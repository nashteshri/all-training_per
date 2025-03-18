// const express = require('express');
// const { addBook, updateBook, deleteBook, searchBooks } = require('../controllers/bookController');
// const { authenticateToken, authorizeRoles } = require('../middleware/auth');
import express from "express"
import { addBook,updateBook,deleteBook,searchBooks } from "../controllers/bookController";
import { authenticateToken, authorizeRoles } from "../middleware/auth";
const router = express.Router();

router.post('/add', authenticateToken, authorizeRoles(['Admin']), addBook);
router.put('/update/:id', authenticateToken, authorizeRoles(['Admin']), updateBook);
router.delete('/delete/:id', authenticateToken, authorizeRoles(['Admin']), deleteBook);
router.get('/search', authenticateToken, authorizeRoles(['Student', 'Admin']), searchBooks);

module.exports = router;