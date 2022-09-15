import React from 'react';
import flouride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';



const Services = () => {

    const services = [
        {
            _id: 1,
            name: "Flourude Treatment",
            description: 'lorem10  fdakhg klajhkjghklj',
            image: flouride
        },
        {
            _id: 2,
            name: "Cavity Feeling",
            description: 'fgdgh lfhksgjiklsdhils',
            image: cavity
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            description: 'kdsf ghkjsghkljghkljsh klgsj',
            image: whitening
        }
    ]
    return (
        <div className='my-28 text-center '>
            <div className='text-center '>
                <h3 className='text-primary text-xl front-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We provide</h2>

            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}

                    ></Service>)
                }
            </div>

        </div>

    );
};

export default Services;