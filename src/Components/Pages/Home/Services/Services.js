import React from 'react';
import cavity from './../../../../assets/images/cavity.png';
import fluoride from './../../../../assets/images/fluoride.png';
import whitening from './../../../../assets/images/whitening.png';
import Service from './Service/Service';

const Services = () => {
    const services = [
        {
            _id: "01",
            title: "Fluoride Treatment",
            body: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: fluoride,

        },
        {
            _id: "02",
            title: "Cavity Filling",
            body: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: cavity,

        },
        {
            _id: "03",
            title: "Teeth Whitening",
            body: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: whitening,

        }
    ]
    return (
        <div className='my-5'>
            <div className='text-center py-5'>
                <p className='font-semibold text-primary text-xs'>OUR SERVICES</p>
                <h1 className='text-xl md:text-3xl font-light'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;