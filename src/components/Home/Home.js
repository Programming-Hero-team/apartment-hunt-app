import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Hunts from './Hunts/Hunts';
import Service from './Service/Service';

const Home = () => {
    return (
        <div className="">
            <Header></Header>
            <Hunts></Hunts>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Home;