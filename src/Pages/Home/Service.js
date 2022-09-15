import React from 'react';

const Service = ({ service }) => {
    return (
        <div className="card lg:max-w-lg   bg-base-100 shadow-xl">
            <figure className='px-10 pt-10'><img src={service.image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className=" text-center">{service.name}</h2>
                <p>{service.description}</p>



            </div>
        </div>
    );
};

export default Service;