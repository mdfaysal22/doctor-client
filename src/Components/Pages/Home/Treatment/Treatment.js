import React from 'react';
import Button from '../../../utilities/Button/Button';
import treatmentImg from "./../../../../assets/images/treatment.png"

const Treatment = () => {
    return (
        <div className='my-5'>
            <div className="hero">
                <div className="hero-content p-0 flex-col gap-10 lg:flex-row">
                    <img src={treatmentImg} alt='Treatment photos' className="w-full mx-0 md:max-w-sm rounded-lg shadow-2xl" />
                    <div className=' text-center md:text-left'>
                        <h1 className="text-xl md:text-4xl lg:text-6xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-2 text-xs md:Text-sm md:py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <Button>Get Treatment</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Treatment;