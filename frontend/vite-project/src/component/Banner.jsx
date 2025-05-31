import react from 'react';
import { useState } from 'react';
import banner from "../../public/Banner.png";
function Banner(){
    return(
        <> 
    <div className='flex p-4 flex-col md:flex-row md:ml-20'>
        <div className='w-full md:w-1/2 md:mr-20 order-2 md:order-1'>
        <div className='md:mt-32'>
            <h1 className='text-4xl font-bold mb-8'>Welcome to Bookmart – Your Gateway to <span className='text-pink-500'>Infinite Stories</span> </h1>
        <div className='text-xl mb-10'> Welcome to Bookmart
        Your one-stop destination for bestsellers, classics, and hidden gems.
        Discover books that inspire, educate, and entertain.
        Start your next chapter with us today. </div>
        <label className="input validator w-full md:w-96 mb-5">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="mail@site.com" required />
</label>
<div className="validator-hint hidden ">Enter valid email address</div>
        </div>
        <button className="btn btn-secondary">Secondary</button>
        </div>
        <div className='w-full md:w-1/2 order-1'>
        <img src={banner} alt='Book Image'  className='md:ml-10'/>
        </div>
    </div>
    </>
    )
    
};

export default Banner;