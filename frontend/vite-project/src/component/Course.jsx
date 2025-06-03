import react from 'react';
import Books from '../../public/Books.json';
import Card from './Card.jsx';
function Course(){
     console.log(Books);
    return(
        <>
      <div className='mt-23 md:mt-30'>
        <div>
            <h1 className='text-2xl md:text-4xl mb-7 font-bold item-center justify-content-center text-center'>Explore Our Curated  <span className='text-pink-500'>Collection of Books</span></h1>
            <h1 className='hidden md:flex text-xl pl-5 pr-5 font-semibold item-center justify-content-center text-center'>Welcome to the Books Section! Here you’ll find a diverse and carefully selected range of books across various genres, authors, and categories. Whether you're a passionate reader, a casual explorer, or a student in search of reference material — we’ve got something for everyone.</h1>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-3 ml-7 md:ml-5">
                 {
               Books.map((book) => {
                  return <Card book={book} key={book.id} />;
                         })
  }
            </div>
        </div>
      </div>
        </>
    )
};

export default Course;