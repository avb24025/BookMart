import React from 'react';  
import { useEffect, useState ,useContext} from 'react';
import {Link} from 'react-router-dom';
import Login from './Login';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const { user,logout } = useContext(AuthContext);
  console.log("User in Navbar:", user);
  const [sticky, setSticky] = useState(false);
  const [theme,setTheme]= useState(localStorage.getItem("theme") ? localStorage.getItem("theme") :"dark");
  
  // const element=document.documentElement;
  useEffect(() => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [theme]);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <div className={`navbar fixed top-0 right-0 left-0 z-50 transition-all duration-300 ease-in-out dark:bg-white dark:text-black 
        ${sticky 
          ? "bg-gray-900 text-white  shadow-lg " 
          : "bg-white text-black shadow-sm"
        }`}>
        {/* Left - Mobile Menu */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box text-white z-10 mt-3 w-52 p-2 shadow"
            >
              <Link to='/'><li><a>Home</a></li></Link>
              <Link to='/course'><li><a>Books</a></li></Link>
              <li><a>Contact</a></li>
              <li><a>About</a></li>
            </ul>
          </div>
          <a className="font-bold cursor-pointer text-xl  md:ml-6">Bookmart</a>
        </div>

        {/* Center - Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to='/'><li><a>Home</a></li></Link>
            <Link to='/course'><li><a>Books</a></li></Link>
            <li><a>Contact</a></li>
            <li><a>About</a></li>
          </ul>
        </div>

        {/* Right - Search and Login */}
        <div className="navbar-end  gap-4 ">
          {/* Search Bar */}
          <label className="input bg-white border-1 input-bordered flex items-center gap-2 hidden md:flex dark:bg-white dark:text-black dark:border-1">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" className="text-black" placeholder="Search" />
          </label>

          <label className="swap swap-rotate ">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" value="synthwave" />

  {/* sun icon */}
  <svg
    className="swap-off h-8 w-8 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    onClick={()=>setTheme(theme==="dark"?"light":"dark")} 
    >
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on h-8 w-8 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    onClick={()=>setTheme(theme==="light"?"dark":"light")} 
    >
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>

          {/* Login Button */}
          {user ? (
              <button
              onClick={() => {
                logout();} 
              }
                className="btn btn-error">Logout</button>
          ) : (
            <div>
            <a className="btn "
          onClick={()=>document.getElementById('my_modal_3').showModal()}
          >Login</a>
          <Login/>
          </div>
          )}
          
          {/* Login Modal */}
          

        </div>
      </div>
    </>
  );
}

export default Navbar;
