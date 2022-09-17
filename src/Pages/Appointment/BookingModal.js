import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ date, Treatment, setTreatment }) => {
    const { _id, name, slots } = Treatment;

    const hundleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        setTreatment(null);

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-center p-3">Booking for :{name}</h3>
                    <form onSubmit={hundleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, "PP")} class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">

                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name='name' placeholder="Your name" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='email' placeholder="Your Email" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Your phone number" class="input input-bordered w-full max-w-xs" />
                        <input type='submit' value='Submit' class="btn btn-secondary input-bordered w-full max-w-xs" />

                    </form>
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2 text-primary">✕</label>
                    <div class="modal-action">
                        <label for="booking-modal text-secondary" class="btn">Yay!</label>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default BookingModal;