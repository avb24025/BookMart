import react from 'react'
import Navbar from './Navbar.jsx';
import Course from './Course.jsx';
import Footer from './Footer.jsx';

function Courses(){
    return (
        <>
       <div className='dark:bg-white dark:text-black'>
         <Navbar></Navbar>
        <Course></Course>
        <Footer></Footer>
       </div>
        </>
    )
};

export default Courses;