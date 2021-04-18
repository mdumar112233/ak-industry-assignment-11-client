import React from 'react';
import facebook from '../../../image/facebook-app-symbol.png';
import instagram from '../../../image/instagram.png';
import twitter from '../../../image/twitter.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="container mt-5">
            <div className='row text-left'>
            <div className="col-md-3 mt-5">
                <h5>About us</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nobis obcaecati nemo enim ab totam beatae quos ullam reprehenderit libero.</p>
            </div>
            <div className="col-md-3 mt-5">
                <div className="ms-5">
                <h5>Quick Link</h5>
                <p>Project</p>
                <p>Admin</p>
                <p>Dashboard</p>
                <p>Contact</p>
                </div>
            </div>
            <div className="col-md-3 mt-5">
                <div className="ms-3">
                <h5>Our services</h5>
                <p>Construction Map</p>
                <p>Planning</p>
                <p>Home Design</p>
                </div>
            </div>
            <div className="col-md-3 mt-5">
                <h5>Follow us</h5>
                <span><img src={facebook} alt=""/></span>
                <span className='ms-4 me-4'><img src={instagram} alt=""/></span>
                <span><img src={twitter} alt=""/></span>
            </div>
            <hr/>
            <p className='text-center'>&copy;CopyRight 2021</p>
        </div>
        </div>
        </div>
    );
};

export default Footer;