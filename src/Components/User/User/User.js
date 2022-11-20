import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../../Contexts/AuthContexts';
import Button from '../../utilities/Button/Button';

const User = () => {
    const {signOutSystem} = useContext(userContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        signOutSystem()
        .then(result => {
            toast("SignOut Successfully");
            navigate('/')
    })
        .catch(() => {});
    }
    return (
        <div className='hero'>
            <div className='hero-content'>
                <div className='text-center'>
                    <h1 className='text-black dark:text-white mb-6'>Confirm Logout</h1>
                    <button className="btn text-white border-0 bg-gradient-to-r from-primary to-secondary" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default User;