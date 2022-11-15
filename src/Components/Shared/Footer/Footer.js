import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    const firstLink = [
        { _id: "01", title: "Emergency Checkup", path: '/' },
        { _id: "02", title: "Monthly Checkup", path: '/' },
        { _id: "03", title: "Weekly Checkup", path: '/' },
        { _id: "04", title: "Deep Checkup", path: '/' }
    ]
    const secondLink = [
        { _id: "01", title: "Fluoride Treatment", path: '/' },
        { _id: "02", title: "Cavity Filling", path: '/' },
        { _id: "03", title: "Teath Whitening", path: '/' },
    ]

    const thirdLink = [
        { _id: "01", title: "New York - 101010 Hudson" }
    ]

    return (
        <div className='py-10 pt-10 bg-img'>
            <div className='flex flex-col md:flex-row gap-y-5 text-center md:text-left justify-between '>
                <div className='flex flex-col'>
                    <h1 className='text-xl font-semibold text-gray-500'>SERVICES</h1>
                    {
                        firstLink.map(item => <Link key={item._id} to={item.path}>{item.title}</Link>)
                    }
                </div>

                <div className='flex flex-col'>
                    <h1 className='text-xl font-semibold text-gray-500'>ORAL HEALTH</h1>
                    {
                        secondLink.map(item => <Link key={item._id} to={item.path}>{item.title}</Link>)
                    }
                </div>

                <div className='flex flex-col'>
                    <h1 className='text-xl font-semibold text-gray-500'>OUR ADDRESS</h1>
                    <ul>
                        {
                            thirdLink.map(item => <li key={item._id}>{item.title}</li>)
                        }
                    </ul>
                </div>
            </div>
            <div className="divider"></div> 

            <div className='text-center py-2'>
                <small className='font-semibold'>Copyright 2022 All Rights Reserved By <a className='text-primary' href="/" target="_black">MD Faysal</a> </small>
            </div>
        </div>
    );
};

export default Footer;