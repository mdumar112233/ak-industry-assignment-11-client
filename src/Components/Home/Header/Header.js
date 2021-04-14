import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';


const Header = () => {
    return (
        <div className='header-container'>
            <div className="sub-container">
                <Navbar></Navbar>
            </div>
        </div>
    );
};

export default Header;