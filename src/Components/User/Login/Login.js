import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='text-black bg-white dark:text-white min-h-screen hero dark:bg-gray-800'>
            <div className='hero-content'>

                <form className='card rounded-md shadow-xl shadow-gray-900 p-5'>
                    <h1 className='text-center text-5xl font-semibold'>Login</h1>
                    <div className="form-control w-full max-w-xs">
                        <label className="label ">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label ">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />

                    </div>

                    <div className='py-2'>
                        <Link to={"/"}>Forget Password</Link>
                    </div>

                    <button type='submit' className='btn btn-info'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;