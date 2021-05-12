import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import TopTitle from '../TopTitle/TopTitle';
import NewNavbar from '../NewNavbar/NewNavbar';


const Header = () => {
    return (
        <div className='header-container'>
            <div className="sub-container">
                {/* <Navbar></Navbar> */}
                <NewNavbar></NewNavbar>
                <TopTitle></TopTitle>
            </div>
        </div>
    );
};

export default Header;