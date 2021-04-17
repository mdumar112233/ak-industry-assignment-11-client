import React from 'react';
import imageOne from '../../../image/construction 1.png';
import imageTwo from '../../../image/construction 2.png';
import imageTree from '../../../image/construction 3.png';
import imageFour from '../../../image/construction 4.png';
import './Client.css';

const Client = () => {
    return (
        <div className='container client-container'>
            <div className='client-title text-center mb-5'>
                <h2 className='mb-4'>Customer Who Love Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aliquid ad eaque ullam saepe nihil.</p>
            </div>
            <div className="row construction-image mt-5">
                <div className="col-md-3 ">
                    <img src={imageOne} alt=""/>
                </div>
                <div className="col-md-3">
                     <img src={imageTwo} alt=""/>
                </div>
                <div className="col-md-3">
                    <img src={imageTree
                    } alt=""/>
                </div>
                <div className="col-md-3">
                    <img src={imageFour} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Client;