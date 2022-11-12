import React from 'react';

const Service = ({service}) => {
    const {title, body, img} = service
    return (
        <div className='rounded-md text-center shadow-xl p-10'>
            <img className='mx-auto mb-2' src={img} alt="" />
            <h1 className='text-2xl font-semibold'>{title}</h1>
            <p className='text-xs mt-1'>{body}</p>
        </div>
    );
};

export default Service;