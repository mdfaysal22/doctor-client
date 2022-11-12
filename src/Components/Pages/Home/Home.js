import React from 'react';
import Banner from './Banner/Banner';
import Hero from './Hero/Hero';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';
import Treatment from './Treatment/Treatment';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Banner></Banner>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;