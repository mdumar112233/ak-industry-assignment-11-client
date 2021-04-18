import React from 'react';
import Blog from '../Blog/Blog';
import Client from '../Client/Client';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Blog></Blog>
            <Review></Review>
            <Client></Client>
            <Footer></Footer>
        </div>
    );
};

export default Home;