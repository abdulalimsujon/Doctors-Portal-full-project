import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg'



const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 text-white w-full'>
            <InfoCard cardTitle='Opening hours' bgclass='bg-gradient-to-r from-secondary to-primary' img={clock}></InfoCard>
            <InfoCard cardTitle='Our Locations' bgclass='bg-gradient-to-r from-secondary to-primary' img={marker}></InfoCard>
            <InfoCard cardTitle='Contract us' bgclass='bg-gradient-to-r from-secondary to-primary' img={clock}></InfoCard>
        </div>
    );
};

export default Info;