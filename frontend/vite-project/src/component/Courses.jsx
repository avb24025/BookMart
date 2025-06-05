import react, { useEffect } from 'react'
import Navbar from './Navbar.jsx';
import Course from './Course.jsx';
import Footer from './Footer.jsx';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';

function Courses(){
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
    if (!user) {
      navigate('/'); // Redirect to login if user is not authenticated
    }
  }, [user, navigate]);
    

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