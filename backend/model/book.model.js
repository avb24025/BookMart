import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  id: {
    type: Number,     // or String if you prefer
    required: true,
    unique: true      // enforce uniqueness for your custom id
  },
  name: {
    type: String,   
    required: true,
    trim: true
    },
    title:{ 
    type: String,
    required: true,
    trim: true
    },
    price: {
    type: Number,   
    required: true,
    min: 0
    },
    category: {
    type: String,
    required: true,
    trim: true
    },
    image:{ 
    type: String,
    required: true,
    trim: true
    }
});

const Book = mongoose.model('Book', bookSchema);
export default Book;

