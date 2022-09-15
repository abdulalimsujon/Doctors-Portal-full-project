import React from 'react';

const InfoCard = ({ img, cardTitle, bgclass }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bgclass}`}>
            <figure className='pl-5'><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">

                </div>
            </div>
        </div>
    );
};

export default InfoCard;