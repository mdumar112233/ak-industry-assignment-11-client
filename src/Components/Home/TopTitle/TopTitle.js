import React from 'react';
import './TopTitle.css';
import rightArrow from '../../../image/right-arrow.png'; 

const TopTitle = () => {
    return (
        <div className='container w-75 top-title'>
            <h1 className='title'>Build The New World,<br/> And We Build <span style={{color: '#106466'}}>Your Dream</span></h1>
            <p className='description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum voluptas placeat molestiae illo unde. Earum!ipsum dolor sit amet consectetur adipisicing elit. Illum voluptas placeat molestiae ill
            </p>
            <button className="explore-btn">Explore Now</button> <span className='arrow'><img src={rightArrow} alt=""/></span>
        </div>
    );
};

export default TopTitle;