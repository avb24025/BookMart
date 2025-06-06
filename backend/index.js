import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import bookRoutes from './routes/book.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'https://books-mart.vercel.app/', // Replace with your actual frontend URL
  credentials: true
}));
app.use(express.json());

// Use router correctly
app.use('/api/user', userRoutes);
app.use('/api/books',bookRoutes );

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {

})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
