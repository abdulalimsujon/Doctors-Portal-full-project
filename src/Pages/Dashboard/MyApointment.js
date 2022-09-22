
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const MyApointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);



    useEffect(() => {

        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointments(data));
        }

    }, [user])



    return (
        <div>
            <div className="p-4">
                <h2>Email : {user.email}</h2>
                <h2>Total Appointment: {appointments.length}</h2>


            </div>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>


                            <th>Serial</th>
                            <th>Treatement</th>
                            <th>Slots</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            appointments.map((a, index) =>



                                <tr>


                                    <td>{index + 1}</td>
                                    <td>{a.treatment}</td>
                                    <td>{a.slot}</td>
                                    <td>{a.date}</td>
                                </tr>


                            )
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyApointment;