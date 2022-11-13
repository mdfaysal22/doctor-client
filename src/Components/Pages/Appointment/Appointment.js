import React, { useState } from 'react';
import AppointmentServices from './AppointmentServices/AppointmentServices';
import HeroAppo from './HeroAppo/HeroAppo';


const Appointment = () => {
    const [selectedDay, setSelectedDay] = useState(new Date())
    return (
        <div>
            <HeroAppo selectedDay={selectedDay} setSelectedDay={setSelectedDay}></HeroAppo>
            <AppointmentServices selectedDay={selectedDay}></AppointmentServices>
        </div>
    );
};

export default Appointment;