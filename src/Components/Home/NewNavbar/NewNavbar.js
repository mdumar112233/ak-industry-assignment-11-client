import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../image/f9e48bbcf7aca98f0eff903681e84a2b.png';
import './NewNavbar.css';


const NewNavbar = () => {
    return (
        <div className='container'>
            <nav class="navbar navbar-expand-lg navbar-light  logo-image">
                <a class="navbar-brand logoOne" href="/"><img src={logo} alt="logo"/><span className='logo'>AK INDUSTRY</span></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" >Project</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/admin">Admin</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="#">Contact</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/dashboard">Dashboard</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link login-btn" to="/login">Login</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NewNavbar;