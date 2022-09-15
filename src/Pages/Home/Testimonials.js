import React from 'react';

import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonials = () => {
    const reviews = [

        {
            _id: 1,
            name: 'winson hary',
            review: '',
            img: people1,
            location: 'california'

        },
        {
            _id: 2,
            name: 'winson hary',
            review: '',
            img: people2,
            location: 'Sanfansisco'

        },
        {
            _id: 3,
            name: 'winson hary',
            review: '',
            img: people3,
            location: 'Mumbai'

        }

    ]

    return (
        <section  >
            <div className="flex justify-between p-10">

                <div className="div">
                    <h4 className="text-xl tex-primary font-bold">Testimonial</h4>
                    <h2 className="text-3xl">What our patient says</h2>
                </div>
                <div className="div">

                    <img className=' w-24 lg:w-48' src={quote} alt="" />

                </div>


            </div>

            <div className=" ">
                <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}

                        ></Review>)
                    }


                </div>

            </div>




            <div className=""></div>


        </section>
    );
};
export default Testimonials;