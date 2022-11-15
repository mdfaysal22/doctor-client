import { format } from 'date-fns';
import React from 'react';

const AppointmentModal = ({treatment, selectedDay}) => {
    const {name, slots} = treatment
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm bg-info btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <div className=' text-center'>
                    <input type="text" placeholder={format(selectedDay, 'PP')} readOnly className="input my-3 border-2 bg-gray-200 border-gray-200 w-full " />
                    <input type="text" readOnly placeholder={slots.length > 0 ? slots[0] : "No Appointment Available"} className="input my-3 bg-gray-200 border-2 border-gray-200 w-full " />
                    <input type="text" placeholder="Full Name" className="input my-3 border-2 border-gray-200 w-full " />
                    <input type="number" placeholder="Phone Number" className="input my-3 border-2 border-gray-200 w-full " />
                    <input type="email" placeholder="Email" className="input my-3 border-2 border-gray-200 w-full " />
                    <button  className='btn block w-full btn-info'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;