import React from 'react';

const AppointmentItem = ({ option, setTreatment }) => {
    const { name, slots } = option
    return (
        <div className="card shadow-lg">
            <div className="card-body text-center">
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p>{slots.length > 0 && slots[0]}</p>
                <p>{slots.length > 0 ? `${slots.length} ${slots.length > 1 ? `appointments` : `appointment`} is available Now` : `Appointment is Not Available Now`}</p>
                <div>
                <label disabled={slots.length === 0} htmlFor="booking-modal" onClick={() => {setTreatment(option)}} className='btn bg-gradient-to-tr from-primary to-secondary text-white border-0'>Booking Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentItem;