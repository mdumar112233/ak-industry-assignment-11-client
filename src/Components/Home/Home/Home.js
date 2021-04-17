import React from 'react';
import Client from '../Client/Client';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Review></Review>
            <Client></Client>
        </div>
    );
};

export default Home;