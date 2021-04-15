import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import TopTitle from '../TopTitle/TopTitle';


const Header = () => {
    return (
        <div className='header-container'>
            <div className="sub-container">
                <Navbar></Navbar>
                <TopTitle></TopTitle>
            </div>
        </div>
    );
};

export default Header;