import React from 'react';
import Button from '../../../utilities/Button/Button';
import './ContactUsShow.css'

const ContactUsShow = () => {
    return (
        <div className='my-10'>
            <div className='bg-contact rounded-lg py-20 text-center'>
                <div className='pb-12'>
                    <small className='text-primary'>Contact Us</small>
                    <h1 className='text-white text-2xl md:text-5xl font-light'>Stay connected with us</h1>
                </div>
                <div className='flex flex-col justify-center gap-5 items-center'>
                <input type="email" placeholder="Email" className="input w-3/4 md:w-1/2" />
                <input type="text" placeholder="Subject" className="input w-3/4 md:w-1/2" />
                <textarea type="text" placeholder="Message" className="textarea w-3/4 md:w-1/2" />
                <Button>Send Message</Button>
                </div>
            </div>
        </div>
    );
};

export default ContactUsShow;