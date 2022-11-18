import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentItem from './AppointmentItem/AppointmentItem';
import AppointmentModal from './AppointmentItem/AppointmentModal/AppointmentModal';

const AppointmentServices = ({selectedDay}) => {
    const {data: options = [] } = useQuery({queryKey: ["appointment"], queryFn: async() => {
        const res = await fetch("http://localhost:5000/appointmentOptions")
        const data = await res.json();
        return data;
    }})
    // const [options, setOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    // useEffect(()=> {
    //     fetch('http://localhost:5000/appointmentOptions')
    //     .then(res => res.json())
    //     .then(data => setOptions(data))
    // },[])



    let footer = "";
    if (selectedDay) {
        footer = <p className='text-xl font-semibold'>Available Appointments on {format(selectedDay, 'PP')}.</p>;
    }


    return (
        <div className='my-10'>
            <div className='text-center text-secondary'>
                {footer}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
                {
                    options.map(option => <AppointmentItem key={option._id} setTreatment={setTreatment} option={option}></AppointmentItem>)
                }
            </div>
            { 
            treatment &&
                <AppointmentModal footer={footer} selectedDay={selectedDay} treatment={treatment}></AppointmentModal>}
        </div>
    );
};

export default AppointmentServices;