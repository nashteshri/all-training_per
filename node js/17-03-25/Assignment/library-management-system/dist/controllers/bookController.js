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
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBook = addBook;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
exports.searchBooks = searchBooks;
const database_1 = require("../config/database");
// Add Book
function addBook(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { title, author } = req.body;
        const pool = yield database_1.poolPromise;
        yield pool.request()
            .input('title', title)
            .input('author', author)
            .query(`INSERT INTO Books_main (title, author) VALUES (@title, @author)`);
        res.status(201).json({ message: 'Book Added Successfully' });
    });
}
// Update Book
function updateBook(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { title, author } = req.body;
        const { id } = req.params;
        const pool = yield database_1.poolPromise;
        yield pool.request()
            .input('id', id)
            .input('title', title)
            .input('author', author)
            .query(`UPDATE Books_main SET title = @title, author = @author WHERE id = @id`);
        res.status(200).json({ message: 'Book Updated Successfully' });
    });
}
// Delete Book
function deleteBook(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const pool = yield database_1.poolPromise;
        yield pool.request()
            .input('id', id)
            .query(`DELETE FROM Books_main WHERE id = @id`);
        res.status(200).json({ message: 'Book Deleted Successfully' });
    });
}
// Search Books
function searchBooks(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { query } = req.query;
        const pool = yield database_1.poolPromise;
        const result = yield pool.request()
            .input('query', `%${query}%`)
            .query(`SELECT * FROM Books_main WHERE title LIKE @query OR author LIKE @query`);
        res.json(result.recordset);
    });
}
exports.default = { addBook, updateBook, deleteBook, searchBooks };
