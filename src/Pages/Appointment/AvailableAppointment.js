import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date, setDate }) => {
    //const [services, setServices] = useState([]);
    const [Treatment, setTreatment] = useState(null);




    const formattedDate = format(date, 'PP');


    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json()))

    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));

    // }, [formattedDate])

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='p-5'>
            <p className='text-center text-primary text-xl'>Available Appointment on :  {format(date, 'PP')}</p>



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {services?.map(service => <Service
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
                        refetch={refetch}



                    ></BookingModal>
                }


            </div>



        </div>
    );
};

export default AvailableAppointment;