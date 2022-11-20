import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { userContext } from '../../../Contexts/AuthContexts';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"
    const {googleSignUp, emailSignIn} = useContext(userContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        emailSignIn(data.email, data.password)
        .then(result => {
            const currentUser = result.user;
            if(currentUser){
                toast.success('Successfully Login')
                navigate(from, { replace: true })
            }
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className='text-center text-5xl font-semibold'>Login</h1>
                        <div className="form-control w-full max-w-xs">
                            <label className="label ">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" placeholder="Email" className="input dark:bg-gray-800 dark:text-white dark:border-white dark:focus:bg-gray-800 input-bordered w-full max-w-xs" />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label ">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input {...register("password", { required: true })} type="password" placeholder="Password" className="input dark:bg-gray-800 dark:text-white dark:border-white dark:focus:bg-gray-800 input-bordered w-full max-w-xs" />
                            {errors.password && <span>This field is required</span>}
                        </div>

                        <div className='py-2'>
                            <Link to={"/"}>Forget Password</Link>
                        </div>

                        <div className='w-full'>
                            <button type='submit' className='btn w-full btn-info'>Login</button>
                        </div>
                    </form>

                    <h2 className='pt-5'>New to Doctors Portal? <Link to={'/signup'} className="text-secondary">Create new account</Link> </h2>

                    <div className="divider">OR</div>
                    <button onClick={handleGoogleSignIn} className='btn dark:btn-white text-black dark:text-white hover:btn-info'>
                        CONTINUE WITH GOOGLE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;