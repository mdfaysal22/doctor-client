import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { userContext } from '../../../../../../Contexts/AuthContexts';

const AppointmentModal = ({ treatment,setTreatment, selectedDay, refetch }) => {
    const {user} = useContext(userContext)
    const { name, slots } = treatment;
    const handleBookingInfo = (e) => {
        e.preventDefault()
        const form = e.target;
        const nameOfAppointment = name;
        const date = form.date.value;
        const slot = form.slot.value;
        const passant = form.passant.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const bookAppointment = {
            nameOfAppointment,
            date,
            time: slot,
            passant,
            phone,
            email
        }
        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(bookAppointment)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                form.reset()
                setTreatment(null)
                toast.success("Booking Successful")
                refetch()
            }
        }) 
        
    }
    return (
        <div className=''>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal ">
                <form onSubmit={handleBookingInfo} className="modal-box bg-white text-black dark:bg-gray-800 dark:text-white relative">
                    <label htmlFor="booking-modal" className="btn btn-sm bg-info btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <div className=' text-center'>
                        <input type="text" name='date' defaultValue={format(selectedDay, "PP")}  readOnly className="input my-3 border-2 bg-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:focus:border-gray-700 border-gray-200 w-full " />

                        <div className="form-control w-full">
                            
                            <select name='slot' className="select  dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:focus:border-gray-700 border-gray-200  select-bordered">
                                {
                                    slots.map((slot, i) => <option value={slot} key={i}>{slot}</option>)
                                }
                            </select>
                            
                        </div>

                        <input type="text" name='passant' placeholder="Full Name" readOnly defaultValue={user?.displayName} className="input my-3 border-2 border-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:focus:border-gray-700 w-full " />
                        <input type="number" name='phone' placeholder='Phone Number' className="input my-3 border-2 border-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:focus:border-gray-700 w-full " />
                        <input type="email" name='email' defaultValue={user?.email} readOnly placeholder="Email" className="input my-3 border-2 border-gray-200 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:focus:border-gray-700 w-full " />
                        <button type='submit' className='btn block w-full btn-info'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AppointmentModal;