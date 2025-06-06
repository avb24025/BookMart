import React, { useEffect } from 'react';
import Slider from "react-slick";
// import Book from '../../public/Books.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from './Card';
import axiox from 'axios';

function Freebook() {
    // const filterbook = Book.filter((book) => book.category === "Free");
    const [filterbook, setFilterBook] = React.useState([]);

    useEffect(() => {
        const fetchBooks = async () => {    
            try {
                const response = await axiox.get('https://book-mart-weld.vercel.app/api/books/allbooks');
                // Assuming the response data is an array of books
                console.log(response.data);
                const filterbook = response.data.filter((book) => book.category === "Free");
                setFilterBook(filterbook);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        }
        fetchBooks();
    }, []);


    
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='mt-3 md:mt-10 mx-4 md:mx-20 pb-10 dark:bg-white dark:text-black'>
            <h1 className='text-xl font-bold'>
                Free Offered Courses!!
            </h1>
            <div className="my-4">
                Dive into a curated collection of free ebooks across genres—from timeless classics to modern must-reads.
                Enjoy unlimited access with no hidden charges or subscriptions.
                Start reading instantly and explore stories that spark imagination, all for free!
            </div>
            <div className="slider-container mt-5 ml-3 mr-3">
                <Slider {...settings}>
                    {filterbook.map((book) => (
                        <div key={book.id} className="px-2">
                            <Card book={book} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Freebook;