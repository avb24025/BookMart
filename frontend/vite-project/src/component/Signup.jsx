import react from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function signup(){
    return (
        <>
        
        <div>
             <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn color-white btn-circle btn-ghost absolute right-2 top-2 ">✕</button>
    </form>
    <h1 className='text-2xl font-bold text-center mb-4 text-white'>
        Log in to Your Account
    </h1>
    <div className='text-white pt-5'>
        <h1>Enter Your Email</h1>
        <input type='text ' placeholder='Enter your email' className='input input-bordered w-full max-w-xs mb-4' />
    </div>
    <div className='text-white'>
        <h1>Password</h1>
        <input type='password' placeholder='Enter your password' className='input input-bordered w-full max-w-xs mb-4' />
    </div>
   <div className="flex justify-between items-center px-4">
  <button className="btn btn-secondary">Login</button>
  <span className="text-white">
    Not registered? <a href="/signup" className="underline text-blue-300">Signup</a>
  </span>
</div>
  </div>
        </div>
        </>
    )
}
export default signup;
