import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date, setDate }) => {
    const [services, setServices] = useState([]);
    const [Treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));

    }, [])
    return (
        <div className='p-5'>
            <p className='text-center text-primary text-xl'>Available Appointment on :  {format(date, 'PP')}</p>



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.map(service => <Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}

                ></Service>)
                }

                {
                    Treatment && <BookingModal
                        date={date}
                        Treatment={Treatment}
                        setTreatment={setTreatment}


                    ></BookingModal>
                }


            </div>



        </div>
    );
};

export default AvailableAppointment;