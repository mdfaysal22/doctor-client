import React from 'react';
import { DayPicker } from 'react-day-picker';
import '../../Home/Hero/Hero.css'
import 'react-day-picker/dist/style.css';
import heroImg from './../../../../assets/images/chair.png'
const HeroAppo = ({selectedDay, setSelectedDay}) => {
    
    
    return (
        <div className='bg-hero-image'>
            <div className='flex p-10 justify-center flex-col-reverse md:flex-row items-center gap-10'>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div>
                            <DayPicker
                                mode="single"
                                selected={selectedDay}
                                onSelect={setSelectedDay}
                                
                            ></DayPicker>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={heroImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeroAppo;