import React, { useState } from 'react';
import Footer from '../Home/Footer';
import AppoimtmentBanner from './AppoimtmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appoinment = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <AppoimtmentBanner date={date} setDate={setDate}></AppoimtmentBanner>

            <AvailableAppointment date={date} setDate={setDate}></AvailableAppointment>

            <Footer></Footer>

        </div>
    );
};

export default Appoinment;