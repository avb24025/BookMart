import react from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Freebook from './Freebook';
import Footer from './Footer';

 function Home() {
    return (
        <>
        <div className='dark:bg-white dark:text-black'>
            <Navbar/>
        <Banner/>
        <Freebook/>
        <Footer/>
        </div>
        </>
    )
 };
  export default Home;