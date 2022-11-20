import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../../../Contexts/AuthContexts';
import toast from 'react-hot-toast';
const Signup = () => {
    const {emailSignup, updateUser, googleSignUp} = useContext(userContext)
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleSignup = (data, e) => {
        emailSignup(data.email, data.password)
        .then(result => {
            const signedUp = result.user;
            if(signedUp.email){
                toast('Successfully SignUp!')
                navigate('/');
            }
            updateUser(data.name)
            .then(()=> {})
            .catch(()=>{})
        })
        .catch(err => {
            const errMessage = err.message;
            if(errMessage){
                toast.error(`${errMessage}`);
            }
        })
        e.target.reset();
        
    };

    const handleGoogleSignIn = () => {
        googleSignUp()
        .then(result => {
            const SignedUp = result.user;
            if(SignedUp){
                toast.success("Google Login Successfully")
            }
        })
        .catch(err => {
            const errMessage = err.message;
            if(errMessage){
                toast.error(`${errMessage}`);
            }
        })
    }
    return (
        
        <div className='text-black bg-white dark:text-white min-h-screen hero dark:bg-gray-800'>
            <div className='hero-content'>

                <div className='card rounded-md shadow-xl  p-5'>
                    <form onSubmit={handleSubmit(handleSignup)}>
                        <h1 className='text-center text-5xl font-semibold'>Sign Up</h1>
                        <div className="form-control w-full ">
                            <label className="label ">
                                <span className="label-text dark:text-white text-black">Full Name</span>
                            </label>
                            <input {...register("name")} type="text" placeholder="Full Name" className="input dark:bg-gray-800 dark:text-white dark:border-white dark:focus:bg-gray-800 input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label ">
                                <span className="label-text dark:text-white text-black">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" placeholder="Email" className="input dark:bg-gray-800 dark:text-white dark:border-white dark:focus:bg-gray-800 input-bordered w-full max-w-xs" />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label ">
                                <span className="label-text dark:text-white text-black">Password</span>
                            </label>
                            <input {...register("password", { required: true })} type="password" placeholder="Password" className="input dark:bg-gray-800 dark:text-white dark:border-white dark:focus:bg-gray-800 input-bordered w-full max-w-xs" />
                            {errors.password && <span>This field is required</span>}
                        </div>

                        

                        <div className='w-full mt-3'>
                            <button type='submit' className='btn w-full btn-info'>Registered Now</button>
                        </div>
                    </form>

                    <h2 className='pt-2 px-10'>Already Have an Account ?<Link to={'/login'} className="text-secondary"> Login </Link> </h2>

                    <div className="divider">OR</div>
                    <button onClick={handleGoogleSignIn} className='btn dark:btn-white text-black dark:text-white hover:btn-info'>
                        CONTINUE WITH GOOGLE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;