import express from 'express';
import books from '../controller/book.controller.js';
const router = express.Router();

router.get('/allbooks', books.allbooks);

export default router;