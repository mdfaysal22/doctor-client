import React from 'react';
import Banner from './Banner/Banner';
import ContactUsShow from './ContactUsShow/ContactUsShow';
import Hero from './Hero/Hero';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';
import ShowReviews from './ShowReviews/ShowReviews';
import Treatment from './Treatment/Treatment';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Banner></Banner>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppointment></MakeAppointment>
            <ShowReviews></ShowReviews>
            <ContactUsShow></ContactUsShow>
        </div>
    );
};

export default Home;