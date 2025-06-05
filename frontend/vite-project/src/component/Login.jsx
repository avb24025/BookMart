import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
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
        console.log('Login Data:', formData);
        // Add your login logic here
    };

    return (
        <div className=''>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                       <Link to='/'> 
                        <button className="btn color-white btn-circle btn-ghost absolute right-2 top-2">✕</button></Link>
                    </form>
                    <h1 className='text-2xl font-bold text-center mb-4 text-white'>
                        Log in to Your Account
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className='text-white pt-5'>
                            <h1>Enter Your Email</h1>
                            <input
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder='Enter your email'
                                className='input input-bordered w-full max-w-xs mb-4'
                            />
                        </div>
                        <div className='text-white'>
                            <h1>Password</h1>
                            <input
                                type='password'
                                name='password'
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder='Enter your password'
                                className='input input-bordered w-full max-w-xs mb-4'
                            />
                        </div>
                        <div className="flex justify-between items-center px-4">
                            <button type="submit" className="btn btn-secondary">Login</button>
                            <span className="text-white">
                                Not registered? <Link to="/signup" className="underline text-blue-300">Signup</Link>
                            </span>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;