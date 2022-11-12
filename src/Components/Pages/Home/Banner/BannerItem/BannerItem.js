import React from 'react';

const BannerItem = ({banner}) => {
    const {title, body, icon, bgColor} = banner;
    return (
        <div className={`p-5 rounded-md text-white ${bgColor}`}>
            <div className='flex justify-around items-center'>
                <div> 
                    <img className='w-1/2' src={icon} alt="" />
                </div>
                <div>
                    <h1 className='text-xl font-semibold'>{title}</h1>
                    <p className='text-xs'>{body}</p>
                </div>
            </div>
        </div>
    );
};

export default BannerItem;