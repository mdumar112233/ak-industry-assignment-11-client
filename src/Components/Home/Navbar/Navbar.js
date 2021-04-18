import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../image/f9e48bbcf7aca98f0eff903681e84a2b.png';
import menu from '../../../image/menu.png';
import './Navbar.css';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    return (
        <div className='row navbar-container'>
            <div className="col-md-4 logo-image">
                <div className="logoOne"><img src={logo} alt="logo"/><span className='logo'>AK INDUSTRY</span></div>
                <div className='menu-icon'><img onClick={() => setShowLinks(!showLinks)} src={menu} alt=""/></div>
            </div>
            <div className="col-md-8 menu-link" id={showLinks ? 'hidden' : ''}>
                <ul>
                    <li>
                        <Link className='link' to='/home'>Home</Link>
                    </li>
                    <li>
                        <Link className='link' to='/project'>Project</Link>
                    </li>
                    <li>
                        <Link className='link' to='/admin'>Admin</Link>
                    </li>
                    <li>
                        <Link className='link'>Contact</Link>
                    </li>
                    <li>
                        <Link className='link' to='/dashboard'>Dashboard</Link>
                    </li>
                    <li>
                        <Link className='link login-btn'  to='/login'>Login</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;