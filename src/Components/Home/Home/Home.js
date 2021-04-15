import React from 'react';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Review></Review>
        </div>
    );
};

export default Home;