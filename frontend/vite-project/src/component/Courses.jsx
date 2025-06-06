import react, { useEffect } from 'react'
import Navbar from './Navbar.jsx';
import Course from './Course.jsx';
import Footer from './Footer.jsx';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.jsx';

function Courses(){
    const { user,loading } = useContext(AuthContext);
    const navigate = useNavigate();

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