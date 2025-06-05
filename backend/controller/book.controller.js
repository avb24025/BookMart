import  book from '../model/book.model.js';
import express from 'express';

const allbooks=async (req, res) => {
    try {
        const books = await book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching books', error: error.message });
    }
}

export default { allbooks };