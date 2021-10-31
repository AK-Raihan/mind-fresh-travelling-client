import React from 'react';
import About from '../About/About';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Client from './Client/Client';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Client></Client>

        </div>
    );
};

export default Home;