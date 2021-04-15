import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Comment.css';

const Comment = () => {
    return (
        <div className='row'>
            <Sidebar></Sidebar>
            <div className="col-md-10 mt-5">
                <h3 className='mb-3 ms-4'>Review</h3>
                <input className='ms-4' type="text" placeholder='Your name' /><br/>
                <input className='mt-3 mb-3 ms-4' type="text" placeholder='Category of service' /><br/>
                <input className='ms-4' style={{paddingBottom: '50px'}} type="text" placeholder='Description' /> <br/>
                <button className='comment-btn'>Submit</button>
            </div>
        </div>
    );
};

export default Comment;