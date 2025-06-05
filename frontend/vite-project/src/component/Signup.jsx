import { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

function Signup() {
    // Add state for form inputs
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Add your form submission logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center ">
           
            <div className="relative p-8 rounded-lg shadow-lg w-96 ">
               <Link to='/'>
               <button className="btn btn-circle btn-ghost absolute right-2 top-2">✕</button>   
               </Link>
                <h1 className="text-2xl font-bold text-center mb-6 text-white dark:text-black">
                    Create Your Account
                </h1>
                
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <label className="block text-white text-sm font-medium dark:text-black">
                            Full Name
                        </label>
                        <input 
                            type="text" 
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Enter your full name" 
                            className="input input-bordered w-full bg-white text-gray-800" 
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-white text-sm font-medium dark:text-black">
                            Email Address
                        </label>
                        <input 
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email" 
                            className="input input-bordered w-full bg-white text-gray-800" 
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-white text-sm font-medium dark:text-black">
                            Password
                        </label>
                        <input 
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Create a password" 
                            className="input input-bordered w-full bg-white text-gray-800" 
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-white text-sm font-medium dark:text-black">
                            Confirm Password
                        </label>
                        <input 
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            placeholder="Confirm your password" 
                            className="input input-bordered w-full bg-white text-gray-800" 
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="btn btn-primary w-full mt-6 bg-pink-500 text-black dark:text-black"
                    >
                        Sign Up
                    </button>

                    <p className="text-center text-white mt-4 dark:text-black">
                        Already have an account? 
                        <span 
                        onClick={()=>document.getElementById('my_modal_3').showModal()}
                        className="text-white font-bold hover:underline ml-1 dark:text-black">Log in</span>
                    </p>
                    <Login/>
                </form>
            </div>
        </div>
    );
}

export default Signup;
