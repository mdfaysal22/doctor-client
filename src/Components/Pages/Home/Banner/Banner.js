import React from 'react';
import hour from "./../../../../assets/icons/clock.svg"
import marker from "./../../../../assets/icons/marker.svg"
import phone from "./../../../../assets/icons/phone.svg"
import BannerItem from './BannerItem/BannerItem';

const Banner = () => {
    const bannerInfo = [
        {
            _id: "01",
            title: "Opening Hours",
            body: "Lorem Ipsum is simply dummy text of the pri",
            icon: hour,
            bgColor: "bg-gradient-to-r from-primary to-secondary"
        },
        {
            _id: "02",
            title:"Visit our location",
            body:"Brooklyn, NY 10036, United States",
            icon: marker,
            bgColor: "bg-info"
        },
        {
            _id: "03",
            title:"Contact us now",
            body:"+000 123 456789",
            icon:phone,
            bgColor: "bg-gradient-to-r from-primary to-secondary"
        }
    ]
    return (
        <div className='grid grid-cols-1 gap-5 my-10 md:grid-cols-3'>
            {
                bannerInfo.map(banner => <BannerItem key={banner._id} banner={banner}></BannerItem>)
            }
        </div>
    );
};

export default Banner;