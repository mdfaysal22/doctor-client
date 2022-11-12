import React from 'react';

const SingleReviewsItem = ({review}) => {
    const {body, img, name, location} =review;
    return (
        <div className='p-5 rounded-md shadow-xl'>
            <p>{body}</p>
            <div className='flex justify-items-center mt-3 items-center gap-5'>
                <div className='border-primary border-2 rounded-full p-px'>
                <img className='w-14' src={img} alt="" />
                </div>
                <div>
                    <h3 className='font-semibold'>{name}</h3>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleReviewsItem;