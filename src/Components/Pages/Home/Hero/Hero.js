import React from 'react';
import Button from '../../../utilities/Button/Button';
import heroImg from './../../../../assets/images/chair.png'
import './Hero.css'
const Hero = () => {
    return (
        <div>
            <div className="hero py-20 bg-hero-image">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={heroImg} alt="Hero Images Chair" className=" w-full lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className='text-center md:text-left'>
                        <h1 className="text-2xl md:text-5xl font-light">Your New Smile Starts Here</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Button>Get Started</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;