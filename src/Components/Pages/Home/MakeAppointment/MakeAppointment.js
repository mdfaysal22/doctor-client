import React from 'react';
import Button from '../../../utilities/Button/Button';
import doctor from './../../../../assets/images/doctor.png'
import './MakeAppointment.css'
const MakeAppointment = () => {
    return (
        <section className='my-20'>
            <div className='bg-app rounded-md'>
                <div className="flex  justify-center items-center gap-x-5 lg:flex-row">
                    <img src={doctor} alt="Doctor" className="w-1/2 hidden md:block -mt-20" />
                    <div className='text-white p-4 md:p-0'>
                        <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold">Box Office News!</h1>
                        <p className="py-1">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Button>Get Appointment</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;