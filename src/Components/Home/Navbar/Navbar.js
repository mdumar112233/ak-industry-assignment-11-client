import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../image/f9e48bbcf7aca98f0eff903681e84a2b.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div  className='row'>
            <div className="col-md-4 logo-image">
                <img src={logo} alt=""/>
            </div>
            <div className="col-md-8 menu-link">
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
                        <Link className='link'>About us</Link>
                    </li>
                    <li>
                        <Link className='link'>Contact</Link>
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