import React from 'react';
import Banner from './Banner/Banner';
import Contract from './Contract';
import Footer from './Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Contract></Contract>
            <Testimonials></Testimonials>
            <Footer></Footer>


        </div>
    );
};

export default Home;