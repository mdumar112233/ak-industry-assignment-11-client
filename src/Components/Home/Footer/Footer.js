import React from 'react';

const Footer = () => {
    return (
        <div className='row footer-container'>
            <div className="col-md-3">
                <h5>About us</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nobis obcaecati nemo enim ab totam beatae quos ullam reprehenderit libero.</p>
            </div>
            <div className="col-md-3">
                <h5>Quick Link</h5>
                <p>Project</p>
                <p>Admin</p>
                <p>Dashboard</p>
                <p>Contact</p>
            </div>
            <div className="col-md-3">
                <h5>Our services</h5>
                <p>Construction Map</p>
                <p>Planning</p>
                <p>Home Design</p>
            </div>
            <div className="col-md-3">
                <h5>Follow us</h5>
                <span><img src="" alt=""/></span>
                <span><img src="" alt=""/></span>
            </div>
        </div>
    );
};

export default Footer;