import { Request, Response } from 'express';
import { poolPromise } from '../config/database';

// Add Book
export async function addBook(req: Request, res: Response): Promise<void> {
  const { title, author }: { title: string; author: string } = req.body;
  const pool = await poolPromise;
  await pool.request()
    .input('title', title)
    .input('author', author)
    .query(`INSERT INTO Books_main (title, author) VALUES (@title, @author)`);
  res.status(201).json({ message: 'Book Added Successfully' });
}

// Update Book
export async function updateBook(req: Request, res: Response): Promise<void> {
  const { title, author }: { title: string; author: string } = req.body;
  const { id } = req.params;
  const pool = await poolPromise;
  await pool.request()
    .input('id', id)
    .input('title', title)
    .input('author', author)
    .query(`UPDATE Books_main SET title = @title, author = @author WHERE id = @id`);
  res.status(200).json({ message: 'Book Updated Successfully' });
}

// Delete Book
export async function deleteBook(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const pool = await poolPromise;
  await pool.request()
    .input('id', id)
    .query(`DELETE FROM Books_main WHERE id = @id`);
  res.status(200).json({ message: 'Book Deleted Successfully' });
}

// Search Books
export async function searchBooks(req: Request, res: Response): Promise<void> {
  const { query }= req.query;
  const pool = await poolPromise;
  const result = await pool.request()
    .input('query', `%${query}%`)
    .query(`SELECT * FROM Books_main WHERE title LIKE @query OR author LIKE @query`);
  res.json(result.recordset);
}

export default { addBook, updateBook, deleteBook, searchBooks };
