import React from 'react';

import bg from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Contract = () => {
    return (
        <div style={{
            background: `url(${bg})`,
            backgroundSize: `cover`
        }} className="form my-8">
            <div className='text-center p-3'>
                <h1 className='text-white'>Contract Us</h1>
                <h3 className='text-primary font-3xl'>Stay Connected With Us</h3>

            </div>
            <div className=" text-center">
                <input className='p-2 w-1/4 m-2 border-solid border-current' type="text" placeholder='Email Address' />
                <br />
                <input className='p-2 w-1/4 m-2 border-solid border-current' type="text" placeholder='Subject' />
                <br />
                <textarea className='w-1/4 pb-12 m-2 p-2 border-solid border-current' placeholder='your message'>
                    <br />


                </textarea>
                <div className="my-8"><PrimaryButton className='m-2'>Submit</PrimaryButton></div>

            </div>


        </div>

    );
};

export default Contract;