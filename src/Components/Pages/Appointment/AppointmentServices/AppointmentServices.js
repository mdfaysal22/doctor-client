import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../../utilities/Button/Loading';
import AppointmentItem from './AppointmentItem/AppointmentItem';
import AppointmentModal from './AppointmentItem/AppointmentModal/AppointmentModal';

const AppointmentServices = ({selectedDay}) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDay, "PP");
    const {data: options = [], refetch, isLoading } = useQuery({queryKey: ["appointment", date], queryFn: async() => {
        const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
        const data = await res.json();
        return data;
    }})
    


    let footer = "";
    if (selectedDay) {
        footer = <p className='text-xl font-semibold'>Available Appointments on {format(selectedDay, 'PP')}.</p>;
    }

    if(isLoading){
        return <Loading></Loading>
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
                <AppointmentModal footer={footer} refetch={refetch} setTreatment={setTreatment} selectedDay={selectedDay} treatment={treatment}></AppointmentModal>}
        </div>
    );
};

export default AppointmentServices;