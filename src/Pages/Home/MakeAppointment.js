import React from 'react';
import doctor from '../../assets/images/doctor.png'
import bg from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${bg})`
        }} className='flex justify-center items-center'>
            <div className="flex-1 lg:block">
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className="flex-1">
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='text-primary text-2xl py-5'>make appointment today</h2>
                <p className='text-white pb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque facere eligendi quos, sequi blanditiis doloribus maxime, repellendus quis saepe ad atque, natus deserunt veniam? Neque.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit dicta eveniet perspiciatis quibusdam iure eum ab temporibus sit, provident ipsum!</p>
                <PrimaryButton>Get Started</PrimaryButton>

            </div>
        </section>
    );
};

export default MakeAppointment;